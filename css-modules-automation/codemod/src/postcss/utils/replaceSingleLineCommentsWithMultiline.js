function replaceSingleLineCommentsWithMultiline(css) {
  const regex = new RegExp(/(\s)*\/\/.*\n/, "gm");
  const lineWithComments = css.match(regex);
  if (lineWithComments && lineWithComments.length) {
    lineWithComments.forEach(m => {
      let newLineWithMultiComment = m.replace("//", "/*");
      newLineWithMultiComment = newLineWithMultiComment.slice(0, newLineWithMultiComment.length - 1) + " */\n";
      css = css.replace(m, newLineWithMultiComment);
    });
  }
  return css;
}

module.exports = replaceSingleLineCommentsWithMultiline;
