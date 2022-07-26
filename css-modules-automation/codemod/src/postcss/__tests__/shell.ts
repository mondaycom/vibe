import execute from "../shell";
import { print } from "../../utils/print";

const filename =
  "/Users/sergeyro/Development/monday-ui-react-core/css-modules-automation/codemod/tests/sample-button/styles.scss";

// const filename =
//   "/Users/sergeyro/Development/monday-ui-react-core/css-modules-automation/codemod/tests/anchor-list-item.scss";

const main = async () => {
  const result = await execute(filename);
  print("!!! postcss, result", result);
};

main();
