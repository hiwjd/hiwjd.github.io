---
layout: post
title:  "解决mysql从库报错中断同步"
date:   2019-12-13
categories: post
---

通过在从库执行`show slave status\G;`命令的结果来观察同步是否存在问题，主要看两个字段：`Slave_IO_Running`和`Slave_SQL_Running`，都显示`yes`时就基本没毛病了，最好到库里去看下实际的数据是否和主库一致。

当`Slave_IO_Running`显示no时，表示同步binlog文件就有问题，可以检查下面几个问题：

1. 同步用的帐号密码是否正确
2. 同步用的帐号是否有从库所在服务器的权限

这里我们着重讲`Slave_SQL_Running`为no时的情况。当`Slave_SQL_Running`为no时，表示执行sql时有报错，这个时候需要观察引起报错的sql是不是可以忽略的，如果是可以忽略的，跳过该条sql对应的gtid即可。具体如下：

```
show slave status\G;
# 通过上面的命令结果中的Executed_Gtid_Set拿到需要跳过的gtid，即Executed_Gtid_Set值+1
# 比如Executed_Gtid_Set: f34e22ca-499a-11e9-82d3-00163e09470c:1-90553
# 则需要跳过的是f34e22ca-499a-11e9-82d3-00163e09470c:90554

stop slave;
# 停止slave

SET GTID_NEXT="f34e22ca-499a-11e9-82d3-00163e09470c:90554";
begin;
commit;
# 跳过出错的gtid

SET GTID_NEXT="AUTOMATIC";
# 恢复gtid为自动

START SLAVE;
# 重新启动slave

show slave status\G;
# 观察下从库状态是否ok
```
