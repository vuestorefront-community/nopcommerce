import nodeResolve from '@rollup/plugin-node-resolve';
import typescript from 'rollup-plugin-typescript2';
import rollupJson from '@rollup/plugin-json';
import commonjs from '@rollup/plugin-commonjs';
import pkg from './package.json';
import { generateBaseConfig } from '../../rollup.base.config';

const extensions = ['.ts', '.js'];

const server = {
  input: 'src/index.server.ts',
  output: [
    {
      file: pkg.server,
      format: 'cjs',
      sourcemap: true
    }
  ],
  external: [
    ...Object.keys(pkg.dependencies || {}),
    ...Object.keys(pkg.peerDependencies || {}),
    'axios'
  ],
  plugins: [
    nodeResolve({
      extensions,
      jsnext: true,
      preferBuiltins: true,
      browser: true
    }),
    rollupJson(),
    commonjs({
      include: /node_modules/,
      dynamicRequireTargets: ['/node_modules/'],
      defaultIsModuleExports: true
    }),
    typescript({
      // eslint-disable-next-line global-require
      typescript: require('typescript'),
      useTsconfigDeclarationDir: true
    })
  ]
};

export default [generateBaseConfig(pkg), server];
