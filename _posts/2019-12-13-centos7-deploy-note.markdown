---
layout: post
title:  "centos7 部署备忘"
date:   2019-12-13
categories: post
---

centos7修改主机名
```
hostnamectl set-hostname xxx
```

设置主机名dns到本机
```
vim /etc/hosts

127.0.0.1 xxx
```

挂载磁盘
[参考链接](https://www.alibabacloud.com/help/zh/doc-detail/25426.htm)

```
fdisk /dev/vdb

# 输入n
# Partition type 输入p 回车
# 分区号 输入1 回车
# 起始 扇区 使用默认值 直接回车
# Last 扇区 使用默认值 直接回车
# 最后输入w 回车

mkfs.ext4 /dev/vdb1

# 增加一行到/etc/fstab 把磁盘挂在/home目录下
/dev/vdb1 /home ext4 defaults 0 0
mount /dev/vdb1 /home
```

安装mysql
[参考链接](https://www.linode.com/docs/databases/mysql/how-to-install-mysql-on-centos-7/)

```
sudo yum update
wget http://repo.mysql.com/mysql-community-release-el7-5.noarch.rpm
sudo rpm -ivh mysql-community-release-el7-5.noarch.rpm
yum update
sudo yum install mysql-server
sudo systemctl start mysqld

sudo mysql_secure_installation
```

安装redis
[参考链接](https://www.linode.com/docs/databases/redis/install-and-configure-redis-on-centos-7/)

```
sudo yum install epel-release
sudo yum update
sudo yum install redis
sudo systemctl start redis
sudo systemctl enable redis
```

源码安装redis
[systemd启动脚本参考链接](https://gist.github.com/mkocikowski/aeca878d58d313e902bb)

```
# 首先从redis官网下载需要的版本 https://redis.io/download
# 这里以4.0.14为例

tar -xvf redis-4.0.14.tar.gz
cd redis-4.0.14
make && make install

# 成功的话，执行该命令看make install安装到了哪里
# 本例输出：/usr/local/bin/redis-server
which redis-server

# 从redis源码目录复制redis配置文件到/etc/redis/redis.conf
mkdir /etc/redis
cp redis.conf /etc/redis/

# 创建systemd脚本
vim /etc/systemd/system/redis.service

# 内容如下：
[Unit]
Description=Redis
After=syslog.target

[Service]
ExecStart=/usr/local/bin/redis-server /etc/redis/redis.conf
RestartSec=5s
Restart=on-success

[Install]
WantedBy=multi-user.target

# 执行 收工
sudo systemctl enable /etc/systemd/system/redis.service
sudo systemctl start redis.service
```

安装java
[参考连接](https://www.digitalocean.com/community/tutorials/how-to-install-java-on-centos-and-fedora)

```
sudo yum install java-1.8.0-openjdk
sudo yum install java-1.8.0-openjdk-devel
```

安装nginx
[参考连接](https://www.digitalocean.com/community/tutorials/how-to-install-nginx-on-centos-7)

```
sudo yum install epel-release
sudo yum install nginx
sudo systemctl start nginx
sudo systemctl enable nginx
```

安装php
[参考链接](https://www.tecmint.com/install-php-7-in-centos-7/)

```
yum install yum-utils
yum-config-manager --enable remi-php73
yum install php php-fpm php-mcrypt php-cli php-gd php-curl php-mysql php-ldap php-zip php-fileinfo php-redis
sudo systemctl start php-fpm
sudo systemctl enable php-fpm
```
