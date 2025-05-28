---
layout: post
title:  "通过SSH实现HTTP代理"
date:   2025-05-28 13:47:01
categories: post
---

```
# HTTP请求 -> server-ip -> 目的地

ssh -D 9000 -f -C -q -N -p 22 user@server-ip

# curl
curl --socks5 127.0.0.1:9000 http://xxxxxxxx

# Java
Proxy proxy = new Proxy(Proxy.Type.SOCKS, new InetSocketAddress("127.0.0.1", 9000));
```
