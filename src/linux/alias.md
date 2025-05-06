# Linux命令别名

## git

```
CURRENT_VERSION="v2.4.0"
# git
alias g="git"
alias gst="git status"
alias gc="git commit"
alias gco="git checkout"
alias gcoc="git checkout $CURRENT_VERSION"
alias ga="git add"
alias gm="git merge"
alias gmc="git merge $CURRENT_VERSION"

# git pull xx
alias glo="git pull origin"
alias gloc="git pull origin $CURRENT_VERSION"
alias glos="git pull origin skarner"
alias glod="git pull origin dev"
alias glot="git pull origin test"
alias glop="git pull origin prepare"
alias glom="git pull origin master"

# git push xx
alias gpo="git push origin"
alias gpoc="git push origin $CURRENT_VERSION"
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
