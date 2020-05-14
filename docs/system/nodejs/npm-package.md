---
title: 用过的npm包
date: 2019-05-11
sidebarDepth: 0
tags:
- npm
categories:
- node.js
isShowComments: true
---


调用项目安装的模块
npx 想要解决的主要问题，就是调用项目内部安装的模块。比如，项目内部安装了测试工具 Mocha。


$ npm install -D mocha
一般来说，调用 Mocha ，只能在项目脚本和 package.json 的scripts字段里面， 如果想在命令行下调用，必须像下面这样。


# 项目的根目录下执行
$ node-modules/.bin/mocha --version
npx 就是想解决这个问题，让项目内部安装的模块用起来更方便，只要像下面这样调用就行了。


$ npx mocha --version
npx 的原理很简单，就是运行的时候，会到node_modules/.bin路径和环境变量$PATH里面，检查命令是否存在。

由于 npx 会检查环境变量$PATH，所以系统命令也可以调用。


# 等同于 ls
$ npx ls
注意，Bash 内置的命令不在$PATH里面，所以不能用。比如，cd是 Bash 命令，因此就不能用npx cd。
















npm i yarn

npm i nrm =>镜像源管理
npm info webpack =>列出webpack所有版本信息

path

yargs-parser =>
glob


webpack-merge =>
html-webpack-plugin
extract-text-webpack-plugin => 抽取css

