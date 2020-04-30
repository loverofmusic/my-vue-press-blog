---
title: ssh免密登录
date: 2020-04-05
isTimeLine: true
sidebar: true
sidebarDepth: 1
isShowComments: true
tags:
  - ssh
categories:
  - ssh
---

### Linux免密远程登录

+ 免密登录的原理
  非对称加密（RSA）

+ 配置免密登录的步骤

  1. 生成密钥对
      + ~ `cd .ssh`
      + .ssh `ssh-keygen -t rsa -C "你自己起的名字" -f "你自己起的名字_key_rsa"`

  2. 上传配置公钥
      + 上传公钥到服务器对应账号的home路径下的.ssh/中 ( `ssh-copy-id -i "公钥文件名(你自己起的名字_key_rsa.pub)" 用户名@服务器ip或域名` ) 

      :::tip
          + 执行成功之后，我们在服务器上查看/root/.ssh目录已经生成，并且多了一个名为authorized_keys的文件，里面保存的正是服务器上ssh-keygen生成的公钥.pub的内容
      :::

      + 配置公钥文件访问权限为 600 (-rw-------)

  3. 配置本地私钥
      + 配置你的私钥文件访问权限为 600(chmod 600 你的私钥文件名)

  4. 免密登录功能的本地配置文件
      + 编辑自己home目录的.ssh/ 路径下的config文件 
      + 配置config文件的访问权限为 644 (-rw-r--r--)

      ```js
      # 多主机配置
      Host gateway-produce # 一个便于你区别这是哪台机器的名字
      HostName IP或绑定的域名 # 目的机器的ip
      Port 22              # ssh所使用的端口，默认是22
      # 如果要用其他的端口号，需要修改服务器上的一个文件 vim /etc/ssh/sshd_config, 
      # 然后 systemctl restart sshd or service sshd restart 来重启 sshd 服务
      Host node-produce
      HostName IP或绑定的域名 # 目的机器的ip
      Port 22
      Host java-produce
      HostName IP或绑定的域名
      Port 22

      Host *-produce
      User root
      IdentityFile ~/.ssh/xxxx_key_rsa
      Protocol 2
      Compression yes
      ServerAliveInterval 60
      ServerAliveCountMax 20
      LogLevel INFO

      #单主机配置
      Host xxxxcloud # 一个便于你区别这是哪台机器的名字
      User root # ssh登陆时候的用户名
      HostName IP或绑定的域名 # 目的机器的ip
      IdentityFile ~/.ssh/xxxx_rsa   # 对应服务器公钥的本地私钥文件路径
      Protocol 2
      Compression yes
      ServerAliveInterval 60
      ServerAliveCountMax 20
      LogLevel INFO

      ```


