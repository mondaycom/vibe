const fs = require("fs");
const path = require("path");
const ICONS_FOLDERS = path.resolve("./src/icons");
const METADATA_FILENAME = "iconsMetaData.js";
const METADATA_FILE_PATH = ICONS_FOLDERS+"/"+METADATA_FILENAME;

function getIconsFiles() {
    const files = fs.readdirSync(ICONS_FOLDERS).filter(f => f !== METADATA_FILENAME);

    return files;
}

function getIconsMetaFiles() {
    let file = fs.readFileSync(METADATA_FILE_PATH, {encoding: "utf-8"});
    file.substr(file.indexOf("iconsMetaData"));
    const files = [...file.matchAll(/file: "(?<name>.*?)"/g)].map(f => f.groups.name);

    return files;
}

function getFilesWithNoMetadata() {
    const actualFiles = getIconsFiles();
    const actualFilesSet = new Set(actualFiles);
    const metaFiles = getIconsMetaFiles();
    const metaFilesSet = new Set(metaFiles);

    const metaBadReferences = metaFiles.filter(f => !actualFilesSet.has(f));
    const fileWithNoMeta = actualFiles.filter(f => !metaFilesSet.has(f));

    return { metaBadReferences, fileWithNoMeta };
}

module.exports = {
    getFilesWithNoMetadata
}

