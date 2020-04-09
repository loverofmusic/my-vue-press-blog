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

### 函数,原型,实例 三者关系

#### 一切皆对象！(函数,原型,实例)，生成一个对象的时候便拥有了__proto__属性（`隐式原型`）

#### 函数
 + 每个`函数对象`都有一个`prototype`属性（在定义函数的时候就有了），它默认指向一个Object构造的空对象，即：原型对象（`显示原型`）

#### 原型
 + `原型对象`中有一个`constructor`属性，它指向构造它的函数对象

#### 实例
 + `实例对象`有一个`__proto__`属性，它指向原型对象，（给原型对象添加属性/方法，构造函数的所有实例对象自动拥有原型中的属性/方法）


> 分析以上三点关系可以得到下面这张关系图：
![构造函数&原型对象&实例对象](/my-vue-press-blog/img/interview/proto-relation.jpg)
> __proto__形成的链 就是 原型链

:::tip
1. 访问一个对象的属性/方法时，先在自身中查找，找到返回
2. 如果没有，再沿着__proto__这条 隐式原型链 向上查找，找到返回
3. 如果最终没找到，返回undefined
:::

> 根据上面的查找关系，分析一下查找对象上的属性/方法的过程
### 画原型链内存图
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

![原型链内存图](/my-vue-press-blog/img/interview/proto-memory.png)


> 分析一下下面这张神图：
![原型链内存图](/my-vue-press-blog/img/interview/proto.jpg)

### 规律
+ 所有函数的 __proto__ 都直接指向了 Function.prototype（对应内存图的绿色线）
  - 这个源于所有函数都是 Function 构造的实例对象，包括 Function 本身！
+ 然后 Function.prototype 又指向了 Object.prototype
+ 并且 所有原型对象的 __proto__ 都直接指向了 Object.prototype
  - 这个源于原型对象都是 Object 构造的实例对象（对应内存图的红色线）
+ 最后 不难发现 ，所有一切都是对象，所有一切都`最终指向 Object.prototype！！！`


### instanceof 的判断
```js
p instanceof Person
```
::: tip
1. （instanceof在判断什么？）在判断 左边这个对象是不是右边这个构造函数的实例
2. （是不是实例怎么判断？）实例对象的隐式原型指向构造函数的显示原型！！！（记住这句话）
3. （什么叫指向？）顺着原型链向上查找，找到则关系成立
4. 总结：左右的实例对象顺着隐式原型链（ `__proto__` ）向上查找, 如果找到了 右边构造函数的显示原型（`prototype`），则返回true
:::

#### 巩固一下
```js
// 写出以下代码输出值，并解释原因。
Object.prototype.a = 'a';
Function.prototype.a = 'a1';
function Person(){};

var p = new Person();
console.log(Person.a);//a1
console.log(p.a);//a
console.log(p.__proto__.__proto__.constructor.constructor.constructor);//ƒ Function() { [native code] }

// p.__proto__ === Person.prototype
// Person.prototype.__proto__ === Object.prototype
// Object.prototype.constructor === Object
// Object.constructor === Function
// Function.constructor === Function
```

```js
String instanceof String //false
Object instanceof Object //true
Function instanceof Function //true
Function instanceof Object //true
Object instanceof Function //true
```

### 继承
::: tip
基于原型的继承
:::