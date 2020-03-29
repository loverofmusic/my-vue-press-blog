---
title: 跨域
date: 2017-12-02
sidebarDepth: 0
tags:
- 跨域
- 同源策略
categories:
- 浏览器
isShowComments: true
---


> 源于浏览器的`同源策略`，是`浏览器`为了安全不允许跨域

:::tip 同源策略
协议 域名 端口号 有一个不同就是不同源 就跨域了
:::

### 几种解决方案？9!

`jsonp` `http-proxy` `nginx` `CORS` `postMessage` `document.domain` `window.name` `location.hash` `websocket`

### jsonp
  - 原理？
  > script img link iframe这类标签...不存在跨域请求的限制<br>

  <u>*动态* 生成 *script* 标签，*src* 属性获取请求数据</u>（为啥动态？因为不知道你要调哪个接口，又不可能写死；为啥想到src属性？因为src属性浏览器不拦截）
    
  - 缺点？1. 上面的原理可以看出它<u>只支持 *get* 请求</u>，不支持 *post* 请求和其他 (那么多接口要提交数据，所以。。。有些第三方平台接口会支持该方式，如天气数据平台等) 2. 不安全， *XSS跨站请求脚本攻击哇，把script标签注入多危险！*
  - 具体怎么实现？ <a href="#jsonp-detail">看代码去</a>


### 中间服务器代理（反向代理）
> 前端部署地址：127.0.0.1:8000，中间服务器地址：127.0.0.1:8000，目标服务器地址：127.0.0.1:8888<br>
> 浏览器和中间服务器同源，浏览器请求中间服务器，让中间服务器去请求目标服务器，服务器之间没有跨域问题
  - Webpack的devServer的proxy配置项，就是通过中间件 *http-proxy* 产生一个虚拟服务器
  - *nginx* 反向代理

### websocket

### CORS (跨域资源共享)
  - 服务器端设置响应头，来配置允许跨域的源，还可以设置是不是允许携带Cookie
> res.header('Access-Control-Allow-Origin', '*')<br>
> res.header("access-cross-allow-origin", "http://....") 

::: danger
这个源写*，就不能携带Cookie
:::

::: warning
 以下都是基于iframe
:::

### postMessage

<a href="#post-message">看代码去</a>

### document.domain

### window.name

### location.hash




---
#### <a name="jsonp-detail">jsonp-具体实现</a>

> h5和ios通信，除了JSBridge，还有一种伪URL方式，我们在h5里面通过location.href 发一个伪URL协议，同时把我们H5里面的js通过callback方式传过去，IOS拦截到这个请求，通过解析这个协议发现是商量好的，会把我们穿过去的函数给执行

> 过程： 
::: tip
- 先在客户端创建一个script标签，然后设置它的src属性等于 服务端提供的接口地址 并且接口地址后面加上请求参数的形式?callback=func 
- 这个func是客户端定义的一个全局函数，这个函数将作为回调函数传给服务端 
- 服务端接收客户端请求，callback=func 
    - 1.准备数据 data={...}
    - 2.给客户端返回一个类似于执行这个func函数的一个字符串数据
- 浏览器接收到这个字符串，会将其作为js表达式执行
:::

> 对照着原理图来写吧

![jsonp](/my-vue-press-blog/img/interview/cross-domain-jsonp.jpeg)

```html
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Document</title>
      <!--第一种方式采用jQuery封装好的方法发送请求-->
      <script src="https://cdn.bootcss.com/jquery/3.4.1/jquery.js"></script>
    </head>
    <body>
      <script src="./client.js"></script>
    </body>
  </html>
```

```js
//client.js

//第一种方式采用jQuery封装好的方法发送请求
$.ajax({
  url: 'http://127.0.0.1:8001/say',
  method: 'get',
  dataType: 'jsonp',
  success: res => {
    console.log(res);
  }
});

//第二种方式采用自己封装好的方法发送请求
function jsonp({ url, params, callback }) {
  return new Promise((resolve, reject) => {
    window[callback] = function(data) {
      resolve(data);
      document.body.removeChild(script);
    };
    params = { ...params, callback }; //wd=b&callback=show
    let arrs = [];
    for (let key in params) {
      arrs.push(`${key}=${params[key]}`);
    }

    let script = document.createElement("script");
    script.src = `${url}?${arrs.join("&")}`;
    document.body.appendChild(script);
  });
}
jsonp({
  url: "http://127.0.0.1:8001/say?wd=我爱你",
  params: { wd: "我爱你" },
  callback: "show"
}).then(data => {
  console.log(data);
});
```

```js
//server.js

const Koa = require("koa");
var app = new Koa();//实例化
var router = require("koa-router")(); /*引入是实例化路由** 推荐*/

router.get("/say", ctx => {
  let { callback, wd } = ctx.query;
  let data = {
    code: 0,
    message: `收到${wd}，我也爱你！`
  };
  ctx.body = `${callback}(${JSON.stringify(data)})`;
});

app.use(router.routes()); /*启动路由*/

app.listen(8001, _ => {
  console.log("server is running at 8001!");
});

```

---
#### <a name="post-message">postMessage-具体实现</a>

```html
<!-- a.html -->
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>a.html</title>
  </head>
  <body>
    a.html
    <iframe src="http://localhost:4000/b.html" 
    frameborder="0" 
    id="frame" onload="load()"></iframe>
    <script>
      function load() {
        let frame = document.getElementById("frame");
        frame.contentWindow.postMessage("我爱你", "http://localhost:4000");
      }
      window.onmessage = function(e) {
        console.log(e.data);
      };
    </script>
  </body>
</html>

```

```js
//a.js
const Koa = require("koa");
var app = new Koa(); //实例化

const KoaStatic = require("koa-static");
app.use(KoaStatic("./"));

app.listen(3000);
```

```html
<!-- b.html -->
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>b.html</title>
  </head>
  <body>
    b.html
    <script>
      window.onmessage = function(e) {
        console.log(e.data);
        e.source.postMessage("我不爱你", e.origin);
      };
    </script>
  </body>
</html>

```

```js
// b.js
const Koa = require("koa");
var app = new Koa(); //实例化

const KoaStatic = require("koa-static");
app.use(KoaStatic("./"));

app.listen(4000);

```




