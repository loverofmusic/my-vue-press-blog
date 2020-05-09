---
title: Vue
date: 2020-01-05
isTimeLine: true
sidebar: true
sidebarDepth: 1
isShowComments: true
tags:
  - Vue
categories:
  - Vue
---

## Vue源码解析

### 1.手写 Vue 的 MVVM 响应式原代码（简单版）

:::tip
采用数据劫持结合发布者-订阅者的方式，通过Object.defineProperty()来劫持各个属性的setter、getter，在数据变动时，发布消息给订阅者，触发相应的监听回调。
:::

+ [GitHub demo链接](https://github.com/loverofmusic/Vue-MVVM-demo.git)
+ ![mvvm](/my-vue-press-blog/img/interview/mvvm.jpg)
+ 主要实现过程：
    + 入口函数的实现
    + 编译类 Compile 的实现
    + 实现 Observer 劫持并监听所有属性
    + 实现观察者 Watcher 和 依赖收集器 Dep
    + 实现双向数据绑定和 Proxy 代理
+ 参照源码：
    +  ![mvvm2](/my-vue-press-blog/img/interview/mvvm2.jpg)





### Vue 中是如何检测数组变化的？
+ 使用函数劫持的方式，`重写了数组的原型方法`
+ 将data中的数组，进行了原型链重写，指向了自己定义的数组原型方法，这样当调用数组API时，可以通知依赖更新，如果数组中包含引用类型，会对数组中的引用类型再次进行监控

![vue-array](/my-vue-press-blog/img/interview/vue-array.jpg)





### 6.Vue 中computed的特点






### 7.watch 中的 deep:true 是如何实现的





### 8.Vue 组件的生命周期





### 9.ajax 请求放在哪个生命周期中





### 10.何时需要使用 beforeDestroy 
+ 清除自己定义的`定时器` setTimeout...
+ 解除`事件绑定`：scroll mousemove....
+ 当前页面中使用了`$on`方法 需要在组件销毁前解绑



### 11.Vue 中模板编译原理
+ 讲 template 转化成 render 函数



### 12.Vue中 v-if 和 v-show 的区别




### 13.为什么 v-for 和 v-if 不能连用
+ ![vue-v-if](/my-vue-press-blog/img/interview/vue-v-if.jpg)
+ v-for 会比 v-if 的`优先级`高一些，如果连用的话 会把 v-if 给每个元素都添加一下，会造成性能问题



### 14.如何使用 vnode 描述 DOM 节点
+ ![vue-vnode](/my-vue-press-blog/img/interview/vue-vnode.jpg)



### 15.diff 算法的时间复杂度
+ 两颗树的完全的 diff 算法是一个时间复杂度为 O(n3)，Vue 进行了优化变成O(n) (只比较同级不考虑跨级问题)，在前端中，很少会跨层级移动Dom元素，所以 Virtual Dom  只会对比同一层级的元素




### 16.简述 Vue 中 diff 算法原理
1. 先比较同级，再比较子节点
2. 先判断一方有儿子一方没儿子的情况
3. 比较都有儿子的情况
4. 递归比较子节点
+ ![vue-diff0](/my-vue-press-blog/img/interview/vue-dom-diff0.jpg)
+ ![vue-diff1](/my-vue-press-blog/img/interview/vue-dom-diff1.jpg)



### 17.v-for 中为什么要用 key
+ ![vue-key](/my-vue-press-blog/img/interview/vue-key.jpg)



### 18.描述组件渲染和更新过程
+ 渲染组件时， 会通过 Vue.extend 方法构建子组件的构造函数，并进行实例化。最终手动调用 $mount() 进行挂载。更新组件时，会进行 patchVnode流程，核心就是 diff 算法
+ ![vue-component](/my-vue-press-blog/img/interview/vue-component.jpg)
+ ![vue-component](/my-vue-press-blog/img/interview/vue-component1.jpg)



### 19.组件中的 data 为什么是函数
+ 同一个`组件被复用`多次，会创建多个实例。这些实例用的是同一个构造函数，如果data是一个对象的话，那么所有实例都共享了同一个对象。为了保证组件复用时的数据独立性 要求每个组件必须通过data函数返回一个对象 作为组件状态
+ ![vue-data0](/my-vue-press-blog/img/interview/vue-data0.jpg)
+ ![vue-data1](/my-vue-press-blog/img/interview/vue-data1.jpg)




### 20.Vue 中事件绑定原理
+ 原生dom事件绑定
+ 组件事件绑定



### 21.v-model中的实现原理及如何自定义v-model
+ 可以看成是value+input方法的语法糖



### 22.Vue 中 v-html 会导致哪些问题
+ 可能导致xss攻击
+ 会替换掉标签内部元素




### 23.




### 24.Vue 中组件如何通信？单向数据流
+ 父子间通信 父->子通过 props、子->父 $on $emit
+ 获取父子组件实例的方式 $parent、$children
+ 在父组件中提供数据 子组件进行消费 Provide、inject
+ Ref获取实例的方式调用组件的属性或者方法
+ Event Bus 实现跨组件通信
+ Vuex状态管理


### 25. Vue 中相同逻辑如何抽离？
+ mixin



### 26.为什么要使用异步组件
+ 如果组件功能多打包出的结果会变大， 可以采用异步的方式，主要依赖import（）这个语法，可以实现文件的按需加载。



### 27.什么是作用域插槽？
+ 首先明确普通插槽，然后比较两者
+ 作用域插槽：父组件替换插槽的标签，但是内容由子组件来提供；渲染的位置是子组件
+ 普通插槽：渲染的位置是父组件

::: tip slot插槽
为了让我们封装的组件更加具有扩展性（让使用者可以决定组件内部的一些内容到底展示什么，例如：移动网站中的导航栏）
:::




### 28.谈谈你对keep-alive的了解
+ 实现 组件缓存，当组件切换时不会对当前组件进行卸载，常用的2个 属性 include、exclude；2个生命周期 activated、deactivated





### 29.Vue中常见性能优化
+ 编码优化：
    1. 不要将所有数据都放在data中，data中的数据都会增加getter和setter，会收集对应的watcher
    2. vue 在 v-for 时给每项元素绑定事件需要用事件代理
    3. SPA 页面采用keep-alive缓存组件
    4. 拆分组件（提高复用性、增加代码的可维护性、减少不必要渲染）
    5. v-if 当值为false时 内部指令不会执行，具有阻断功能，很多情况下可以使用其代替v-show
    6. key 保证唯一性
    7. Object.freeze冻结数据
    8. 合理使用路由懒加载、异步组件
    9. 尽量使用runtime运行时版本
    10. 数据持久化问题（防抖 节流）
+ 加载性能优化
    1. 第三方模块按需导入（babel-plugin-component）
    2. 滚动到可视区域动态加载
    3. 图片懒加载
+ 用户体验
    1. app-skeleton骨架屏
    2. app-shell app壳




### 为何Vue采用异步渲染？



### vue3.0变化

#### 一. 速度更快
+ 虚拟DOM重新（）
    + 将会有更多的编译时提示来减少运行时的开销，用更有效的代码来创建虚拟节点
+ 优化插槽生成（）
    + 父子组件的渲染分开，可以只渲染父组件，不渲染子组件
    + 不需要打补丁的不再打补丁，提高渲染性能
+ 静态树提升
    + 不需要打补丁的不再打补丁，提高渲染性能
+ 静态属性提升
    + 不需要打补丁的不再打补丁，提高渲染性能
+ 基于Proxy的观察者机制
    + 2.0中使用es5的object.defineProperty的getter setter实现的，存在一些局限性， 无法监听响应对象属性的增加删除等，3.0使用代理模式就没有这些局限性


#### 二. 体积更小
+ 新运行时压缩后大概10kb（相对于2.0 20kb 小了很多）。主要是通过按需引入的方式，减少一些不需要的库，需要什么功能就引入什么功能，没有使用的也就不会打包

#### 三. 更易维护
+ 从flow转向type
    + （flow为facebook的静态类型检查，type为ts。支持ts表现也更好，节省调试bug时间，开发体验更好）
+ 解耦，使内容更加模块化
    + 依赖于自己内部包来运行，使得自定义和灵活的同时提供透明性，使开发人员可以真正进入源码
+ 编译器重写