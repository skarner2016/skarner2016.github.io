# MySQL索引失效

## 索引不生效的情况
- 索引使用了函数、运算

- 使用了模糊查询，如 `%like%`

- 使用了OR条件，可能导致索引失效

- 在查询中使用了强制类型转换，可能会导致索引失效

- 索引的数据类型和查询的数据类型不匹配，可能导致索引失效

- 过度索引，过多的索引可能导致优化器无法选择最佳索引

- 不稳定的数据分布，数据分布不均匀导致索引过于广泛

- 查询条件对索引列使用了!=、 <>、 NOT NULL，可能导致索引失效

- 联合索引A-B-C，只有A、AB、ABC可能用到，WHERE A=x1 AND B > x2 AND C=x3,只能用到A-B