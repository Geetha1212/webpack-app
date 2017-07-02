
### Reference
* https://www.youtube.com/watch?v=lziuNMk_8eQ
* https://www.youtube.com/watch?v=m7V0OackwxY&t=929s&index=3&list=PLkEZWD8wbltnRp6nRR8kv97RbpcUdNawY
* https://www.youtube.com/watch?v=xn0rlcDq99U

#### __Version [#1.0.0](https://github.com/Geetha1212/webpack-app/releases/tag/1.0.0)__
* Simple Webpack app with Single Bundle
* can have dev mode and production build
* dev mode uses webpack dev server for hot reloading npm run hot
* production mode generates build file in dist/bundle.js

#### __Version [#1.1.0](https://github.com/Geetha1212/webpack-app/releases/tag/1.1.0)__
* webpack with multiple split bundles based on multiple entry point
* output bundle name as configured in webpack.config.js
* use to reduce the size of the bundle
* as explained in [here](https://webpack.github.io/docs/multiple-entry-points.html)


#### __Version [#1.2.0](https://github.com/Geetha1212/webpack-app/releases/tag/1.2.0)__
* Added Support for SaSS files with Sassloader and node-sass
* Added config for devServer inside webpack.config.js
* Added HTML Plugin to create index.html automatically with the webpack bundled script based on template

#### __Version [#1.3.0](https://github.com/Geetha1212/webpack-app/releases/tag/1.3.0)__
* Added Support for extract-text-webpack-plugin
* This plugin is used to separate out CSS modules from bundled js chunks into separate CSS file.
* When you look at the auto generated dist/index.html , you can notice css file include apart from JS bundle includes.
