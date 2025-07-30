import { exec } from "child_process";
export default {
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
      validate: input => input.endsWith(".svg") || "FileName must end with .svg",
      default: ({ iconName }) => `${iconName}.svg`
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
        path: "src/iconsMetaData.ts",
        templateFile: "plop/icon/icon-metadata.txt",
        pattern: /(\/\/ plop_marker:icon_metadata)/g
      },
      () =>
        new Promise((resolve, reject) => {
          console.log("Adding icon...");
          exec("yarn validate-icons", (lintErr, lintStdout) => {
            if (lintErr) {
              console.error(lintErr);
              reject(lintErr);
              return;
            }
            console.log(lintStdout);

            exec("yarn build", (buildErr, buildStdout) => {
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
};
