function managerEntries(entry) {}
module.exports = {
  managerEntries: entry => {
    return [...entry, require.resolve("@storybook/addon-interactions/register")];
  }
};

module.exports = { managerEntries };
