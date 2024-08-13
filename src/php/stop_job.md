# 优雅的停止PHP脚本

当我们在用PHP脚本处理消息队列时，经常会有这样的场景

```php

while(true) {
    // 业务代码 step:1 ...
    // 业务代码 step:2 ...
    // 业务代码 step:n ...
}

```

当我们结束进程，此时业务代码可能执行到任意步骤就停止了
我们期望的是接受到停止的信号，当业务代码执行到n步的时候，再停止程序
这个场景下，我们就可以用 pcntl_signal 来处理信号，直接上代码

```php

function signalHandler($signal) {
    global $running;
    if (in_array($signal, [SIGINT, SIGTERM])) {
        echo "$signal received. Stopping gracefully...\n";
        $running = false;
    }
}

pcntl_signal(SIGINT, 'signalHandler');
pcntl_signal(SIGTERM, 'signalHandler');

$running = true;

while($running) {
    // 业务代码 step:1 ...
    // 业务代码 step:2 ...
    // 业务代码 step:n ...
    // 处理信号
    pcntl_signal_dispatch(); 
}

```