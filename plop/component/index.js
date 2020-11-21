module.exports = plop => {
  plop.setGenerator("Component", {
    description: "New Monday Component",
    prompts: [
      {
        type: "input",
        name: "componentName",
        message:
          "What is the name of your component? (use spaces if multi word)"
      }
    ],
    actions: [
      {
        type: "add",
        path:
          "src/components/{{properCase componentName}}/{{properCase componentName}}.js",
        templateFile: "plop/component/component-js.txt"
      },
      {
        type: "add",
        path:
          "src/components/{{properCase componentName}}/{{properCase componentName}}.scss",
        templateFile: "plop/component/component-scss.txt"
      },
      {
        type: "add",
        path:
          "src/components/{{properCase componentName}}/__stories__/{{camelCase componentName}}.stories.js",
        templateFile: "plop/component/component-stories-js.txt"
      },
      {
        type: "add",
        path:
          "src/components/{{properCase componentName}}/__tests__/{{camelCase componentName}}.test.js",
        templateFile: "plop/component/component-stories-js.txt"
      },
      {
        type: "append",
        path: "src/components/index.js",
        template:
          'export { default as {{properCase componentName}} } from "./{{properCase componentName}}/{{properCase componentName}}";'
      }
    ]
  });
};
