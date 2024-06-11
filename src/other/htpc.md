# HTPC(PT+QB+Jellyfin+Infuse)

### 为了可以通过公网访问家里的服务器（qb、samba、jellyfin，通过 Infuse连接 jellyfin 完美播放4K 视频）
### 这一套系统我前后折腾了2个月, 为此做了以下工作:
- 反复重装了 N 次系统，从 win11 + Ubuntu双系统到 WSL2 反复切换，最终确定了 WSL2 才是最完美方案
- 换了家里的路由器(为了跑openWRT)
- 换了家里的宽带(为了公网IP，最后发现公网 IP 不重要，可以用 Tailscale 组网)
- 额外购置了一个8T移动硬盘(为了做种，玩过 PT 的应该懂)
- 额外购置了10米网线(之前用的USB网卡, 上传/下载跑不满)
- 额外购置了智能插头（可通过网关远程开启电脑）
- 整套系统跑在 WSL2 的 Dokcer 中, 附上 dockre-compose.yml

```
version: "3"
services:
  qb:
    image: linuxserver/qbittorrent
    container_name: qb
    environment:
      - PUID=1000
      - PGID=1000
      - TZ=Asia/Shanghai # 你的时区
      - UMASK_SET=022
      - WEBUI_PORT=8081 # 将此处修改成你欲使用的 WEB 管理平台端口
    volumes:
      - ./config/qb:/config # 绝对路径请修改为自己的config文件夹
      - ${HTPC_DIR}/downloads:/downloads # 绝对路径请修改为自己的downloads文件夹
      - ${HTPC_DIR}/documentary:/htpc/documentary 
      - ${HTPC_DIR}/movie:/htpc/movie 
      - ${HTPC_DIR}/music:/htpc/music
      - ${HTPC_DIR}/anime:/htpc/anime 
      - ${HTPC_DIR}/audio:/htpc/audio 
      - ${HTPC_DIR}/tv:/htpc/tv 
      - ${HTPC_DIR}/tmp:/htpc/tmp
    ports:
      # 要使用的映射下载端口与内部下载端口，可保持默认，安装完成后在管理页面仍然可以改成其他端口。
      - 6881:6881
      - 6881:6881/udp
      # 此处WEB UI 目标端口与内部端口务必保证相同，见问题1
      - 8081:8081
    restart: unless-stopped

  samba:
    image: dperson/samba
    container_name: samba
    environment:
      - PUID=1000
      - PGID=1000
      - TZ=Asia/Shanghai # 你的时区
    restart: unless-stopped
    ports:
      - 3139:139
      - 8082:445
    volumes:
      - ${HTPC_DIR}:/share
    command: '-p                                              
                -u "skarner;MninzzHkHNg2P8MxBMLYKKYEg"
                -s "share;/share;yes;no;no;skarner;admin;admin;skarner专用"'
    networks:
      - docker_default

  jellyfin:
    image: nyanmisaka/jellyfin:latest
    container_name: jellyfin
    restart: unless-stopped
    environment:
      - PUID=1000
      - PGID=1000
      - TZ=Asia/Shanghai
    volumes:
      - ${HTPC_DIR}:/media
      - ./config/jellyfin/config:/config
      - ./config/jellyfin/cache:/cache
    ports:
      - 8083:8096
    devices:
      - /dev/dri:/dev/dri
    extra_hosts:
      - "api.themoviedb.org:99.86.91.81"
      - "api.themoviedb.org:99.86.91.93"
      - "api.themoviedb.org:99.86.91.26"
      - "api.themoviedb.org:99.86.91.78"
      - "image.tmdb.org:143.244.50.209"
      - "api.thetvdb.org:92.241.234.54"
    networks:
      - docker_default

  iyuu:
    image: iyuucn/iyuuplus
    container_name: iyuu
    environment:
      - PUID=1000
      - PGID=1000
      - TZ=Asia/Shanghai
    volumes:
      - ./config/iyuu:/IYUU/db
      - ./config/qb/qBittorrent/BT_backup:/BT_backup
    ports:
      - 8084:8787
    restart: unless-stopped
    networks:
      - docker_default

networks:
  docker_default:
    driver: bridge
