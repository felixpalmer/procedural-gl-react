import commonjs from 'rollup-plugin-commonjs';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import replace from 'rollup-plugin-replace';
import resolve from 'rollup-plugin-node-resolve';

export default {
  input: 'src/ProceduralMap',
  output: [
    {
      file: 'build/procedural-gl-react.module.js',
      format: 'esm'
    },
    {
      name: 'ProceduralMap',
      file: 'build/procedural-gl-react.js',
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
