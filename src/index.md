---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "Skarner's website"
  # text: "skarner's website"
  # tagline: My great project tagline
  # image:
    # src: /logo.png
    # alt: VitePress
  # actions:
  #   - theme: brand
  #     text: MySQL Replication
  #     link: /mysql/replication
  #   - theme: alt
  #     text: Powered By Vitepress
  #     link: https://github.com/vuejs/vitepress

features:
  - icon:
      src: /images/icon/php.svg
    title: PHP常见问题
    link: php/qa
    details: PHP常见问题

  - icon:
      src: /images/icon/php.svg
    title: Laravel/Ocane/Webman性能对比
    link: php/laravel_octane_webman
    details: Laravel/Ocane/Webman性能对比
    
  - icon:
      src: /images/icon/mysql.svg
      # alt: VitePress
    title: MySQL主从同步
    # details: MySQL主从同步的配置
    link: /mysql/replication
    details: MySQL主从同步的配置
    # linkText: MySQL主从同步

  - icon:
      src: /images/icon/mysql.svg
    title: MySQL命名规范
    link: /mysql/standard
    details: MySQL库、表、字段、索引的命名规范

  - icon:
      src: /images/icon/mysql.svg
    title: MySQL索引失效
    link: /mysql/index_invalid
    details: MySQL索引失效的情况

  - icon:
      src: /images/icon/mysql.svg
    title: MySQL count()函数
    link: /mysql/count
    details: MySQL count(*)、count(1)、count(id)、count(other)效率对比

  - icon:
      src: /images/icon/redis.svg
    title: Redis命名规范
    link: /redis/standard
    details: Redis命名规范

  - icon:
      src: /images/icon/linux.svg
    title: Ubuntu安装PHP8
    link: linux/install-php8-on-ubuntu
    details: Ubuntu安装PHP8及扩展的详细步骤

  - icon:
      src: /images/icon/linux.svg
    title: Linux命令的别名
    link: linux/alias
    details: Linux命令的别名,包含git、docker等

  - icon:
      src: /images/icon/php.svg
    title: PHP8-JIT
    link: php/jit
    details: PHP8-JIT简介
---

