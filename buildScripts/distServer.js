import express from 'express';
import path from 'path';
import open from 'open';
import compression from 'compression';
//import webpack from 'webpack';
//import config from './webpack.config.prod';
const  port = 3000;
const app = express();
//const compiler = webpack(config);
app.use(compression());
app.use(express.static('dist'));
// app.use(require("webpack-dev-middleware")(compiler,{
// 	noInfo:true,
// 	publicPath: config.output.publicPath
// }));
// app.use(require("webpack-hot-middleware")(compiler));
app.get('/', function(req, res){
	res.sendFile(path.join(__dirname, '../dist/index.html'));
});
app.listen(port, function(err){
 if (err){
	 console.log(err);
 }
 else
 {
	 open('http://localhost:'+port);
 }
});
