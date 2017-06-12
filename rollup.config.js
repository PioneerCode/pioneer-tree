import nodeResolve from 'rollup-plugin-node-resolve';
import uglify from 'rollup-plugin-uglify';

const plugins = [
  nodeResolve({
    jsnext: true,
    module: true,
    extensions: ['.js']
  })
];

let dest = 'bundles/pioneer-tree.umd.js';
if (process.env.BUNDLE_MIN === 'true') {
  dest = 'bundles/pioneer-tree.umd.min.js';
  plugins.push(
    uglify()
  );
}

export default {
  entry: 'src/site/app/lib/pioneer-tree.js',
  dest: dest,
  format: 'umd',
  moduleName: '@pioneer-code/pioneer-tree',
  external: [
    '@angular/core'
  ],
  plugins: plugins
}