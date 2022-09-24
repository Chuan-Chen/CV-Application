@echo off

color c
echo  _______                                   __             ______     __                           __                         
echo |       \                                 |  \           /      \   |  \                         |  \                        
echo | $$$$$$$\  ______    ______    _______  _| $$_         |  $$$$$$\ _| $$_     ______    ______  _| $$_    __    __   ______  
echo | $$__| $$ /      \  |      \  /       \|   $$ \        | $$___\$$|   $$ \   |      \  /      \|   $$ \  |  \  |  \ /      \ 
echo | $$    $$|  $$$$$$\  \$$$$$$\|  $$$$$$$ \$$$$$$         \$$    \  \$$$$$$    \$$$$$$\|  $$$$$$\\$$$$$$  | $$  | $$|  $$$$$$\
echo | $$$$$$$\| $$    $$ /      $$| $$        | $$ __        _\$$$$$$\  | $$ __  /      $$| $$   \$$ | $$ __ | $$  | $$| $$  | $$
echo | $$  | $$| $$$$$$$$|  $$$$$$$| $$_____   | $$|  \      |  \__| $$  | $$|  \|  $$$$$$$| $$       | $$|  \| $$__/ $$| $$__/ $$
echo | $$  | $$ \$$     \ \$$    $$ \$$     \   \$$  $$       \$$    $$   \$$  $$ \$$    $$| $$        \$$  $$ \$$    $$| $$    $$
echo  \$$   \$$  \$$$$$$$  \$$$$$$$  \$$$$$$$    \$$$$         \$$$$$$     \$$$$   \$$$$$$$ \$$         \$$$$   \$$$$$$ | $$$$$$$ 
echo                                                                                                                    | $$      
echo                                                                                                                    | $$      
echo                                                                                                                     \$$      
color 7

echo Creating React project
echo Adding babelrc
echo {"preset": [@babel/preset-react],"plugins": [@babel/plugin-proposal-class-properties]}>.babelrc
echo Adding webpack.config.js
echo >webpack.config.js
echo node_modules >.gitignore

echo Installing node modules
call npm i react react-dom 
call npm i -D @babel/plugin-proposal-class-properties @babel/preset-react babel-core babel-loader babel-preset-react html-webpack-plugin
call npm i -D webpack webpack-dev-server webpack-cli
call npm i -D css-loader style-loader

echo Creating source folders
md src
cd src
md components
echo >index.js
echo >index.html
cd components
echo > App.js

PAUSE