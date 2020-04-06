---
title: 懒加载
date: 2019-06-01
sidebarDepth: 0
tags:
- 懒加载
categories:
- 性能优化
isShowComments: true
---

### 图片懒加载

+ 原理？
  - 先不设置<img>标签的src路径为真实图片路径，将真实图片路径绑定在自定义属性上，等到图片即将进入可视窗口，再将自定义属性上的真实图片路径赋值给图片src属性

+ 如何判断进入可视窗口？
  - 先介绍几个和懒加载相关的API
      ```js
      document.documentElement.clientHeight //获取屏幕可视区域的高度
      element.offsetTop //获取元素相对于文档顶部的高度
      ```
  - 如果：`offsetTop - scroolTop - clientHeight < 0`，则图片进入了可视区内，则被请求。

  ![lazyload](/my-vue-press-blog/img/interview/lazyload.jpg)

  - 还有一种：`el.getBoundingClientRect().top` <= clientHeight  

  ![lazyload](/my-vue-press-blog/img/interview/bound.jpg)

#### 知乎相关文章链接如下：
[原生js实现图片懒加载(lazyLoad)](https://zhuanlan.zhihu.com/p/55311726)