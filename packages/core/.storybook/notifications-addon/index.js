function managerEntries(entry = []) {
  return [...entry, require.resolve("./manager.js")];
}

module.exports = {
  managerEntries
};
