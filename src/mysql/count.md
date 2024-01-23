# MySQL count()函数

## count() 简介

count() 是一个聚合函数，函数的参数不仅可以是字段名，也可以是其他任意表达式，该函数作用是统计符合查询条件的记录中，函数指定的参数不为 NULL 的记录有多少个。

## count(*) 和 count(1)

#### 在 MySQL 5.7 的官方手册中有这么一句话
- "InnoDB handles SELECT COUNT(\*) and SELECT COUNT(1) operations in the same way. There is no performance difference."
- "InnoDB以相同的方式处理SELECT COUNT（\*）和SELECT COUNT（1）操作，没有性能差异。"

#### 执行方式
MySQL逐行查询记录,如果表达式 count(\*)/count(1) 不为NULL,则加记录数1, 因为count(*) 实质会转化为 count(0), count(0)和count(1) 总是不为NULL

## count(id)
#### 执行方式
MySQL逐行查询记录,如果表达式 count(id) 不为NULL,则加记录数1
会去判断id的值,故效率略低于count(*)和count(1)

## 结论
count(*) = count(1) > count(id) >= count(xx)






