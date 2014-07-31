---
layout: post
title:  "chapter5_languages"
date:   2014-07-29 14:25:01
categories: post
---

[原文](http://buildyourownlisp.com/chapter5_languages)

# 编程语言是什么
---

编程语言很像真正的语言。

{% highlight c %}
/* Build a new parser 'Adjective' to recognize descriptions */
mpc_parser_t* Adjective = mpc_or(4, 
  mpc_sym("wow"), mpc_sym("many"),
  mpc_sym("so"),  mpc_sym("such")
);

/* Build a new parser 'Noun' to recognize things */
mpc_parser_t* Noun = mpc_or(5,
  mpc_sym("lisp"), mpc_sym("language"),
  mpc_sym("c"),    mpc_sym("book"),
  mpc_sym("build")
);
{% endhighlight %}