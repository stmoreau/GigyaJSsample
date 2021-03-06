import resolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';

export default [
  {
    input: ["src/login.js", "src/welcome.js"],
    output: [
      // ES module version, for modern browsers that support dynamic imports https://caniuse.com/#feat=es6-module-dynamic-import
      {
        dir: "public/module",
        format: "es",
        sourcemap: true
      },
      // SystemJS version, for older browsers that do not support dynamic imports https://caniuse.com/#feat=es6-module-dynamic-import
      {
        dir: "public/nomodule",
        format: "system",
        sourcemap: true
      }
    ],
    plugins: [
      resolve(),
      babel({
        exclude: 'node_modules/**' // only transpile our source code
      })
    ]
  },
];
