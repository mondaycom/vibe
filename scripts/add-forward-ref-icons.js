var fs = require("fs");

const startReplaceOrigin = "({size, ...props}) => (";
const startReplaceReplaced = " React.forwardRef(({size, ...props}, ref) => (";
const replaceRefOrigin = "{...props}>";
const replaceRefReplaced = "{...props} ref={ref}>";
const endReplaceOrigin = ");";
const endReplaceReplaced = "));";

function readFiles(dirname, onFileContent, onError) {
  fs.readdir(dirname, function(err, filenames) {
    if (err) {
      onError(err);
      return;
    }
    filenames.forEach(function(filename) {
      fs.readFile(dirname + filename, "utf-8", function(err, content) {
        if (err) {
          onError(err);
          return;
        }
        onFileContent(filename, content);
      });
    });
  });
}
const dirName = "src/components/Icon/Icons/components/";
readFiles(
  dirName,
  function(filename, content) {
    console.log("optimizing:: ", filename);
    const newContent = content
      .replace(replaceRefOrigin, replaceRefReplaced)
      .replace(startReplaceOrigin, startReplaceReplaced)
      .replace(endReplaceOrigin, endReplaceReplaced);

    fs.writeFile(`${dirName}/${filename}`, newContent, "utf8", function(err) {
      if (err) return console.log(err);
    });
  },
  function(err) {
    throw err;
  }
);
