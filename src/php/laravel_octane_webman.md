# laravel-fpm/laravel-octane/webman性能对比

## 说明
- 配置: 12核8G
- 运行环境: WSL(Docker)
- 测试方式: 请求直接返回Json
- PHP版本: 8.2 (未开启opcache)
- Laravel版本: 10.42.0 (未做任何优化)
- 笔者注: 我本以为laravel-octane 应该和 webman 的在同一个数量级,没想到差距这么大

## laravel-fpm

附上 php-fpm 的配置
```
pm = dynamic
pm.max_children = 200
pm.start_servers = 50
pm.min_spare_servers = 20
pm.max_spare_servers = 200
```
ab -n 10000 -c 1000 测试结果如下
```
ab -n 10000 -c 1000 http://localhost:80/hello
This is ApacheBench, Version 2.3 <$Revision: 1903618 $>
Copyright 1996 Adam Twiss, Zeus Technology Ltd, http://www.zeustech.net/
Licensed to The Apache Software Foundation, http://www.apache.org/

Benchmarking localhost (be patient)
Completed 1000 requests
Completed 2000 requests
Completed 3000 requests
Completed 4000 requests
Completed 5000 requests
Completed 6000 requests
Completed 7000 requests
Completed 8000 requests
^@Completed 9000 requests
Completed 10000 requests
Finished 10000 requests


Server Software:        nginx/1.25.3
Server Hostname:        localhost
Server Port:            80

Document Path:          /hello
Document Length:        33 bytes

Concurrency Level:      1000
Time taken for tests:   80.732 seconds
Complete requests:      10000
Failed requests:        0
Total transferred:      12210000 bytes
HTML transferred:       330000 bytes
Requests per second:    123.87 [#/sec] (mean)
Time per request:       8073.239 [ms] (mean)
Time per request:       8.073 [ms] (mean, across all concurrent requests)
Transfer rate:          147.70 [Kbytes/sec] received

Connection Times (ms)
              min  mean[+/-sd] median   max
Connect:        0    2   6.4      0      28
Processing:    84 7735 1590.4   7859   17599
Waiting:       56 7735 1590.4   7859   17599
Total:         84 7737 1586.4   7859   17599

Percentage of the requests served within a certain time (ms)
  50%   7859
  66%   8002
  75%   8107
  80%   8182
  90%   8419
  95%   8709
  98%   9222
  99%  15093
 100%  17599 (longest request)
```

## laravel-octane
ab -n 10000 -c 1000 测试结果如下
```
ab -n 10000 -c 1000 http://localhost:8000/hello
This is ApacheBench, Version 2.3 <$Revision: 1903618 $>
Copyright 1996 Adam Twiss, Zeus Technology Ltd, http://www.zeustech.net/
Licensed to The Apache Software Foundation, http://www.apache.org/

Benchmarking localhost (be patient)
Completed 1000 requests
Completed 2000 requests
Completed 3000 requests
Completed 4000 requests
Completed 5000 requests
Completed 6000 requests
Completed 7000 requests
Completed 8000 requests
Completed 9000 requests
Completed 10000 requests
Finished 10000 requests


Server Software:
Server Hostname:        localhost
Server Port:            8000

Document Path:          /hello
Document Length:        33 bytes

Concurrency Level:      1000
Time taken for tests:   26.674 seconds
Complete requests:      10000
Failed requests:        0
Total transferred:      10540000 bytes
HTML transferred:       330000 bytes
Requests per second:    374.90 [#/sec] (mean)
Time per request:       2667.369 [ms] (mean)
Time per request:       2.667 [ms] (mean, across all concurrent requests)
Transfer rate:          385.88 [Kbytes/sec] received

Connection Times (ms)
              min  mean[+/-sd] median   max
Connect:        0    2   6.3      0      28
Processing:    12 2519 610.6   2651    3657
Waiting:        3 2517 609.7   2651    3657
Total:         31 2521 604.6   2651    3657

Percentage of the requests served within a certain time (ms)
  50%   2651
  66%   2657
  75%   2661
  80%   2665
  90%   3082
  95%   3119
  98%   3134
  99%   3140
 100%   3657 (longest request)
```

## webman
ab -n 10000 -c 1000 测试结果如下
```
ab -n 10000 -c 1000 http://localhost:8001/hello
This is ApacheBench, Version 2.3 <$Revision: 1903618 $>
Copyright 1996 Adam Twiss, Zeus Technology Ltd, http://www.zeustech.net/
Licensed to The Apache Software Foundation, http://www.apache.org/

Benchmarking localhost (be patient)
Completed 1000 requests
Completed 2000 requests
Completed 3000 requests
Completed 4000 requests
Completed 5000 requests
Completed 6000 requests
Completed 7000 requests
Completed 8000 requests
Completed 9000 requests
Completed 10000 requests
Finished 10000 requests


Server Software:        workerman
Server Hostname:        localhost
Server Port:            8001

Document Path:          /hello
Document Length:        33 bytes

Concurrency Level:      1000
Time taken for tests:   0.625 seconds
Complete requests:      10000
Failed requests:        0
Total transferred:      1470000 bytes
HTML transferred:       330000 bytes
Requests per second:    16009.27 [#/sec] (mean)
Time per request:       62.464 [ms] (mean)
Time per request:       0.062 [ms] (mean, across all concurrent requests)
Transfer rate:          2298.21 [Kbytes/sec] received

Connection Times (ms)
              min  mean[+/-sd] median   max
Connect:        0   24   7.1     25      39
Processing:     7   35  23.0     29     140
Waiting:        1   27  23.6     20     126
Total:         29   59  18.9     55     155

Percentage of the requests served within a certain time (ms)
  50%     55
  66%     56
  75%     57
  80%     58
  90%    101
  95%    113
  98%    118
  99%    124
 100%    155 (longest request)
```