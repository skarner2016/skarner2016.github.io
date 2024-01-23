# Ubuntu安装PHP8

## 更新软件包列表，并更新软件
```bash
apt update && apt upgrade 
```

## 切换源
```bash
apt install software-properties-common

add-apt-repository ppa:ondrej/php
```

## 更新软件包列表
```bash
apt update
```
## 安装你想要的PHP版本,如php8.0

```bash
apt-get install php8.0 php8.0-fpm

```
## 安装常用的php扩展，如 mysql、redis、mbstring
```bash
apt-get install php8.0-mysql php8.0-redis php8.0-mbstring 
```