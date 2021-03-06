---
title: 概述
date: 2019-06-01
sidebarDepth: 0
tags:
- 性能优化 
categories:
- 性能优化
isShowComments: true
---


### 指导思想/原则方向

> 使用内存，缓存或其他方法<br>
> 减少 CPU 计算量， 减少网络加载耗时

> 空间换时间   

> 算法中 => 降低 时间复杂度<br>
> Chrome 浏览器的快 => 每个标签页一个进程

+ 让加载更快（ 下载文件更快，从30s变成3s ）
  - 减少资源体积：压缩
  - 减少访问次数：合并， SSR服务端渲染， 缓存
  - 使用更快的网络：CDN

+ 让渲染更快 （ 让代码逻辑更加合理，没有重复的渲染操作，没有多余的渲染操作，没有无用功，没有等待，让渲染更快，至少在同一时间内让用户看到的更快 ）
  - CSS 放在 head，JS 放在 body 最下面
  - 尽早开始执行JS，用 DOMContentLoaded 触发
  - 懒加载（图片懒加载，上滑加载更多）
  - 对 DOM 查询进行缓存
  - 频繁 DOM 操作，合并到一起插入 DOM 结构
  - 节流（throttle） 防抖（debounce）


### 缓存（提高命中率，只让新的重新加载）
+ 静态资源加 hash 后缀，根据文件内容计算 hash
+ 文件内容不变，则 hash 不变， 则URL不变
+ URL和文件不变，则会自动触发 http 缓存机制，返回 304（CDN完全满足304） 

### SSR服务端渲染
+ 将网页和数据一起加载，一起渲染，一遍结束
+ 非SSR（前后端分离）：先加载网页，再加载网页，再加载数据，再渲染数据




