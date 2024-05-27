module.exports = plop => {
  plop.setGenerator("Component", {
    description: "New monday component",
    prompts: [
      {
        type: "input",
        name: "componentName",
        message: "What is the name of your component? (use spaces if multi word)"
      }
    ],
    actions: [
      {
        type: "add",
        path: "src/components/{{properCase componentName}}/{{properCase componentName}}.tsx",
        templateFile: "plop/component/component-ts.txt"
      },
      {
        type: "append",
        path: "src/tests/constants.ts",
        pattern: /(\/\/ plop_marker:default-data-testid-declarations)/g,
        template: '  {{constantCase componentName}} = "{{dashCase componentName}}",'
      },
      {
        type: "add",
        path: "src/components/{{properCase componentName}}/{{properCase componentName}}.module.scss",
        templateFile: "plop/component/component-scss.txt"
      },
      {
        type: "add",
        path: "src/components/{{properCase componentName}}/__stories__/{{properCase componentName}}.mdx",
        templateFile: "plop/general/component-stories-mdx.txt"
      },
      {
        type: "modify",
        path: "src/components/{{properCase componentName}}/__stories__/{{properCase componentName}}.mdx",
        pattern: /@componentName@/g,
        template: "{{properCase componentName}}"
      },
      {
        type: "add",
        path: "src/components/{{properCase componentName}}/__stories__/{{properCase componentName}}.stories.tsx",
        templateFile: "plop/general/component-stories-js.txt"
      },
      {
        type: "add",
        path: "src/components/{{properCase componentName}}/__stories__/{{properCase componentName}}.stories.helpers.tsx",
        templateFile: "plop/general/component-stories-helpers-js.txt"
      },
      {
        type: "add",
        path: "src/components/{{properCase componentName}}/__stories__/{{properCase componentName}}.stories.module.scss",
        templateFile: "plop/general/component-stories-scss.txt"
      },
      {
        type: "add",
        path: "src/components/{{properCase componentName}}/__tests__/{{properCase componentName}}.test.tsx",
        templateFile: "plop/general/component-tests.txt"
      },
      {
        type: "append",
        path: "src/components/index.ts",
        pattern: /(\n$)/gm,
        separator: "",
        template:
          'export { default as {{properCase componentName}} } from "./{{properCase componentName}}/{{properCase componentName}}";\n'
      },
      {
        type: "append",
        path: "webpack/published-ts-components.js",
        pattern: /(\/\/ plop_marker:published-components)/g,
        template:
          '  {{properCase componentName}}: "components/{{properCase componentName}}/{{properCase componentName}}",'
      }
    ]
  });
};
