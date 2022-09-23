@echo off
echo Creating React project
echo Adding babelrc
echo >.babelrc
echo {"preset": [@babel/preset-react],"plugins": [@babel/plugin-proposal-class-properties]} > .babelrc
echo Adding webpack.config.js
echo >webpack.config.js

echo Installing node modules
call npm i react react-dom 
call npm i -D @babel/plugin-proposal-class-properties @babel/preset-react babel-core babel-loader babel-preset-react html-webpack-plugin
call npm i -D webpack webpack-dev-server webpack-cli

echo Creating source folders
md src
cd src
md components
echo >index.js
echo >index.html
cd components
echo > App.js

PAUSE