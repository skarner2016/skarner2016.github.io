# PHP开发规范

### 参考

[PSR-1](https://www.php-fig.org/psr/psr-1)

[PSR-4](https://www.php-fig.org/psr/psr-4)

[PSR-12](https://www.php-fig.org/psr/psr-12)

[PHP: The Right Way](https://github.com/codeguy/php-the-right-way)

[Clean Code PHP](https://github.com/piotrplenik/clean-code-php)

### 定义【什么是好的代码？ 清晰、健壮、可维护】

- 可读性高
- 简洁明了
- 注释恰到好处
- 代码结构、分层清晰易懂
- 安全性高
- 避免使用全局变量，如需使用，确保命名唯一，避免冲突
- 不推荐的写法

```php
// 使用可执行的代码，巨大安全隐患
$code = $_GET['code'];
eval($code);

// 不判断数组键是否存在
echo $user['email'];

// 过于简短、含义模糊
$u = $userService->getUser();

// 带有数字
$data1 = $userService->getUser();

// 深度嵌套
$rating = $score >= 90 ? 'Excellent' : 
          ($score >= 75 ? 'Good' : 
          ($score >= 60 ? 'Pass' : 'Fail'));

// 无意义的注释
// 检查用户名是否为空
if ($username == '') {
    // ...
}

// 使用全局变量
function increment() 
{
    global $counter;
    $counter++;
}
increment();
echo $counter;

// 错误的判断
if (false != $user) {// ...}

// 滥用引用传递


```
### 代码结构
- 缩进： 使用4个空格进行缩进，不是用 Tab
- 空行： 函数、类之间，至少保持1行空行，逻辑代码块之间保留1行空行
- 文件末尾： 确保文件末尾有一个空行（即使用换行结尾）

### 命名

- 目录应使用全小写，如：
```php
.
├── app                           
│   ├── controller                
│   ├── middleware                    
│   ├── process                          
│   └── functions.php             
└──  config                       


```

- 文件名、类名、接口名、Trait名应使用大驼峰命名法，如：

```php
// file: UserService.php
class UserService
{
    // ...
}

// file: ResponseTrait.php
Trait ResponseTrait
{
    // ...
}

```

- 变量名、方法名应使用小驼峰命名法，如：
```php

class UserService
{
    function generateAccessToken()
    {
        // ...
    }
}

$accessToken = (new UserService())->generateAccessToken();

```

- 函数名应使用下划线命名法，如：

```php

# helper.php

function app_path()
{
    // ...
}

```

- 常量名应使用全大写字母，用下划线分割，如 STATUS_INVALID = 2;

```php
# UserModel.php
class UserModel
{
    const STATUS_INVALID = 2;
}

```
- 特定类型的命名规则
```php
class UserController{}

class UserService{}

class UserModel{}

class EmailInterface{}

class ResponseTrait{}

class ParseTokenMiddleware{}

class UserServiceTest{}

// ...

```
