import webpack from 'webpack';
import config from './webpack.config.prod';
import chalk from 'chalk';

process.env.NODE_ENV = 'production';

console.log("Generating minified bundle. Wait...")

webpack(config).run((err, stats)=>{
	if (err){
		console.log(chalk.red(err));
		return 1;
	}
	return 0;
});
