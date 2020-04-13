---
title: Git
date: 2020-04-12
sidebarDepth: 0
tags:
- Git
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
![git](/my-vue-press-blog/img/interview/git.jpeg)

#### 本地库和远程库的交互
+ 团队内部协作
![git local](/my-vue-press-blog/img/interview/git_local.jpeg)
+ 团队和外部协作
![git remote](/my-vue-press-blog/img/interview/git_remote.jpeg)

### Git命令行操作（git help [命令]查看文档）
#### 本地库操作
+ 初始化
  - <span class="green">git init</span>
      - 生成`.git`目录，存放的是本地库相关的子目录和文件，不要删除，也不要胡乱修改
  - 设置签名
      - 形式：
          - 用户名：xxx
          - 邮件地址：mmm@qq.com
      - 作用：
          - 区分不同开发人员的身份
      - 辨析：
          - 这里设置的签名和登录远程库（代码托管中心）的账号密码没有没有关系
      - 命令：
          -  项目级别/仓库级别：仅在当前本地库范围内有效(`git config`)
              - git config user.name 用户名
              - git config user.email 邮件地址
              - 信息保存位置：./.git/config 文件
          - 系统用户级别：登录当前操作系统的用户范围(`git config --global`)
              - git config --global user.name 用户名
              - git config --global user.email 邮件地址
              - 信息保存位置：～/.gitconfig 文件
+ 基本操作
  1. 查看状态（相对于工作区、暂存区而言）
      - <span class="green">git status</span>: 查看工作区、暂存区状态
  2. 添加
      - <span class="green">git add</span> [file name] / `git add .`: 将工作区的 新建/修改 添加到暂存区

        :::warning
        1. 新建的，必须先 add 再 commit
        2. 修改的，先 add 到暂存区，可以撤销，如果直接 commit 就不行
        :::

  3. 提交
      - <span class="green">git commit -m "commit message"</span> [file name]: 将暂存区的内容提交到本地库
  4. 查看历史记录（相对于本地库而言）
      - <span class="green">git log</span> / git log --pretty=oneline / git log --oneline / 
      - <span class="green">git reflog</span>（包括已经被删除的 commit 记录和 reset 的操作）
  5. 前进后退历史版本（本质就是操作HEAD指针）
      - 基于索引值操作（`推荐`）: <span class="green">git reset --hard</span>  [索引值]
      ![](/my-vue-press-blog/img/interview/git_reset_hard.jpeg)
      - 使用`^`符号：一个符号只能`后退`一步 (git reset --hard HEAD^^^ 后退三步)
      - 使用`~`符号：`后退` (git reset --hard HEAD~3 后退三步)
      ::: tip
        1. --soft 参数：仅仅在本地库移动HEAD指针
        2. --mixed 参数：在本地库移动HEAD指针 + 重置暂存区
        3. --hard 参数：在本地库移动HEAD指针 + 重置暂存区 + 重置工作区
      :::
+ 分支管理

#### 远程库操作


[彻底搞懂 Git-Rebase](http://jartto.wang/2018/12/11/git-rebase/)


<style>
.green{
  color: #3eaf7c
}
</style>