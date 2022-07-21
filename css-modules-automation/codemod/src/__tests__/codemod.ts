import * as fs from "fs";
import * as babel from "@babel/core";

const filename = "./src/__tests__/components/button/index.tsx";
const ts = fs.readFileSync(filename).toString();

const result = babel.transformSync(ts, {
	filename
});

console.log(result!.code);
