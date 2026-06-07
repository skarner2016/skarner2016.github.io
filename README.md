# skarner2016.github.io

基于 VitePress 的个人站点。

## 本地开发

```bash
npm install
npm run docs:dev
```

## 本地构建与预览

```bash
npm run docs:build
npm run docs:preview
```

默认预览地址为 `http://localhost:4173`。

## Docker Compose 部署

构建并后台启动：

```bash
docker compose up --build -d
```

访问地址：

```text
http://localhost:8080
```

查看容器状态：

```bash
docker compose ps
```

查看日志：

```bash
docker compose logs -f site
```

停止并移除容器：

```bash
docker compose down
```
