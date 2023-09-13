import typescript from "@rollup/plugin-typescript";
import pkg from "./package.json" assert { type: "json" };

export default {
  input: "src/index.ts",
  output: [
    { file: pkg.main, format: "cjs" },
    { file: pkg.module, format: "es" },
  ],
  external: [
    'react', 
    'react-dom', 
    'styled-components', 
    'styled-system',
    'prop-types',
    'lodash/noop',
    'lodash/debounce',
    'lodash/throttle',
    'lodash/get',
    'react-transition-group',
    'react-router-dom'
  ],
  plugins: [typescript()],
};
