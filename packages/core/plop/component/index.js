export default {
  description: "New Vibe component",
  prompts: [
    {
      type: "input",
      name: "componentName",
      message: "What is the name of your component? (e.g. ButtonGroup)"
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
      templateFile: "plop/component/component-stories-mdx.txt"
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
      templateFile: "plop/component/component-stories-tsx.txt"
    },
    {
      type: "add",
      path: "src/components/{{properCase componentName}}/index.ts",
      templateFile: "plop/component/component-index.txt"
    },
    {
      type: "add",
      path: "src/components/{{properCase componentName}}/{{properCase componentName}}.types.ts",
      templateFile: "plop/component/component-types.txt"
    },
    {
      type: "add",
      path: "src/components/{{properCase componentName}}/__tests__/{{properCase componentName}}.test.tsx",
      templateFile: "plop/component/component-tests.txt"
    },
    {
      type: "append",
      path: "src/components/index.ts",
      template: 'export * from "./{{componentName}}";\n'
    }
  ]
};
