import commonjs from 'rollup-plugin-commonjs';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import replace from 'rollup-plugin-replace';
import resolve from 'rollup-plugin-node-resolve';

import pkg from './package.json';

export default {
  input: 'src/ProceduralMap',
  output: [
    {
      file: pkg.module,
      format: 'esm'
    },
    {
      name: 'ProceduralMap',
      file: pkg.main,
      format: 'umd'
    }
  ],
  plugins: [ 
    peerDepsExternal(),
    resolve(),
    replace({
      'process.env.NODE_ENV': JSON.stringify( 'production' )
    }),
    commonjs({
      include: [
        'node_modules/**'
      ],
      exclude: [
        'node_modules/process-es6/**'
      ]
    })
  ]
};
