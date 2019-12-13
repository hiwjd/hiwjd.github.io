---
layout: post
title:  "linux删除某些文件外的其他文件"
date:   2019-12-13
categories: post
---

需要先开通shell的增强通配符功能`shopt -s extglob`，见[链接](https://www.tecmint.com/delete-all-files-in-directory-except-one-few-file-extensions/)

```
rm -rf !(pattern1|parttern2)

# 比如 rm -rf !(a|a.tar.gz) 会删除当前目录下除了a和a.tar.gz之外的文件/目录
```
