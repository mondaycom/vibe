const path = require('path');
const { resolve: resolveExports } = require('resolve.exports');

// optionally handle NodeJS built-ins just in case not handled by another ESLint module resolver in the chain
const { builtinModules } = require('module');
const builtins = new Set(builtinModules);

/**
 * @param {string} source source
 * @param {string} file file
 * @param {Object} _config config
 */
const resolve = (source, file, _config) => {
  if (builtins.has(source)) {
    // return { found: false }; // this also works?
    return { found: true, path: null };
  }
  try {
    const moduleId = require.resolve(source, { paths: [path.dirname(file)] });

    if (builtinModules.includes(moduleId)) {
      return { found: false };
    }

    return { found: true, path: moduleId };
  } catch (/** @type {any} */ err) {
    if (err.code === 'MODULE_NOT_FOUND' && err.path?.endsWith('/package.json')) {
      const { name, module, main, exports } = require(err.path);
      const resolved = resolveExports({ name, module, main, exports }, source);
      const moduleId = path.join(path.dirname(err.path), resolved);
      return { found: true, path: moduleId };
    }
    return { found: false };
  }
};

module.exports = {
  interfaceVersion: 2,
  resolve,
};
