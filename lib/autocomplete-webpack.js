const esprima   = require('esprima');
const rp        = require('request-promise');
const { valid } = require('./valid');

const provider = {
  selector: '.source.js',
  filterSuggestions: true,
  getSuggestions: ({editor, bufferPosition, prefix}) => {
    if (editor.getTitle() !== 'webpack.config.js') { return []; }

    const {row, column} = editor.getCursorBufferPosition();
    const text = editor.getBuffer().getText();
    const tokenized = esprima.tokenize(text, {loc: true})
                        .filter(({type, loc, value}) => (
                          type === 'Identifier' &&
                          loc.start.line <= (row + 1) &&
                          valid.includes(value)
                        ))
                        .map(({value}) => value);

    const options = {
      uri: 'https://hypnotic-textbook.glitch.me/predict',
      qs: {
        startLine: row + 1,
        startColumn: column + 1,
        previousItems: tokenized
      },
      json: true
    }
    return rp.get(options).then(results => results)
  }
}

exports.provide = () => provider;
