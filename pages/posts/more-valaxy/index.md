---
title: Valaxy博客，继续完善!
date: 2025-07-21
updated: 2025-07-21
categories: Valaxy博客
tags:
  - valaxy博客
top: 2
---

## 对搭建好的博客进行大改造

#### 需求分析

博客现在功能还是不够完善，比如搜索和评论就没有。

因为是静态页面网站，我们就需要引入第三方组件。

（云游君有现成方案，直接搬运）

怎么方便怎么来 直接 beaudar（评论）+ funs（静态搜索）



解决了功能问题，还有一个加载速度问题。

因为是 github 国外站点，不开加速器访问还是有点慢。

我首先想的就是CDN（内容分发）进行加速，接下来就是技术筛选。

1. 七牛云（CDN）

2. 京东域名（之前就有域名）

3. github pages（托管服务器）



#### 部署环节

##### beaudar（评论）

1. 在valaxy.config.ts修改

```typescript
export default defineValaxyConfig<UserThemeConfig>({
	siteConfig: {
        // 启用评论
        comment: {
          enable: true
        }
	},
})
```

2. 在根目录下创建App.vue

```vue
<script lang="ts" setup>
// do script
import { onMounted } from 'vue'

onMounted(() => {
  const utterScript = document.createElement('script')

  //utterScript.src = 'https://utteranc.es/client.js'
  utterScript.src = '  https://beaudar.lipk.org/client.js'

  utterScript.async = true
  utterScript.crossOrigin = 'anonymous'

  utterScript.setAttribute('repo', '自己的仓库')
  utterScript.setAttribute('branch', 'main')
  utterScript.setAttribute('issue-term', 'pathname')
  utterScript.setAttribute('label', 'utterances')
  utterScript.setAttribute('loading', 'false')
  utterScript.setAttribute('theme', 'github-light')

  // 挂载至 .comment，你也可以通过修改 selector 挂载至其他地方
  const commentContainer = document.querySelector('.comment')
  if (commentContainer)
    commentContainer.appendChild(utterScript)
})
</script>

<template>
  <!-- try it -->
  <div></div>
</template>
```

3. 在根目录下创建beaudar.json

```json
{
  "origins": [
    "https://自己的域名", #那些域名可以发布评论
  ]
}
```

4. 安装 https://beaudar.lipk.org 到博客仓库

##### fuse（静态搜索）

1. 修改site.config.ts文件

```typescript
export default defineSiteConfig({
  	search: {
    	enable: true,
    	type: 'fuse',
  	},
  	fuse: {
    	options: {
      		keys: ['title', 'tags', 'categories', 'excerpt', 'content'],
      		/**
       		* @default 0.5
           	* @see https://www.fusejs.io/api/options.html#threshold
           	* 设置匹配阈值，越低越精确
           	*/
          	// threshold: 0.6,
          	/**
           	* @default false
           	* @see https://www.fusejs.io/api/options.html#ignoreLocation
           	* 忽略位置
           	* 这对于搜索文档全文内容有用，若无需全文搜索，则无需设置此项
           	*/
      		ignoreLocation: true,
    	},
  	}
})
```

##### 七牛云（CDN加速）

```
方案：七牛云（CDN）+ 京东域名（之前就有域名）+ github pages（托管服务器）

流程： www.域名 --CNAME--> 七牛域名 --加速配置--> blog.域名  --CNAME--> github域名
```

1. 先在京东云解析 **blog.域名**到**github域名**，在github的设置pages添加**blog.域名**（每次上传都需要重新解析）

2. 来到七牛云选择添加域名 加速域名是**www.域名** 回源域名是**blog.域名** 选择小图片（其他随便）
3. 复制七牛云的CNAME到京东云解析 **www.域名**到**七牛域名**



#### 总结

每天都没有时间，摆烂了。随心所欲的更新吧！





