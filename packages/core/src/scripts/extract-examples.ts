import fs from "fs";
import path from "path";
import parser from "@babel/parser";
import _traverse from "@babel/traverse";
import _generate from "@babel/generator";
import { fileURLToPath } from "url";
import type { File } from "@babel/types";

const traverse = (_traverse as unknown as { default: typeof _traverse }).default ?? _traverse;
const generate = (_generate as unknown as { default: typeof _generate }).default ?? _generate;

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const componentsDir = path.resolve(__dirname, "../../../docs/src/pages/components/");
const outputDir = path.resolve(__dirname, "../../dist/metadata/examples/");

function getStoryFiles(): string[] {
  const storyFiles: string[] = [];

  function traverseDirectory(dir: string): void {
    const entries = fs.readdirSync(dir, { withFileTypes: true });
    for (const entry of entries) {
      const fullPath = path.join(dir, entry.name);
      if (entry.isDirectory()) {
        traverseDirectory(fullPath);
      } else if (entry.isFile()) {
        if (entry.name.endsWith(".stories.tsx") || entry.name.endsWith(".stories.js")) {
          storyFiles.push(fullPath);
        }
      }
    }
  }

  traverseDirectory(componentsDir);
  return storyFiles;
}

export function generateCodeForOneLiner(ast: File, constName: string): string | null {
  let calleeCode: string | null = null;
  traverse(ast, {
    VariableDeclarator(nodePath) {
      if ((nodePath.node.id as { name?: string }).name === constName) {
        const init = nodePath.node.init as { callee?: { name?: string } } | null;
        if (init?.callee?.name !== "createComponentTemplate") {
          calleeCode = "const " + generate(nodePath.node).code;
        } else {
          calleeCode = "";
        }
      }
    }
  });
  return calleeCode;
}

function extractMarkdown(file: string): void {
  const componentName = path.basename(file).split(".")[0];
  const outputFile = path.join(outputDir, componentName + ".md");
  const fileContent = fs.readFileSync(file, "utf-8");

  const ast = parser.parse(fileContent, {
    sourceType: "module",
    plugins: ["typescript", "jsx"]
  });

  let markdown = "# Storybook Code Examples\n\n";

  traverse(ast, {
    ExportNamedDeclaration(nodePath) {
      if (nodePath.node.declaration && nodePath.node.declaration.type === "VariableDeclaration") {
        nodePath.node.declaration.declarations.forEach(declarator => {
          const storyName = (declarator.id as { name?: string }).name ?? "";
          if (declarator.init && declarator.init.type === "ObjectExpression") {
            let renderProp: { type: string; body?: unknown; callee?: { object?: { name?: string } } } | null = null;
            let nameProp: string | null = null;
            let codeBlock = "";

            declarator.init.properties.forEach(prop => {
              if (prop.type !== "ObjectProperty") return;
              const key = prop.key as { name?: string };
              const value = prop.value as { type: string; value?: string };
              if (key.name === "render") {
                renderProp = value as typeof renderProp;
              }
              if (key.name === "name" && value.type === "StringLiteral") {
                nameProp = value.value ?? null;
              }
            });

            if (renderProp) {
              const rp = renderProp as {
                type: string;
                body?: { type: string; body?: unknown[] };
                callee?: { object?: { name?: string } };
              };
              if (rp.type === "ArrowFunctionExpression") {
                const body = rp.body as { type: string; body?: unknown[] };
                if (body.type === "JSXFragment" || body.type === "MemberExpression" || body.type === "JSXElement") {
                  codeBlock = generate(body as Parameters<typeof generate>[0]).code;
                } else if (body.type === "BlockStatement") {
                  codeBlock = (body.body ?? [])
                    .map(line => generate(line as Parameters<typeof generate>[0]).code)
                    .join("\n");
                } else {
                  codeBlock = generate(body as Parameters<typeof generate>[0]).code;
                }
              } else if (rp.type === "CallExpression") {
                const calleeName = rp.callee?.object?.name ?? "";
                codeBlock = generateCodeForOneLiner(ast, calleeName) ?? "";
              }
            }

            const displayName = nameProp ?? storyName;
            if (codeBlock.length > 0) {
              markdown += `## ${displayName}\n\n\`\`\`tsx\n${codeBlock.trim()}\n\`\`\`\n\n`;
            }
          }
        });
      }
    }
  });

  fs.writeFileSync(outputFile, markdown, "utf-8");
}

export function run(): void {
  if (!fs.existsSync(componentsDir)) {
    console.error(`Components directory not found: ${componentsDir}`);
    process.exit(1);
  }

  fs.mkdirSync(outputDir, { recursive: true });

  const files = getStoryFiles();
  console.log(`Extracting examples from ${files.length} story files...`);
  files.forEach(file => extractMarkdown(file));
  console.log("Examples extraction complete");
}

const isMain = process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url);
if (isMain) {
  run();
}
