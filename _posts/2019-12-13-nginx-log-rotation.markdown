---
layout: post
title:  "nginx日志分割"
date:   2019-12-13
categories: post
---

没想到nginx没有对日志文件的分割做直接的支持，网上搜了一通，参考了[这里](https://www.digitalocean.com/community/tutorials/how-to-configure-logging-and-log-rotation-in-nginx-on-an-ubuntu-vps)用了一个叫`logrotate`的工具实现，文中说ubuntu默认安装，我在centos7.5里发现也是默认安装的。

大概是这样工作的：

`logrotate`工具会去关注配置里的日志目录，发现符合分割规则后，就移动老日志文件，新建新日志文件，并通知nginx读写新的日志文件。

`logrotate`的配置文件在`/etc/logrotate.d/`，我在这个目录下新建了一个`nginx2`配置，内容如下：

```
/home/log/nginx/*log {
    create 0644 nginx nginx
    monthly
    rotate 10
    missingok
    notifempty
    compress
    sharedscripts
    postrotate
        /bin/kill -USR1 `cat /var/run/nginx.pid 2>/dev/null` 2>/dev/null || true
    endscript
}
```

根据配置的指导，`logrotate`会来关注`/home/log/nginx/`目录下的log结尾文件，每月分割一个新日志文件出来（配置中的monthly），更多的配置信息可以网上搜或者`man logrotate`。

这里还涉及一点，我们是通过给nginx发送`USR1`信号来重新打开日志文件的，参考[这里](https://www.nginx.com/resources/wiki/start/topics/examples/logrotation/)

:warning:英文环境下，日志分割是这么表达：`log rotation`，用`log split`搜索好像不太对，要慢慢积累中英文不同用语的对照关系。
