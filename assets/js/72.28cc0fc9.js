(window.webpackJsonp=window.webpackJsonp||[]).push([[72],{443:function(e,l,v){"use strict";v.r(l);var t=v(5),s=Object(t.a)({},(function(){var e=this,l=e.$createElement,v=e._self._c||l;return v("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[v("ul",[v("li",[e._v("sudo systemctl start nginx")]),e._v(" "),v("li",[e._v("systemctl status nginx")]),e._v(" "),v("li",[e._v("ps -ef | grep nginx")]),e._v(" "),v("li",[e._v("lsof -i:80")]),e._v(" "),v("li",[e._v("netstat -tulpn | grep :80")]),e._v(" "),v("li",[e._v("service iptables status")]),e._v(" "),v("li",[e._v("service iptables restart")]),e._v(" "),v("li",[e._v("service iptables stop")]),e._v(" "),v("li",[e._v("service iptables start")]),e._v(" "),v("li",[e._v("实例中要打开8080端口和9990端口 用编辑器打开/etc/sysconfig/iptables")])]),e._v(" "),v("p",[e._v("CentOS7 Firewall常用命令汇总，开放端口及查看已开放的端口")]),e._v(" "),v("p",[e._v("lvqingyao520 2018-07-17 09:09:06  24506  收藏 10\n展开\n1、firewalld的基本使用")]),e._v(" "),v("p",[e._v("启动： systemctl start firewalld")]),e._v(" "),v("p",[e._v("查看状态： systemctl status firewalld")]),e._v(" "),v("p",[e._v("停止： systemctl disable firewalld")]),e._v(" "),v("p",[e._v("禁用： systemctl stop firewalld")]),e._v(" "),v("p",[e._v("2.systemctl是CentOS7的服务管理工具中主要的工具，它融合之前service和chkconfig的功能于一体。")]),e._v(" "),v("p",[e._v("启动一个服务：systemctl start firewalld.service\n关闭一个服务：systemctlstop firewalld.service\n重启一个服务：systemctlrestart firewalld.service\n显示一个服务的状态：systemctlstatus firewalld.service\n在开机时启用一个服务：systemctlenable firewalld.service\n在开机时禁用一个服务：systemctldisable firewalld.service\n查看服务是否开机启动：systemctlis-enabled firewalld.service\n查看已启动的服务列表：systemctllist-unit-files|grep enabled\n查看启动失败的服务列表：systemctl--failed")]),e._v(" "),v("p",[e._v("3.配置firewalld-cmd")]),e._v(" "),v("p",[e._v("查看版本： firewall-cmd --version")]),e._v(" "),v("p",[e._v("查看帮助： firewall-cmd --help")]),e._v(" "),v("p",[e._v("显示状态： firewall-cmd --state")]),e._v(" "),v("p",[e._v("查看所有打开的端口： firewall-cmd--zone=public --list-ports")]),e._v(" "),v("p",[e._v("更新防火墙规则： firewall-cmd --reload")]),e._v(" "),v("p",[e._v("查看区域信息:  firewall-cmd--get-active-zones")]),e._v(" "),v("p",[e._v("查看指定接口所属区域： firewall-cmd--get-zone-of-interface=eth0")]),e._v(" "),v("p",[e._v("拒绝所有包：firewall-cmd --panic-on")]),e._v(" "),v("p",[e._v("取消拒绝状态： firewall-cmd --panic-off")]),e._v(" "),v("p",[e._v("查看是否拒绝： firewall-cmd --query-panic")]),e._v(" "),v("p",[e._v("那怎么开启一个端口呢")]),e._v(" "),v("p",[e._v("添加")]),e._v(" "),v("p",[e._v("firewall-cmd --zone=public --add-port=80/tcp --permanent   （--permanent永久生效，没有此参数重启后失效）")]),e._v(" "),v("p",[e._v("重新载入")]),e._v(" "),v("p",[e._v("firewall-cmd --reload")]),e._v(" "),v("p",[e._v("查看")]),e._v(" "),v("p",[e._v("firewall-cmd --zone=public --query-port=80/tcp")]),e._v(" "),v("p",[e._v("删除")]),e._v(" "),v("p",[e._v("firewall-cmd --zone=public --remove-port=80/tcp --permanent")]),e._v(" "),v("p",[e._v("查看firewall是否运行,下面两个命令都可以")]),e._v(" "),v("p",[e._v("systemctl status firewalld.service")]),e._v(" "),v("p",[e._v("firewall-cmd --state")]),e._v(" "),v("p",[e._v("查看当前开了哪些端口")]),e._v(" "),v("p",[e._v("其实一个服务对应一个端口，每个服务对应/usr/lib/firewalld/services下面一个xml文件。")]),e._v(" "),v("p",[e._v("firewall-cmd --list-services")]),e._v(" "),v("p",[e._v("查看还有哪些服务可以打开")]),e._v(" "),v("p",[e._v("firewall-cmd --get-services")]),e._v(" "),v("p",[e._v("查看所有打开的端口：")]),e._v(" "),v("p",[e._v("firewall-cmd --zone=public --list-ports")]),e._v(" "),v("p",[e._v("更新防火墙规则：")]),e._v(" "),v("p",[e._v("firewall-cmd --reload")])])}),[],!1,null,null,null);l.default=s.exports}}]);