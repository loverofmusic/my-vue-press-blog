---
title: Jenkins
date: 2020-01-13
sidebarDepth: 0
tags:
- Jenkins
categories:
- DevOps
isShowComments: true
---

### Docker 安装 Jenkins

1. 在宿主机上通过 docker 安装 Jenkins 获得初始化密码
`docker run --name devops_jenkins -itd -p 8080:8080 -p 50000:50000 -v jenkins_home:/var/jenkins_home -d jenkins/jenkins:lts`

> 需要更多定制参数你可以参考: [定制参数](https://github.com/jenkinsci/docker)
> devops_jenkins（给容器起一个别名）
> docker logs -f devops_jenkins（打印容器里面到信息，可以复制jenkins初始化密码=>a password generated）

2. （ip+端口）访问宿主机，填入jenkins初始化密码

3. 安装推荐插件 
  - 可以换镜像源: [清华镜像](https://mirror.tuna.tsinghua.edu.cn/jenkins/updates/)
    - Manage Jenkins => Manage Plugins => 高级 => 升级站点 url 填入: https://mirror.tuna.tsinghua.edu.cn/jenkins/updates/update-center.json

  - 如果在线安装不了，参考这篇：[Jenkins系列_插件安装及报错处理](https://blog.csdn.net/KingBoyWorld/article/details/77923615)
  - 可以本地安装插件：[本地安装](http://updates.jenkins-ci.org/download/plugins)/[jenkins-plugins](https://updates.jenkins.io/download/plugins/jackson2-api/)
    - Manage Jenkins => Manage Plugins => 高级 => 上传插件