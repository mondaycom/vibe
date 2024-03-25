import * as path from 'path';
import nodeResolve from '@rollup/plugin-node-resolve';
import babel from '@rollup/plugin-babel';
import commonjs from '@rollup/plugin-commonjs';
import json from '@rollup/plugin-json';
import typescript from 'rollup-plugin-typescript2';
import terser from '@rollup/plugin-terser';
import postcss from 'rollup-plugin-postcss';
import autoprefixer from 'autoprefixer';
import svg from 'rollup-plugin-svg';

const EXTENSIONS = ['.js', '.jsx', '.ts', '.tsx'];
const ROOT_PATH = path.join(__dirname);
const SRC_PATH = path.join(ROOT_PATH, 'src');
const DIST_PATH = path.join(ROOT_PATH, 'dist');

export default {
  output: {
    dir: DIST_PATH,
    indent: false,
    strict: false,
    exports: 'named',
    preserveModules: true,
    preserveModulesRoot: '.',
  },
  input: {
    index: path.join(SRC_PATH, 'index.ts'),
  },
  external: [/node_modules/],
  plugins: [
    svg(),
    commonjs(),
    json(),
    nodeResolve({
      extensions: [...EXTENSIONS, '.json', '.css'],
    }),
    typescript({
      tsconfig: path.join(ROOT_PATH, 'tsconfig.json'),
    }),
    babel({
      babelHelpers: 'bundled',
      presets: ['@babel/preset-react'],
      extensions: EXTENSIONS,
    }),
    terser({
      compress: {
        pure_getters: true,
        unsafe: true,
        unsafe_comps: true,
      },
    }),
    postcss({
      use: [
        [
          'sass',
          {
            includePaths: ['src'],
          },
        ],
      ],
      extensions: ['.css', '.scss'],
      extract: true,
      minimize: true,
      plugins: [autoprefixer()],
      autoModules: true,
    }),
  ],
};
