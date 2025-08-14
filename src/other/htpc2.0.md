# HTPC 2.0

### 又过了一年，必须开始新一轮的折腾

- 因为 openWRT 不稳定，偶尔会断网， 又刷回了原来小米的系统
- 重新装了移动的宽带，大内网没有了公网IP， DDNS用不了，只能用Tailscale了
- N年前的电脑从老家带回来了，装了fnOS, 超乎意料的好用，特别是 fnOS 的飞牛影视（仍然保留了Jellyfin）
- 不想折腾 PT 了，去掉了 iyuu
- fnOS 真香

### 
#### QB

```
services:
    qb:
        container_name: qb
        deploy:
            resources:
                limits:
                    cpus: "0"
                    memory: "0"
        environment:
            - PUID=1000
            - PGID=1000
            - UMASK_SET=022
            - TZ=Asia/Shanghai
            - WEBUI_PORT=8181
            - TORRENTING_PORT=48181
        image: linuxserver/qbittorrent:5.1.0
        labels:
            createdBy: Apps
        networks:
            - app
        ports:
            - 48181:48181
            - 48181:48181/udp
            - 8181:8181
        restart: always
        volumes:
            - ./config:/config
            - /vol2/downloads/qb:/downloads
```

#### navidrome

```
services:
    navidrome:
        container_name: navidrome
        deploy:
            resources:
                limits:
                    cpus: "0"
                    memory: "0"
        environment:
            - PUID=1000
            - PGID=1000
        image: deluan/navidrome:0.55.2
        networks:
            - app
        ports:
            - 4533:4533
        restart: always
        volumes:
            - ./data/data:/data
            - /vol2/downloads/qb/yinyue:/music:ro

```
#### jellyfin

```
services:
    jellyfin:
        container_name: jellyfin
        deploy:
            resources:
                limits:
                    cpus: "0"
                    memory: "0"
        image: jellyfin/jellyfin:10.10.7
        labels:
            createdBy: Apps
        networks:
            - app
        ports:
            - 8096:8096
        restart: always
        volumes:
            - ./data/config:/config
            - ./data/cache:/cache
            - /vol2/downloads/qb:/media/media
            # - ~/workspace/data/qb:/media/media
```
#### beszel
```
services:
  beszel:
    image: henrygd/beszel:latest
    container_name: beszel
    restart: always
    networks:
      - app
    ports:
      - 8090:8090
    volumes:
      - ./beszel_data:/beszel_data
      - ./beszel_socket:/beszel_socket

  beszel-agent:
    image: henrygd/beszel-agent:latest
    container_name: beszel-agent
    restart: always
    network_mode: host
    volumes:
      - ./beszel_socket:/beszel_socket
      - /var/run/docker.sock:/var/run/docker.sock:ro
    environment:
      LISTEN: /beszel_socket/beszel.sock
      # 请勿删除密钥周围的引号
      KEY: 'key'
```

#### sun-panel
```
services:
  sun-panel:
    image: "hslr/sun-panel:1.7.0"
    container_name: sun-panel
    volumes:
      - ./conf:/app/conf
      - /var/run/docker.sock:/var/run/docker.sock:ro
    ports:
      - 3002:3002
    restart: always

```
