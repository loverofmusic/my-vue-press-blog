---
title: 笔试题升级版
date: 2020-04-06
sidebarDepth: 0
tags:
- 笔试题
categories:
- 面试题
isShowComments: true
---

```js
// 1.请写出如下代码输出值，并解释为什么。
console.log(a);
console.log(typeof yideng(a));
var flag = true;
if (!flag) { 
  var a = 1;
}
if (flag) {
  function yideng(a) {
    yideng = a;
    console.log("yideng1"); 
  }
} else {
  function yideng(a) {
    yideng = a;
    console.log("yideng2"); 
  }
}
```

```js
// 2.请写出如下输出值，并完成附加题的作答
function fn(){
  console.log(this.length);
}
var yideng = {
  length:5,
  method:function(){
    "use strict";
    fn();
    arguments[0]() 
  }
}
const result = yideng.method.bind(null);
result(fn,1);
```

```js
function yideng(a,b,c){
  console.log(this.length); 
  console.log(this.callee.length);
}
function fn(d){
  arguments[0](10,20,30,40,50);
}
fn(yideng,10,20,30);
```

```js
// 3.请问变量a会被GC回收么，为什么呢?
function test(){
  var a = "yideng";
  return function(){
    eval("");
  }
}
test()();
```

```js
// 4.清写出以下代码输出值，并解释原因。
Object.prototype.a = 'a';
Function.prototype.a = 'a1';
function Person(){};

var yideng = new Person();
console.log(Person.a);
console.log(yideng.a);
console.log(1..a);
console.log(1.a);
console.log(yideng.__proto__.__proto__.constructor.constructor.constructor);
// Object.prototype 和 Function.prototype 打印的内容差距很大原因是什么呢?
```

```js
// 5.请写出如下代码执行结果
{
  var a = 1;
  const b = 2;
  function test(){}
  test = 3;
  console.log(typeof test)
}
console.log(a)
console.log(typeof test)
console.log(b)
```

```js
// 6.请写出你了解的ES6元编程。

```

```js
// 7.请按照下方要求作答，并解释原理?请解释下babel编译后的async原理
let a = 0;
let yideng = async () => {
  a = a + await 10;
  console.log(a)
}
yideng();
console.log(++a);
```

```js
// 加强一下
async function async1(){
  console.log(1)
  await async2();
  console.log(3)
}
async function async2(){
  console.log(2)
}
async1();
console.log(4)
```

```js
// 8.请问点击<buttion id=“test”></button>会有反应么?为什么?能解决么?
$('#test').click(function(argument) {
  console.log(1); 
});
setTimeout(function() {
  console.log(2);
}, 0); 
while (true) {
  console.log(Math.random());
}
```

```js
// 9.请先书写如下代码执行结果，并用ES5实现ES6 Promise A+规范的代码，同时你能解 释下如何使用Promise完成事物的操作么?
const pro = new Promise((resolve, reject) => {
  const innerpro = new Promise((resolve, reject) => {
    setTimeout(() => { 
      resolve(1);
    }) 
    console.log(2); 
    resolve(3);
  })
  innerpro.then(res => console.log(res)); 
  resolve(4);
  console.log("yideng");
})
pro.then(res => console.log(res));
console.log("end");
```

```js
// 10.请写出如下输出值，并解释为什么。
var s = [];
var arr = s;
for (var i = 0; i < 3; i++) {
  var pusher = {
    value: "item"+i
  },tmp;
  if (i !== 2) {
    tmp = []
    pusher.children = tmp
  }
  arr.push(pusher);
  arr = tmp;
}
console.log(s[0]);
```

```js
// 【附加题】.请描述你理解的函数式编程，并书写如下代码结果。那么你能使用 Zone+RX 写出一段FRP的代码么?

var Container = function(x) {
  this.__value = x;
}
Container.of = x => new Container(x);
Container.prototype.map = function(f){
  return Container.of(f(this.__value))
}
Container.of(3)
  .map(x => x + 1)
  .map(x => 'Result is ' + x);

```