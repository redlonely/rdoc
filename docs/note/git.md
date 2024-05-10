---
layout: doc
date: 2024-03-11
---

# Git 笔记

> 不同的公司，技术团队在代码仓库中的协同工作流程可能会有不同。

## Git 命令

### 常用命令

| 命令                         | 描述                         |
| ---------------------------- | ---------------------------- |
| `git init`                   | 初始化本地仓库               |
| `git clone <url>`            | 克隆远程仓库到本地           |
| `git add <file>`             | 将文件添加到暂存区           |
| `git commit -m "message"`    | 提交暂存区中的文件到本地仓库 |
| `git status`                 | 查看工作区状态               |
| `git log`                    | 查看提交日志                 |
| `git branch`                 | 查看本地分支                 |
| `git checkout <branch_name>` | 切换到指定分支               |
| `git merge <branch_name>`    | 将指定分支合并到当前分支     |
| `git pull`                   | 拉取远程仓库最新内容到本地   |
| `git push`                   | 推送本地修改到远程仓库       |
| `git remote -v`              | 查看远程仓库地址             |
| `git tag <tag_name>`         | 创建标签                     |
| `git diff`                   | 查看工作区与暂存区的差异     |
| `git stash`                  | 暂存当前的改动               |

### 仓库管理

| 命令                          | 描述                   |
| ----------------------------- | ---------------------- |
| `git init`                    | 初始化本地仓库         |
| `git clone <url>`             | 克隆远程仓库到本地     |
| `git remote -v`               | 查看远程仓库地址       |
| `git remote add origin <url>` | 添加远程仓库地址       |
| `git remote remove <name>`    | 删除指定名称的远程仓库 |

### 提交和修改管理

| 命令                           | 描述                                       |
| ------------------------------ | ------------------------------------------ |
| `git add <file>`               | 将文件添加到暂存区                         |
| `git add .`                    | 添加所有修改文件到暂存区                   |
| `git commit -m "message"`      | 提交暂存区中的文件到本地仓库               |
| `git reset <file>`             | 重置指定文件到上一次提交的状态             |
| `git reset --hard HEAD`        | 重置工作区和暂存区到上一次提交的状态       |
| `git reset --hard <commit_id>` | 重置工作区、暂存区和本地仓库到指定提交状态 |
| `git rm <file>`                | 删除文件并将这次删除放入暂存区             |
| `git mv <old_file> <new_file>` | 移动文件并将这次移动放入暂存区             |
| `git stash`                    | 暂存当前的改动                             |
| `git stash list`               | 查看所有的暂存记录                         |
| `git stash apply`              | 恢复最新的暂存记录                         |
| `git stash apply <stash_id>`   | 恢复指定的暂存记录                         |
| `git stash drop`               | 删除最新的暂存记录                         |
| `git stash drop <stash_id>`    | 删除指定的暂存记录                         |
| `git stash pop`                | 恢复并删除最新的暂存记录                   |
| `git stash pop <stash_id>`     | 恢复并删除指定的暂存记录                   |

### 分支管理

| 命令                            | 描述                           |
| ------------------------------- | ------------------------------ |
| `git branch`                    | 查看本地分支                   |
| `git branch <branch_name>`      | 创建新分支                     |
| `git checkout <branch_name>`    | 切换到指定分支                 |
| `git checkout -b <branch_name>` | 创建并切换到新分支             |
| `git merge <branch_name>`       | 将指定分支合并到当前分支       |
| `git rebase <branch_name>`      | 将当前分支的提交衍合到指定分支 |
| `git rebase -i <commit_id>`     | 交互式地重新提交               |

### 版本控制和日志

| 命令                                             | 描述                   |
| ------------------------------------------------ | ---------------------- |
| `git log`                                        | 查看提交日志           |
| `git tag <tag_name>`                             | 创建标签               |
| `git tag -a <tag_name> -m "message" <commit_id>` | 带注释的标签           |
| `git tag -d <tag_name>`                          | 删除标签               |
| `git push --tags`                                | 推送所有标签到远程仓库 |
| `git fetch --tags`                               | 拉取远程仓库的所有标签 |

### 同步和远程操作

| 命令       | 描述                       |
| ---------- | -------------------------- |
| `git pull` | 拉取远程仓库最新内容到本地 |
| `git push` | 推送本地修改到远程仓库     |

### 其他

| 命令                                                     | 描述                                   |
| -------------------------------------------------------- | -------------------------------------- |
| `git status`                                             | 查看工作区状态                         |
| `git diff`                                               | 查看工作区与暂存区的差异               |
| `git diff --cached`                                      | 查看暂存区与最新提交的差异             |
| `git diff HEAD`                                          | 查看工作区与最新提交的差异             |
| `git remote show origin`                                 | 查看远程仓库详细信息                   |
| `git clean -n`                                           | 列出将要被删除的未跟踪文件             |
| `git clean -f`                                           | 删除当前目录下所有未跟踪的文件         |
| `git clean -fd`                                          | 删除当前目录下所有未跟踪的文件和文件夹 |
| `git cherry-pick <commit_id>`                            | 挑选指定提交并将其应用到当前分支       |
| `git bisect start`                                       | 启动二分查找                           |
| `git bisect bad`                                         | 声明当前版本有问题                     |
| `git bisect good <commit_id>`                            | 声明指定版本正常                       |
| `git bisect reset`                                       | 重置二分查找状态                       |
| `git config --global user.name "Your Name"`              | 设置用户名称                           |
| `git config --global user.email "youremail@example.com"` | 设置用户邮箱                           |
| `git config --global alias.<alias_name> "<git_command>"` | 设置别名                               |

### git rebase

合并提交记录

rebase 命令很强大，`git rebase -i HEAD~[num]` 和 `git pull --rebase` 等。

> 推荐阅读 [彻底搞懂 Git-Rebase](http://jartto.wang/2018/12/11/git-rebase/)

### git reflog

查看完整信息

### git stash

平常需要切换分支，但有时候又不想要立即 commit 上去，于是可以通过 `git stash` 备份一下，主要的一些命令如下：

备份当前改动

```sh
git stash
```

查看备份列表

```sh
git stash list
```

恢复备份的改动

```sh
git stash pop
```

- 查看完整信息

```sh
git reflog
```


## 分支协作

### 分支协作注意事项

- `小步提交`：尽量将修改拆分成小的、相关的提交，方便追溯和回滚。
- `清晰的提交信息`：提交信息应该清晰地描述所做的修改，方便他人理解。
- `及时的测试`：在修改后及时进行测试，确保修复的 bug 不会引入新的问题。
- `审查与反馈`：积极参与团队审查，及时响应反馈并进行修正。
- `避免直接推送到主要分支`：尽量避免直接向主要分支推送

### 修复BUG

1. 收到修复BUG任务，迁出新分支用来修复BUG

```sh
git checkout -b fix-bug-branch my-dev
```

2. 完成修复，准备提交修改，并迁回开发分支

```sh
git add .
git commit -m 'fix: 修复的内容'
```


## 分支操作

### 删除其它分支

这个是我经常会用到的，因为本地开发多次之后，使用 `git branch` 之后会发现有很多分支还在，为了保证「干净卫生」，所以就了解一下，可以执行如下命令。

- 增强命令（master）

> 可以删除除开 master 以外的分支，但类似 `mr/master/xxx` 这样的带有 master 的删除不了。

```sh
git stash && git checkout master && git branch | grep -v "master" | xargs git branch -D
```

- 增强命令（main）

> 同上。

```sh
git stash && git checkout main && git branch | grep -v "main" | xargs git branch -D
```

- 增强命令（release）

> 同上。

```sh
git stash && git checkout release && git branch | grep -v "release" | xargs git branch -D
```

## 提交规范

推荐使用 `cz-git` + `commitizen`

## 书写工具辅助

第一种：

全局安装 `commitizen`，即可使用 `git cz` 命令取代 `git commit`，提供交互式选择界面，协助书写。

```sh
npm install -g commitizen cz-conventional-changelog
echo '{ "path": "cz-conventional-changelog" }' > ~/.czrc
```

> 参考阅读 [Commit Message](https://coding.net/help/docs/ci/practice/lint/git-commit.html#install)