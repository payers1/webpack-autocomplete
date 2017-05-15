const esprima       = require('esprima');
const _             = require('lodash');
const suggestions   = require('./suggestions');
const jp            = require('jsonpath');

function cursorIsWithinObject(objectLocation, {row: line, column}) {
  const oneBasedLine = line + 1;
  const cursorIsBetweenBeginningAndEndingLine = oneBasedLine > objectLocation.start.line
                                                && oneBasedLine < objectLocation.end.line;
  const cursorIsOnBeginningLine = oneBasedLine === objectLocation.start.line;
  const cursorIsOnEndingLine = oneBasedLine === objectLocation.end.line;
  const cursorIsOnBeginningOrEndingLine = cursorIsOnBeginningLine || cursorIsOnEndingLine;
  const cursorIsBetweenStartingColumnAndEndingColumn = column > objectLocation.start.column
                                                       && column < objectLocation.end.column;

  if (cursorIsBetweenBeginningAndEndingLine ||
     (cursorIsOnBeginningOrEndingLine && cursorIsBetweenStartingColumnAndEndingColumn)) {
      return true;
  }
  return false;
}

function getSuggestionsForParent(parent) {
  const suggestionsForParent = suggestions[parent] || [];
  return suggestionsForParent.map(({text}) => ({text}));
}

const provider = {
  selector: '.source.js',
  filterSuggestions: true,
  getSuggestions: ({editor, bufferPosition, prefix}) => {
    if (editor.getTitle() !== 'webpack.config.js' || /:/.test(prefix) || prefix.length === 0) {
      return [];
    }

    const text = editor.getBuffer().getText();
    const parsed = _.attempt(() => esprima.parse(text, {tolerant: true, loc: true}));
    const properties = jp.query(parsed, '$..properties')
    const configObjectProperties = _.flatten(properties)
      .filter(({value}) => cursorIsWithinObject(value.loc, bufferPosition))
      .map(({key}) => key.name)
      .pop();

    const parent = configObjectProperties || 'root';
    return getSuggestionsForParent(parent)
  }
}

exports.provide = () => provider;
