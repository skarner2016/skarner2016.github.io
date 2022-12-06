---
title: ubuntu安装php8.x
date: 2022-11-09 21:23:29
tags:
---

#### 1.更新软件包列表，并更新软件
```
apt update && apt upgrade 
```

#### 2.切换源
```
apt install software-properties-common

add-apt-repository ppa:ondrej/php
```

#### 3.更新软件包列表
```
apt update
```
#### 4.安装你想要的PHP版本,如php8.0

```
apt-get install php8.0 php8.0-fpm

```
#### 5.安装常用的php扩展，如 mysql、redis、mbstring
```
apt-get install php8.0-mysql php8.0-redis php8.0-mbstring 
```