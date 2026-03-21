import fs from "fs";
import path from "path";
import parser from "@babel/parser";
import traverse from "@babel/traverse";
import generate from "@babel/generator";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const componentsDir = path.join(__dirname, "../../docs/src/pages/components/");
const outputDir = path.join(__dirname, "../dist/generated/");
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir);
}

function getStoryFiles() {
  const storyFiles = [];

  function traverseDirectory(dir) {
    const entries = fs.readdirSync(dir, { withFileTypes: true });

    for (const entry of entries) {
      const fullPath = path.join(dir, entry.name);

      if (entry.isDirectory()) {
        // Recursively traverse subdirectories
        traverseDirectory(fullPath);
      } else if (entry.isFile()) {
        // Check for story files
        if (entry.name.endsWith(".stories.tsx") || entry.name.endsWith(".stories.js")) {
          storyFiles.push(path.relative(__dirname, fullPath));
        }
      }
    }
  }

  traverseDirectory(componentsDir);
  return storyFiles;
}

const files = getStoryFiles();

function generateCodeForOneLiner(ast, constName) {
  let calleeCode = null;
  traverse.default(ast, {
    VariableDeclarator(path) {
      if (path.node.id.name === constName) {
        if (path.node.init?.callee?.name !== "createComponentTemplate") {
          calleeCode = "const " + generate.default(path.node).code;
        } else {
          return (calleeCode = "");
        }
      }
    }
  });
  return calleeCode;
}

function extractMarkdown(file) {
  const inputFile = path.join(__dirname, file);
  const inputFileComponentName = path.basename(inputFile).split(".")[0];
  const outputFile = path.resolve(__dirname, outputDir, inputFileComponentName + ".md");

  const fileContent = fs.readFileSync(inputFile, "utf-8");

  console.log(`Generating markdown for ${inputFileComponentName}`);

  // Parse the file using Babel parser with TypeScript and JSX support
  const ast = parser.parse(fileContent, {
    sourceType: "module",
    plugins: ["typescript", "jsx"]
  });

  let markdown = "# Storybook Code Examples\n\n";

  let accordionTemplateCode = "";
  traverse.default(ast, {
    VariableDeclarator(path) {
      // console.log(path.node);
      if (path.node.id.name === "accordionTemplate" && path.node.init.type === "ArrowFunctionExpression") {
        accordionTemplateCode = generate.default(path.node.init).code;
      }
    }
  });

  // Traverse the AST to find all exported story objects
  traverse.default(ast, {
    ExportNamedDeclaration(path) {
      if (path.node.declaration && path.node.declaration.type === "VariableDeclaration") {
        path.node.declaration.declarations.forEach(declarator => {
          const storyName = declarator.id.name;
          if (declarator.init && declarator.init.type === "ObjectExpression") {
            let renderProp = null;
            let nameProp = null;
            let codeBlock = "";

            // set name and render props
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
              // If render is a function, generate its code
              if (renderProp.type == "ArrowFunctionExpression") {
                if (
                  renderProp.body.type == "JSXFragment" ||
                  renderProp.body.type == "MemberExpression" ||
                  renderProp.body.type == "JSXElement"
                ) {
                  codeBlock = generate.default(renderProp.body).code;
                } else if (renderProp.body.type == "BlockStatement") {
                  codeBlock = renderProp.body.body.map(line => generate.default(line).code).join("\n");
                } else {
                  console.log(`${nameProp || storyName} is a ${renderProp.body.type}`);
                  codeBlock = generate.default(renderProp.body).code;
                }
              } else if (renderProp.type == "CallExpression") {
                // console.log(renderProp.callee.object.name);
                const calleeName = renderProp.callee.object.name;
                codeBlock = generateCodeForOneLiner(ast, calleeName);
              } else {
                console.log(`${nameProp || storyName} is a ${renderProp.type}`);
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
  console.log(`Code samples generated for ${inputFileComponentName} at ${outputFile}`);
}

function run() {
  files.forEach(file => {
    extractMarkdown(file);
  });
}

run();
