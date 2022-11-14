export function managerEntries(entry: Array<any>) {
  return [...entry, require.resolve("@storybook/addon-interactions/register")];
}
