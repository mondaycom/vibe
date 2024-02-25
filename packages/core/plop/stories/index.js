const fs = require("fs");

module.exports = plop => {
  plop.setGenerator("Stories", {
    description: "New stories files for existing component",
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
      }
    ]
  });
};
