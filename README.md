100-webpack a Demonstration
===========================

A demonstration of Webpack. Includes Material Components.

## Run

Simply open the `index.html` file found in the project root in a web browser.

## Developing

In order to edit the application, the Ecmascript assets must be bundled and
"served" to the application. We use `webpack` to package and emit the assets
our application holds.

### 1. Build

We use `npm-scripts` to `run` the `build` sub-command. The `build` macro is
an alias to `./node_modules/bin/webpack` and can be found in the `package.json`
file.

~~~~~~shell
npm run build
~~~~~~

### 2. Open Application in Browser

Then open the `index.html` file found in the project root.

## Recreating This Application

~~~~~~shell
mkdir webpack-demo
cd webpack-demo

npm init -y
npm install --save-dev webpack
npm install --save material-components-web

mkdir app
touch app/index.js

touch index.html

touch webpack.config.json
~~~~~~
