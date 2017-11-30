import webpack from 'webpack';
import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';

import ExtractTextPlugin from 'extract-text-webpack-plugin';
 
export default {
  devtool: 'inline-source-map',
  entry: {
   main: path.resolve(__dirname, '../src/index'),
   vendor: path.resolve(__dirname, '../src/vendor')
  },
  target: 'web',
  output: {
    path: path.resolve(__dirname, '../src'),
  	publicPath: '/',
    filename: '[name].js'
  },
  plugins: [
	new webpack.ProvidePlugin({ $: 'jquery', jQuery: 'jquery' }), 
	new webpack.NamedModulesPlugin(),

    new webpack.LoaderOptionsPlugin({
        debug: true,
        noInfo: false,
    }),
    //Generate an external css file with a hash
    new ExtractTextPlugin('[name].css'),
    //Hash file using MD5 so their names change when content changes
    

    //Use CommonsChunkPlugin to create seperate bunde  
    //of vendor libs so they're cached separately
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor'  // same as in entry
    }),

	  new HtmlWebpackPlugin({
		template: 'src/index.html',
		inject:true
  }),
  //remove duplications
  new webpack.optimize.DedupePlugin(),

	  new webpack.HotModuleReplacementPlugin(),
  ],
  module: {
    rules: [
    { test: /\.vue$/,loader: 'vue-loader',options: {
        loaders: {
          scss: 'vue-style-loader!css-loader!sass-loader', 
          sass: 'vue-style-loader!css-loader!sass-loader?indentedSyntax' 
        }
      }
    },
    {test: /\.js$/, exclude: /node_modules/, loaders: ['babel-loader']},
   
    //{test: /\.css$/, loaders: ['style-loader','css-loader']},
    {test: /\.css$/, use: ExtractTextPlugin.extract({fallback: "style-loader",use: "css-loader"})},
    {test: /\.scss$/, loaders: ['style-loader','css-loader','sass-loader']},
	  { enforce: "pre", test:/(\.js$)|(\.vue$)/, loader:"eslint-loader", exclude: /node_modules/}
    ]
  }
};
