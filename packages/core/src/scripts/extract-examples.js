import fs from "fs";
import path from "path";
import parser from "@babel/parser";
import _traverse from "@babel/traverse";
import _generate from "@babel/generator";
import { fileURLToPath } from "url";

const traverse = _traverse.default ?? _traverse;
const generate = _generate.default ?? _generate;

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const componentsDir = path.resolve(__dirname, "../../../docs/src/pages/components/");
const outputDir = path.resolve(__dirname, "../../dist/metadata/examples/");

function getStoryFiles() {
  const storyFiles = [];

  function traverseDirectory(dir) {
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

export function generateCodeForOneLiner(ast, constName) {
  let calleeCode = null;
  traverse(ast, {
    VariableDeclarator(nodePath) {
      if (nodePath.node.id.name === constName) {
        if (nodePath.node.init?.callee?.name !== "createComponentTemplate") {
          calleeCode = "const " + generate(nodePath.node).code;
        } else {
          calleeCode = "";
        }
      }
    }
  });
  return calleeCode;
}

function extractMarkdown(file) {
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
          const storyName = declarator.id.name;
          if (declarator.init && declarator.init.type === "ObjectExpression") {
            let renderProp = null;
            let nameProp = null;
            let codeBlock = "";

            declarator.init.properties.forEach(prop => {
              if (prop.key) {
                if (prop.key.name === "render") {
                  renderProp = prop.value;
                }
                if (prop.key.name === "name" && prop.value.type === "StringLiteral") {
                  nameProp = prop.value.value;
                }
              }
            });

            if (renderProp) {
              if (renderProp.type === "ArrowFunctionExpression") {
                if (
                  renderProp.body.type === "JSXFragment" ||
                  renderProp.body.type === "MemberExpression" ||
                  renderProp.body.type === "JSXElement"
                ) {
                  codeBlock = generate(renderProp.body).code;
                } else if (renderProp.body.type === "BlockStatement") {
                  codeBlock = renderProp.body.body.map(line => generate(line).code).join("\n");
                } else {
                  codeBlock = generate(renderProp.body).code;
                }
              } else if (renderProp.type === "CallExpression") {
                const calleeName = renderProp.callee.object.name;
                codeBlock = generateCodeForOneLiner(ast, calleeName);
              }
            }

            const displayName = nameProp || storyName;
            if (codeBlock?.length > 0) {
              markdown += `## ${displayName}\n\n\`\`\`tsx\n${codeBlock.trim()}\n\`\`\`\n\n`;
            }
          }
        });
      }
    }
  });

  fs.writeFileSync(outputFile, markdown, "utf-8");
}

export function run() {
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
