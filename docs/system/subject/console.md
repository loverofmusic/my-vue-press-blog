---
title: 请写出打印结果，并解释为什么
date: 2017-12-02
sidebarDepth: 0
tags:
- 笔试
- 打印结果
categories:
- 面试题
isShowComments: true
---

### JavaScript基础测试

```js
// 1. 写出弹出值，并解释为什么
alert(a)
a();
var a = 3;
function a(){
  alert(10)
}
alert(a)
a=6;
a();

/*
* 预编译阶段 a 变量提升，并且函数优先级最高，所以第3行 alert结果是 ：
function a(){
  alert(10)
}
* 第4行执行 a 函数，弹出 10
* 然后给 a 赋值 3，所以第9行，弹出 3
* 然后又给 a 赋值6，所以第11行，弹出 a is not a function
*/

var x = 1,
y = 0,
z = 0;
function add(x){
  return (x = x + 1);
}
y = add(x);
console.log(y)
function add(x){
  return (x = x + 3);
}
z = add(x);
console.log(z)

/*
* 预编译阶段 ：
AO:{
  x=undefined,
  y=undefined,
  z=undefined,
  function add(x){
    return (x = x + 3);
  }
} 

执行23行之后：
AO:{
  x=1,
  y=0,
  z=0,
  function add(x){
    return (x = x + 3);
  }
} 

执行29行之后：
y = 4，所以30行输出 4

执行34行之后：
z= 4, 所以35行输出 4
*/

```

```js
// 2. 写出输出值，并解释为什么
this.a = 20;
function go(){
  console.log(this.a);
  this.a = 30;
}
go.prototype.a = 40;
var test = {
  a: 50,
  init: function(fn){
    fn();
    console.log(this.a);
    return fn;
  }
}
console.log((new go()).a);//40 30
test.init(go);// 20 50
var p = test.init(go);//30 50
p();//30

/*
* 


*/

var num = 1;
function yideng(){
  "use strict";
  console.log(this.num++);
}
function yideng2(){
  console.log(++this.num);
}
(function(){
  "use strict";
  yideng2();//2
})();
yideng();//Cannot read property 'num' of undefined


function c1(name){
  if(name) this.name = name;
}

function c2(name){
  this.name = name;
}

function c3(name){
  this.name = name||'fe';
}
c1.prototype.name = "yideng";
c2.prototype.name = "lao";
c3.prototype.name = "yuan";
console.log((new c1().name) + (new c2().name) + (new c3().name));//yidengundefinedfe
```

```js
// 3.请写出如下点击li的输出值，并用三种办法正确输出li里的数字。
<ul>
  <li>1</li>
  <li>2</li>
  <li>3</li>
  <li>4</li>
  <li>5</li>
  <li>6</li>
</ul>
// <script type="text/javascript">
var list_li = document.getElementsByTagName("li");
for (var i = 0; i < list_li.length; i++) {
  list_li[i].onclick = function() {
    console.log(i);
  }
}
// </script>
```

```js
// 4. 写出输出值，并解释为什么
function test(m){
  m = {v:5}
}
var m = {k:30};

test(m);
alert(m.v);//undefined

```

```js
// 5. 写出输出值，并解释为什么
function yideng(){
  console.log(1);
}
(function(){
  if(false){
    function yideng(){
      console.log(2);
    }
  }
  yideng();
})();//yideng is not a function
```

```js
// 6.请用一句话算出0-100之间学生的学生等级，如90-100输出为1等生、80-90为2等 生以此类推。
// 不允许使用if switch等。 

```
```js
// 7.请用一句话遍历变量a。(禁止用for 已知var a = “abc”)
 
```

```js
// 8.请在下面写出JavaScript面向对象编程的混合式继承。并写出ES6版本的继承。
// 要求:汽车是父类，Cruze是子类。父类有颜色、价格属性，有售卖的方法。
// Cruze子 类实现父类颜色是红色，价格是140000,售卖方法实现输出如下语句:
// 将 红色的 Cruze买给了小王价格是14万。
 
```

```js
//  9.请你写出如何利用EcmaScript6/7(小Demo)优化多步异步嵌套的代码?

```

```js
// 10.考考你的基础怎么样?
var regex = /yideng/g;
console.log(regex.test('yideng')); //true
console.log(regex.test('yideng')); //false
console.log(regex.test('yideng')); //true
console.log(regex.test('yideng')); //false
```

```js
// 11.继续考考你的基础怎么样?
var yideng = function yideng(){
  yideng = 1;
  console.log(typeof yideng);
}
yideng();// function
yideng = 1;
console.log(typeof yideng); // number
```

```js
// 12.【仔细思考】写出如下代码执行结果，并解释为什么。
var length = 10;
function fn() { 
  console.log(this.length);
}
var yideng = {
  length: 5,
  method: function(fn) {
    fn();
    arguments[0](); 
    console.log(arguments)
  }
};
yideng.method(fn, 1);//10 2
```
