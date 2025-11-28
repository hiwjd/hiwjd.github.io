---
layout: post
title:  "PostgreSQL从pg_basebackup恢复"
date:   2025-11-28
categories: post
---


## 1、使用pg_basebackup备份
```sh
pg_basebackup -h localhost -p 5432 -U postgres -D /home/dbbackup -Ft -z -P -Xs
# 会输出 backup_manifest base.tar.gz pg_wal.tar.gz 这些文件
```
> -D 指定备份文件存放目录<br/>
> -Ft 指定备份文件格式为tar<br/>
> -z 启用备份文gzip压缩<br/>
> -P 显示备份进度<br/>
> -Xs 指定WAL日志文件同步的方式为stream，即同时以流式保存后续的WAL

## 2、恢复
A. 停止实例
```sh
sudo systemctl stop postgresql
```

B. 准备恢复用的文件
```sh
# 解压base.tar.gz，做为新的数据库data目录
# 解压pg_wal.tar.gz，稍后会在配置文件中指定

# 在base.tar.gz解压的目录里创建一个recovery.signal文件，PG会识别这个文件进入恢复模式
sudo touch /var/lib/postgresql/recovery.signal

# !!!确保2个目录的权限归属PostgreSQL
sudo chown -R postgres:postgres /var/lib/postgresql/data
sudo chmod -R 0700 /var/lib/postgresql/data
sudo chown -R postgres:postgres /var/lib/postgresql/wal
sudo chmod -R 0700 /var/lib/postgresql/wal
```

C. 调整配置文件
```sh
vim /etc/postgresql/15/main/postgresql.conf

# 配置 data_directory = '/var/lib/postgresql/data'
# 配置 restore_command = 'cp /var/lib/postgresql/wal/%f %p'
# 配置 recovery_target = 'immediate'
```

D. 开始恢复
```sh
# 启动PG
sudo systemctl start postgresql

tail -f /var/log/postgresql/postgresql-15-main.log
# 查看日志会有类似这样的输出：
# starting backup recovery ...
# 恢复完成后：
# database system is ready to accept connections
```

## 3、检查数据并修改数据库为可写状态

恢复后数据库处于只读状态，使用原数据库用户密码登录检查数据是否完整，然后设置为可写。

```sh
pg_ctl promote -D /var/lib/postgresql/data
# 如果pg_ctl命令找不到，到/usr/lib/postgresql/15/bin/目录找找看，有的话使用完整路径

tail -f /var/log/postgresql/postgresql-15-main.log
# 查看日志会有类似这样的输出：
# received promote request
# 完成后：
# database system is ready to accept connections
```
