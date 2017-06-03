const fetch = require('node-fetch');
const P     = require('bluebird');
const _     = require('lodash');
const fs    = require('fs');

const docsBaseUrl = 'https://raw.githubusercontent.com/webpack/webpack.js.org/master/content/configuration';

const mdFiles = [
  'dev-server',
  'devtool',
  'entry-context',
  'externals',
  'module',
  'node',
  'other-options',
  'output',
  'performance',
  'plugins',
  'resolve',
  'stats',
  'target',
  'watch'
].map(filename => `${docsBaseUrl}/${filename}.md`);

const extractText = response => response.text();
const trimText = text => text.trim();
const splitSections = sections => sections.split('##');
const splitLines = lines => lines.split('\n').slice(0, 1);
const removeTicks = stringWithTicks => stringWithTicks.replace(/`/g, '');
const flatten = array => _.flatten(array);
const removeCLIOnly = entry => !entry.includes('CLI only');
const writeResultsToFile = results => {
  fs.writeFileSync(__dirname + '/rawSuggestions.json', JSON.stringify(results, null, 2));
}
const reduceEntriesIntoObject = (obj, entry) => {
  if (!entry.includes('.')) {
    obj[entry] = [];
  } else {
    const [key, value] = entry.split('.');
    if (!obj[key]) {
      obj[key] = [];
    }
    obj[key].push(value);
  }
  return obj;
};

return P.map(mdFiles, fetch)
  .map(extractText)
  .map(splitSections)
  .then(flatten)
  .map(splitLines)
  .then(flatten)
  .map(trimText)
  .filter(str => str.charAt(0) === '`')
  .filter(removeCLIOnly)
  .map(removeTicks)
  .reduce(reduceEntriesIntoObject, {})
  .then(writeResultsToFile);
