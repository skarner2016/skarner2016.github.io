# PHP常见问题

### echo、print、print_r、var_dump 区别
**表格标题**

|          |   类型  | 作用  | 
|:---------|:-------|:-------|
| echo     | 语言结构 |输出一个或多个字符串,无返回值(无法赋值给变量,会报语法错误) | 
| print    | 语言结构 |输出(一个)字符串,固定返回1(可以赋值给变量) |
| print_r  | 内置函数 |打印关于变量的信息,如果是array或object,会按一定格式输出 |
| var_dump | 内置函数 |打印变量信息(值/类型/长度) |
||||

- 语言结构: echo、print属于语言结构, 和if、while、function类似
- 内置函数: print_r、var_dump属于内置函数, 和strlen、array_keys类似
- echo、print可以写成函数的方式,如 echo("abc")、 print("abc")
- 函数不可以写成语言结构的方式,如 var_dump "abc" 会报语法错误


### include、require、include_once、require_once 的区别
- require 在出错时产生 ERROR 级别的错误(程序会中止)
- include 在出错时产生 WARNING 级别的错误(程序不会中止)
- xx_once 如果该文件中已经被包含过，则不会再次包含

### Cookie与Session的区别
- Cookie和Session都是用于在Web应用中跟踪用户状态的机制(HTTP无状态)
- 存储位置不同, Cookie保存在客户端(浏览器), Session保存在服务器端
- 容量限制不同, Cookie的存储容量通常有限制（通常为4KB）, Session一般没有固定的容量限制
- Session是基于Cookie, 浏览器禁用了Cookie, Session将无法使用
  
### 传值和传引用的区别
- 传值导致对象生成了一个拷贝
- 传引用则可以用两个变量指向同一个内容(同一个内存地址)
