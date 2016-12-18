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

app.get('/echo/*', function(req, res){
		const params = (req.params[0] || '').split('/');
		let result = Array.prototype.reduce.call(params, (r, p, index) => {
						var copy = Object.assign({}, r)
						if (index % 2 === 0){
							copy[p] = undefined;
						}else {
							copy[params[index - 1]] = p;
						}
						return copy;
					}, {});

		res.json(result);
});

app.listen(port, function(err){
		if(err){
			console.log(err);
		}else{
			console.log('Server is running on port ' + port + '...');
		}
});
