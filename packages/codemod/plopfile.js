module.exports = function (plop) {
  plop.setGenerator("component", {
    description: "Generate a codemod template and a test file for a component migration",
    prompts: async function (inquirer) {
      const prompts = [
        {
          type: "input",
          name: "componentName",
          message: "What's the name of the component you want to write codemod for?"
        },
        {
          type: "list",
          name: "selectedOption",
          message: "Select the type of codemod:",
          choices: [
            { name: "Empty template", value: "emptyTemplate" },
            { name: "Update prop names", value: "updatePropNames" },
            { name: "Remove prop", value: "removeProp" },
            { name: "Update prop values", value: "updatePropValues" },
            { name: "Update static prop keys", value: "updateStaticPropKeys" }
          ]
        },
        {
          type: "input",
          name: "propsMapping",
          message: "Enter the old-to-new prop mappings as JSON",
          when: answers => answers.selectedOption === "updatePropNames",
          default: `{ "propAOld": "propANew", "propBOld": "propBNew" }`,
          validate: function (value) {
            try {
              JSON.parse(value);
              return true;
            } catch (e) {
              return "Please enter a valid JSON string.";
            }
          }
        },
        {
          type: "input",
          name: "propsToRemove",
          message: "Enter the names of the props to remove, separated by commas:",
          when: answers => answers.selectedOption === "removeProp",
          filter: function (value) {
            return value
              .split(",")
              .map(prop => prop.trim())
              .filter(Boolean);
          }
        },
        {
          type: "input",
          name: "propName",
          message: "Enter the prop name that you would like to change its value",
          when: answers =>
            answers.selectedOption === "updatePropValues" || answers.selectedOption === "updateStaticPropKeys"
        },
        {
          type: "input",
          name: "keysMapping",
          message: "Enter the old-to-new static key mappings as JSON",
          when: answers => answers.selectedOption === "updateStaticPropKeys",
          default: `{ "keyAOld": "keyANew", "keyBOld": "keyBNew" }`,
          validate: function (value) {
            try {
              JSON.parse(value);
              return true;
            } catch (e) {
              return "Please enter a valid JSON string.";
            }
          }
        },
        {
          type: "input",
          name: "propsToRemove",
          message: "Enter the names of the props to remove, separated by commas:",
          when: answers => answers.selectedOption === "removeProp",
          filter: function (value) {
            return value
              .split(",")
              .map(prop => prop.trim())
              .filter(Boolean);
          }
        },
        {
          type: "input",
          name: "propName",
          message: "Enter the prop name that you would like to change its value",
          when: answers => answers.selectedOption === "updatePropValues"
        }
      ];
      const answers = await inquirer.prompt(prompts);
      if (answers.selectedOption === "updatePropValues") {
        answers.valuesMapping = {};
        let addAnother = true;
        while (addAnother) {
          const valueAnswers = await inquirer.prompt([
            {
              type: "input",
              name: "key",
              message: "Enter the value you want to change"
            },
            {
              type: "input",
              name: "value",
              message: "Enter the new value"
            },
            {
              type: "list",
              name: "type",
              message: "Select the type:",
              choices: ["memberExpression", "literal"]
            },
            {
              type: "confirm",
              name: "addAnother",
              message: "Do you want to add another mapping?",
              default: true
            }
          ]);

          answers.valuesMapping[valueAnswers.key] = {
            value: valueAnswers.value,
            type: valueAnswers.type
          };
          addAnother = valueAnswers.addAnother;
        }
        answers.valuesMapping = JSON.stringify(answers.valuesMapping);
      }
      return answers;
    },
    actions: function (data) {
      let templateFile = "plop/component/transform.hbs";

      switch (data.selectedOption) {
        case "updatePropNames":
          templateFile = "plop/component/transform-update-props.hbs";
          data.propsMapping = JSON.parse(data.propsMapping);
          break;
        case "updatePropValues":
          templateFile = "plop/component/transform-update-prop-values.hbs";
          data.valuesMapping = JSON.parse(data.valuesMapping);
          break;
        case "removeProp":
          templateFile = "plop/component/transform-remove-props.hbs";
          break;
        case "updateStaticPropKeys":
          templateFile = "plop/component/transform-update-static-prop-key.hbs";
          data.keysMapping = JSON.parse(data.keysMapping);
          break;
        default:
          break;
      }

      return [
        {
          type: "add",
          path: "transformations/core/v2-to-v3/{{kebabCase componentName}}-component-migration.ts",
          templateFile: templateFile
        },
        {
          type: "add",
          path: "transformations/core/v2-to-v3/__tests__/{{kebabCase componentName}}-component-migration.test.ts",
          templateFile: "plop/component/test.hbs"
        }
      ];
    }
  });
};
