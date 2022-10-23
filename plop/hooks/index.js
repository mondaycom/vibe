module.exports = plop => {
  plop.setGenerator("Hook Story", {
    description: "New hook story",
    prompts: [
      {
        type: "input",
        name: "hookName",
        message: "What is the name of your hook? (use spaces if multi word)"
      }
    ],
    actions: [
      {
        type: "add",
        path: "src/hooks/{{camelCase hookName}}/index.ts",
        templateFile: "plop/hooks/hook.txt"
      },
      {
        type: "add",
        path: "src/hooks/{{camelCase hookName}}/__stories__/{{camelCase hookName}}.stories.mdx",
        templateFile: "plop/hooks/hook-story.txt"
      },
      {
        type: "add",
        path: "src/hooks/{{camelCase hookName}}/__stories__/{{camelCase hookName}}.stories.module.scss",
        templateFile: "plop/hooks/hook-story-style.txt"
      },
      {
        type: "append",
        path: "src/hooks/index.js",
        pattern: /(\n$)/gm,
        separator: "",
        template: `export { default as {{camelCase hookName}} } from "./{{camelCase hookName}}";\n`
      },
      {
        type: "append",
        path: "webpack/published-ts-components.js",
        pattern: /(\/\/ plop_marker:published-hooks)/g,
        template: `  {{camelCase hookName}}: "hooks/{{camelCase hookName}}",`
      }
    ]
  });
};
