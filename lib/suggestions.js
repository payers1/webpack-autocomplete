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
  {text: 'auxiliaryComment'},
  {text: 'chunkCallbackName'},
  {text: 'chunkFilename'},
  {text: 'chunkLoadTimeout'},
  {text: 'crossOriginLoading'},
  {text: 'devtoolFallbackModuleFilenameTemplate'},
  {text: 'devtoolLineToLine'},
  {text: 'devtoolModuleFilenameTemplate'},
  {text: 'devtoolNamespace'},
  {text: 'filename'},
  {text: 'globalObject'},
  {text: 'hashDigest'},
  {text: 'hashDigestLength'},
  {text: 'hashFunction'},
  {text: 'hashSalt'},
  {text: 'hotUpdateChunkFilename'},
  {text: 'hotUpdateFunction'},
  {text: 'hotUpdateMainFilename'},
  {text: 'jsonpFunction'},
  {text: 'jsonpScriptType'},
  {text: 'library'},
  {text: 'libraryExport'},
  {text: 'libraryTarget'},
  {text: 'path'},
  {text: 'pathinfo'},
  {text: 'publicPath'},
  {text: 'sourceMapFilename'},
  {text: 'sourcePrefix'},
  {text: 'strictModuleExceptionHandling'},
  {text: 'umdNamedDefine'},
  {text: 'webassemblyModuleFilename'}
];

const performance = [
  {text: 'hints'},
  {text: 'maxEntrypointSize'},
  {text: 'maxAssetSize'},
  {text: 'assetFilter'},
];

const root = [
  {text: 'amd'},
  {text: 'bail'},
  {text: 'cache'},
  {text: 'context'},
  {text: 'dependencies'},
  {text: 'devServer'},
  {text: 'devtool'},
  {text: 'entry'},
  {text: 'externals'},
  {text: 'loader'},
  {text: 'mode'},
  {text: 'module'},
  {text: 'name'},
  {text: 'node'},
  {text: 'optimization'},
  {text: 'output'},
  {text: 'parallelism'},
  {text: 'performance'},
  {text: 'plugins'},
  {text: 'profile'},
  {text: 'recordsInputPath'},
  {text: 'recordsOutputPath'},
  {text: 'recordsPath'},
  {text: 'resolve'},
  {text: 'resolveLoader'},
  {text: 'serve'},
  {text: 'stats'},
  {text: 'target'},
  {text: 'target'},
  {text: 'watch'},
  {text: 'watchOptions'}
];

const resolve = [
  {text: 'alias'},
  {text: 'aliasFields'},
  {text: 'cachePredicate'},
  {text: 'cacheWithContext'},
  {text: 'concord'},
  {text: 'descriptionFiles'},
  {text: 'enforceExtension'},
  {text: 'enforceModuleExtension'},
  {text: 'extensions'},
  {text: 'fileSystem'},
  {text: 'mainFields'},
  {text: 'mainFiles'},
  {text: 'moduleExtensions'},
  {text: 'modules'},
  {text: 'plugins'},
  {text: 'resolveLoader'},
  {text: 'resolver'},
  {text: 'symlinks'},
  {text: 'unsafeCache'},
  {text: 'useSyncFileSystemCalls'}
];

const rules = [
  {text: 'compiler'},
  {text: 'enforce'},
  {text: 'exclude'},
  {text: 'include'},
  {text: 'issuer'},
  {text: 'loader'},
  {text: 'loaders'},
  {text: 'oneOf'},
  {text: 'options'},
  {text: 'parser'},
  {text: 'query'},
  {text: 'resolve'},
  {text: 'resource'},
  {text: 'resourceQuery'},
  {text: 'rules'},
  {text: 'sideEffects'},
  {text: 'test'},
  {text: 'type'},
  {text: 'use'}
];

const stats = [
  {text: 'all'},
  {text: 'assets'},
  {text: 'assetsSort'},
  {text: 'builtAt'},
  {text: 'cached'},
  {text: 'cachedAssets'},
  {text: 'children'},
  {text: 'chunkModules'},
  {text: 'chunkOrigins'},
  {text: 'chunks'},
  {text: 'chunksSort'},
  {text: 'colors'},
  {text: 'context'},
  {text: 'depth'},
  {text: 'entrypoints'},
  {text: 'env'},
  {text: 'errorDetails'},
  {text: 'errors'},
  {text: 'exclude'},
  {text: 'excludeAssets'},
  {text: 'excludeModules'},
  {text: 'hash'},
  {text: 'maxModules'},
  {text: 'moduleAssets'},
  {text: 'modules'},
  {text: 'modulesSort'},
  {text: 'modulesTrace'},
  {text: 'nestedModules'},
  {text: 'performance'},
  {text: 'providedExports'},
  {text: 'publicPath'},
  {text: 'reasons'},
  {text: 'optimizationBailout'},
  {text: 'source'},
  {text: 'timings'},
  {text: 'usedExports'},
  {text: 'version'},
  {text: 'warnings'},
  {text: 'warningsFilter'}
]

const watchOptions = [
  {text: 'aggregateTimeout'},
  {text: 'ignored'},
  {text: 'stdin'},
  {text: 'poll'}
];

module.exports = {
  devServer,
  module: [
    {text: 'noParse'},
    {text: 'rules'},
    {text: 'exprContextCritical'},
    {text: 'exprContextRecursive'}
  ],
  output,
  performance,
  root,
  resolve,
  rules,
  stats,
  watchOptions
}
