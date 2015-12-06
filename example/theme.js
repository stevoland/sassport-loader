var sassport = require('sassport');

module.exports = sassport.module('test')
  .functions({
    'theme($path)': sassport.wrap(function theme(path) {
      return 'red';
    })
  });
