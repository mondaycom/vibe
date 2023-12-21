const Component = require("./plop/component");
const Tests = require("./plop/tests");
const Stories = require("./plop/stories");
const HooksStory = require("./plop/hooks");

module.exports = plop => {
  Component(plop);
  Tests(plop);
  Stories(plop);
  HooksStory(plop);
};
