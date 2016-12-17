import express from 'express'
import  path from 'path'
import webpack from 'webpack'
import config from '../webpack.config.dev'

import webpackMW from 'webpack-dev-middleware'

const port = 62226;
const app = new express();
const compiler = webpack(config);

app.use(webpackMW(compiler, {
	noInfo: true,
	publickPath: config.output.publicPath
}));

app.get('/', function(req, res){
			res.sendFile(path.join(__dirname, '../src/index.html'));
});

app.listen(port, function(err){
		if(err){
			console.log(err);
		}else{
			console.log('Server is running on port ' + port + '...');
		}
});
