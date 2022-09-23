@echo off
echo >.babelrc
echo {"preset": [@babel/preset-react],"plugins": [@babel/plugin-proposal-class-properties]} > .babelrc
echo >webpack.config.js

call npm i react react-dom 
call npm i -D @babel/plugin-proposal-class-properties @babel/preset-react babel-core babel-loader babel-preset-react html-webpack-plugin
call npm i -D webpack webpack-dev-server webpack-cli

md src
cd src
md components
echo >index.js
echo >index.html
cd components
md App.js