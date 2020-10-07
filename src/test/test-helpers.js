import sinon from "sinon";
import mocha from "mocha";
import chai from "chai";
import sinonChai from "sinon-chai";

const { expect } = chai;
chai.use(sinonChai);

module.exports = {
  sinon,
  expect,
  mocha
};
