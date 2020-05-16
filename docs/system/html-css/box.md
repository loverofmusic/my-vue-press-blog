---
title: CSS盒模型
date: 2017-12-01
sidebarDepth: 0
tags:
- CSS盒模型
categories:
- CSS
isShowComments: true
---

### CSS盒模型
1. 基本概念：标准模型 + IE模型 
    - 属性：内容(content)、内边距(padding)、边框(border)、外边距(margin)

2. 标准模型和IE模型 区别
    - 标准盒子模型: 宽高计算 只包含content
    ![标准模型](/my-vue-press-blog/img/interview/css-box.png)
    - IE盒子模型：宽高计算 包含content+padding+border
    ![IE盒子模型](/my-vue-press-blog/img/interview/css-box-ie.png)

3. CSS如何设置这两种模型对应的宽和高
    - 标准盒子模型：box-sizing: content-box(浏览器默认)
    - IE盒子模型：box-sizing: border-box

4. JS如何设置获取盒模型对应的宽和高
    - dom.style.width/height(只支持内联样式)
    - dom.currentStyle.width/height(内联，内嵌，link方式的样式都支持，但是只适用于IE)
    - window.getComputedStyle(dom).width/height
    - dom.getBoundingClientRect().width/height(可以获取元素相对于viewport的 top left， width height也可以拿到)

5. 实例（根据盒模型解决相关问题）
    
    ![IE盒子模型](/my-vue-press-blog/img/interview/bfc.png)
    ![IE盒子模型](/my-vue-press-blog/img/interview/bfc-1.png)
    - 设置了overflow之后解决了以上边距塌陷（overflow创建了BFC）

6. BFC (边距重叠解决方案)
    + BFC 原理：
        1. 在BFC这个元素的垂直方向的边距会发生重叠
        2. BFC区域不会与浮动元素box重叠（可以用来清除浮动）
        3. BFC是个独立的容器 ，内外元素互相不影响
        4. 计算BFC高度的时候，浮动元素也会参与计算
    + 如何创建BFC：
        1. float值不能为null
        2. position值不为static relative
        3. display属性值为inline-box table相关
        4. overflow
    + BFC使用场景：
        1. 解决边距重叠
        2. 元素内左侧为浮动元素，右侧元素会与左侧重叠，可以通过设置该元素为BFC，来清除浮动
        3. 元素内部包含浮动元素，此时元素高度为0，可以通过设置该元素为BFC，让浮动元素也参与高度计算



