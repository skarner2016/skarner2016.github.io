# Linux命令别名

## git

```
alias g="git"
alias gst="git status"
alias gsts="git status -s"
alias gd="git diff"
alias gdc="git diff --cached"
alias gdh="git diff --HEAD"
alias gl="git pull"
alias glo="git pull origin"
alias glod="git pull origin dev"
alias glom="git pull origin master"
alias glop="git pull origin prepare"
alias glos="git pull origin skarner"
alias glr="git pull --rebase"
alias gp="git push"
alias gpo="git push origin"
alias gpom="git push origin master"
alias gpop="git push origin prepare"
alias gpot="git push origin test"
alias gpod="git push origin dev"
alias gpos="git push origin skarner"
alias gc="git commit"
alias gcm="git commit -m"
alias gcv="git commit -v"
alias gco="git checkout"
alias gr="git remote"
alias grv="git remote -v"
alias grb="git rebase"
alias grbi="git rebase -i"
alias grbc="git rebase --continue"
alias ga="git add"
alias gm="git merge"
alias grsh="git reset"
alias grsh="git reset HEAD"
alias grshh="git reset HEAD --hard"
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
alias do="docker"
```
