---
title: 缓存
date: 2020-04-15
sidebarDepth: 0
tags:
- 缓存 
categories:
- 性能优化
isShowComments: true
---

### 浏览器缓存机制

> 首先明确一个问题，如果没有缓存，不仅浪费时间而且浪费带宽

### 思维导图：

![浏览器缓存机制-思维导图](/my-vue-press-blog/img/interview/cache_mind.jpeg)

:::tip
1. 根据是否需要`向服务器重新发起HTTP请求`将缓存过程分为两个部分，分别是`强缓存`和`协商缓存`
2. 根据Cache-Control、Expires判断资源`是否过期`，即：是否需要`向服务器重新发起HTTP请求`，没有过期，就走`强缓存`，过期就走`协商缓存`
:::

### 强缓存
`不会向服务器发送请求`，直接从缓存中读取资源，在chrome控制台的Network选项中可以看到该请求返回200的状态码，并且Size显示from disk cache或from memory cache。<br>
强缓存可以通过设置两种 HTTP Header 实现：Expires 和 Cache-Control。

### 协商缓存
协商缓存就是强制缓存失效后，浏览器携带缓存标识`向服务器发起请求`，由服务器根据缓存标识决定是否使用缓存的过程，主要有以下两种情况：
+ 协商缓存生效，返回304和Not Modified
- 协商缓存失效，返回200和请求结果

### 流程图：

![浏览器缓存机制-流程图](/my-vue-press-blog/img/interview/cache_diapragming.jpeg)



### 缓存标识Cache-Control可以设置的值(可以组合使用多种指令)：

| 指令                                          |   作用                             | 
| --------------------------------------------  | ----------------------------------- |
|        public                  |    所有内容都将被缓存（客户端和代理服务器都可缓存）    |
|        private                  |   所有内容只有客户端可以缓存，Cache-Control的默认取值    |
|        no-cache                |    客户端缓存内容，是否使用缓存则需要经过协商缓存来验证决定    |
|        no-store                  |  所有内容都不会被缓存，即不使用强制缓存，也不使用协商缓存    |
|        max-age                  |   max-age=xxx 表示缓存内容将在xxx秒后失效    |
|        s-maxage                  |  同max-age作用一样，只在代理服务器中生效（比如CDN缓存）|

:::warning no-cache这个名字有一点误导
1. 表示不使用强缓存（ Cache-Control的缓存控制方式做前置验证），而是使用协商缓存（ Etag 或者Last-Modified字段来控制缓存）。
2. 设置了no-cache之后，并不是说浏览器就不再缓存数据，只是浏览器在使用缓存数据时，需要先确认一下数据是否还`跟服务器保持一致`
:::

:::tip 
s-maxage的优先级高于max-age   
::::


> Cache-Control值设置的细节(可以组合使用多种指令)：

![浏览器缓存机制-思维导图](/my-vue-press-blog/img/interview/cache_control.jpeg)




### 参考文章：
<!-- [HTTP缓存和浏览器的本地存储](https://segmentfault.com/a/1190000020086923) -->
<!-- https://www.jianshu.com/p/54cc04190252 -->
[设计一个无懈可击的浏览器缓存方案：关于思路，细节，ServiceWorker，以及HTTP/2](https://zhuanlan.zhihu.com/p/28113197)