---
layout: post
title:  "AlmaLinux10 部署备忘"
date:   2026-09-23
categories: post
---

```bash
dnf install java
dnf install postgresql

dnf install almalinux-release-devel
dnf install redis

dnf install snapd
snap install --classic certbot
ln -s /snap/bin/certbot /usr/bin/certbot
```
