---
layout: doc
date: 2024-03-11
---

# 笔记

## 常用 Git 命令

- git init
  > 在当前目录中初始化一个新的 Git 仓库。
- git clone [url]
  > 克隆远程仓库到本地。
- git add [file]
  > 将文件添加到暂存区。
- git commit -m "[message]"
  > 提交暂存区的文件到本地仓库，并添加提交信息。
- git status
  > 查看工作区和暂存区的状态。
- git push
  > 将本地仓库的修改推送到远程仓库。
- git pull
  > 从远程仓库拉取最新的修改到本地仓库。
- git branch
  > 查看本地分支。
- git branch [branch_name]
  > 创建一个新的分支。
- git checkout [branch_name]
  > 切换到指定分支。
- git merge [branch_name]
  > 合并指定分支到当前分支。
- git remote -v
  > 查看远程仓库的 URL。
- git log
  > 查看提交历史。
- git reset [file]
  > 从暂存区中移除文件，但保留在工作区。
- git reset --hard
  > 将工作区和暂存区都重置为最近一次提交的状态。
- git stash
  > 将当前的工作区保存到堆栈中。
- git stash pop
  > 从堆栈中恢复最近一次保存的工作区。
- git diff
  > 查看工作区与暂存区的差异。
- git diff --staged
  > 查看暂存区与最后一次提交的差异。
- git remote add [name] [url]
  > 添加一个远程仓库。
