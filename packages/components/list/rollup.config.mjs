import path from "path";
import config from "@vibe/config/rollup.config";

const SRC_PATH = path.join(process.cwd(), "src");

export default {
  ...config,
  input: [path.join(SRC_PATH, "index.ts"), path.join(SRC_PATH, "next/index.ts")]
};
