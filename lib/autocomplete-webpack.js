const esprima       = require('esprima');
const _             = require('lodash');
const suggestions   = require('./suggestions');
const jp            = require('jsonpath');

function cursorIsWithinObject(name, objectLocation, {row: line, column}) {
  const oneBasedLine = line + 1;
  let result = false;
  if (oneBasedLine > objectLocation.start.line
      && oneBasedLine < objectLocation.end.line) {
      result = true;
  }
  if ((oneBasedLine === objectLocation.start.line || oneBasedLine === objectLocation.end.line)
      && column > objectLocation.start.column
      && column < objectLocation.end.column
    ) {
    result = true;
  }
  return result;
}

function getSuggestionsForParent(parent = []) {
  const suggestionsForParent = suggestions[parent];
  if (!suggestionsForParent) { return []};

  return suggestionsForParent.map(({text}) => ({text}));
}

const provider = {
  selector: '.source.js',
  filterSuggestions: true,
  getSuggestions: ({editor, bufferPosition, prefix, scopeDescriptor}) => {
    if (editor.getTitle() !== 'webpack.config.js' || /:/.test(prefix) || prefix.length === 0) {
      return [];
    }

    const text = editor.getBuffer().getText();
    const parsed = _.attempt(() => esprima.parse(text, {tolerant: true, loc: true}));
    const properties = jp.query(parsed, '$..properties')
    const configObjectProperties = _.chain(properties)
      .flatten()
      .filter(({key, value}) => cursorIsWithinObject(key.name, value.loc, bufferPosition))
      .map(({key}) => key.name)
      .last()
      .value();

    const parent = configObjectProperties || 'root';
    return getSuggestionsForParent(parent)
  }
}

exports.provide = () => provider;
