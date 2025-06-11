#!/usr/bin/env ts-node

import fs from "fs";
import path from "path";
import { withDefaultConfig, Props } from "react-docgen-typescript";
import { ExportDeclaration, Project, SourceFile } from "ts-morph";
import { fileURLToPath } from "url";
import { cpus } from "os";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
console.log("__dirname", __dirname);
const CACHE_FILE = path.resolve(__dirname, ".metadata-cache.json");
console.log("CACHE_FILE", CACHE_FILE);

const IS_CI = process.env.CI === "true" || process.env.CI === "True";

if (IS_CI) {
  console.log(
    "CI environment detected. For optimal performance, ensure your CI pipeline caches '.metadata-cache.json'."
  );
}

// Optimal batch size based on CPU cores
const CPU_COUNT = cpus().length;
const BATCH_SIZE = Math.max(30, Math.ceil(CPU_COUNT * 4)); // Use at least 4x CPU cores as batch size for best performance

// Cache source files to avoid loading the same file multiple times
const sourceFileCache = new Map<string, SourceFile>();
interface AggregatorRecord {
  filePath: string;
  aggregator: "core" | "next";
  symbols: string[];
  parentContext: string[];
}

interface DocgenResult {
  filePath: string;
  components: Array<{
    displayName: string;
    description?: string;
    props?: Props;
  }>;
}

type FinalOutput = Array<{
  filePath: string;
  aggregator: "core" | "next";
  symbols: string[];
  displayName: string;
  description?: string;
  import: string;
  parentComponent?: string;
  subComponents?: string[];
  props: Props;
}>;

function isIndexFile(filePath: string): boolean {
  return path.basename(filePath).toLowerCase() === "index.ts";
}

/**
 * Resolves module specifiers to actual file paths by checking common TypeScript file extensions
 */
function findMatchingPaths(baseDir: string, moduleSpecifier: string): string[] {
  const resolved = path.resolve(baseDir, moduleSpecifier);
  const candidates = [`${resolved}.ts`, `${resolved}.tsx`, path.join(resolved, "index.ts")];

  const matches: string[] = [];
  for (const candidate of candidates) {
    if (fs.existsSync(candidate)) {
      matches.push(candidate);
    }
  }
  return matches;
}

/**
 * Extracts exported symbols from an export declaration, handling both named and star exports
 */
function getExportedSymbolsFromDecl(decl: ExportDeclaration): string[] {
  const namedExports = decl.getNamedExports();
  if (namedExports.length > 0) {
    return namedExports.map(e => e.getText());
  }

  const modSpec = decl.getModuleSpecifierValue();
  if (!modSpec) return ["*"];

  const baseDir = path.dirname(decl.getSourceFile().getFilePath());
  const matchedPaths = findMatchingPaths(baseDir, modSpec);
  if (matchedPaths.length === 0) return ["*"];

  const subFilePath = matchedPaths[0];
  const project = decl.getSourceFile().getProject();

  let subSf = sourceFileCache.get(subFilePath);
  if (!subSf) {
    subSf = project.getSourceFile(subFilePath);
    if (!subSf) throw new Error(`Source file not found for module specifier: ${modSpec}`);
    sourceFileCache.set(subFilePath, subSf);
  }

  const visited = new Set<string>();
  const expandedSymbols = expandAllExportedSymbols(subSf, visited);
  return expandedSymbols.length > 0 ? expandedSymbols : ["*"];
}

/**
 * Recursively expands all exported symbols from a source file, including those from star exports
 */
function expandAllExportedSymbols(sf: SourceFile, visited: Set<string>): string[] {
  if (visited.has(sf.getFilePath())) return [];
  visited.add(sf.getFilePath());

  const results: string[] = [];

  const exportedDecls = sf.getExportedDeclarations();
  for (const [exportName] of exportedDecls) {
    if (exportName !== "default") {
      results.push(exportName);
    }
  }

  for (const decl of sf.getExportDeclarations()) {
    const named = decl.getNamedExports();
    const modSpec = decl.getModuleSpecifierValue();
    if (!modSpec) continue;

    if (named.length === 0) {
      const baseDir = path.dirname(sf.getFilePath());
      const matchedPaths = findMatchingPaths(baseDir, modSpec);
      for (const subPath of matchedPaths) {
        const subSf = sf.getProject().getSourceFile(subPath);
        if (!subSf) continue;
        const subSymbols = expandAllExportedSymbols(subSf, visited);
        results.push(...subSymbols);
      }
    }
  }

  return Array.from(new Set(results));
}

function toRelativePath(filePath: string): string {
  const srcIndex = filePath.indexOf("/src/");
  if (srcIndex === -1) {
    throw new Error(`File path does not contain /src/: ${filePath}`);
  }
  return filePath.slice(srcIndex + 1); // +1 to remove the leading slash
}

/**
 * Recursively traverses the export tree to find all component files
 */
function resolveExportsRecursively(
  sourceFile: SourceFile,
  aggregatorLabel: "core" | "next",
  visited: Set<string>,
  parentContext: string[]
): AggregatorRecord[] {
  const output: AggregatorRecord[] = [];
  if (visited.has(sourceFile.getFilePath())) {
    return output;
  }
  visited.add(sourceFile.getFilePath());

  for (const decl of sourceFile.getExportDeclarations()) {
    const modSpec = decl.getModuleSpecifierValue();
    if (!modSpec) continue;

    const baseDir = path.dirname(sourceFile.getFilePath());
    const matchedPaths = findMatchingPaths(baseDir, modSpec);
    const exportedSyms = getExportedSymbolsFromDecl(decl);

    for (const matched of matchedPaths) {
      if (isIndexFile(matched)) {
        const subSf = sourceFile.getProject().getSourceFile(matched);
        if (!subSf) {
          throw new Error(`Index file not found: ${matched}`);
        }
        output.push(
          ...resolveExportsRecursively(subSf, aggregatorLabel, visited, [...parentContext, path.basename(matched)])
        );
      } else {
        output.push({
          filePath: path.resolve(matched),
          aggregator: aggregatorLabel,
          symbols: exportedSyms,
          parentContext
        });
      }
    }
  }

  return output;
}

/**
 * Main aggregator function that processes both core and next entry points
 */
function aggregatorMain(): AggregatorRecord[] {
  const project = new Project({
    skipAddingFilesFromTsConfig: true
  });

  const packageDir = path.resolve(__dirname, "../components");
  project.addSourceFilesAtPaths([`${packageDir}/**/*.ts`, `${packageDir}/**/*.tsx`]);

  const coreIndex = path.join(packageDir, "index.ts");
  const nextIndex = path.join(packageDir, "next.ts");

  const finalRecords: AggregatorRecord[] = [];
  const visited = new Set<string>();

  const sfCore = project.getSourceFile(coreIndex);
  if (!sfCore) {
    throw new Error(`Core index file not found at: ${coreIndex}`);
  }
  finalRecords.push(...resolveExportsRecursively(sfCore, "core", visited, []));

  const sfNext = project.getSourceFile(nextIndex);
  if (sfNext) {
    finalRecords.push(...resolveExportsRecursively(sfNext, "next", visited, []));
  }

  const uniqueMap = new Map<string, AggregatorRecord>();
  for (const rec of finalRecords) {
    const key = rec.filePath + "|" + rec.aggregator;
    if (!uniqueMap.has(key)) {
      uniqueMap.set(key, rec);
    } else {
      const existing = uniqueMap.get(key) as AggregatorRecord;
      existing.symbols = Array.from(new Set([...existing.symbols, ...rec.symbols]));
    }
  }

  return Array.from(uniqueMap.values());
}

/**
 * Creates a synthetic component entry for HOC-wrapped components that react-docgen-typescript can't detect
 */
function createSyntheticComponentFromHOC(filePath: string, fileContent: string): any {
  const fileName = path.basename(filePath, path.extname(filePath));

  // Try multiple patterns to find the component declaration
  const componentPatterns = [
    /const\s+(\w+)\s*=\s*\(\{/, // const ComponentName = ({
    /const\s+(\w+)\s*=\s*\(/, // const ComponentName = (
    /const\s+(\w+)\s*:\s*React\.FC/, // const ComponentName: React.FC
    /function\s+(\w+)\s*\(/, // function ComponentName(
    /const\s+(\w+)\s*=\s*React\.forwardRef/ // const ComponentName = React.forwardRef
  ];

  let componentName = fileName; // Default fallback
  for (const pattern of componentPatterns) {
    const match = fileContent.match(pattern);
    if (match) {
      componentName = match[1];
      break;
    }
  }

  // Check if Props interface/type exists
  const interfaceMatch = fileContent.match(new RegExp(`(export\\s+)?interface\\s+${componentName}Props\\s*`, "s"));
  const typeMatch = fileContent.match(new RegExp(`(export\\s+)?type\\s+${componentName}Props\\s*=`, "s"));

  if (interfaceMatch || typeMatch) {
    return {
      displayName: componentName,
      description: `Component wrapped with withStaticPropsWithoutForwardRef`,
      props: {},
      filePath: filePath,
      methods: [],
      tags: {}
    };
  }

  return null;
}

/**
 * Runs react-docgen-typescript on the provided files to extract component documentation
 */
async function runReactDocgenOnFiles(filePaths: string[]): Promise<DocgenResult[]> {
  // Check which files need to be processed
  const filesToProcess: string[] = [];

  for (const filePath of filePaths) {
    if (!fs.existsSync(filePath)) {
      console.warn(`File not found: ${filePath}`);
      continue;
    }
    filesToProcess.push(filePath); // Always process if file exists
  }

  console.log(`${filesToProcess.length} files to process`);

  if (filesToProcess.length === 0) {
    return []; // Return empty if no files to process (e.g. all paths were invalid)
  }

  // Configure parser with optimized settings
  const parser = withDefaultConfig({
    savePropValueAsString: true,
    shouldExtractLiteralValuesFromEnum: true,
    shouldRemoveUndefinedFromOptional: true,
    // Skip files that don't contain React components to improve performance
    skipChildrenPropWithoutDoc: false,
    // Be more aggressive in finding components to handle HOC patterns
    shouldExtractValuesFromUnion: true,
    propFilter: prop => {
      // Be more inclusive to catch props from HOC-wrapped components
      if (prop.declarations !== undefined && prop.declarations.length > 0) {
        // Include props from the current file (not node_modules)
        const hasPropAdditionalDescription = prop.declarations.find(declaration => {
          return !declaration.fileName.includes("node_modules");
        });

        return Boolean(hasPropAdditionalDescription);
      }

      return true;
    },
    componentNameResolver: (exp, source) => {
      // Handle default exports, which are often HOC-wrapped components
      if (exp.getName() === "default") {
        // Extract component name from the filename
        const fileName = path.basename(source.fileName, path.extname(source.fileName));
        if (fileName && fileName !== "index") {
          return fileName;
        }
      }
      return undefined;
    }
  });

  // Process files in batches to avoid overwhelming the system
  const batches: string[][] = [];

  for (let i = 0; i < filesToProcess.length; i += BATCH_SIZE) {
    batches.push(filesToProcess.slice(i, i + BATCH_SIZE));
  }

  console.log(
    `Processing ${filesToProcess.length} files in ${batches.length} batches of up to ${BATCH_SIZE} files each (using ${CPU_COUNT} CPU cores)`
  );

  // Store new results to be added to the cache
  const newResults: DocgenResult[] = [];

  for (let batchIndex = 0; batchIndex < batches.length; batchIndex++) {
    const batch = batches[batchIndex];
    console.log(`Processing batch ${batchIndex + 1}/${batches.length} (${batch.length} files)`);

    const batchPromises = batch.map(async filePath => {
      try {
        const startTime = performance.now();
        const fileContent = fs.readFileSync(filePath, "utf-8");
        const hasHOC = fileContent.includes("withStaticPropsWithoutForwardRef");

        let docgenData = parser.parse(filePath);

        // Handle HOC-wrapped components that react-docgen-typescript can't detect
        if (docgenData.length === 0 && hasHOC) {
          const syntheticComponent = createSyntheticComponentFromHOC(filePath, fileContent);
          if (syntheticComponent) {
            docgenData = [syntheticComponent];
          }
        }

        const result = {
          filePath,
          components: docgenData.map(c => ({
            displayName: c.displayName,
            description: c.description,
            props: c.props
          }))
        };

        const endTime = performance.now();
        if (endTime - startTime > 500) {
          console.log(`Slow file: ${filePath} took ${((endTime - startTime) / 1000).toFixed(2)}s`);
        }

        return result;
      } catch (err) {
        console.warn(`Failed to parse component documentation for ${filePath}: ${err.message}`);
        return null;
      }
    });

    const batchResults = await Promise.all(batchPromises);

    batchResults.forEach(result => {
      if (result) {
        newResults.push(result);
      }
    });
  }

  // Return both cached and newly processed results
  return newResults;
}

/**
 * Extracts parent component name from file path
 */
function getParentComponent(filePath: string): string | undefined {
  // Only return parent if this is a sub-component (not the main component)
  const match = filePath.match(/components\/([^/]+)\/([^/]+)\/[^/]+$/);
  if (!match) return undefined;

  const [, parentDir, componentDir] = match;
  // If the component directory name is the same as the parent directory name,
  // this is the main component, not a sub-component
  if (parentDir === componentDir) return undefined;

  return parentDir;
}

/**
 * Finds all components in the same directory as the given file
 */
function findSubComponents(filePath: string, allFiles: string[]): string[] {
  const dir = path.dirname(filePath);
  const dirName = path.basename(dir);
  const fileName = path.basename(filePath, path.extname(filePath));

  // Only look for sub-components if we\'re in a component directory
  if (!dirName.match(/^[A-Z]/)) return [];

  // Only include sub-components for the main component (the one that matches the directory name)
  if (fileName !== dirName) return [];

  return allFiles
    .filter(f => {
      const fDir = path.dirname(f);
      const fName = path.basename(f, path.extname(f));

      // Only include files that:
      // 1. Are in the same directory
      // 2. Start with the parent component name (e.g., "TipseenContent" for "Tipseen")
      // 3. Are not the parent component itself
      return fDir === dir && fName !== dirName && fName.startsWith(dirName);
    })
    .map(f => path.basename(f, path.extname(f)));
}

/**
 * Merges aggregator records with docgen results and flattens the structure
 */
function mergeResults(aggregator: AggregatorRecord[], docgen: DocgenResult[]): FinalOutput {
  const docgenMap = new Map<string, DocgenResult>();
  for (const d of docgen) {
    docgenMap.set(d.filePath, d);
  }

  // Get all file paths for sub-components lookup
  const allFilePaths = aggregator.map(agg => agg.filePath);

  const files = aggregator.flatMap(agg => {
    const doc = docgenMap.get(agg.filePath);
    if (!doc) return [];

    return doc.components.map(component => {
      const filteredProps: Props = {};

      if (component.props) {
        for (const [propName, propData] of Object.entries(component.props)) {
          const { parent: _parent, declarations: _declarations, ...propWithoutParentAndDeclarations } = propData;
          filteredProps[propName] = propWithoutParentAndDeclarations;
        }
      }

      return {
        filePath: toRelativePath(agg.filePath),
        aggregator: agg.aggregator,
        symbols: agg.symbols,
        displayName: component.displayName,
        description: component.description,
        props: filteredProps,
        import: `import { ${component.displayName} } from "@vibe/core${agg.aggregator === "next" ? "/next" : ""}"`,
        parentComponent: getParentComponent(toRelativePath(agg.filePath)),
        subComponents: findSubComponents(toRelativePath(agg.filePath), allFilePaths.map(toRelativePath))
      };
    });
  });

  return files;
}

/**
 * Unifies type definitions with their corresponding component files
 */
function unifyTypesWithComponents(records: AggregatorRecord[]): AggregatorRecord[] {
  const newRecords: AggregatorRecord[] = [];
  const pathMap = new Map<string, AggregatorRecord>();
  for (const r of records) {
    pathMap.set(r.filePath, r);
  }

  for (const r of records) {
    if (r.filePath.endsWith(".types.ts")) {
      const baseName = path.basename(r.filePath, ".types.ts");
      const dirName = path.dirname(r.filePath);
      const candidateTsx = path.join(dirName, `${baseName}.tsx`);
      const candidateTs = path.join(dirName, `${baseName}.ts`);

      const mainRecord = pathMap.get(candidateTsx) || pathMap.get(candidateTs);
      if (mainRecord) {
        mainRecord.symbols = Array.from(new Set([...mainRecord.symbols, ...r.symbols]));
      }
      continue;
    }

    newRecords.push(r);
  }

  return newRecords;
}

async function main() {
  const startTime = performance.now();
  try {
    console.log(`Starting metadata generation (using ${CPU_COUNT} CPU cores, batch size ${BATCH_SIZE})...`);

    console.log("Aggregating export records...");
    let aggregatorRecords = aggregatorMain();
    console.log(`Found ${aggregatorRecords.length} records`);

    console.log("Unifying types with components...");
    aggregatorRecords = unifyTypesWithComponents(aggregatorRecords);
    console.log(`After unification: ${aggregatorRecords.length} records`);

    const finalFilePaths = aggregatorRecords.map(r => r.filePath);
    console.log(`Processing ${finalFilePaths.length} files with react-docgen-typescript...`);

    const docgenResults = await runReactDocgenOnFiles(finalFilePaths);
    console.log(`Successfully processed ${docgenResults.length} files`);

    console.log("Merging results...");
    const finalJson = mergeResults(aggregatorRecords, docgenResults);
    console.log(`Final output contains ${finalJson.length} component entries`);

    const outPath = path.resolve(__dirname, "../../dist/metadata.json");
    fs.writeFileSync(outPath, JSON.stringify(finalJson, null, 2), "utf-8");
    console.log(`Done! Wrote metadata to: ${outPath}`);
  } catch (error) {
    console.error("Failed to generate documentation:", error.message);
    process.exit(1);
  } finally {
    const endTime = performance.now();
    const duration = (endTime - startTime) / 1000;
    console.log(`Execution time: ${duration.toFixed(2)} seconds`);
  }
}

main();
