import execute from "../shell";

const filename = "./src/__tests__/components/button/styles.scss";

const main = async () => {
	const result = await execute(filename);
	console.log(JSON.stringify(result, null, 4));
};

main();
