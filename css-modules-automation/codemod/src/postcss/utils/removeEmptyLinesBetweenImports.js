function removeEmptyLinesBetweenImports(css) {
  let res = "";
  const lines = css.split("\n");
  for (let i = 0; i < lines.length; ++i) {
    if (
      lines[i] === "" &&
      i > 0 &&
      lines[i - 1].startsWith("@import") &&
      i < lines.length - 1 &&
      lines[i + 1].startsWith("@import")
    ) {
      continue;
    }
    res += lines[i] + "\n";
  }
  return res;
}

module.exports = removeEmptyLinesBetweenImports;
