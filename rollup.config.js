import commonjs from 'rollup-plugin-commonjs';
import typescript from 'rollup-plugin-typescript2';

export default {
  input: 'index.ts', 
  output: {
    name: 'index',
    format: 'umd',
    file: "dist/index.js"
  },
  plugins: [
    commonjs(),
    typescript()
  ]
}; 