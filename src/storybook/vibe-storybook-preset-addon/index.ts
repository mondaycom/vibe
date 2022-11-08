function managerEntries(entry: Array<any> = []) {
  return [...entry, require.resolve("@storybook/addon-interactions")];
}

/**const config = (entry: Array<any> = [], options) => {
  return [...entry, require.resolve("my-other-addon/addDecorator")];
};**/

module.exports = {
  managerEntries
};
