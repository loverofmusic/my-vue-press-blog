---
title: Webpack
date: 2019-06-01
sidebarDepth: 0
tags:
- Webpack
categories:
- 工程化
isShowComments: true
---

### 构建
+ 代码转化 生产环境文件优化 代码分割 模块合并 自动刷新 代码校验 自动发布。。。
+ TreeShaking 环境区分 打包分析  环境变量使用
+ [webpack4配置demo](https://github.com/loverofmusic/webpack4-demo.git)\

### 核心配置要点记录

**entry**

**output**

**loader**

**plugin**

**devServer**

**sourceMap**

**hmr hot module replacement** 
开启步骤：
- 使用webpack-dev-server作为服务器启动
- devServer配置中 hot： true
- plugins HotModuleReplacementPlugin
- js模块中增加module.hot.accept hmr代码

**--watch**

**babel**

js编译器，

```
npm i @babel/core @babel/preset-env babel-loader -D
```

已经使用了@babel/preset-env ES6+语法转换 ？
- 标准引入的语法：箭头函数 let const 等等 可以转换
- 标准引入的全局变量，部分原生对象新增的原型链上的方法 不可以，Promise Symbol set map。。。。
- 需要引入polyfill

```
npm i @babel/polyfill core-js@3 -D
```

@babel/polyfill（用于开发业务） 全局变量的形式将方法注入，开发类库，UI组件时，全局变量的污染<br/>
@babel/plugin-transform-runtime 以闭包方式注入 保证全局环境不被污染

```
npm i @babel/plugin-transform-runtime @babel/runtime-corejs3 -D
```

### 高级配置要点记录

**treeShaking**
依赖ES6模块语法，mode: 'production'自动启动

**dev pro区分**
 理一下思路：

- 开发环境：
    - devServer
    - sourceMap
    - 接口代理proxy
    - 。。。

- 生产环境：
    - treeShaking
    - 代码压缩
    - 提取公共代码
    - 。。。

- 共用配置：
    - 入口
    - 部分对于代码的处理

- 方案：
    - webpack.prod.js
    - webpack.dev.js
    - webpack.base.js 开发环境与生产环境共用的代码
    - 借助 工具 webpack-merge
    

**打包优化**
1.入口配置： entry多入口，配合用webpack.ProvidePlugin 将公共模块注册到全局
2.抽取公共代码（加CDN）：splitChunksPlugin 速度更快了
    - 之前用的commonChunksPlugin 
    - 在 optimization 里面配置 splitChunks
3.动态加载：按需加载，懒加载 配置babel："@babel/plugin-syntax-dynamic-import"
