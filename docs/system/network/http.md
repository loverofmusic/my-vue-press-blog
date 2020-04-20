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


![http协议](/my-vue-press-blog/img/interview/http_what.jpeg)

+ 定义如何通信（如何收发、如何容错），位于 <a href="#tcp-ip">TCP/IP</a> 四层模型的应用层
+ 通过`请求`&`响应`的方式，在客户端和服务端之间进行通信
+ 请求是 `无状态` 的，如果需要维持住登录的状态，需要借助 cookie session（而websocket是有状态的，可以知道是否还活着。。。）
+ 是以 `明文` 的方式传输，不做任何加密，不安全

### 模型
![模型](/my-vue-press-blog/img/interview/http_model.jpeg) 

### 请求响应全景
![请求响应](/my-vue-press-blog/img/interview/http_req.jpeg)


#### 从输入URL开始，到渲染成页面 中间发生了什么？
  + [DNS解析](https://www.cnblogs.com/confach/p/10050013.html)
  + [TCP连接](https://www.cnblogs.com/confach/p/10050420.html)
  + [HTTP/HTTPS请求和响应](https://www.cnblogs.com/confach/p/10050437.html)

> 透明设备: 
  + 防火墙
      - Linux(内核)防火墙：CenOS5之前=>iptables（可以做防火墙，还可以限流=>ts模块），CenOS6以后=>firewall
      - 软件防火墙：SELinux
  + 网关
  + 代理服务器



### <a name="post-message">TCP/IP</a>
![模型](/my-vue-press-blog/img/interview/tcp-ip.jpeg) 

#### TCP/IP之下的底层详细教程
[从一条电线到TCP/IP](https://www.bilibili.com/video/BV197411t7sv?from=search&seid=16397899657681909554)

![位置](/my-vue-press-blog/img/interview/http_loc.jpg) 

### 常用的请求报头
+ Accept请求报头域用于指定客户端接受哪些类型的信息。eg:Accept:image/gif，Accept:text/ 
+ htmlAccept-Charset请求报头域用于指定客户端接受的字符集。
+ Accept-Encoding:Accept-Encoding请求报 头域类似于Accept，但是它是用于指定可接受的内容编码。
+ Accept-Language请求报头域类似于Accept，但是它是用于指定一种自然语言。
+ Authorization请求报头域主要用于证明客户端有权查看某个资源。当浏览器访问一个页面时，如果收到服务器的响应代码为401(未授权)，可以发送一个包含Authorization请求报头域的请求，要求服务器对其进行验证。
+ Host请求报头域主要用于指定被请求资源的Internet主机和端口号，它通常从HTTP URL中提取出来的，发送请求时，该报头域是必需的。
+ User-Agent请求报头域允许客户端将它的操作系统、浏览器和其它属性告诉服务器。

### 常用的响应报头
+ Location响应报头域用于重定向接受者到一个新的位置。Location响应报头域常用在更换域名的时候。
+ Server响应报头域包含了服务器用来处理请求的软件信息。与User-Agent请求报头域是相对应的。
+ WWW-Authenticate响应报头域必须被包含在401(未授权的)响应消息中，客户端收到401响应消息时候，并发送
+ Authorization报头域请求服务器对其进行验证时，服务端响应报头就包含该报头域。

### 常用的实体报头
+ Content-Encoding实体报头域被用作媒体类型的修饰符，它的值指示了已经被应用到实体正文的附加内容的编码，因而要获得Content-Type报头域中所引用的媒体类型，必须采用相应的解码机制。
+ Content-Language实体报头域描述了资源所用的自然语言。 
+ Content-Length实体报头域用于指明实体正文的长度，以字节方式存储的十进制数字来表示。 
+ Content-Type实体报头域用语指明发送给接收者的实体正文的媒体类型。 
+ Last-Modified实体报头域用于指示资源的最后修改日期和时间。 
+ Expires实体报头域给出响应过期的日期和时间。

### 状态码
![状态码](/my-vue-press-blog/img/interview/http_status.jpg) 


#### 常见状态码
  + 2xx：
      - 200：请求已经`成功`，返回响应头响应体
      - 202：已接受请求，但未处理完成
      - 206：客户端只想请求部分资源的时候，服务器成功处理了部分get请求（`断点续传`）

  + 3xx：
      - 301：`永久`移动，请求的资源被永久移动到新uri，比如域名换了
      - 302：`临时`，跳转，比如登录
      - 303：由于请求对应的资源存在着另一个URI，应使用`GET方法`定向获取请求的资源 (303和302状态码有着相同的功能，但是303明确表示客户端应当采用get方法获取资源，这点与302状态码有区别)
      - 304：（not modified）告诉客户端还是用`缓存`吧

  + 4xx：
      - 400：（bad request）客户端请求的`语法错误`，服务器无法理解
      - 401：（unauthorized）该请求要求用户的`身份认证`
      - 403：（forbidden）服务器理解客户端的请求，但是`拒绝`执行此请求
      - 404：（not found）服务器 根据客户端请求 `无法找到`请求的资源
      - 405： Method Not Allowed 表明服务器`禁止`了使用`当前` HTTP `方法`的请求
      <!-- - 406：（non acceptable）浏览器可以接受的返回类型，服务器无法返回 -->
      - 409： conflict `冲突`，已占用，新建用户，用户名已占用
  + 5xx：
      - 500：（internal server error）`服务器内部错误`，无法完成请求
      - 502：（bad gateway）充当`网关或者代理的服务器`出错（可能是真正干活的服务器`宕机`了，也可能node没接住后端服务器错误）




### 请求方法
+ GET: 请求获取Request-URI所标识的资源
+ POST: 在Request-URI所标识的资源后附加新的数据
+ PUT: 请求服务器存储一个资源，并用Request-URI作为其标识 
+ DELETE: 请求服务器删除Request-URI所标识的资源
+ HEAD: 请求获取由Request-URI所标识的资源的响应消息报头
+ TRACE: 请求服务器回送收到的请求信息，主要用于测试或诊断 
+ CONNECT:HTTP/1.1协议中预留给能够将连接改为管道方式的代理服务器。 
+ OPTIONS: 请求查询服务器的性能，或者查询与资源相关的选项和需求

#### GET POST区别
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


### cookies与session
+ Cookies是保存在客户端的小段文本，随客户端每一个请求发送该url下的所有cookies到服务器端。
+ Session则保存在服务器端，通过唯一的值sessionID来区别每一个用户。
    - SessionID随每个连接请求发送到服务器，服务器根据sessionID来识别客户端，再通过session的key获取session值。

![cookie](/my-vue-press-blog/img/interview/http_cookie.jpg)

![session](/my-vue-press-blog/img/interview/http_session.jpg)



