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

### 先来一份JavaScript基础测试
----

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
    fn(); //window调用fn =>10
    arguments[0](); //arguments类数组‘对象’调的fn，this指的是arguments =>2
    // console.log(arguments)
  }
};
yideng.method(fn, 1);//10 2
```

### 再来一份
-------

```js
var a = 10;
function test(){
    a = 100;
    console.log(a);
    console.log(this.a)
    var a; //这个a是var定义的，会被提升到test函数的最开始（let定义的变量不会被提升）
    console.log(a);
}
test();
// 考察点：作用域 this 变量提升
```

```js
(function(){
    var a=b=3;//这个b没有var，所以会挂到全局window上；a是函数作用域里面的，外面拿不到，会报错
})()
console.log(a);
console.log(b);
// 考察点：自执行 作用域 预解析（b在非严格模式下）
```

```js
for(var i = 1; i <= 3; i++){
    setTimeout(function(){
        console.log(i)
    }, 0)
}
// 考察点： 单线程  异步 等待队列 事件循环
//主线程for----异步setTimeout--放等待队列----
//继续执行for----一共要放3次----
//for执行完--i=4----从等待队列中拿出执行
```

```js
for(let i = 1; i <= 3; i++){
    setTimeout(function(){
        console.log(i)
    }, 0)
}
// 考察点：作用域----函数作用域 全局作用域 块级作用域
// let 有块级作用域，可以将三次i隔离开来，var没有，只能共用一个i，后面的i会将之前的i改掉
```

```js
function fun(n){
    // 变量提升 var n = undefined; n=n;
    console.log(n); //123
    var n = 456; //修改n
    console.log(n); //456
}
var n = 123;
fun(n);
//考察点：作用域 变量提升 参数
```

```js
function fun(){
    // 变量提升 var n = undefined; 
    console.log(n); //undefined
    var n = 456; //修改n
    console.log(n);//456
}
var n = 123;
fun(n);
//考察点：作用域 变量提升
```

```js
function fun(){
    // n会找到全局的n 123
    console.log(n); //123
    n = 456; 
    console.log(n); //456
}
var n = 123;
fun(n);
//考察点：作用域
```

```js
function fun(){
    // 全局的n会先提升 值为undefined；
    console.log(n); //值为undefined
    n = 456; 
    console.log(n); //456
}
fun(n);
var n = 123;
//考察点：作用域 变量提升
```

```js
function fun(){
    // 这里 函数名 和 变量名 相同，
    //它们都有变量提升，并且函数提升 优先级高于 变量提升，
    console.log(fun); //值为函数
    fun = 456; 
    console.log(fun); //456
}
fun();
var fun = 123;
//考察点：作用域 变量提升
```

```js
var fun = 123;
function fun(){
    console.log(fun); 
    fun = 456; 
    console.log(fun); 
}
fun(); 
// fun is not a function
//考察点：作用域 变量提升

// 预解析里面 函数 优先级高于 var
// var fun = undefined;
// function fun = function;
// 就相当于 ：
var fun = undefined;
function fun(){
    console.log(fun); 
    fun = 456; 
    console.log(fun); 
}
fun = 123;
fun();// fun is not a function

```


```js
var n = 123;
function f1(){
    console.log(n);
}
function f2(){
    var n = 456;
    f1();//f1 在 f2 中执行 作用域 无调者 f1 作用域是window
}
f2(); //无调者 window
console.log(n);
// 考察点：预解析 作用域
```

```js
function test(){
    console.log(arguments)
}
test(1,2,3,a,b,c)

//arguments--js内置对象 参数数组 对象 只有函数中有该对象
var length = 100;
function f1(){
    console.log(this.length);//this会变
}
var obj = {
    x = 10,
    f2: function(f1){
        console.log(this) // this == obj
        f1(); // 无调用者 this == window 100
        arguments[0](); //arguments[0]==f1 无调用者 作用域arguments对象 所以是参数数组长度 为 2
    }
}
obj.f2(f1, 1);
// 考察点：预解析 作用域 arguments
```

```js
function f(){
    console.log(this.a);
}
var obj = {
    a: 2,
    f: f
}
var f2 = obj.f;
var a = 'hello';
f2(); //无调用者 this == window
obj.f(); // 调用者obj
//考察点：预解析 字面量 作用域
```

```js
//apply执行一个函数
var o = {name: 'abc'}
function test (){
    console.log(this.name)
}
test();
test.apply(o);

var o = {name: 'abc'}
function test (a, b){
    console.log(this.name, a, b)
}
test();
test.apply(o, [1,2]);

var o = {name: 'abc'}
function test (a, b){
    console.log(this.name, a, b)
}
test();
test.call(o, 1, 2);



// apply call
function f(s){
    console.log(this.a, s)
    return this.a + s;
}
var obj = {
    a: 2
}
var f2 = function () {
    console.log(arguments)
    <!--return f.apply(obj, arguments);-->
    return f.call(obj, ...arguments);
}
var b = f2(3);
console.log(b);
//考察点：预解析 字面量 apply arguments 作用域
// 2 3
// 5
```

```js
function b(){
    console.log(a);//
    var a = 10;
    function a(){};
    a = 100;
    console.log(a);//
}
b();
//fn
//100
//考察点：预解析var fun
```

```js
(function d(num){
    console.log(num);
    var num = 10;
}(100));
//or
(function d(num){
    console.log(num);
    var num = 10;
})(100);
// 考察点：自执行函数（自动执行， 无调用者）
// 100
```

```js
(function e(num){
    console.log(num);//fn
    var num = 10;
    function num (){}
})(100)
// 考察点：自执行函数（自动执行， 无调用者）
//预解析 函数优先级最高
```

```js
function m(){
    console.log(a1);//undefined
    console.log(a2);//undefined
    console.log(b1);//undefined
    console.log(b2);//undefined
    if (false){
        function b1(){};
        var a1 = 100;
    }
    if (true){
        function b2(){};
        var a2 = 10;
    }
    console.log(a1);//undefined
    console.log(a2);//10
    console.log(b1);//undefined
    console.log(b2);//fn
}
m()

function x(){
    console.log(n)
    console.log(b1)
    if (false){
        function b1(){console.log(9)};
        var n;
    }
}
x()
// 考察点：
```

```js
(function f(num){
    console.log(num);//fn
    function num(){};
    var num = 10;
    console.log(num);//10
})(100)
// or
(function f(num){
    function num(){};
    console.log(num);//fn
    var num = 10;
    console.log(num);//10
})(100)
// or
(function f(num){
    console.log(num);//fn
    var num = 10;
    function num(){};
    console.log(num);//10
})(100)
// or
(function f(num){
    console.log(num);//fn
    var num = 10;
    console.log(num);//10
    function num(){};
})(100)
// or
(function f(num){
    console.log(num);//fn
    num = 10;//改变函数值 为 数字
    console.log(num);//10
    function num(){};
})(100)
// 考察点：代码解释器会优化代码顺序
```

```js
function n(){
    if(2>1){
        arr = 10; // let没有预解析，等于直接给一个不存在的变量赋值，报错，下面就不执行了
        brr = 10;
        let arr;
        var brr;
        console.log(arr);
        console.log(brr);
    }
}
```

```js
var R = (function(){
    var u = {a: 1, b: 2}
    var r = {
        fn: function (k){ // k=='a'
            return u[k]; // u['a'],（函数返回一个函数）闭包，所以依然能拿到外面的u对象  
        }
    }
    return r;
})();
console.log(R.fn('a'));// 1
// 考察点：自执行 闭包
```


