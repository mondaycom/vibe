module.exports = plop => {
  plop.setGenerator("Hook", {
    description: "New hook",
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
        path: "src/hooks/{{camelCase hookName}}/__stories__/{{camelCase hookName}}.mdx",
        templateFile: "plop/hooks/hook-story.txt"
      },
      {
        type: "modify",
        path: "src/hooks/{{camelCase hookName}}/__stories__/{{camelCase hookName}}.mdx",
        pattern: /@properCase_hookName@/g,
        template: "{{properCase hookName}}"
      },
      {
        type: "add",
        path: "src/hooks/{{camelCase hookName}}/__stories__/{{camelCase hookName}}.stories.tsx",
        templateFile: "plop/hooks/hook-story-js.txt"
      },
      {
        type: "add",
        path: "src/hooks/{{camelCase hookName}}/__stories__/{{camelCase hookName}}.stories.module.scss",
        templateFile: "plop/hooks/hook-story-scss.txt"
      },
      {
        type: "append",
        path: "src/hooks/index.ts",
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
