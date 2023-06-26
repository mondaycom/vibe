#!/usr/bin/env node

import {convertCSSFiles} from "../runners/css-runner";
import {plugins} from "../plugins/plugins";

// Get parameters
const path = process.argv[2];
const pluginName = process.argv[3];

// Get chosen plugin by plugin name
const plugin = plugins.get(pluginName);
convertCSSFiles([path], [plugin])
