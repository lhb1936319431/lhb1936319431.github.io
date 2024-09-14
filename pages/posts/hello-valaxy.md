---
title: 博客建站-测试!
date: 2024-09-01
updated: 2024-09-14
categories: Valaxy博客
tags:
  - 博客
  - 建站
top: 1
---

# 开始
这是我的第一篇博客文章，欢迎大家来阅读！


第一篇博客也不知道写什么，就随便写写吧。

## No.1 我准备建一个博客的？
最近，在学习过程中，看了一些大佬们的博客，(灵光一闪)我打算创建自己的博客。

之前有过搭建网站(部署开源项目)的经验，利用腾讯云的学生优惠租用过服务器，可惜(难受)就在两个月前，服务器到期了，准备马上转战阿里云服务器。

但回想一下，我一年的服务器使用经验，虽然部署了不少开源项目，但都是浅尝辄止，感觉服务器有点浪费(缺钱)，所以我决定暂时不租服务器。
```
ps：我的Minecraft服务器就此沉默了。缺钱，真是一件痛苦的事情。
```
博客没有搭建好我最近心有点痒痒的，于是开始找能白嫖的服务器。

## No.2 如何白嫖服务器？
关于白嫖服务器，我的需求有几个：

1. 服务器配置不需要太高，博客的访问量不大，不需要太多的性能。

2. 需要一个域名，最好是免费的，而且域名可以绑定到服务器上。

3. 需要周期长的服务器，至少一年以上。以免频繁更换服务器。

首先我是在阿里云、腾讯云、百度云等大厂里面寻找试用服务器，但没有周期合适的。
```
ps：网络新手，不敢去那些小厂商，怕个人信息泄露。
```

后来了解到了github pages，可以免费搭建个人博客，而且域名绑定也很方便。
```
ps：永久免费，而且绑定到github上，申请github账号只用邮箱就可以，也不用担心个人信息泄露。
```
就是国内访问由github pages搭建博客的时候网速有点感人。

## No.3 如何使用github pages服务器

GitHub Pages 是一个静态站点托管服务，它直接从 GitHub 仓库中获取 HTML、CSS 和 JavaScript 文件，然后为用户托管一个网站。

GitHub Pages 是为个人、项目或组织提供的一种简单的方式来搭建和发布静态网页。

1. 注册github账号，并创建一个仓库，仓库名为`username.github.io`，其中`username`为你的github用户名。

2. 在仓库的根目录下创建一个名为`index.html`的文件，并在其中写入博客文章。

3. 访问`https://username.github.io`即可看到你的博客文章。

4. 绑定域名，在域名服务商处添加解析记录，将域名指向`username.github.io`。

## No.4 github pages建站 与 hexo博客
关于搭建博客，最开始我了解到了hexo博客，它是一个基于node.js的博客框架，可以快速搭建个人博客。

配合github pages，可以快速搭建站点，而且绑定域名也很方便。

还能实现动态部署，即博客文章更新后，网站会自动更新。

部署方法：

1. 安装node.js，并配置环境变量。

2. 安装hexo，`npm install hexo-cli -g`

3. 初始化hexo博客，`hexo init blog`

4. 安装hexo-deployer-git，`npm install hexo-deployer-git --save`

5. 配置hexo-deployer-git，在`blog/_config.yml`文件中添加以下内容：
```
deploy:
  type: git
  repo: https://github.com/username/username.github.io.git
  branch: master
```

6. 部署博客，`hexo d`

7. 绑定域名，在域名服务商处添加解析记录，将域名指向`username.github.io`。

## No.5 hexo博客主题
博客的搭建到这里已经能完成访问，但博客的外观、布局、功能让我很不满意，所以我开始寻找hexo博客主题。

经过多个主题的尝试，我最终选择了`hexo-theme-yun`主题。

主题安装方法：

1. 下载主题，`npm install hexo-theme-yun@latest`

2. 修改hexo配置文件，在`blog/_config.yml`文件中添加以下内容：`theme: yun`

3. 增加主题配置`blog/_yun_config.yml`文件，修改主题样式。

4. 重新部署博客，`hexo d`

到了这里，我原本以为我的博客搭建已经圆满完成，但事实上这还只是刚刚开始。

我在对`hexo-theme-yun`主题进行配置时，发现`云游君`已经放弃开发该主题了。

更让我难受的是，`云游君`的主题文档写了valaxy博客框架，经过一番对比，我发现我无法忍受自己不能使用valaxy框架。

于是一切推到重来，我开始重新搭建博客，这次我选择了`Valaxy`框架。

## No.6 Valaxy博客框架
Valaxy博客框架是一个基于node.js的博客框架，可以快速搭建个人博客。

1. 安装node.js，并配置环境变量。

2. 安装Valaxy，`npm install valaxy-cli -g`

3. 初始化Valaxy博客，`valaxy init blog`

4. 安装Valaxy-theme-yun，`npm install valaxy-theme-yun --save`

5. 配置Valaxy-theme-yun，在`blog/_config.yml`文件中添加以下内容：
```
theme: yun
```

6. 部署博客，`valaxy d`

7. 绑定域名，在域名服务商处添加解析记录，将域名指向`username.github.io`。

## No.7 Valaxy博客框架主题

1. 下载主题，`npm install valaxy-theme-yun@latest`

2. 修改Valaxy配置文件，在`blog/_config.yml`文件中添加以下内容：`theme: yun`

3. 增加主题配置`blog/_yun_config.yml`文件，修改主题样式。

4. 重新部署博客，`valaxy d`

到这里，Valaxy博客框架的搭建已经完成，博客的外观、布局、功能都可以自定义。

## No.8 总结

第一次写博客，写得不好，还请见谅。

博客搭建过程有比较曲折的地方，比如：我的git始终无法连接github。github pages设置也有问题。valaxy-theme-yun主题配置不太能看得懂。

