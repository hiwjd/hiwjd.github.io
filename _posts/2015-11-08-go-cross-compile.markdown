---
layout: post
title:  "go交叉编译备忘"
date:   2015-11-08 22:30:01
categories: post
---


golang 1.5 交叉编译老是忘掉，记着备忘
[golang支持的系统和架构](https://golang.org/doc/install/source#environment)

{% highlight bash %}
env GOOS=linux GOARCH=arm go build
{% endhighlight %}
