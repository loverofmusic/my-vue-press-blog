---
title: Docker
date: 2020-01-12
sidebarDepth: 0
tags:
- Docker
categories:
- DevOps
isShowComments: true
---

### Linux（centos）上的安装
1. 卸载旧版本
> 较旧的 Docker 版本称为 docker 或 docker-engine 。如果已安装这些程序，请卸载它们以及相关的依赖项。
```js
sudo yum remove docker \
                  docker-client \
                  docker-client-latest \
                  docker-common \
                  docker-latest \
                  docker-latest-logrotate \
                  docker-logrotate \
                  docker-engine
```
2. 安装必须的依赖 
```js
sudo yum install -y yum-utils \
  device-mapper-persistent-data \
  lvm2
```


```js 
//设置稳定的仓库
sudo yum-config-manager \
    --add-repo \
    https://download.docker.com/linux/centos/docker-ce.repo
```

3. 安装 Docker

`sudo yum install docker-ce docker-ce-cli containerd.io`

> systemctl start docker
> systemctl status docker
> docker run hello-world
> docker ps
> docker ps -a

4. 镜像加速配置

`vi /etc/docker/daemon.json`

```json 添加如下配置：
{
  "registry-mirrors": ["https://registry.docker-cn.com"]
}
```

> systemctl daemon-reload
> systemctl restart docker
> docker (run stop restart logs) ......
> 删除已经停止的容器：docker rm (容器id/names)

5. 安装 Compose 

[Docker Compose](https://docs.docker.com/compose/install/)

`sudo curl -L "https://github.com/docker/compose/releases/download/1.25.5/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose`

`sudo chmod +x /usr/local/bin/docker-compose`

> docker-compose --version
> docker-compose （run start stop restart logs）...

推送镜像到hub
> docker login
> docker images
> docker ps
> docker commit xxx(镜像id) xxx(用户名)/mysql:1.0
> docker images
> docker push xxx(用户名)/mysql:1.0
> docker pull xxx(用户名)/mysql:5.7

### Mac OS上的安装