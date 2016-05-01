---
layout: post
title:  "mac下命令后翻墙"
date:   2016-05-01 22:11:31
categories: post
---

本文方法的前提是已经安装了`shadowsocks`
通过`privoxy`来中转socks5和http协议

[cmdline http_proxy] < - - - > [privoxy] < - - - > [shadowsocks]

brew安装privoxy
```
brew install privoxy
```

编辑配置`/usr/local/etc/privoxy/config`
增加如下行：
```
forward-socks5   /               127.0.0.1:1080 .
```
意思是转发http请求给`127.0.0.1:1080`(shadowsocks默认监听的端口)

最后设置命令行代理环境变量
```
export http_proxy='http://127.0.0.1:8118'
export https_proxy='http://127.0.0.1:8118'
```
