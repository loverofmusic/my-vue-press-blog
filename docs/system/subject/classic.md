---
title: js笔试题
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
console.log(typeof fn(a));
var flag = true;
if (!flag) { 
  var a = 1;
}
if (flag) {
  function fn(a) {
    fn = a;
    console.log("fn1"); 
  }
} else {
  function fn(a) {
    fn = a;
    console.log("fn2"); 
  }
}

// undefined
// Uncaught TypeError: fn is not a function at <anonymous>:2:20
```
::: tip
1. hhh
:::

> 解析：
::: detail
+ 依次执行验证：
```js
if(true){
  function test(){
    console.log(123)
  }
}
test();//123; 
```

```js
test();//test is not a function;;
if(true){
  function test(){
    console.log(123)
  }
}
```

```js
console.log("函数名", test)
if(true){
  function test(){
    console.log(123)
  }
}
console.log("函数体", test)
```

```js
if(false){
  function test(){
    console.log(123)
  }
}
test()//test is not a function; 
```

```js
if(false){
  function test(){
    console.log(123)
  }
}
console.log(test)//undefined; false的情况下，函数名提升出去了，但是没有函数体(没有赋值，因为没有执行if逻辑)
```

```js
console.log(test)//undefined;
if(false){
  function test(){
    console.log(123)
  }
}
```
:::

```js
var a = 0;
if(true){
  a = 1;
  function a(){};
  a = 21;
  console.log(a)
}
console.log(a)
```





```js
// 2.请写出如下输出值，并完成附加题的作答
function fn(){
  console.log(this.length);
  // console.log(this)//window
}
var yideng = {
  length:5,
  method:function(){
    "use strict";
    // console.log(this)//null
    fn();//1 window.length
    arguments[0]() //2 实参数
  }
}
const result = yideng.method.bind(null);
result(fn,1);
```

```js
function yideng(a,b,c){
  console.log(this.length); //4 ===arguments所在的函数实参个数：yideng,10,20,30
  console.log(this.callee.length);//1 ===arguments所在的函数形参个数 就一个d
}
function fn(d){
  arguments[0](10,20,30,40,50);//arguments类数组‘对象’调的fn，this指的是arguments
}
fn(yideng,10,20,30);

// arguments.length 是实参长度 <br>
// arguments.callee.length 是形参长度 等同于 函数名.length
```







```js
// 3.请问变量a会被GC回收么，为什么呢?======================================================
function test(){
  var a = "zxcc";
  return function(){
    eval("");
  }
}
test()();
```





```js
// 4. 写出以下代码输出值，并解释原因。
Object.prototype.a = 'a';
Function.prototype.a = 'a1';
function Person(){};

var p = new Person();
console.log(Person.a);//a1
console.log(p.a);//a
console.log(1..a);//a  1..a  数值后面的点 会被解释成小数点 而不是点运算符 
//JavaScript 有多灵活？http://www.ruanyifeng.com/blog/2015/02/flexible-javascript.html
console.log(1.a);//Uncaught SyntaxError: Invalid or unexpected token
console.log(p.__proto__.__proto__.constructor.constructor.constructor);//ƒ Function() { [native code] }
// Object.prototype 和 Function.prototype 打印的内容差距很大原因是什么呢?

// p.__proto__ === Person.prototype
// Person.prototype.__proto__ === Object.prototype
// Object.prototype.constructor === Object
// Object.constructor === Function
// Function.constructor === Function
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

// number
// 1
// function
// Uncaught ReferenceError: b is not defined at <anonymous>:10:13
```






```js
// 6.请写出你了解的ES6元编程。

// Symbol、Reflect 和 Proxy

```






```js
// 7.请按照下方要求作答，并解释原理?请解释下babel编译后的async原理
let a = 0;
let test = async () => {
  a = a + await 10;
  console.log(a)//10
}
test();
console.log(++a);//1

// 在第一个await表达式出现之前，异步函数内部的代码都是按照同步方式执行的，记住这句话以后我们再继续往下看
// 那么在test函数内部，哪些代码是按同步方式执行的呢？
// 首先我们可以将x += await 10这行代码稍微变换一下形式，
// 变换为：a = a + await 10，表达式右边的a是取值操作，并且按同步方式执行的，所以在执行到await时，右边的a已经取值完成，并且被取到的值0替换，然后才轮到test函数外的 ++a 这行代码执行，a += await 10 相当于a = 0 + await 10，所以最终输出：10
```

```js
let x = 0;
async function test() {
    x = (await 2) + x;// 把await放在x前面
    console.log(x);	 // 这里又输出什么？//3!!!
}
test();
x = 1;
// await会阻塞其所在表达式中后续表达式的执行
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

//1
//2
//4
//3
```





```js
// 8.请问点击<buttion id=“test”></button>会有反应么?为什么?能解决么?===================================================
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
// 9.请先书写如下代码执行结果，并用ES5实现ES6 Promise A+规范的代码，同时你能解释下如何使用Promise完成事物的操作么?
const pro = new Promise((resolve, reject) => {

  const innerpro = new Promise((resolve, reject) => {
    setTimeout(() => { 
      resolve(1);
    }) 
    console.log(2); //==================================================================================
    resolve(3);// resolve => 放入异步队列
  })
  innerpro.then(res => console.log(res)); //.then => 从异步队列取出来执行

  resolve(4);
  console.log("yideng");
})
pro.then(res => console.log(res));
console.log("end");

// 2
// yideng
// end
// 3
// 4
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
    pusher.children = tmp//关键就在于 pusher.children 是 tmp 的引用（让pusher.children指向名字叫tmp的数组空间），后面又让arr指向这里
  }
  arr.push(pusher);// pusher被push到了上次arr指向的空间，也就是上一次的pusher.children对应的值里面
  arr = tmp;//arr指向名字叫tmp的数组空间
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