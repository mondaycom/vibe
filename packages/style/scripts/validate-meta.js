const { getFilesWithNoMetadata } = require("./metadata-util");

const { metaBadReferences, fileWithNoMeta } = getFilesWithNoMetadata();

if (metaBadReferences && metaBadReferences.length > 0) {
  throw new Error("No matching file for metas: " + metaBadReferences.join(", "));
}
if (fileWithNoMeta && fileWithNoMeta.length > 0) {
  throw new Error("No matching meta for files: " + fileWithNoMeta.join(", "));
}
