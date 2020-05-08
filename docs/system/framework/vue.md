---
title: vue
date: 2020-01-05
isTimeLine: true
sidebar: true
sidebarDepth: 1
isShowComments: true
tags:
  - vue
categories:
  - vue
---

### Vue源码解析

#### 手写 Vue 的 MVVM 响应式原代码（简单版）
:::tip
采用数据劫持结合发布者-订阅者的方式，通过Object.defineProperty()来劫持各个属性的setter、getter，在数据变动时，发布消息给订阅者，触发相应的监听回调。
:::
+ [GitHub demo链接](https://github.com/loverofmusic/Vue-MVVM-demo.git)
+ ![mvvm](/my-vue-press-blog/img/interview/mvvm.jpg)
+ 主要实现过程：
    + 入口函数的实现
    + 编译类 Compile 的实现
    + 实现 Observer 劫持并监听所有属性
    + 实现观察者 Watcher 和 依赖收集器 Dep
    + 实现双向数据绑定和 Proxy 代理



### vue3.0变化

#### 一. 速度更快
+ 虚拟DOM重新（）
    + 将会有更多的编译时提示来减少运行时的开销，用更有效的代码来创建虚拟节点
+ 优化插槽生成（）
    + 父子组件的渲染分开，可以只渲染父组件，不渲染子组件
    + 不需要打补丁的不再打补丁，提高渲染性能
+ 静态树提升
    + 不需要打补丁的不再打补丁，提高渲染性能
+ 静态属性提升
    + 不需要打补丁的不再打补丁，提高渲染性能
+ 基于Proxy的观察者机制
    + 2.0中使用es5的object.defineProperty的getter setter实现的，存在一些局限性， 无法监听响应对象属性的增加删除等，3.0使用代理模式就没有这些局限性


#### 二. 体积更小
+ 新运行时压缩后大概10kb（相对于2.0 20kb 小了很多）。主要是通过按需引入的方式，减少一些不需要的库，需要什么功能就引入什么功能，没有使用的也就不会打包

#### 三. 更易维护
+ 从flow转向type
    + （flow为facebook的静态类型检查，type为ts。支持ts表现也更好，节省调试bug时间，开发体验更好）
+ 解耦，使内容更加模块化
    + 依赖于自己内部包来运行，使得自定义和灵活的同时提供透明性，使开发人员可以真正进入源码
+ 编译器重写