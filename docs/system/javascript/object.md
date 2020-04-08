---
title: 对象
date: 2020-04-08
sidebarDepth: 0
tags:
- 对象 
categories:
- JavaScript
isShowComments: true
---

### 什么是对象？
  + 多个数据的封装体
  + 用来保存多个数据的容器
  + 一个对象代表现实中的一个事物

### 为什么要用对象？
  + 统一管理多个数据

### 对象的组成？
  + 属性：属性名（**`字符串`**）和属性值（任意类型）组成
  + 方法： 一种特别的属性（属性值是函数）

### 如何访问对象内部的数据？
  + `.`属性名：有时不能用
  + ['属性名']：通用，必须使用该种方式的情况：
    - 属性名包含特殊字符：`-` 或 空格
    ```js
    p['content-type'] = 'text/json'
    ```
    - 属性名不确定，是个变量
    ```js
    var propName = 'zxcc' 
    var value = 18
    p[propName] = value
    ```

### 创建对象几种模式，区别？

+ Object构造函数
  - 套路：new Object()创建空对象，再动态添加属性/方法
  - 适用场景：起始时不确定对象内部数据
  - 特点：语句多。。。
  ```js
  var p = new Object()
  p.name = 'zxcc'
  p.age = 18
  p.setName = function (name) {
    this.name = name
  }
  p.setName('nebulas')
  ```

+ 对象字面量
  - 套路：`{}`创建空对象，同时指定属性/方法
  - 适用场景：起始时对象内部数据是确定的
  - 特点：如果创建多个对象，有重复代码
  ```js
  var p = {
    name: 'zxcc',
    age: 18,
    setName: function (name) {
      this.name = name
    }
  }
  p.setName('nebulas')
  ```

+ 工厂函数
  - 套路：工厂函数创建对象并返回
  - 适用场景：需要创建多个对象
  - 特点：对象没有一个具体类型，都是Object类型
  ```js
  function createPerson(name, age){//返回一个对象的函数=>工厂函数
    var obj = {
      name: name,
      age: age,
      setName: function(name){
        this.name = name
      }
    }
    return obj
  }
  var p1 = createPerson('Tom', 12)
  var p2 = createPerson('Bob', 13)
  p.setName('nebulas')
  ```

+ 自定义构造函数
  - 套路：自定义构造函数，通过new创建对象，对象属性在函数中初始化，共用的方法添加到原型上
  - 适用场景：需要创建多个类型确定的对象
  - 特点：灵活常用
  ```js
  //定义Person类型
  function Person(name, age){// 通常构造函数首字母大写
    this.name = name
    this.age = age
  }
  Person.prototype.setName = function(name){
    this.name = name
  }
  var p1 = new Person('zxcc', 18)
  p1.setName('nebulas')
  ```

+ Object.create(proto,[propertiesObject])
  - 套路：这种方式比较不一样，是可以指定原型的！
    - proto => 新创建对象的原型对象
    - propertiesObject => 可选，添加属性并对属性作出详细解释(此详细解释类似于defineProperty第二个参数的结构）
  - 适用场景：
    - 需要一个非常干净且高度可定制的对象当作数据字典的时候
    - 想节省hasOwnProperty带来的一丢丢性能损失并且可以偷懒少些一点代码的时候

  > 高度可定制的具体代码体现：
  ```js
  const person = {
    isHuman: false,
    printIntroduction: function () {
      console.log(`My name is ${this.name}. Am I human? ${this.isHuman}`);
    }
  };
  let p = Object.create(person,{
    //addr成为p的数据属性
    addr:{
        writable:true,
        configurable:true,
        enumerable: false,
        value:'nanjing'
    },
    //type成为p的访问器属性
    gender:{
        // writable、configurable等属性，不显式设置则默认为false
        get:function(){return 'female'},
        set:function(value){"change this gender to",value}//变性
    }
  })
  console.log(p)
  ```
  > 为什么说它干净，可以通过对比下面几种方法看出：
  ```js
  let o = Object.create(null,{
    a: {
        writable:true,
        configurable:true,
        value:'1'
    }
  })
  console.log(o)
  ```
  ![create-null](/my-vue-press-blog/img/interview/create-null.jpg)
  > 可以看到，新创建的对象除了自身属性a之外，原型链上没有任何属性，也就是没有继承Object的任何东西

  ::: tip
  将null改为`{}`，或者是`Object.prototype`结果是怎样的？在chrome控制台打印看看吧
  :::

  > 最后再来研究一下，Object.create的底层原理到底是什么？做了哪些事情？
  
  ```js
  //伪代码描述
  Object.create =  function (o) {
    var F = function () {};
    F.prototype = o;
    return new F();
  };
  ```
  ::: tip
  1. 新建一个空的构造函数F
  2. 让F.prototype属性指向参数对象obj
  3. 返回一个F的实例
  :::

### new一个对象这个过程中发生了什么?

> new 关键字 => 调用构造函数 => 实例化对象 <br>
> 先来看下通常的应用：

```js {17}
// 定义构造函数
function Person (name, age) {
	this.name = name
	this.age = age
	this.say = function () {
		console.log(`my name is ${this.name}, my age is ${this.age}`)
	}
}

// 构造函数的原型属性和方法定义
Person.prototype.gender = 'female'
Person.prototype.protoSay = function () {
	console.log('nice to meet you!')
}

// 实例化
let p = new Person('zxcc', 18)
console.log(p)

// 当前实例属性
console.log(p.name)
console.log(p.age)
// 当前实例方法
p.say()
// 原型属性
console.log(p.gender)
// 原型方法
p.protoSay()
```

![new-obj](/my-vue-press-blog/img/interview/new-obj.jpg)

> 通过new关键字实例化的对象p，具备了构造函数Person中this的属性：name、age，也具备了构造函数Person的原型prototype的属性gender和方法protoSay <br>
> 那new关键字底层原理到底是什么？做了哪些事情？
```js
//伪代码描述
var p = {}
p.__proto__ = Person.prototype
Person.call(p, 'zxcc', 18)
```
::: tip
  1. 初始化新对象（开辟一块内存空间用于存储一个新的空对象）
  2. 确定[原型链]()（这样就能通过 隐式原型链 找到构造函数原型对象 就能拿到原型上的东西，即给对象身上挂父亲的属性和方法）
  3. 绑定[this]()，进行属性和方法的赋值操作（调用构造函数的call方法，将这个对象作为call方法的参数 这样[执行上下文]()中的this就指向这个空对象，即给对象身上挂自己的属性和方法）
  4. 返回这个对象
::: 
::: warning
+ 构造函数不用写return语句，自动return
+ 如果写了一个return ：
  - 如果return这个基本类型值，无视这个return值，该return什么还是return什么,但是return阻止了构造函数的执行
  - 如果return这个引用类型值，则返回该值
:::











### 遍历一个对象的方法有哪些？for in 能否遍历出原型对象 遍历一个对象里面所有key值
  1. for ... in 循环遍历对象自身的和继承的可枚举属性(不含Symbol属性).
  2. Obejct.keys(obj),返回一个数组,包括对象自身的(不含继承的)所有可枚举属性(不含Symbol属性).
  3. Object.getOwnPropertyNames(obj),返回一个数组,包含对象自身的所有属性(不含Symbol属性,但是包括不可枚举属性).
  4. Object.getOwnPropertySymbols(obj),返回一个数组,包含对象自身的所有Symbol属性.
  5. Reflect.ownKeys(obj),返回一个数组,包含对象自身的所有属性,不管属性名是Symbol或字符串,也不管是否可枚举.  
  6. Reflect.enumerate(obj),返回一个Iterator对象,遍历对象自身的和继承的所有可枚举属性(不含Symbol属性),与for ... in 循环相同.

### 对象转成数组有哪些方法
::: details code
```js
const obj = {
  a00001: "sfhhf",
  b66668: {
    abv: 6778
  }
};
console.log(Object.entries(obj));
const arr = [];
for (let [k, v] of Object.entries(obj)) {
  console.log(k, v);
  arr.push({
    id: k,
    value: v
  });
}

// for(let [k, v] of Object.entries(obj)){
//   console.log([k, v])
// }
let obj2 = { '未完成': 5, '已完成': 8, '待确认': 4, '已取消': 6 };
var arr2 = [];
for (let i in obj2) {
  let o = {};
  o[i] = obj2[i];
  arr2.push(o);
}
console.log(arr2);
```
:::

### 合并对象

### Object.defineProperty上面的一些方法 Object.hasOwnProperty proxy

----------------------------------------------------------------------

### 对象拷贝

### 相关前置知识点

> 基本类型值存在栈中，当赋值给一个变量的时候，变量存的是值本身；<br>
> 引用类型的值存在堆中（堆有个地址），当赋值给一个变量的时候，变量存的是堆的内存地址<br>
> 父组件给子组件传值，如果只传引用的话，子组件修改内部属性可能影响父组件
    
### 浅拷贝
首先都是要创建一个新对象，然后遍历原始对象，遇到属性值是基本类型，就拷贝基本类型的值，遇到属性值是引用类型，就拷贝内存地址，所以当一个对象改变了这个内存地址指向的堆内存里面的数据时，另一个对象也会受影响

### 深拷贝
当遇到引用类型时，会去堆内存开辟一个新的区域 存储对象，所以是和原始对象完全独立开来的

> 首先要分清楚js两大类型：基本类型（number string boolean null undefined symbol bigint）和引用类型


#### 判断类型：
- typeof 只能判断基本类型，引用类型只能判断出 function object， Array Set Map RegExp Date 都不行。。。。

- nstanceof 和原型链有关，原型链可以修改，所以也不靠谱；instanceof 判断的是 右边构造函数的原型 在不在 左边实例对象的原型链上

- Object.prototype.toString.call(true) 这个是返回浏览器引擎内部的一个值（传的是什么类型 浏览器引擎已经给定义好了，你调这个方法就返回给你类型标识），是写在ECMA标准里面的，最准

## 深拷贝实践

+ 业务中最实用

```js
let co = JSON.parse(JSON.stringify(obj));//但是 正则 函数 循环引用 等都没有体现
```

+ 简单版

::: details 这里是对象实例
```js
// 值 的拷贝，引用值 的拷贝问题
Object.prototype.num = 3;
var person1 = {
  name: "zxcc",
  age: 39,
  son: {
    age: 18,
    first: "xxx",
    last: "yyy",
    children: {
      name: "iii",
      sex: "male"
    }
  },
  car: ["ben", "maz"]
};

```
:::





```js
//对象深拷贝：拷贝出来的对象跟原来的对象 一毛钱关系都没有了，
// 完全独立，应该是把栈和堆里面的东西都拷贝过来了
function deepClone(origin, target) {
  var tar = target || {};
  for (var key in origin) {
    if (origin.hasOwnProperty(key)) {
      //剔除原型上的key

      //遍历该层所有key对应的value是基本类型还是引用类型
      if (typeof origin[key] === "object" && origin[key] !== null) {
        //引用类型，还要判断是对象还是数组
        // if (Array.isArray(origin[key])) { 
        //   tar[key] = [];
        // } else {
        //   tar[key] = {};
        // }
        Array.isArray(origin[key]) ? (tar[key] = []) : (tar[key] = {});
        //判断数组的其他方式：
        //Object.prototype.toString.call(origin[key]) === "[object Array]"
        //递归处理
        deepClone(origin[key], tar[key]);
      } else {
        //基本类型，直接把key-value拷贝过去
        tar[key] = origin[key];
      }
    }
  }
  return tar;
}
```





::: details 这里是调用检测结果
```js
var person2 = deepClone(person1);
person2.name = "zc";
person2.age = 43;
person2.car.push("byd");
person2.son.age = 23;
person2.son.first = "zzz";
person2.son.children.name = "lllllllll";
console.log(person1, person2);
```
:::





::: details 对比浅拷贝

```js
// 对象浅拷贝：只考虑了值类型的拷贝，完全没有考虑引用值的拷贝问题，只拷贝栈里面的东西

function clone(origin, target) {
  var tar = target || {};
  for (var key in origin) {
    if (origin.hasOwnProperty(key)) {
      //剔除原型上的key
      tar[key] = origin[key];
    }
  }
  return tar;
}

person2 = clone(person1);
person2.name = "zc";
person2.age = 43;
person2.car.push("byd");
person2.son.age = 23;
person2.son.first = "zzz";
person2.son.children.name = "lllllllll";

console.log(person1, person2);
```
:::






+ 周密版

```js
const isComplexDataType = obj => {
  return (typeof obj === 'object' || 
    typeof obj === 'function') && 
    (obj !== null)
}

const deepClone = function (obj, hash = new WeakMap()){

  if (hash.has(obj)) return hash.get(obj)
  let type = [Date, RegExp, Set, Map, WeakMap, WeakSet]
  if (type.includes(obj.constructor)) return new obj.constructor(obj)
  //如果成环了，参数 obj = obj.loop = 最初的obj 
  // 会在WeakMap中找到第一次放入的obj提前返回第一次放入WeakMap的cloneObj

  let allDesc = Object.getOwnPropertyDescriptors(obj)//遍历传入参数所有键的特性
  let cloneObj = Object.create(Object.getPrototypeOf(obj), allDesc)//继承原型
  hash.set(obj, cloneObj)

  for (let key of Reflect.ownKeys(obj)) {
    //Reflect.ownKeys(obj)可以拷贝 不可枚举属性和符号类型
    //如果值是引用类型（非函数）则递归调用 deepClone
    cloneObj[key] = (isComplexDataType(obj[key]) && typeof obj[key] !== 'function') 
      ? deepClone(obj[key], hash) : obj[key];
  }

  return cloneObj;
}
```

::: details 测试用例
```js
//测试用例
function Obj(){
  this.func = fucntion () {
    alert(1);
  }
  this.obj = { a: 1 };
  this.arr = [1, 2,3]
  this.und = undefined;
  this.reg = /123/;
  this.date = new Date(0);
  this.NaN = NaN;
  this.infinity = Infinity;
  this.sym = Symbol(1);
  this.set = new Set([1,2,3])
  this.map = new Map([['a',1],['b',9]])
}
let obj1 = new Obj();
Object.defineProperty(obj1, 'innumerable', {
  enumerable:false,
  value: "innumerable"
})
console.log(obj1)
let str = JSON.stringify(obj1)
let obj2 = JSON.parse(str)
```
::: 