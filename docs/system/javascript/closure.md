---
title: 作用域&作用域链&闭包
date: 2017-12-02
sidebarDepth: 0
tags:
- 作用域
- 闭包
categories:
- JavaScript
isShowComments: true
---


### 相关社区文章链接

[当面试官问你闭包时，他究竟想听到些什么？](https://zhuanlan.zhihu.com/p/29157822)

[破解前端面试（80% 应聘者不及格系列）：从闭包说起](https://juejin.im/post/58f1fa6a44d904006cf25d22)

### 两种形式
1. 将函数作为另一个函数的返回值
2. 将函数作为实参传递给另一个函数调用

```js
// 1. 将函数作为另一个函数的返回值
function fn1(){
  var a = 2
  function fn2(){
    a++
    console.log(a)
  }
  return fn2
}
var f = fn1()
f()
f()
```

### 原理：作用域链

#### 作用域链 => 函数执行上下文 (变量环境 + 词法环境 + this绑定 + outer)
> 就是通过outer（指向上一级的执行上下文的一个索引）建立起来的作用域链 再解释内存里的 堆和 栈，执行上下文都是放在栈里的，所有的执行上下文 形成了函数调用栈