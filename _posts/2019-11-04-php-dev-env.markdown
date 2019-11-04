---
layout: post
title:  "php本地多环境"
date:   2019-11-04
categories: post
---

想给mac上的php添加FreeType支持，搞不定，所以想着可以通过docker来单独启动一个符合需求的php的容器。

创建`Dockerfile`，内容如下：

```
FROM php:7.2-cli
RUN apt-get update && apt-get install -y \
        libfreetype6-dev \
        libjpeg62-turbo-dev \
        libpng-dev \
    && docker-php-ext-install -j$(nproc) iconv \
    && docker-php-ext-configure gd --with-freetype-dir=/usr/include/ --with-jpeg-dir=/usr/include/ \
    && docker-php-ext-install -j$(nproc) gd \
    && docker-php-ext-install mysqli \
    && docker-php-ext-enable mysqli \
    && docker-php-ext-install bcmath \
    && docker-php-ext-enable bcmath \
    && docker-php-ext-install pdo pdo_mysql \
    && docker-php-ext-enable pod pdo_mysql
```

命令行中打包镜像：

```
docker build -t php72 .
```

假设要起项目在`/home/html`目录，根目录在`public`，用php内建服务启动：

```
docker run -it --rm --name my-running-script -p 8888:8888 -v /home/html:/home/html -w /home/html php72 php -S 0.0.0.0:8888 -t public
```

更多php容器相关参看[这里](https://hub.docker.com/_/php)
