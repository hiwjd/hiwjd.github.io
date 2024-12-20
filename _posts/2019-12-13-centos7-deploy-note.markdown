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

安装mysql8

```
rpm -Uvh https://repo.mysql.com/mysql80-community-release-el7-3.noarch.rpm

sed -i 's/enabled=1/enabled=0/' /etc/yum.repos.d/mysql-community.repo

yum --enablerepo=mysql80-community install mysql-community-server

# 只装mysql client
yum --enablerepo=mysql80-community install mysql-community-client.x86_64

> 执行上面这步如果出现：
> ======
> 源 "MySQL 8.0 Community Server" 的 GPG 密钥已安装，但是不适用于此软件包。请检查源的公钥 URL 是否配置正确。
>
> 失败的软件包是：mysql-community-client-8.0.28-1.el7.x86_64
> GPG  密钥配置为：file:///etc/pki/rpm-gpg/RPM-GPG-KEY-mysql
> ======
> 通过执行`rpm --import https://repo.mysql.com/RPM-GPG-KEY-mysql-2022`解决

service mysqld start

grep "A temporary password" /var/log/mysqld.log

mysql_secure_installation

systemctl restart mysqld

systemctl enable mysqld

# Authentication plugin 'caching_sha2_password' cannot be loaded

[mysqld]
default_authentication_plugin=mysql_native_password

ALTER USER 'username'@'ip_address' IDENTIFIED WITH mysql_native_password BY 'password';
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

安装java17
[参考链接](https://www.cnblogs.com/binz/p/17268441.html)
```
mkdir -p /home/jdk
cd /home/jdk

wget https://download.java.net/java/GA/jdk17.0.2/dfd4a8d0985749f896bed50d7138ee7f/8/GPL/openjdk-17.0.2_linux-x64_bin.tar.gz

tar zxf openjdk-17.0.2_linux-x64_bin.tar.gz

vim /etc/profile
#在unset i 上方插入以下环境 变量
export JAVA_HOME=/home/jdk/jdk-17.0.2/
export CLASSPATH=$JAVA_HOME/lib:$CLASSPATH
export PATH=$JAVA_HOME/bin:$PATH
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
yum install https://dl.fedoraproject.org/pub/epel/epel-release-latest-7.noarch.rpm
yum install http://rpms.remirepo.net/enterprise/remi-release-7.rpm
yum install yum-utils
yum-config-manager --enable remi-php73
yum install php php-fpm php-mcrypt php-cli php-gd php-curl php-mysql php-ldap php-zip php-fileinfo php-redis
sudo systemctl start php-fpm
sudo systemctl enable php-fpm
```

安装snap
[参考链接](https://snapcraft.io/docs/installing-snap-on-centos)

```
sudo yum install epel-release
sudo yum install snapd
sudo systemctl enable --now snapd.socket
sudo ln -s /var/lib/snapd/snap /snap
```

安装certbot
[参考链接](https://certbot.eff.org/instructions?ws=nginx&os=centosrhel7)

```
sudo snap install core
sudo snap refresh core
sudo snap install --classic certbot
sudo ln -s /snap/bin/certbot /usr/bin/certbot

# 安装ssl证书
sudo certbot certonly --nginx

# 开启自动更新证书
sudo certbot renew --dry-run

# 查看定时任务
systemctl list-timers
```

修改aws centos默认用户

```
# 修改root密码
sudo passwd root

# 登录root
su root

# 修改ssh配置
## PermitRootLogin yes
## UsePAM no
vi /etc/ssh/sshd_config

# 修改ssh公钥
## 只留下公钥部分
vi /root/.ssh/authorized_keys
```

"Could not resolve host: mirrorlist.centos.org; 未知的错误"

```
vi /etc/yum.repos.d/CentOS-Base.repo
替换内容如下：

[base]
name=CentOS-$releasever - Base
#mirrorlist=http://mirrorlist.centos.org/?release=$releasever&arch=$basearch&repo=os&infra=$infra
baseurl=http://vault.centos.org/centos/$releasever/os/$basearch/
gpgcheck=1
gpgkey=file:///etc/pki/rpm-gpg/RPM-GPG-KEY-CentOS-7

#released updates
[updates]
name=CentOS-$releasever - Updates
#mirrorlist=http://mirrorlist.centos.org/?release=$releasever&arch=$basearch&repo=updates&infra=$infra
baseurl=http://vault.centos.org/centos/$releasever/updates/$basearch/
gpgcheck=1
gpgkey=file:///etc/pki/rpm-gpg/RPM-GPG-KEY-CentOS-7

#additional packages that may be useful
[extras]
name=CentOS-$releasever - Extras
#mirrorlist=http://mirrorlist.centos.org/?release=$releasever&arch=$basearch&repo=extras&infra=$infra
baseurl=http://vault.centos.org/centos/$releasever/extras/$basearch/
gpgcheck=1
gpgkey=file:///etc/pki/rpm-gpg/RPM-GPG-KEY-CentOS-7

#additional packages that extend functionality of existing packages
[centosplus]
name=CentOS-$releasever - Plus
#mirrorlist=http://mirrorlist.centos.org/?release=$releasever&arch=$basearch&repo=centosplus&infra=$infra
baseurl=http://vault.centos.org/centos/$releasever/centosplus/$basearch/
gpgcheck=1
enabled=0
gpgkey=file:///etc/pki/rpm-gpg/RPM-GPG-KEY-CentOS-7
```
