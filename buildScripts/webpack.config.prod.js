import path from 'path';
import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import WebpackMd5Hash from 'webpack-md5-hash';
import ExtractTextPlugin from 'extract-text-webpack-plugin';

export default {
  devtool: 'source-map',
  entry: {
    vendor: [
      path.resolve(__dirname, '../src/vendor')], 
    main: path.resolve(__dirname, '../src/index')
  },
  target: 'web',
  output: {
    path: path.resolve(__dirname, '../dist'),
	  publicPath: '/',
    filename: '[name].[chunkhash].js'
  },
  plugins: [
    new webpack.LoaderOptionsPlugin({
        debug: true,
        noInfo: false,
    }),
    //Generate an external css file with a hash
    new ExtractTextPlugin('[name].[contenthash].css'),
    //Hash file using MD5 so their names change when content changes
    new WebpackMd5Hash(),

    //Use CommonsChunkPlugin to create seperate bunde  
    //of vendor libs so they're cached separately
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor'  // same as in entry
    }),
    
    //Create HTML file and include reference to bundled JS
	  new HtmlWebpackPlugin({
      template: './src/index.html',
      minify:{
        removeComments: true,
        collapseWhitespace: true,
        removeRedundantAttributes:true,
        minifyJS:true,
        minifyCSS:true,
      },
      inject:true,
      hash: true
	  }),
	  //remove duplications
	  new webpack.optimize.DedupePlugin(),
	  //new webpack.HotModuleReplacementPlugin(),
	  //Minify JS
	  new webpack.optimize.UglifyJsPlugin()
  ],
  module: {
    rules: [
      {test: /\.vue$/,loader: 'vue-loader',
      options: {
        hotReload: false,
        css: 'css-loader' ,
        scss: 'css-loader|sass-loader'
      }},
    {test: /\.js$/, exclude: /node_modules/, loaders: ['babel-loader']},
      //{test: /\.css$/, loaders: ['style-loader','css-loader']}
    {test: /\.css$/, use: ExtractTextPlugin.extract({fallback: "style-loader",use: "css-loader"})},
    {test: /\.scss$/, loaders: ['style-loader','css-loader','sass-loader']},
	  { enforce: "pre", test:/(\.js$)|(\.vue$)/, loader:"eslint-loader", exclude: /node_modules/}
    ]
  }
};
