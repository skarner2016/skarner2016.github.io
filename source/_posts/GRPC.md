---
title: GRPC实践(一):helloworld
date: 2023-03-09 21:28:50
tags:
- GRPC
categories: 
- GRPC
---

#### 1.安装插件
```
    go install google.golang.org/protobuf/cmd/protoc-gen-go@v1.28
    go install google.golang.org/grpc/cmd/protoc-gen-go-grpc@v1.2
```

#### 2.目录结构
[代码地址]<https://github.com/skarner2016/go-grpc>
```
tree
.
|____client
| |____client.go
|____pb
| |____hello_grpc.pb.go
| |____hello.pb.go
| |____hello.proto
|____server
  |____server.go

```

#### 3.hello.proto

```
syntax = "proto3";

option go_package = "./";

package pb;

service Hello {
    //一个SayHello的方法
    rpc SayHello (HelloRequest) returns (HelloResp) {}
}

// 定义发送请求信息
message HelloRequest {
    // 定义发送的参数
    // 参数类型 参数名 标识号(不可重复)
    string name = 1;

}

// 定义响应信息
message HelloResp {
    string message = 1;
}

```

#### 4.编译 proto 文件，生成 hello.pb.go、hello_grpc.pb.go
```
protoc --go_out=. --go_opt=paths=source_relative \
    --go-grpc_out=. --go-grpc_opt=paths=source_relative \
    pb/hello.proto
```

#### 5.GRPC Server代码
```
package main

import (
	"context"
	pb "go-grpc/pb"
	"log"
	"net"

	"google.golang.org/grpc"
)

type HelloService struct {
	pb.UnimplementedHelloServer
}

func (s *HelloService) SayHello(ctx context.Context, req *pb.HelloRequest) (*pb.HelloResp, error) {
	log.Println(req.Name)

	return &pb.HelloResp{
		Message: "hello " + req.Name,
	}, nil
}

const (
	Addr    string = ":8080"
	Network string = "tcp"
)

func main() {
	listener, err := net.Listen(Network, Addr)
	if err != nil {
		log.Panic("net.Listen err: %v", err)
	}

	log.Println(Addr + " net.Listening...")

	grpcServer := grpc.NewServer()

	pb.RegisterHelloServer(grpcServer, &HelloService{})

	err = grpcServer.Serve(listener)

	if err != nil {
		log.Panic("grpcServer.Serve err: %v", err)
	}
}


```

#### 6.启动 GRPC Server 服务
```
go run server/server.go
```

#### 7.GRPC Client 代码
```
package main

import (
	"context"
	"log"

	pb "go-grpc/pb"

	"google.golang.org/grpc"
)

const (
	ServerAddr string = ":8080"
)

func main() {
	// 连接服务器
	conn, err := grpc.Dial(ServerAddr, grpc.WithInsecure())
	if err != nil {
		log.Fatalf("net.Connect error: %v", err)
	}

	defer conn.Close()

	grpcClient := pb.NewHelloClient(conn)

	req := pb.HelloRequest{
		Name: "world",
	}

	res, err := grpcClient.SayHello(context.Background(), &req)
	if err != nil {
		log.Fatalf("Call SayHello error: %v", err)
	}

	log.Println(res)
}

```

#### 8.启动 Client，发起请求
```
go run client/client.go

# 可以看到返回 message:"hello world"，至此，demo 完成
```
