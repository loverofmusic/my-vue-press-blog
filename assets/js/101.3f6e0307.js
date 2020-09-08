(window.webpackJsonp=window.webpackJsonp||[]).push([[101],{473:function(n,e,a){"use strict";a.r(e);var s=a(5),p=Object(s.a)({},(function(){var n=this,e=n.$createElement,a=n._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[a("p",[n._v("调用项目安装的模块\nnpx 想要解决的主要问题，就是调用项目内部安装的模块。比如，项目内部安装了测试工具 Mocha。")]),n._v(" "),a("p",[n._v("$ npm install -D mocha\n一般来说，调用 Mocha ，只能在项目脚本和 package.json 的scripts字段里面， 如果想在命令行下调用，必须像下面这样。")]),n._v(" "),a("h1",{attrs:{id:"项目的根目录下执行"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#项目的根目录下执行"}},[n._v("#")]),n._v(" 项目的根目录下执行")]),n._v(" "),a("p",[n._v("$ node-modules/.bin/mocha --version\nnpx 就是想解决这个问题，让项目内部安装的模块用起来更方便，只要像下面这样调用就行了。")]),n._v(" "),a("p",[n._v("$ npx mocha --version\nnpx 的原理很简单，就是运行的时候，会到node_modules/.bin路径和环境变量$PATH里面，检查命令是否存在。")]),n._v(" "),a("p",[n._v("由于 npx 会检查环境变量$PATH，所以系统命令也可以调用。")]),n._v(" "),a("h1",{attrs:{id:"等同于-ls"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#等同于-ls"}},[n._v("#")]),n._v(" 等同于 ls")]),n._v(" "),a("p",[n._v("$ npx ls\n注意，Bash 内置的命令不在$PATH里面，所以不能用。比如，cd是 Bash 命令，因此就不能用npx cd。")]),n._v(" "),a("p",[n._v("npm i yarn")]),n._v(" "),a("p",[n._v("npm i nrm =>镜像源管理\nnpm info webpack =>列出webpack所有版本信息")]),n._v(" "),a("p",[n._v("path")]),n._v(" "),a("p",[n._v("yargs-parser =>\nglob")]),n._v(" "),a("p",[n._v("webpack-merge =>\nhtml-webpack-plugin\nextract-text-webpack-plugin => 抽取css")]),n._v(" "),a("p",[n._v('"dependencies": {\n"co": "^4.6.0",\n"cross-env": "^7.0.2",\n"koa": "^2.11.0",\n"koa-simple-router": "^0.2.0",\n"koa-static": "^5.0.0",\n"koa-swig": "^2.2.1",\n"lodash": "^4.17.15",\n"module-alias": "^2.2.2"\n},\n"devDependencies": {\n"jsdoc": "^3.6.4",\n"nodemon": "^2.0.3"\n}')])])}),[],!1,null,null,null);e.default=p.exports}}]);