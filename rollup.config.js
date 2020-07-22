import { nodeResolve } from '@rollup/plugin-node-resolve';

export default {
  input: 'index.js',
  output: {
    dir: 'public',
    format: 'iife'
  },
  plugins: [nodeResolve()]
};