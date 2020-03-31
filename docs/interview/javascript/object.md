---
title: 对象
date: 2019-06-11
sidebarDepth: 0
tags:
- 对象 
categories:
- JavaScript
isShowComments: true
---

### 一. 对象拷贝

### 相关前置知识点

> 基本类型值存在栈中，当赋值给一个变量的时候，变量存的是值本身；<br>
> 引用类型的值存在堆中（堆有个地址），当赋值给一个变量的时候，变量存的是堆的内存地址<br>
> 父组件给子组件传值，如果只传引用的话，子组件修改内部属性可能影响父组件
    
### 浅拷贝
首先都是要创建一个新对象，然后遍历原始对象，遇到属性值是基本类型，就拷贝基本类型的值，遇到属性值是引用类型，就拷贝内存地址，所以当一个对象改变了这个内存地址指向的堆内存里面的数据时，另一个对象也会受影响

### 深拷贝
当遇到引用类型时，会去堆内存开辟一个新的区域 存储对象，所以是和原始对象完全独立开来的

> 首先要分清楚js两大类型：基本类型（number string boolean null undefined symbol bigint）和引用类型


### 判断类型：
- typeof 只能判断基本类型，引用类型只能判断出 function object， Array Set Map RegExp Date 都不行。。。。

- nstanceof 和原型链有关，原型链可以修改，所以也不靠谱；instanceof 判断的是 右边构造函数的原型 在不在 左边实例对象的原型链上

- Object.prototype.toString.call(true) 这个是返回浏览器引擎内部的一个值（传的是什么类型 浏览器引擎已经给定义好了，你调这个方法就返回给你类型标识），是写在ECMA标准里面的，最准

### 深拷贝实践

+ 业务中最实用

```js
let co = JSON.parse(JSON.stringify(obj));//但是 正则 函数 循环引用 等都没有体现
```

+ 简单版

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

// 对象浅拷贝：只考虑了值类型的拷贝，完全没有考虑引用值的拷贝问题，只拷贝栈里面的东西

// function clone(origin, target) {
//   var tar = target || {};
//   for (var key in origin) {
//     if (origin.hasOwnProperty(key)) {
//       //剔除原型上的key
//       tar[key] = origin[key];
//     }
//   }
//   return tar;
// }

// person2 = clone(person1);
// person2.name = "zc";
// person2.age = 43;
// person2.car.push("byd");
// person2.son.age = 23;
// person2.son.first = "zzz";
// person2.son.children.name = "lllllllll";

// console.log(person1, person2);

//对象深拷贝：拷贝出来的对象跟原来的对象 一毛钱关系都没有了，完全独立，应该是把栈和堆里面的东西都拷贝过来了
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

var person2 = deepClone(person1);
person2.name = "zc";
person2.age = 43;
person2.car.push("byd");
person2.son.age = 23;
person2.son.first = "zzz";
person2.son.children.name = "lllllllll";
console.log(person1, person2);
```

+ 周密版

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