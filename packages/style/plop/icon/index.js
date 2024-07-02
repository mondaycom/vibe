const { exec } = require("child_process");
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
        message: "FileName including the suffix (including '.svg') suffix",
        validate: input => input.endsWith(".svg") || "FileName must end with .svg"
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
    actions: () => {
      return [
        {
          type: "modify",
          path: "src/Icons/iconsMetaData.js",
          templateFile: "plop/icon/icon-metadata.txt",
          pattern: /(\/\/ plop_marker:icon_metadata)/g
        },
        () =>
          new Promise((resolve, reject) => {
            console.log("Adding icon...");
            exec("cd ../core && npm run lint", (lintErr, lintStdout) => {
              if (lintErr) {
                console.error(lintErr);
                reject(lintErr);
                return;
              }
              console.log(lintStdout);

              exec("cd ../core && yarn build:react-icons", (buildErr, buildStdout) => {
                if (buildErr) {
                  console.error(buildErr);
                  reject(buildErr);
                  return;
                }
                console.log(buildStdout);
                resolve("Icon added and icons built successfully!");
              });
            });
          })
      ];
    }
  });
};
