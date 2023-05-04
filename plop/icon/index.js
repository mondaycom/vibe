module.exports = plop => {
  plop.setGenerator("Icon", {
    description: "Adding a new icon",
    prompts: [
      {
        type: "input",
        name: "iconName",
        message: "What is the name of the icon"
      },
      {
        type: "input",
        name: "fileName",
        message: "FileName including the suffix (including '.svg') suffix"
      },
      {
        type: "input",
        name: "description",
        message: "Enter the icon description"
      },
      {
        type: "input",
        name: "tags",
        message: "Enter tags for the icon (separate with ',')"
      }
    ],
    actions: [
      {
        type: "modify",
        path: "src/Icons/iconsMetaData.js",
        pattern: /(\/\/ plop_marker:icon_metadata)/g,
        templateFile: "plop/icon/icon-metadata.txt"
      }
    ]
  });
};
