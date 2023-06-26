#!/usr/bin/env node

import {convertCSSFiles} from "../runners/css-runner";
import {plugins} from "../plugins/plugins";

//const pluginName = process.argv[2];
convertCSSFiles(["./src/e.scss"], [plugins.get("replace-typography-tokens")])
