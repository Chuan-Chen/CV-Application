@echo off 
echo "creating .babelrc">.babelrc
call npm init
call npm i -D @babel/plugin-proposal-class-properties @babel/preset-react babel-core babel-loader babel-preset-react html-webpack-plugin
call npm i -D webpack webpack-dev-server webpack-cli