(window.webpackJsonp=window.webpackJsonp||[]).push([[97],{469:function(t,v,_){"use strict";_.r(v);var e=_(5),i=Object(e.a)({},(function(){var t=this,v=t.$createElement,_=t._self._c||v;return _("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[_("p",[_("img",{attrs:{src:"/my-vue-press-blog/img/interview/http_what.jpeg",alt:"http协议"}})]),t._v(" "),_("ul",[_("li",[t._v("定义如何通信（如何收发、如何容错），位于 "),_("a",{attrs:{href:"#tcp-ip"}},[t._v("TCP/IP")]),t._v(" 四层模型的应用层")]),t._v(" "),_("li",[t._v("通过"),_("code",[t._v("请求")]),t._v("&"),_("code",[t._v("响应")]),t._v("的方式，在客户端和服务端之间进行通信")]),t._v(" "),_("li",[t._v("请求是 "),_("code",[t._v("无状态")]),t._v(" 的，如果需要维持住登录的状态，需要借助 cookie session（而websocket是有状态的，可以知道是否还活着。。。）")]),t._v(" "),_("li",[t._v("是以 "),_("code",[t._v("明文")]),t._v(" 的方式传输，不做任何加密，不安全")])]),t._v(" "),_("h3",{attrs:{id:"模型"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#模型"}},[t._v("#")]),t._v(" 模型")]),t._v(" "),_("p",[_("img",{attrs:{src:"/my-vue-press-blog/img/interview/http_model.jpeg",alt:"模型"}})]),t._v(" "),_("h3",{attrs:{id:"请求响应全景"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#请求响应全景"}},[t._v("#")]),t._v(" 请求响应全景")]),t._v(" "),_("p",[_("img",{attrs:{src:"/my-vue-press-blog/img/interview/http_req.jpeg",alt:"请求响应"}})]),t._v(" "),_("h4",{attrs:{id:"从输入url开始，到渲染成页面-中间发生了什么？"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#从输入url开始，到渲染成页面-中间发生了什么？"}},[t._v("#")]),t._v(" 从输入URL开始，到渲染成页面 中间发生了什么？")]),t._v(" "),_("ul",[_("li",[_("a",{attrs:{href:"https://www.cnblogs.com/confach/p/10050013.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("DNS解析"),_("OutboundLink")],1)]),t._v(" "),_("li",[_("a",{attrs:{href:"https://www.cnblogs.com/confach/p/10050420.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("TCP连接"),_("OutboundLink")],1)]),t._v(" "),_("li",[_("a",{attrs:{href:"https://www.cnblogs.com/confach/p/10050437.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("HTTP/HTTPS请求和响应"),_("OutboundLink")],1)])]),t._v(" "),_("blockquote",[_("p",[t._v("透明设备:")])]),t._v(" "),_("ul",[_("li",[t._v("防火墙\n"),_("ul",[_("li",[t._v("Linux(内核)防火墙：CenOS5之前=>iptables（可以做防火墙，还可以限流=>ts模块），CenOS6以后=>firewall")]),t._v(" "),_("li",[t._v("软件防火墙：SELinux")])])]),t._v(" "),_("li",[t._v("网关")]),t._v(" "),_("li",[t._v("代理服务器")])]),t._v(" "),_("h3",{attrs:{id:"tcp-ip"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#tcp-ip"}},[t._v("#")]),t._v(" "),_("a",{attrs:{name:"post-message"}},[t._v("TCP/IP")])]),t._v(" "),_("p",[_("img",{attrs:{src:"/my-vue-press-blog/img/interview/tcp-ip.jpeg",alt:"模型"}})]),t._v(" "),_("h4",{attrs:{id:"tcp-ip之下的底层详细教程"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#tcp-ip之下的底层详细教程"}},[t._v("#")]),t._v(" TCP/IP之下的底层详细教程")]),t._v(" "),_("p",[_("a",{attrs:{href:"https://www.bilibili.com/video/BV197411t7sv?from=search&seid=16397899657681909554",target:"_blank",rel:"noopener noreferrer"}},[t._v("从一条电线到TCP/IP"),_("OutboundLink")],1)]),t._v(" "),_("p",[_("img",{attrs:{src:"/my-vue-press-blog/img/interview/http_loc.jpg",alt:"位置"}})]),t._v(" "),_("h3",{attrs:{id:"常用的请求报头"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#常用的请求报头"}},[t._v("#")]),t._v(" 常用的请求报头")]),t._v(" "),_("ul",[_("li",[t._v("Accept请求报头域用于指定客户端接受哪些类型的信息。eg:Accept:image/gif，Accept:text/")]),t._v(" "),_("li",[t._v("htmlAccept-Charset请求报头域用于指定客户端接受的字符集。")]),t._v(" "),_("li",[t._v("Accept-Encoding:Accept-Encoding请求报 头域类似于Accept，但是它是用于指定可接受的内容编码。")]),t._v(" "),_("li",[t._v("Accept-Language请求报头域类似于Accept，但是它是用于指定一种自然语言。")]),t._v(" "),_("li",[t._v("Authorization请求报头域主要用于证明客户端有权查看某个资源。当浏览器访问一个页面时，如果收到服务器的响应代码为401(未授权)，可以发送一个包含Authorization请求报头域的请求，要求服务器对其进行验证。")]),t._v(" "),_("li",[t._v("Host请求报头域主要用于指定被请求资源的Internet主机和端口号，它通常从HTTP URL中提取出来的，发送请求时，该报头域是必需的。")]),t._v(" "),_("li",[t._v("User-Agent请求报头域允许客户端将它的操作系统、浏览器和其它属性告诉服务器。")])]),t._v(" "),_("h3",{attrs:{id:"常用的响应报头"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#常用的响应报头"}},[t._v("#")]),t._v(" 常用的响应报头")]),t._v(" "),_("ul",[_("li",[t._v("Location响应报头域用于重定向接受者到一个新的位置。Location响应报头域常用在更换域名的时候。")]),t._v(" "),_("li",[t._v("Server响应报头域包含了服务器用来处理请求的软件信息。与User-Agent请求报头域是相对应的。")]),t._v(" "),_("li",[t._v("WWW-Authenticate响应报头域必须被包含在401(未授权的)响应消息中，客户端收到401响应消息时候，并发送")]),t._v(" "),_("li",[t._v("Authorization报头域请求服务器对其进行验证时，服务端响应报头就包含该报头域。")])]),t._v(" "),_("h3",{attrs:{id:"常用的实体报头"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#常用的实体报头"}},[t._v("#")]),t._v(" 常用的实体报头")]),t._v(" "),_("ul",[_("li",[t._v("Content-Encoding实体报头域被用作媒体类型的修饰符，它的值指示了已经被应用到实体正文的附加内容的编码，因而要获得Content-Type报头域中所引用的媒体类型，必须采用相应的解码机制。")]),t._v(" "),_("li",[t._v("Content-Language实体报头域描述了资源所用的自然语言。")]),t._v(" "),_("li",[t._v("Content-Length实体报头域用于指明实体正文的长度，以字节方式存储的十进制数字来表示。")]),t._v(" "),_("li",[t._v("Content-Type实体报头域用语指明发送给接收者的实体正文的媒体类型。")]),t._v(" "),_("li",[t._v("Last-Modified实体报头域用于指示资源的最后修改日期和时间。")]),t._v(" "),_("li",[t._v("Expires实体报头域给出响应过期的日期和时间。")])]),t._v(" "),_("h3",{attrs:{id:"状态码"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#状态码"}},[t._v("#")]),t._v(" 状态码")]),t._v(" "),_("p",[_("img",{attrs:{src:"/my-vue-press-blog/img/interview/http_status.jpg",alt:"状态码"}})]),t._v(" "),_("h4",{attrs:{id:"常见状态码"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#常见状态码"}},[t._v("#")]),t._v(" 常见状态码")]),t._v(" "),_("ul",[_("li",[_("p",[t._v("2xx：")]),t._v(" "),_("ul",[_("li",[t._v("200：请求已经"),_("code",[t._v("成功")]),t._v("，返回响应头响应体")]),t._v(" "),_("li",[t._v("202：已接受请求，但未处理完成")]),t._v(" "),_("li",[t._v("206：客户端只想请求部分资源的时候，服务器成功处理了部分get请求（"),_("code",[t._v("断点续传")]),t._v("）")])])]),t._v(" "),_("li",[_("p",[t._v("3xx：")]),t._v(" "),_("ul",[_("li",[t._v("301："),_("code",[t._v("永久")]),t._v("移动，请求的资源被永久移动到新uri，比如域名换了")]),t._v(" "),_("li",[t._v("302："),_("code",[t._v("临时")]),t._v("，跳转，比如登录")]),t._v(" "),_("li",[t._v("303：由于请求对应的资源存在着另一个URI，应使用"),_("code",[t._v("GET方法")]),t._v("定向获取请求的资源 (303和302状态码有着相同的功能，但是303明确表示客户端应当采用get方法获取资源，这点与302状态码有区别)")]),t._v(" "),_("li",[t._v("304：（not modified）告诉客户端还是用"),_("code",[t._v("缓存")]),t._v("吧")])])]),t._v(" "),_("li",[_("p",[t._v("4xx：")]),t._v(" "),_("ul",[_("li",[t._v("400：（bad request）客户端请求的"),_("code",[t._v("语法错误")]),t._v("，服务器无法理解")]),t._v(" "),_("li",[t._v("401：（unauthorized）该请求要求用户的"),_("code",[t._v("身份认证")])]),t._v(" "),_("li",[t._v("403：（forbidden）服务器理解客户端的请求，但是"),_("code",[t._v("拒绝")]),t._v("执行此请求")]),t._v(" "),_("li",[t._v("404：（not found）服务器 根据客户端请求 "),_("code",[t._v("无法找到")]),t._v("请求的资源")]),t._v(" "),_("li",[t._v("405： Method Not Allowed 表明服务器"),_("code",[t._v("禁止")]),t._v("了使用"),_("code",[t._v("当前")]),t._v(" HTTP "),_("code",[t._v("方法")]),t._v("的请求\n")]),t._v(" "),_("li",[t._v("409： conflict "),_("code",[t._v("冲突")]),t._v("，已占用，新建用户，用户名已占用")])])]),t._v(" "),_("li",[_("p",[t._v("5xx：")]),t._v(" "),_("ul",[_("li",[t._v("500：（internal server error）"),_("code",[t._v("服务器内部错误")]),t._v("，无法完成请求")]),t._v(" "),_("li",[t._v("502：（bad gateway）充当"),_("code",[t._v("网关或者代理的服务器")]),t._v("出错（可能是真正干活的服务器"),_("code",[t._v("宕机")]),t._v("了，也可能node没接住后端服务器错误）")])])])]),t._v(" "),_("h3",{attrs:{id:"请求方法"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#请求方法"}},[t._v("#")]),t._v(" 请求方法")]),t._v(" "),_("ul",[_("li",[t._v("GET: 请求获取Request-URI所标识的资源")]),t._v(" "),_("li",[t._v("POST: 在Request-URI所标识的资源后附加新的数据")]),t._v(" "),_("li",[t._v("PUT: 请求服务器存储一个资源，并用Request-URI作为其标识")]),t._v(" "),_("li",[t._v("DELETE: 请求服务器删除Request-URI所标识的资源")]),t._v(" "),_("li",[t._v("HEAD: 请求获取由Request-URI所标识的资源的响应消息报头")]),t._v(" "),_("li",[t._v("TRACE: 请求服务器回送收到的请求信息，主要用于测试或诊断")]),t._v(" "),_("li",[t._v("CONNECT:HTTP/1.1协议中预留给能够将连接改为管道方式的代理服务器。")]),t._v(" "),_("li",[t._v("OPTIONS: 请求查询服务器的性能，或者查询与资源相关的选项和需求")])]),t._v(" "),_("h4",{attrs:{id:"get-post区别"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#get-post区别"}},[t._v("#")]),t._v(" GET POST区别")]),t._v(" "),_("ul",[_("li",[_("ol",[_("li",[t._v("GET请求在URL中传送的 "),_("code",[t._v("参数长度")]),t._v(" 是有限制的，而POST木有")])])]),t._v(" "),_("li",[_("ol",{attrs:{start:"2"}},[_("li",[t._v("GET "),_("code",[t._v("参数")]),t._v(" 通过URL "),_("code",[t._v("传递")]),t._v("，POST放在（Request body）中，GET比POST更不安全，所以不能用来传递敏感信息")])])]),t._v(" "),_("li",[_("ol",{attrs:{start:"3"}},[_("li",[t._v("对 "),_("code",[t._v("参数数据类型")]),t._v("，GET只接受（ASCII字符），而POST没有限制。")])])]),t._v(" "),_("li",[_("ol",{attrs:{start:"4"}},[_("li",[t._v("GET请求只能进行 "),_("code",[t._v("url编码")]),t._v("，而POST支持多种编码方式。")])])]),t._v(" "),_("li",[_("ol",{attrs:{start:"5"}},[_("li",[t._v("GET请求会被浏览器主动 "),_("code",[t._v("cache")]),t._v("，而POST不会，除非手动设置。")])])]),t._v(" "),_("li",[_("ol",{attrs:{start:"6"}},[_("li",[t._v("GET在 "),_("code",[t._v("浏览器回退")]),t._v(" 时是无害的，而POST会再次提交请求。")])])]),t._v(" "),_("li",[_("ol",{attrs:{start:"7"}},[_("li",[t._v("GET请求参数会被完整保留在浏览器 "),_("code",[t._v("历史记录")]),t._v(" 里，而POST中的参数不会被保留。")])])]),t._v(" "),_("li",[_("ol",{attrs:{start:"8"}},[_("li",[t._v("GET产生的URL地址可以被Bookmark，而POST不可以。")])])])]),t._v(" "),_("blockquote",[_("p",[t._v("然鹅...可以看下下面这篇，有惊喜：")])]),t._v(" "),_("p",[_("a",{attrs:{href:"https://zhuanlan.zhihu.com/p/22536382",target:"_blank",rel:"noopener noreferrer"}},[t._v("99%的人都理解错了HTTP中GET与POST的区别"),_("OutboundLink")],1)]),t._v(" "),_("h3",{attrs:{id:"cookies与session"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#cookies与session"}},[t._v("#")]),t._v(" cookies与session")]),t._v(" "),_("ul",[_("li",[t._v("Cookies是保存在客户端的小段文本，随客户端每一个请求发送该url下的所有cookies到服务器端。")]),t._v(" "),_("li",[t._v("Session则保存在服务器端，通过唯一的值sessionID来区别每一个用户。\n"),_("ul",[_("li",[t._v("SessionID随每个连接请求发送到服务器，服务器根据sessionID来识别客户端，再通过session的key获取session值。")])])])]),t._v(" "),_("p",[_("img",{attrs:{src:"/my-vue-press-blog/img/interview/http_cookie.jpg",alt:"cookie"}})]),t._v(" "),_("p",[_("img",{attrs:{src:"/my-vue-press-blog/img/interview/http_session.jpg",alt:"session"}})]),t._v(" "),_("h3",{attrs:{id:"http1-x的缺点："}},[_("a",{staticClass:"header-anchor",attrs:{href:"#http1-x的缺点："}},[t._v("#")]),t._v(" HTTP1.x的缺点：")]),t._v(" "),_("ul",[_("li",[t._v("1.HTTP/1.0一次只允许在一个TCP连接上发起一个请求，HTTP/1.1使用的流水线技术也只能部分处理请求并发，仍然会存在队列头阻塞问题，因此客户端在需要发起多次请求时，通常会采用建立多连接来减少延迟。")]),t._v(" "),_("li",[t._v("2.单向请求，只能由客户端发起。")]),t._v(" "),_("li",[t._v("3.请求报文与响应报文首部信息冗余量大。")]),t._v(" "),_("li",[t._v("4.数据未压缩，导致数据的传输量大。")])]),t._v(" "),_("h3",{attrs:{id:"http2-0优点："}},[_("a",{staticClass:"header-anchor",attrs:{href:"#http2-0优点："}},[t._v("#")]),t._v(" HTTP2.0优点：")]),t._v(" "),_("ul",[_("li",[t._v("1.二进制传输")])]),t._v(" "),_("p",[t._v("HTTP2.0中所有加强性能的核心是二进制传输，在HTTP1.x中，我们是通过文本的方式传输数据。基于文本的方式传输数据存在很多缺陷，文本的表现形式有多样性，因此要做到健壮性考虑的场景必然有很多，但是二进制则不同，只有0和1的组合，因此选择了二进制传输，实现方便且健壮。\n在HTTP2.0中引入了新的编码机制，所有传输的数据都会被分割，并采用二进制格式编码。")]),t._v(" "),_("ul",[_("li",[t._v("2.多路复用")])]),t._v(" "),_("p",[t._v("在HTTP1.0中，我们经常会使用到雪碧图、使用多个域名等方式来进行优化，\n都是因为浏览器限制了同一个域名下的请求数量，当页面需要请求很多资源的时候，队头阻塞（Head of line blocking）会导致在达到最大请求时，资源需要等待其他资源请求完成后才能继续发送。\nHTTP2.0中，有两个概念非常重要：帧（frame）和流（stream）。\n帧是最小的数据单位，每个帧会标识出该帧属于哪个流，流是多个帧组成的数据流。\n所谓多路复用，即在一个TCP连接中存在多个流，即可以同时发送多个请求，\n对端可以通过帧中的表示知道该帧属于哪个请求。在客户端，这些帧乱序发送，\n到对端后再根据每个帧首部的流标识符重新组装。通过该技术，\n可以避免HTTP旧版本的队头阻塞问题，极大提高传输性能。")]),t._v(" "),_("ul",[_("li",[t._v("3.Header压缩")])]),t._v(" "),_("p",[t._v("在HTTP1.0中，我们使用文本的形式传输header，在header中携带cookie的话，每次都需要重复传输几百到几千的字节，这着实是一笔不小的开销。\n在HTTP2.0中，我们使用了HPACK（HTTP2头部压缩算法）压缩格式对传输的header进行编码，减少了header的大小。并在两端维护了索引表，用于记录出现过的header，后面在传输过程中就可以传输已经记录过的header的键名，对端收到数据后就可以通过键名找到对应的值。")]),t._v(" "),_("ul",[_("li",[t._v("4.服务器Push")])]),t._v(" "),_("p",[t._v("在HTTP2.0中，服务端可以在客户端某个请求后，主动推送其他资源。\n可以想象一下，某些资源客户端是一定会请求的，这时就可以采取服务端push的技术，提前给客户端推送必要的资源，就可以相对减少一点延迟时间。在浏览器兼容的情况下也可以使用prefetch。")]),t._v(" "),_("ul",[_("li",[t._v("5.更安全")])]),t._v(" "),_("p",[t._v("HTTP2.0使用了tls的拓展ALPN做为协议升级，除此之外，HTTP2.0对tls的安全性做了近一步加强，通过黑名单机制禁用了几百种不再安全的加密算法。")]),t._v(" "),_("h3",{attrs:{id:"https"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#https"}},[t._v("#")]),t._v(" HTTPs")]),t._v(" "),_("ul",[_("li",[t._v("可以认为是 HTTP + TLS (传输层加密协议) 或者叫 SSL（数字证书）")])]),t._v(" "),_("ul",[_("li",[t._v("功能：\n"),_("ul",[_("li",[t._v("内容加密（非对称加密）")]),t._v(" "),_("li",[t._v("身份认证（数字证书，保证用户访问的就是想访问的服务）")]),t._v(" "),_("li",[t._v("数据完整性（防止中间人攻击和篡改）")])])])])])}),[],!1,null,null,null);v.default=i.exports}}]);