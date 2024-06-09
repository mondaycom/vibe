const fs = require("fs");

module.exports = plop => {
  plop.setGenerator("Tests", {
    description: "New tests files for existing component",
    prompts: [
      {
        type: "input",
        name: "componentName",
        message:
          "What is the name of your component? (please use pascal case - for example: MultiWords for the component multi word)",
        validate(input) {
          return fs.existsSync(`./src/components/${input}`)
            ? true
            : "A component with this name does not exist in our library. Please check if there is a typing error in the name of the component you wrote.";
        }
      }
    ],
    actions: [
      {
        type: "add",
        path: "src/components/{{properCase componentName}}/__tests__/{{camelCase componentName}}.snapshot.test.tsx",
        templateFile: "plop/general/component-snapshot-tests-test.txt"
      },
      {
        type: "add",
        path: "src/components/{{properCase componentName}}/__tests__/{{camelCase componentName}}.test.tsx",
        templateFile: "plop/general/component-tests.txt"
      }
    ]
  });
};
