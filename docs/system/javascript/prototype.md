---
title: 原型&原型链&继承
date: 2020-04-09
sidebarDepth: 0
tags:
- 原型
- 原型链
- 继承
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

[MDN继承与原型链](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Inheritance_and_the_prototype_chain)

#### 1. 原型链继承（让子类的 原型 指向 父类的 实例）
  + 想让子类的实例拿到父类原型上的方法
  + 首先 原型上的方法 实例一定可以拿到
  + 那么 父类的 实例 就可以拿到 父类原型上的方法
  + 就是说 让子类的原型 指向 父类的 实例，并且 子类的实例本来就是指向子类原型的
  + 最后 就可以实现继承

```js {15,17}
// 是谁的实例就能找到谁原型上的方法！！！
// 比如，sub就是Sub的实例，就能找到Sub.prototype上的方法，同时Sub.prototype是Object的实例，就能找到Object.prototype上的方法
//父类
function Supper(){
  this.supper = 'supper'
}
Supper.prototype.showSupperProp = function (){
  console.log(this.supper)
}
//子类
function Sub(){
  this.sub = 'sub'
}
// 让子类的 原型 指向 父类的 实例
Sub.prototype = new Supper()
// 让子类原型的constructor指向子类
Sub.prototype.constructor = Sub

Sub.prototype.showSubProp = function (){
  console.log(this.sub)
}

var sub = new Sub()
sub.showSupperProp()
sub.toString()
```

<!-- ![继承1](/my-vue-press-blog/img/interview/extends1.jpeg) -->

#### 2. 构造函数继承
  1. 定义父类构造函数
  2. 定义子类构造函数
  3. 在子类构造函数中调用父类构造函数
```js
function Person(name, age){
  this.name = name
  this.age = age
}
function Student(name, age, price){
  Person.call(this.name, age)
  this.price = price
}
```

#### 3. 组合继承
+ 组合上述两种方法就是组合继承。
  - 用`原型链`实现对`原型属性`和`方法`的继承
  - 用借用`构造函数`技术来实现`实例属性`的继承。

#### 6. 寄生组合式继承
1. 创建对象，创建父类原型的一个副本
2. 增强对象，弥补因 重写原型而失去的默认的constructor 属性
3. 指定对象，将新创建的对象赋值给子类的原型
```js
function Rectangle(length, width){
  this.l = length
  this.w = width
}
Rectangle.prototype.getArea = function (){
  return this.l * this.w
}
function Square(length){
  Rectangle.call(this, length, length)
}
Square.prototype = Object.create(Rectangle.prototype, {
  constructor: {
    value: Square
  }
})
var square = new Square(3);
console.log(square.getArea())
console.log(square instanceof Square);
console.log(square instanceof Rectangle);
```
:::tip
+ 只调用了一次父类构造函数，并且因此避免了在子类.prototype 上创建不必要的、多余的属性
+ 于此同时，原型链还能保持不变 因此，还能够正常使用instanceof 和isPrototypeOf()
:::

#### ES6 extends 继承

```JS
// ES6 extends 继承
class Polygon {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
}

class Square extends Polygon {
  constructor(sideLength) {
    super(sideLength, sideLength);
  }
  get area() {
    return this.height * this.width;
  }
  set sideLength(newLength) {
    this.height = newLength;
    this.width = newLength;
  }
}

var square = new Square(2);
```

::: tip
extends继承的核心代码如下，其实现和上述的 `寄生组合式` 继承方式一样
:::

总结一下几个重要的点：

::: tip 
1. 原型链：引用类型值相互影响、无法向父级构造函数传参
2. 构造函数：解决原型链的问题，但破坏了复用性
3. 组合式：原型链+借用构造函数(`共享的用原型链，各自的借用构造函数`），但调用了两次父级构造函数
4. 原型式：解决原型链传参问题，并且无需使用构造函数，但也存在引用类型问题
5. 寄生式：原型式的增强 类似于构造函数，每个实例对象都有一个副本——破坏了复用性
6. 寄生组合式：寄生式+组合式，解决了各种问题
:::

[【JS系列】继承的这6种方式！(下)](https://juejin.im/post/5cbe8369e51d456e7e297bff)

[【JS系列】继承的这6种方式！(上)](https://juejin.im/post/5cbdcccaf265da038145d85b)

[JavaScript常用八种继承方案](https://juejin.im/post/5bcb2e295188255c55472db0)