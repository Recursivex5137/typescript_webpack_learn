const path = require('path')
const webpack = require('webpack')

// TODO: review webpack configs
// learning webpack 
// configure for node dev env 
// configure for node prod env
// output for node modules is commonjs and es6


// TODO: finish webpack config
const serverConfig = {
  mode: 'development',
  target: 'node',
  entry: './server/server.ts',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'server.js'
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js']
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        use: 'ts-loader'
      }
    ]
  },
  plugins: [
    new webpack.ProgressPlugin(),
  ]
}

const clientConfig = {
  mode: 'development',
  target: 'web', // <- this is the default as 'web'
  entry: './client/app.tsx',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'client.bundle.js'
  },
}

module.exports = {
  mode: 'development',
  targets: 'node',
  entry: './src/app.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'webpack.bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader'
      }
    ]
  }
}

module.exports = [serverConfig, clientConfig]

