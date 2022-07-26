import execute from "../shell";

const filename =
  "/Users/sergeyro/Development/monday-ui-react-core/css-modules-automation/codemod/tests/sample-button/styles.scss";

// const filename =
//   "/Users/sergeyro/Development/monday-ui-react-core/css-modules-automation/codemod/tests/anchor-list-item.scss";

const main = async () => {
  const result = await execute(filename);
  // console.log(JSON.stringify(result, null, 4));
  console.log(result);
};

main();
