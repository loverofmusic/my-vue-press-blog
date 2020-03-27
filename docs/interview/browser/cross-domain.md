---
title: 跨域
date: 2017-12-02
sidebarDepth: 0
tags:
- 跨域
- 同源策略
categories:
- 浏览器
isShowComments: false
---


> 源于浏览器的`同源策略`，是`浏览器`为了安全不允许跨域

:::tip 同源策略
协议 域名 端口号 有一个不同就是不同源 就跨域了
:::

### 几种解决方案？9!

`jsonp` `http-proxy` `nginx` `CORS` `postMessage` `document.domain` `window.name` `location.hash` `websocket`

**jsonp**
  - 原理？<u>*动态* 生成 *script* 标签，*src* 属性获取请求数据</u>（为啥动态？因为不知道你要调哪个接口，又不可能写死；为啥想到src属性？因为src属性浏览器不拦截）
  - 缺点？<u>只支持 *get* 请求</u>，不支持 *post* 请求和其他 (那么多接口要提交数据，所以。。。有些第三方平台接口会支持该方式，如天气数据平台等)

**中间服务器代理（反向代理）**
> 前端部署地址：127.0.0.1:8000，中间服务器地址：127.0.0.1:8000，目标服务器地址：127.0.0.1:8888<br>
> 浏览器和中间服务器同源，浏览器请求中间服务器，让中间服务器去请求目标服务器，服务器之间没有跨域问题
  - Webpack的devServer的proxy配置项，就是通过中间件 *http-proxy* 产生一个虚拟服务器
  - *nginx* 反向代理

**CORS (跨域资源共享)**
  - 服务器设置请求头
> 例如：res.header('Access-Control-Allow-Origin', '*')

**postMessage**

**document.domain**

**window.name**

**location.hash**

**websocket**






