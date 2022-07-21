const { run: jscodeshift } = require("jscodeshift/src/Runner");
// const transformer = require("transform");
// const test = require("test");

const transformPath = "transform.js";
const paths = ["test.js"];
const options = {
  dry: true,
  print: true,
  verbose: 1
  // ...
};

const res = jscodeshift(transformPath, paths, options);
console.log(res);
/*
{
  stats: {},
  timeElapsed: '0.001',
  error: 0,
  ok: 0,
  nochange: 0,
  skip: 0
}
*/
