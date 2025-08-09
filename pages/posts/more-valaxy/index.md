---
title: Valaxy博客，继续完善!
date: 2025-07-21
updated: 2025-08-09
categories: Valaxy博客
tags:
  - valaxy博客
top: 2
---

## 对搭建好的博客进行大改造

#### 需求分析

博客现在功能还是不够完善，比如**搜索功能**和**评论功能**就完全缺失，这对读者体验影响挺大的。  
因为是静态页面网站，没法自己搞后端服务，所以直接引入成熟的第三方组件最省事。  
（云游君有现成方案，直接搬运过来用）  
怎么方便怎么来——评论用**beaudar**（国内版utterances，访问更快），搜索用**fuse**（轻量静态搜索，不用后端）。

解决了功能问题，还有个老大难：加载速度。  
毕竟博客托管在GitHub Pages，国外服务器不开加速器的话，国内访问经常慢吞吞。  
所以计划用**CDN加速**优化，技术组合直接锁定：  
1. 七牛云（CDN加速服务）  
2. 京东云域名（之前闲置的域名正好用上）  
3. GitHub Pages（基础托管服务器）  

#### 部署环节

##### beaudar（评论功能）

beaudar是基于GitHub Issues的评论工具，国内访问比utterances更稳定，步骤如下：  

1. 先在`valaxy.config.ts`里开启评论开关：  
```typescript
export default defineValaxyConfig<UserThemeConfig>({
	siteConfig: {
        // 启用评论功能
        comment: {
          enable: true
        }
	},
})
```

2. 在根目录创建`App.vue`，用于挂载评论组件：  
```vue
<script lang="ts" setup>
// 页面加载后注入beaudar脚本
import { onMounted } from 'vue'

onMounted(() => {
  const utterScript = document.createElement('script')

  // 国内加速地址，比官方地址更快
  utterScript.src = 'https://beaudar.lipk.org/client.js'

  utterScript.async = true
  utterScript.crossOrigin = 'anonymous'

  // 替换为自己的仓库信息
  utterScript.setAttribute('repo', '用户名/仓库名') // 例如：'xxx/xxx-blog'
  utterScript.setAttribute('branch', 'main') // 博客部署的分支
  utterScript.setAttribute('issue-term', 'pathname') // 用路径作为评论标识
  utterScript.setAttribute('label', 'utterances') // 评论对应的Issue标签
  utterScript.setAttribute('loading', 'false') // 懒加载
  utterScript.setAttribute('theme', 'github-light') // 评论区主题

  // 挂载到页面的.comment容器（主题默认会生成这个容器）
  const commentContainer = document.querySelector('.comment')
  if (commentContainer)
    commentContainer.appendChild(utterScript)
})
</script>

<template>
  <!-- 空模板，仅用于注入脚本 -->
  <div></div>
</template>
```

3. 根目录创建`beaudar.json`，配置允许评论的域名（防止跨域问题）：  
```json
{
  "origins": [
    "https://你的博客域名",  // 例如：https://blog.example.com
    "http://localhost:8080"  // 本地开发环境也加上，方便测试
  ]
}
```

4. 最后在GitHub上安装beaudar应用：  
打开 [https://github.com/apps/beaudar](https://github.com/apps/beaudar)，授权绑定你的博客仓库，否则评论无法提交。

##### fuse（静态搜索）

fuse是轻量级的前端搜索库，不用后端接口，直接在浏览器里检索内容，适合静态博客：  

1. 修改`site.config.ts`配置搜索功能：  
```typescript
export default defineSiteConfig({
  	search: {
    	enable: true,  // 开启搜索
    	type: 'fuse',  // 指定用fuse引擎
  	},
  	fuse: {
    	options: {
      		// 搜索匹配的字段：标题、标签、分类、摘要、正文
      		keys: ['title', 'tags', 'categories', 'excerpt', 'content'],
      		/**
       		* 匹配阈值（0-1），越低越精确（0.5是默认值）
           	* 比如设0.3的话，只有很相似的结果才会被匹配到
           	*/
          	// threshold: 0.6,
          	/**
           	* 忽略关键词位置，适合全文搜索
           	* 如果只需要搜索标题/标签，可不开启
           	*/
      		ignoreLocation: true,
    	},
  	}
})
```

配置后重新构建，博客页面会自动出现搜索框，输入关键词就能匹配内容啦～

##### 七牛云（CDN加速）

核心思路：用七牛云CDN缓存GitHub Pages的内容，通过自己的域名访问，提升国内加载速度。  
**流程**：`www.你的域名` →（CNAME解析）→ 七牛云加速域名 →（回源）→ `blog.你的域名` →（CNAME解析）→ GitHub Pages域名  

具体步骤：  

1. 先配置GitHub Pages的自定义域名：  
   在GitHub仓库的「Settings → Pages」里，添加`blog.你的域名`作为自定义域名，同时在京东云解析平台将`blog.你的域名`指向GitHub Pages的默认域名（例如`xxx.github.io`）。  
   *注意：每次更新博客后，若GitHub Pages域名有变动，可能需要重新确认解析。*

2. 配置七牛云CDN：  
   - 登录七牛云控制台，进入「CDN → 域名管理」，添加加速域名`www.你的域名`。  
   - 回源配置：设置回源域名是`blog.你的域名`（也就是GitHub Pages的自定义域名）。  
   - 优化配置：图片处理选「小图片优化」，减少图片加载体积。  

3. 绑定CDN域名解析：  
   在京东云解析平台，将`www.你的域名`通过CNAME解析到七牛云分配的加速域名（类似`xxx.qiniucdn.com`）。  

配置完成后，访问`www.你的域名`就会通过七牛云CDN加载内容，速度会比直接访问GitHub Pages快很多～

#### 总结一下

折腾了大半天，总算把评论、搜索和加速都搞定了！  
虽然每天时间不多，但一点点完善博客的感觉还是挺爽的～  
后续就随心所欲更新内容吧，功能这块暂时够用啦～