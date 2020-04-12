---
title: Git
date: 2020-04-12
sidebarDepth: 0
tags:
-Git
categories:
- DevOps
isShowComments: true
---


### Git介绍
#### Git和代码托管中心
+ 托管中心任务：
  - 维护远程库（权限控制等）
+ 局域网环境下：
  - GitLab 服务器
  - Gitea
+ 外网环境下：
  - GitHub
  - 码云Gitee

#### Git本地结构
[git structure]()

#### 本地库和远程库的交互
+ 团队内部协作
+ 团队内部协作

### Git命令行操作
#### 本地库操作
+ 初始化
  - git init
    - 生成`.git`目录，存放的是本地库相关的子目录和文件，不要删除，也不要胡乱修改
  - 设置签名
    - 形式：
      1. 用户名：xxx
      2. 邮件地址：mmm@qq.com
    - 作用：
      - 区分不同开发人员的身份
    - 辨析：
      - 这里设置的签名和登录远程库（代码托管中心）的账号密码没有没有关系
    - 命令：
      - 1. 项目级别/仓库级别：仅在当前本地库范围内有效(`git config`)
        - git config user.name 用户名
        - git config user.email 邮件地址
        - 信息保存位置：./.git/config 文件
      - 2. 系统用户级别：登录当前操作系统的用户范围(`git config --global`)
        - git config --global user.name 用户名
        - git config --global user.email 邮件地址
        - 信息保存位置：～/.gitconfig 文件
+ 基本操作
+ 分支管理

#### 远程库操作


[彻底搞懂 Git-Rebase](http://jartto.wang/2018/12/11/git-rebase/)