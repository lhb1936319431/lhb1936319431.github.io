---
title: 博客建站之旅——从hexo到Valaxy
date: 2024-09-01
updated: 2024-09-14
categories: Valaxy博客
tags:
  - 博客
  - 建站
top: 1
---

# 开始我的博客建站之旅
欢迎来到我的博客！这是我搭建个人博客的第一篇文章，记录了我的全过程。

## No.1 准备建一个博客？
最近，在学习过程中，我浏览了许多技术大牛的博客，深受启发。于是，我决定创建自己的博客，记录学习和成长。

我之前有过一些搭建网站的经验(部署开源项目)，也利用腾讯云的学生优惠租用过服务器，可惜的是两个月前服务器到期了，原本准备转战阿里云服务器(继续使用学生优惠)。

但回想一下，我一年的服务器使用经验，虽然部署了不少开源项目，但都是浅尝辄止，感觉服务器有点浪费(缺钱)，所以我决定暂时不租服务器。
```
ps：我的Minecraft服务器就此沉默了。缺钱，真是一件痛苦的事情。
```
服务器没有下落，我的博客搭建也一直被搁置，为了搭建博客，我于是开始找能白嫖的服务器。

## No.2 如何白嫖服务器？
关于白嫖服务器，我的需求有几个：

1. 服务器配置不需要太高，博客的访问量不大，不需要太多的性能。

2. 需要一个域名，最好是免费的，而且域名可以绑定到服务器上。

3. 需要周期长的服务器，至少一年以上。以免频繁更换服务器。

- **大厂试用服务器**：首先我是在阿里云、腾讯云、百度云等大厂里面寻找试用服务器，但没有周期合适的。
```
ps：网络新手，不敢去那些小厂商，怕个人信息泄露。
```
- **GitHub Pages**：后来了解到了github pages，可以免费搭建个人博客，而且域名绑定也很方便。
```
ps：永久免费，而且绑定到`github`上，申请`github`账号只用邮箱就可以，也不用担心个人信息泄露。
```
就是国内访问由github pages搭建博客的时候网速有点感人。

## No.3 如何使用github pages服务器？

GitHub Pages是一个静态站点托管服务，以下是搭建步骤：

1. 注册GitHub账号，并创建名为`username.github.io`的仓库。
2. 在仓库根目录下创建`index.html`文件。
3. 访问`https://username.github.io`即可看到博客。
4. 绑定域名，添加DNS解析记录。

## No.4 github pages建站 与 hexo博客框架
我了解到Hexo是一个基于Node.js的博客框架，可以快速搭建个人博客。

配合github pages，可以快速搭建站点，而且绑定域名也很方便。

还能实现动态部署，即博客文章更新后，网站会自动更新。

### 部署Hexo

1. 安装Node.js和环境变量配置。
2. 安装Hexo：`npm install hexo-cli -g`
3. 初始化Hexo博客：`hexo init blog`
4. 安装部署插件：`npm install hexo-deployer-git --save`
5. 配置部署信息并部署：`hexo d`
6. 绑定域名。

## No.5 选择hexo博客主题
博客的搭建到这里已经能完成访问，但博客的外观、布局、功能让我很不满意，所以我开始寻找hexo博客主题。

经过多个主题的尝试，我最终选择了hexo-theme-yun主题。

主题安装方法：

1. 下载主题，`npm install hexo-theme-yun@latest`
2. 修改Hexo配置文件，在`blog/_config.yml`文件中添加以下内容：`theme: yun`
3. 增加主题配置`blog/_yun_config.yml`文件，修改主题样式。
4. 重新部署博客，`hexo d`

到了这里，我原本以为我的博客搭建已经圆满完成，但事实上这还只是刚刚开始。

我在对hexo-theme-yun主题进行配置时，发现云游君已经放弃开发该主题了。

更让我难受的是，云游君的主题文档写了valaxy博客框架，经过一番对比，我发现我无法忍受自己不能使用valaxy框架。

于是一切推到重来，我开始重新搭建博客，这次我选择了Valaxy框架。

## No.6 Valaxy博客框架
Valaxy博客框架是一个基于node.js的博客框架，可以快速搭建个人博客。

1. 安装node.js，并配置环境变量。
2. 安装Valaxy，`npm install valaxy-cli -g`
3. 初始化Valaxy博客，`valaxy init blog`
4. 安装Valaxy-theme-yun，`npm install valaxy-theme-yun --save`
5. 配置Valaxy-theme-yun，在`blog/_config.yml`文件中添加以下内容：`theme: yun`
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

