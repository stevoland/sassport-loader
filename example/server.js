var Express = require('express');
var webpack = require('webpack');

var config = require('./webpack.config');

var compiler = webpack(config);

var app = new Express();

app.use(require('webpack-dev-middleware')(compiler, {
  contentBase: 'http://localhost:8081',
  quiet: true,
  noInfo: true,
  hot: true,
  inline: true,
  lazy: false,
  watchOptions: { aggregateTimeout: 300, poll: 1000 },
  publicPath: config.output.publicPath,
  headers: {'Access-Control-Allow-Origin': '*'},
  stats: {colors: true}
}));
app.use(require('webpack-hot-middleware')(compiler));

app.use(Express.static('.'));

app.listen(8081, function onDevServerListening(err) {
  if (err) {
    console.error(err);
  } else {
    console.log('Listening on: 8081');
  }
});
