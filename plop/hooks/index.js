module.exports = plop => {
  plop.setGenerator("Hook Story", {
    description: "New hook story",
    prompts: [
      {
        type: "input",
        name: "componentName",
        message: "What is the name of your hook? (use spaces if multi word)"
      }
    ],
    actions: [
      {
        type: "add",
        path: "src/hooks/__stories__/{{camelCase componentName}}.stories.mdx",
        templateFile: "plop/hooks/hook-story.txt"
      },
      {
        type: "add",
        path: "src/hooksDummyComponents/{{properCase componentName}}.jsx",
        templateFile: "plop/hooks/dummy-component.txt"
      }
    ]
  });
};
