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
  - 先不设置img标签的src路径为真实图片路径，将真实图片路径绑定在自定义属性上，等到图片即将进入可视窗口，再将自定义属性上的真实图片路径赋值给图片src属性
+ 如何判断进入可视窗口？
  1. 