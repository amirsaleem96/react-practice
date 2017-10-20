var ExtractTextPlugin = require('extract-text-webpack-plugin');
var clientConfig = {
   entry: [
    './main.js',
    './bundle.sass'
   ],
   output: {
      path:'/',
      filename: 'index.js'
   },
  
   module: {
      rules: [
         {
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
            query: {
               presets: ['es2015', 'react']
            }
         },
         {
             test: /\.css?$/,
             exclude: /node_modules/,
             loader: 'style-loader'
         },
         {
             test: /\.css?$/,
             exclude: /node_modules/,
             loader: 'css-loader',
             query: {
                modules: true,
                localIdentName: '[name]__[local]___[hash:base64:5]'
              }
         },
         {
            test: /\.sass$/,
            exclude: /node_modules/,
            use: ExtractTextPlugin.extract({
              fallback: "style-loader",
              loader: "css-loader!sass-loader"
            }),
         }
      ]
   },
   plugins: [
    new ExtractTextPlugin({ filename: 'bundle.css', disable: false, allChunks: true })
  ]
}

module.exports = [
    clientConfig
];
