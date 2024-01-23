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
---
