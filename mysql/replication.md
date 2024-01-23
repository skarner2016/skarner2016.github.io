# MySQL主从同步 {#mysql-replication}

## 准备 docker-compose-mysql.yml

```yml
version: "3"
services:
  mysql1:
    container_name: mysql1
    image: mysql:latest
    ports:
      - 3301:3306
    command: --default-authentication-plugin=mysql_native_password
    restart: always
    environment:
      MYSQL_ROOT_PASSWORD: 123456

  mysql2:
    container_name: mysql2
    image: mysql:latest
    ports:
      - 3302:3306
    command: --default-authentication-plugin=mysql_native_password
    restart: always
    environment:
      MYSQL_ROOT_PASSWORD: 123456
```

## 修改 MySQL 主从配置，并重启

```
# 默认目录: /etc/mysql/my.cnf
# mysql1 主库
server-id=1               # 服务器ID
log-bin=mysql-bin         # 二进制日志
expire_logs_days=7        # 日志过期清理时间
binlog_format=mixed       # 日志格式 statement、mixed、row
binlog-do-db=notify       # 需要同步的数据库，如果有多个，则再添加一条配置
binlog-do-db=notify1      # 需要同步的数据库，如果有多个，则再添加一条配置
binlog-ignore-db=mysql    # 不同步 mysql 系统数据库

# mysql2 从库
server-id=2
log-bin=mysql-bin
binlog_format=mixed
binlog-do-db=notify
binlog-do-db=notify1
binlog-ignore-db=mysql
```

## 登录主库，创建主从同步的用户

```
# 创建用户
CREATE USER 'slave'@'%' IDENTIFIED BY '123456';
# 授权
GRANT ALL PRIVILEGES ON *.* TO 'slave'@'%' WITH GRANT OPTION;
# 更新权限
flush privileges;
```

## 查看主库状态

```
show master status; # 记录 File，如：mysql-bin.000001
```

## 进入从库，配置主库

```
change master to master_host='mysql1',      # 主库地址
master_user='slave',                        # 连接主库的用户名
master_password='123456',                   # 连接主库的密码
master_port=3306,                           # 连接主库的端口
master_log_file='mysql-bin.000001',         # 主库的 binlog （第四步可以查看）
master_log_pos=1;                           # 从XX开始同步主库
```

## 开启 slave，查看状态

```
start slave;

show slave status \G                      # 查看是否有错误，正常情况 lave_IO_Running: Yes，             Slave_SQL_Running: Yes

```

## 在主库建表，查看从库是否同步创建

```
CREATE TABLE `users` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

```