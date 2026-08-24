import config from "@vibe/config/rollup.config";
import path from "path";

const ROOT_PATH = process.cwd();

export default {
  ...config,
  plugins: config.plugins.map(plugin => {
    if (plugin && plugin.name === "rpt2") {
      return {
        ...plugin,
        options: undefined
      };
    }
    return plugin;
  })
};
