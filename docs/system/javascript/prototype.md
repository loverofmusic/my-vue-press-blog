---
title: 原型&原型链&继承
date: 2017-04-16
sidebarDepth: 0
tags:
- 原型
- 原型链
categories:
- JavaScript
isShowComments: true
---

### 

### 画原型链内存图
> 分析一下查找对象上的属性/方法的过程
```js
function Fn(){
  this.test1 = function(){
    console.log('test1')
  }
}
Fn.prototype.test2 = function(){
  console.log('test2')
}
var fn = new Fn()
fn.test1()
fn.test2()
console.log(fn.toString())
fn.test3()
```

![原型链内存图](/my-vue-press-blog/img/interview/check-value-memory.jpg)