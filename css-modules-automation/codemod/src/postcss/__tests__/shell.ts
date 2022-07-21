import execute from "../shell";

const filename = "./src/__tests__/components/sample-button/styles.scss";

const main = async () => {
  const result = await execute(filename);
  console.log(JSON.stringify(result, null, 4));
};

main();
