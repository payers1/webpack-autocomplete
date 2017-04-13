const devServer = [
  {text: 'clientLogLevel'},
  {text: 'compress'},
  {text: 'contentBase'},
  {text: 'filename'},
  {text: 'headers'},
  {text: 'historyApiFallback'},
  {text: 'hot'},
  {text: 'https'},
  {text: 'lazy'},
  {text: 'noInfo'},
  {text: 'overlay'},
  {text: 'proxy'},
  {text: 'publicPath'},
  {text: 'quiet'},
  {text: 'setup'},
  {text: 'staticOptions'},
  {text: 'stats'},
  {text: 'watchContentBase'},
  {text: 'watchOptions'}
];

const output = [
  {text: 'chunkFilename'},
  {text: 'crossOriginLoading'},
  {text: 'devtoolFallbackModuleFilenameTemplate'},
  {text: 'devtoolLineToLine'},
  {text: 'devtoolModuleFilenameTemplate'},
  {text: 'hashFunction'},
  {text: 'hashDigest'},
  {text: 'hashDigestLength'},
  {text: 'hashSalt'},
  {text: 'filename'},
  {text: 'hotUpdateChunkFilename'},
  {text: 'hotUpdateFunction'},
  {text: 'hotUpdateMainFilename'},
  {text: 'jsonpFunction'},
  {text: 'library'},
  {text: 'libraryTarget'},
  {text: 'path'},
  {text: 'pathinfo'},
  {text: 'publicPath'},
  {text: 'sourceMapFilename'},
  {text: 'sourcePrefix'},
  {text: 'strictModuleExceptionHandling'},
  {text: 'umdNamedDefine'},
];

const performance = [
  {text: 'hints'},
  {text: 'maxEntrypointSize'},
  {text: 'maxAssetSize'},
  {text: 'assetFilter'},
];

const root = [
  {text: 'entry'},
  {text: 'output'},
  {text: 'module'},
  {text: 'resolve'},
  {text: 'performance'},
  {text: 'devtool'},
  {text: 'context'},
  {text: 'target'},
  {text: 'node'},
  {text: 'externals'},
  {text: 'stats'},
  {text: 'devServer'},
  {text: 'plugins'},
  {text: 'watch'},
  {text: 'watchOptions'},
  {text: 'target'},
  {text: 'resolveLoader'},
  {text: 'profile'},
  {text: 'bail'},
  {text: 'cache'},
  {text: 'recordsPath'},
  {text: 'recordsInputPath'},
  {text: 'recordsOutputPath'}
];

const resolve = [
  {text: 'alias'},
  {text: 'aliasFields'},
  {text: 'descriptionFiles'},
  {text: 'enforceExtension'},
  {text: 'enforceModuleExtension'},
  {text: 'extensions'},
  {text: 'mainFields'},
  {text: 'mainFiles'},
  {text: 'modules'},
  {text: 'unsafeCache'},
  {text: 'resolveLoader'},
  {text: 'plugins'},
  {text: 'symlinks'},
  {text: 'cachePredicate'},
];

const rules = [
  {text: 'enforce'},
  {text: 'exclude'},
  {text: 'include'},
  {text: 'issuer'},
  {text: 'loader'},
  {text: 'loaders'},
  {text: 'oneOf'},
  {text: 'options'},
  {text: 'query'},
  {text: 'parser'},
  {text: 'resource'},
  {text: 'resourceQuery'},
  {text: 'rules'},
  {text: 'test'},
  {text: 'use'},
];

const stats = [
  {text: 'assets'},
  {text: 'assetsSort'},
  {text: 'cached'},
  {text: 'cachedAssets'},
  {text: 'children'},
  {text: 'chunks'},
  {text: 'chunkModules'},
  {text: 'chunkOrigins'},
  {text: 'chunksSort'},
  {text: 'context'},
  {text: 'colors'},
  {text: 'depth'},
  {text: 'entrypoints'},
  {text: 'errors'},
  {text: 'errorDetails'},
  {text: 'exclude'},
  {text: 'hash'},
  {text: 'maxModules'},
  {text: 'modules'},
  {text: 'modulesSort'},
  {text: 'performance'},
  {text: 'providedExports'},
  {text: 'publicPath'},
  {text: 'reasons'},
  {text: 'source'},
  {text: 'timings'},
  {text: 'usedExports'},
  {text: 'version'},
  {text: 'warnings'}
]

const watchOptions = [
  {text: 'aggregateTimeout'},
  {text: 'ignored'},
  {text: 'poll'}
];

module.exports = {
  devServer,
  module: [
    {text: 'noParse'},
    {text: 'rules'}
  ],
  output,
  performance,
  root,
  resolve,
  rules,
  stats,
  watchOptions
}