const Component = require("./plop/component");
const Tests = require("./plop/tests");

module.exports = plop => {
  Component(plop);
  Tests(plop);
};
