import { readFileSync, writeFileSync } from "fs";
import { join } from "path";

function updateHtmlTitle(file, newTitle) {
  const fileContents = readFileSync(file, "utf8");
  const modifiedContents = fileContents.replace(/<title>.*<\/title>/, `<title>${newTitle}</title>`);
  writeFileSync(file, modifiedContents);
}

function updateStorybookHtmlTitles(storybookDir) {
  try {
    if (!storybookDir) {
      throw new Error("Please provide the path to the storybook directory.");
    }
    const newTitle = "Vibe Design System";
    ["index.html", "iframe.html"].forEach(filePath => updateHtmlTitle(join(storybookDir, filePath), newTitle));
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
}

updateStorybookHtmlTitles(process.argv[2]);
