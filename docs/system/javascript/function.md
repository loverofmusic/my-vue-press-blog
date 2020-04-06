---
title: 函数
date: 2019-06-12
sidebarDepth: 0
tags:
- 函数 
categories:
- JavaScript
isShowComments: true
---


### 箭头函数和普通函数的区别 this指向问题
+ 箭头函数:
  - 没有执行上下文的 所以就没有自己的this arguments 变量环境 词法环境 作用域链 原型
  - this指向父级作用域里面的this

+ 普通函数:
  - this指向调用该函数的对象，但是也可以通过函数的call，apply，bind方法设置要指向的对象
  </p>

### call  apply  bind 区别
- call可以传多个参数，apply必须传一个数组
- call apply绑定this后 函数会立即执行，bind不会立即执行，bind返回一个新函数