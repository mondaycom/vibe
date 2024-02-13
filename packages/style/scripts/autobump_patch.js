#!/usr/bin/env node
/* eslint no-console: 0 */

const { bumpVersion, BumpTypes } = require("./bump-version");

bumpVersion(BumpTypes.PATCH);
