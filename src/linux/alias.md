# Linux命令别名

## git

```
alias g="git"
alias gst="git status"
alias gc="git commit"
alias gco="git checkout"
alias ga="git add"
alias gm="git merge"

# git pull xx
alias gloc="git pull origin v2.3.0"
alias glos="git pull origin skarner"
alias glod="git pull origin dev"
alias glot="git pull origin test"
alias glop="git pull origin prepare"
alias glom="git pull origin master"

# git push xx
alias gpoc="git push origin v2.3.0"
alias gpos="git push origin skarner"
alias gpod="git push origin dev"
alias gpot="git push origin test"
alias gpop="git push origin prepare"
alias gpom="git push origin master"
```

## php

```
alias art="php artisan"
alias webman="php webman"
alias webman_start="php start.php start"
```

## docker

```
alias dc="docker-compose"
alias de="docker exec"
alias docker-ip="docker inspect -f '{{range.NetworkSettings.Networks}}{{.IPAddress}}{{end}}'"
```
