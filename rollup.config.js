import resolve from "rollup-plugin-node-resolve";
import commonjs from "rollup-plugin-commonjs";
import pkg from './package.json';

const globals = {
  react: "React",
};

const external = Object.keys(globals);

export default [
  {
    input: "index.js",
    output: {
      file:  pkg.browser,
      name: "test-kom",
      format: "umd",
      globals: globals,
    },
    external: external,
    plugins: [
      resolve(),
      commonjs(),
    ],
  },
  //ES module
  {
    input: "index.js",
    output: [{file: pkg.module, format: "es"}],
    external: external,
    plugins: [], //TODO: pogedaj opet
  }
];
