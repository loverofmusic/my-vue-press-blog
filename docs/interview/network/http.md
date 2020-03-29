---
title: HTTP
date: 2018-03-02
sidebarDepth: 0
tags:
- HTTP
categories:
- 网络
isShowComments: true
---

#### 介绍下
  
  > 超文本传输协议 位于 TCP/IP 四层模型的 应用层<br>
  > 通过请求响应的方式 在客户端和服务端之间进行通信<br>
  > 是以 `明文` 的方式传输，不做任何加密，不安全<br>
  > 请求是 `无状态` 的<br>

#### TCP/IP 四层模型
  - 应用层：HTTP，DNS。。
  - 传输层：TCP，UDP
  - 网络层：IP
  - 数据链路层：网络

#### TCP三次握手 四次挥手 过程 WHY 3/4



### 请求报文中常用的 请求头 请求体 响应头 响应体 字段
  Access-Control-Allow-Origin: *
  cache-control: no-cache
  Content-Security-Policy: script-src 'self'; object-src 'self';
  Content-Type: text/javascript
  ETag: "OU6/BvKP9r8q/r5+nHrpxMLhU2s="


### 从输入URL开始，到渲染成页面 中间发生了什么？
  DNS解析:
  https://www.cnblogs.com/confach/p/10050013.html
  TCP连接:
  https://www.cnblogs.com/confach/p/10050420.html
  HTTP/HTTPS请求和响应：
  https://www.cnblogs.com/confach/p/10050437.html

## 常见状态码

> 一共三位数，以第一位数作为分类

  - 1xx：表示消息。请求被接受，需继续处理
  + 2xx：表示成功。
      - 200：请求已经成功，返回响应头响应体
      - 202：已接受请求，但未处理完成（）
      - 206：客户端只想请求部分资源的时候，服务器成功处理了部分get请求（断点续传）

  + 3xx：表示重定向（地址a跳到地址b）。需要客户端采取进一步操作才能完成请求，后续的请求地址, 重定向目标）在本次响应的location域中指明
      - 301：永久移动，请求的资源被永久移动到新uri，比如域名换了
      - 302：临时，跳转，比如登录
      - 303：由于请求对应的资源存在着另一个URI，应使用GET方法定向获取请求的资源，=，
         303和302状态码有着相同的功能，但是303明确表示客户端应当采用get方法获取资源，
        这点与302状态码有区别。
      - 304：（not modified）告诉客户端还是用缓存吧

  + 4xx：表示客户端请求错误
      - 400：（bad request）客户端请求的语法错误，服务器无法理解
      - 401：（unauthorized）该请求要求用户的身份认证
      - 403：（forbidden）服务器理解客户端的请求，但是拒绝执行此请求
      - 404：（not found）服务器 根据客户端请求 无法找到请求的资源
      - 405： Method Not Allowed 表明服务器禁止了使用当前 HTTP 方法的请求
      - 406：（non acceptable）浏览器可以接受的返回类型，服务器无法返回
      - 409： conflict 冲突，已占用，新建用户，用户名已占用
  + 5xx：表示服务器端错误
      - 500：（internal server error）服务器内部错误，无法完成请求
      - 502：（bad gateway）充当网关或者代理的服务器，从远端服务器接收到了一个无效的请求



## GET POST区别
- 1. GET请求在URL中传送的 `参数长度` 是有限制的，而POST木有
- 2. GET `参数` 通过URL `传递`，POST放在（Request body）中，GET比POST更不安全，所以不能用来传递敏感信息
- 3. 对 `参数数据类型`，GET只接受（ASCII字符），而POST没有限制。
- 4. GET请求只能进行 `url编码`，而POST支持多种编码方式。
- 5. GET请求会被浏览器主动 `cache`，而POST不会，除非手动设置。
- 6. GET在 `浏览器回退` 时是无害的，而POST会再次提交请求。
- 7. GET请求参数会被完整保留在浏览器 `历史记录` 里，而POST中的参数不会被保留。
- 8. GET产生的URL地址可以被Bookmark，而POST不可以。

> 然鹅...可以看下下面这篇，有惊喜：

[99%的人都理解错了HTTP中GET与POST的区别](https://zhuanlan.zhihu.com/p/22536382)



