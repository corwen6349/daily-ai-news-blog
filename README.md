# 每日AI资讯网站 📰

🎉 一个基于 Hugo + 自定义主题的静态资讯展示网站

## 📁 项目结构

```
daily_ai_news_blog/
├── .github/              # GitHub Actions 配置
│   └── workflows/
│       └── deploy.yml    # 自动部署到 GitHub Pages
├── content/              # 内容目录
│   └── posts/           # AI资讯文章存放处
├── themes/              # 主题目录
│   └── ai-daily/        # 自定义 AI Daily 主题
├── hugo.toml            # 网站配置文件（包含敏感信息，已加入 .gitignore）
├── hugo.toml.example    # 配置文件模板
├── public/              # 生成的静态文件（构建后）
├── start-server.bat     # 启动开发服务器
├── build.bat            # 构建生产版本
├── new-post.bat         # 快速创建新文章
└── README.md            # 项目说明文档
```

## ⚙️ 首次配置

### 1. 配置文件设置

复制配置模板并填入你的信息：

```bash
copy hugo.toml.example hugo.toml
```

然后编辑 `hugo.toml`，配置 Gitalk 评论系统：

```toml
[params.gitalk]
  clientID = "你的_GitHub_OAuth_Client_ID"
  clientSecret = "你的_GitHub_OAuth_Client_Secret"
  repo = "daily-ai-news-blog"
  owner = "corwen6349"
  admin = "corwen6349"
```

**获取 Client ID 和 Secret 的步骤：**
1. 访问 https://github.com/settings/developers
2. 点击 "New OAuth App"
3. 填写应用信息（Homepage URL 和 Callback URL 都填写你的 GitHub Pages 地址）
4. 创建后获取 Client ID 和生成 Client Secret

详细配置说明请查看 `GITALK_SETUP.md`

## 🚀 快速开始

### 方法 1：使用批处理脚本（推荐）

1. **启动开发服务器**
   ```
   双击 start-server.bat
   浏览器访问：http://localhost:1313
   ```

2. **创建新文章**
   ```
   双击 new-post.bat
   按提示输入文章标题和文件名
   ```

3. **构建生产版本**
   ```
   双击 build.bat
   静态文件生成在 public\ 目录
   ```

### 方法 2：使用命令行

```bash
# 启动开发服务器
.\hugo.exe server -D

# 创建新文章
.\hugo.exe new posts/my-article.md

# 构建生产版本
.\hugo.exe
```

## ✨ 网站特性

### AI Daily 主题特点

- ✅ **简约现代** - 专为 AI 资讯设计
- 📱 **完全响应式** - 完美支持移动端
- 🌓 **深色/浅色模式** - 右上角一键切换，支持跟随系统
- ⚡ **超快速度** - Hugo 静态站点生成
- 💬 **Gitalk 评论** - 基于 GitHub Issues 的评论系统
- 👁️ **浏览统计** - 不蒜子统计，显示访问量和阅读次数
- 🏷️ **标签分类** - 智能组织内容
- 🎨 **代码高亮** - 支持多种编程语言
- 📊 **网站统计** - 页脚显示总访问量和访客数

### 已配置功能

- ✅ 中文界面
- ✅ 导航菜单（首页、文章、标签、分类）
- ✅ 文章元信息（日期、标签、分类）
- ✅ 文章阅读统计
- ✅ 评论系统
- ✅ 主题切换（深色/浅色/自动）
- ✅ RSS 订阅
- ✅ GitHub Actions 自动部署

## 📝 编写文章

### 文章格式模板

在 `content\posts\` 目录下创建 `.md` 文件：

```markdown
---
title: "文章标题"
date: 2025-11-13T09:00:00+08:00
draft: false          # false=发布, true=草稿
tags: ["AI", "技术"]  # 标签
categories: ["资讯"]  # 分类
description: "文章简介，会显示在列表页"
---

## 标题

正文内容使用 Markdown 格式编写...

- 列表项 1
- 列表项 2

### 子标题

**粗体文字** *斜体文字*

[链接文本](https://example.com)
```

## 🎨 自定义配置

编辑 `hugo.toml` 可修改：
- 网站标题、描述
- 导航菜单
- 评论系统配置
- 统计功能等

## 📦 部署到 GitHub Pages

### 步骤 1：创建 GitHub 仓库

1. 访问 https://github.com/new
2. 创建名为 `daily-ai-news-blog` 的仓库
3. 不要添加 README、.gitignore 或 License

### 步骤 2：推送代码

```bash
# 添加远程仓库（替换为你的 GitHub 用户名）
git remote add origin https://github.com/你的用户名/daily-ai-news-blog.git

# 推送代码
git push -u origin master
```

### 步骤 3：启用 GitHub Pages

1. 进入仓库的 Settings > Pages
2. Source 选择 "GitHub Actions"
3. 保存后会自动部署

详细说明请查看 [GITHUB_PUSH_GUIDE.md](GITHUB_PUSH_GUIDE.md)

## 🔧 常用命令

```bash
# 查看 Hugo 版本
.\hugo.exe version

# 启动服务器（包含草稿）
.\hugo.exe server -D

# 启动服务器（仅发布内容）
.\hugo.exe server

# 创建新文章
.\hugo.exe new posts/文章名.md

# 构建网站
.\hugo.exe

# 清理生成的文件
.\hugo.exe clean
```

## 🔄 更新和提交

```bash
# 查看更改
git status

# 添加所有更改
git add .

# 提交更改
git commit -m "描述你的更改"

# 推送到 GitHub（自动触发部署）
git push
```

## 📚 资源链接

- **Hugo 官方文档**: https://gohugo.io/documentation/
- **Markdown 语法**: https://markdown.com.cn/
- **Hugo 主题库**: https://themes.gohugo.io/
- **Gitalk 文档**: https://github.com/gitalk/gitalk

## 💡 使用技巧

1. **实时预览**：启动服务器后，修改文章会自动刷新浏览器
2. **草稿功能**：设置 `draft: true` 只在开发环境显示
3. **图片资源**：放在 `static\images\` 目录
4. **主题切换**：点击右上角按钮切换深色/浅色模式
5. **评论管理**：评论存储在 GitHub Issues 中，可在仓库管理

## 🆘 常见问题

**Q: 如何修改网站标题？**  
A: 编辑 `hugo.toml` 中的 `title` 字段

**Q: 如何添加新的导航菜单？**  
A: 修改主题的 `layouts/partials/header.html` 文件

**Q: 文章不显示？**  
A: 检查文章的 `draft` 是否为 `false`，或使用 `-D` 参数启动服务器

**Q: 评论功能不工作？**  
A: 确保已正确配置 `hugo.toml` 中的 Gitalk 参数，并启用了仓库的 Issues 功能

**Q: 主题切换不工作？**  
A: 清除浏览器缓存（Ctrl + Shift + R）强制刷新

**Q: 如何保护敏感配置？**  
A: `hugo.toml` 已在 `.gitignore` 中，不会被提交到仓库

## 📞 技术栈

- **静态网站生成器**: Hugo v0.146.0 Extended
- **主题**: AI Daily（自定义）
- **评论系统**: Gitalk
- **统计**: 不蒜子
- **部署**: GitHub Pages + GitHub Actions
- **版本控制**: Git

## ⚠️ 安全注意事项

- ✅ `hugo.toml` 已加入 `.gitignore`，不会提交到仓库
- ✅ 使用 `hugo.toml.example` 作为公开的配置模板
- ⚠️ 请勿将包含 Client Secret 的配置文件提交到公共仓库
- 💡 团队协作时，可通过私密渠道分享真实配置文件

## 📄 许可证

本项目基于 MIT 许可证开源。

---

**祝您创作愉快！** 🎉

如需帮助，请参考：
- [Gitalk 配置指南](GITALK_SETUP.md)
- [GitHub 推送指南](GITHUB_PUSH_GUIDE.md)
- [快速开始指南](QUICK_START.md)




🎉 一个基于 Hugo + PaperMod 主题的静态资讯展示网站[bugs]: https://github.com/gohugoio/hugo/issues?q=is%3Aopen+is%3Aissue+label%3ABug



## 📁 项目结构🎉 一个基于 Hugo + PaperMod 主题的静态资讯展示网站已成功搭建！[contributing]: CONTRIBUTING.md



```[create a proposal]: https://github.com/gohugoio/hugo/issues/new?labels=Proposal%2C+NeedsTriage&template=feature_request.md

daily_ai_news_blog/

├── .github/            # GitHub Actions 配置## 📁 项目结构[documentation repository]: https://github.com/gohugoio/hugoDocs

│   └── workflows/

│       └── deploy.yml  # 自动部署到 GitHub Pages[documentation]: https://gohugo.io/documentation

├── content/            # 内容目录

│   ├── posts/         # AI资讯文章存放处```[dragonfly bsd, freebsd, netbsd, and openbsd]: https://gohugo.io/installation/bsd

│   ├── archives.md    # 归档页面

│   └── search.md      # 搜索页面daily_ai_news_blog/[features]: https://gohugo.io/about/features/

├── themes/            # 主题目录

│   └── PaperMod/      # PaperMod 主题 (Git Submodule)├── hugo.exe              # Hugo 静态网站生成器（v0.146.0）[forum]: https://discourse.gohugo.io

├── archetypes/        # 文章模板

├── hugo.toml          # 网站配置文件├── ai-news-site/         # 网站源码目录[friends]: https://github.com/gohugoio/hugo/graphs/contributors

├── public/            # 生成的静态文件（构建后）

├── start-server.bat   # 启动开发服务器│   ├── content/         # 内容目录[go]: https://go.dev/

├── build.bat          # 构建生产版本

├── new-post.bat       # 快速创建新文章│   │   ├── posts/      # AI资讯文章存放处[hugo modules]: https://gohugo.io/hugo-modules/

├── GITHUB_PUSH_GUIDE.md  # GitHub 推送指南

└── README.md          # 项目说明文档│   │   ├── archives.md # 归档页面[installation]: https://gohugo.io/installation

```

│   │   └── search.md   # 搜索页面[issue queue]: https://github.com/gohugoio/hugo/issues

## 🚀 快速开始

│   ├── themes/         # 主题目录[linux]: https://gohugo.io/installation/linux

### 方法 1：使用批处理脚本（推荐）

│   │   └── PaperMod/   # 简约美观的 PaperMod 主题[macos]: https://gohugo.io/installation/macos

1. **启动开发服务器**

   ```│   ├── hugo.toml       # 网站配置文件[prebuilt binary]: https://github.com/gohugoio/hugo/releases/latest

   双击 start-server.bat

   浏览器访问：http://localhost:1313│   ├── public/         # 生成的静态文件（构建后）[requesting help]: https://discourse.gohugo.io/t/requesting-help/9132

   ```

│   └── README.md       # 详细说明文档[spf13]: https://github.com/spf13

2. **创建新文章**

   ```├── start-server.bat    # 启动开发服务器（一键启动）[static site generator]: https://en.wikipedia.org/wiki/Static_site_generator

   双击 new-post.bat

   按提示输入文章标题和文件名├── build.bat          # 构建生产版本[support]: https://discourse.gohugo.io

   ```

└── new-post.bat       # 快速创建新文章[themes]: https://themes.gohugo.io/

3. **构建生产版本**

   ``````[website]: https://gohugo.io

   双击 build.bat

   静态文件生成在 public\ 目录[windows]: https://gohugo.io/installation/windows

   ```

## 🚀 快速开始

### 方法 2：使用命令行

<a href="https://gohugo.io/"><img src="https://raw.githubusercontent.com/gohugoio/gohugoioTheme/master/static/images/hugo-logo-wide.svg?sanitize=true" alt="Hugo" width="565"></a>

```bash

# 启动开发服务器（需要 hugo.exe）### 方法 1：使用批处理脚本（推荐）

.\hugo.exe server -D

A fast and flexible static site generator built with love by [bep], [spf13], and [friends] in [Go].

# 创建新文章

.\hugo.exe new posts/my-article.md1. **启动开发服务器**



# 构建生产版本   ```---

.\hugo.exe

```   双击 start-server.bat



## ✨ 网站特性   浏览器访问：http://localhost:1313[![GoDoc](https://godoc.org/github.com/gohugoio/hugo?status.svg)](https://godoc.org/github.com/gohugoio/hugo)



### PaperMod 主题优势   ```[![Tests on Linux, MacOS and Windows](https://github.com/gohugoio/hugo/workflows/Test/badge.svg)](https://github.com/gohugoio/hugo/actions?query=workflow%3ATest)

- ✅ **简约美观** - 专注内容展示

- 📱 **完全响应式** - 完美支持移动端[![Go Report Card](https://goreportcard.com/badge/github.com/gohugoio/hugo)](https://goreportcard.com/report/github.com/gohugoio/hugo)

- 🌓 **深色模式** - 自动/手动切换

- ⚡ **超快速度** - Hugo 构建速度极快2. **创建新文章**

- 🔍 **内置搜索** - 快速查找文章

- 🎨 **代码高亮** - 支持多种编程语言   ```[Website] | [Installation] | [Documentation] | [Support] | [Contributing] | <a rel="me" href="https://fosstodon.org/@gohugoio">Mastodon</a>

- 🏷️ **标签分类** - 智能组织内容

- 📊 **社交分享** - 一键分享到社交平台   双击 new-post.bat



### 已配置功能   按提示输入文章标题和文件名## Overview

- ✅ 中文界面

- ✅ 导航菜单（首页、资讯、归档、标签）   ```

- ✅ 文章元信息（日期、阅读时间、标签）

- ✅ 代码复制按钮Hugo is a [static site generator] written in [Go], optimized for speed and designed for flexibility. With its advanced templating system and fast asset pipelines, Hugo renders a complete site in seconds, often less.

- ✅ 面包屑导航

- ✅ RSS 订阅3. **构建生产版本**

- ✅ GitHub Actions 自动部署

   ```Due to its flexible framework, multilingual support, and powerful taxonomy system, Hugo is widely used to create:

## 📝 编写文章

   双击 build.bat

### 文章格式模板

   静态文件生成在 ai-news-site\public\ 目录- Corporate, government, nonprofit, education, news, event, and project sites

在 `content\posts\` 目录下创建 `.md` 文件：

   ```- Documentation sites

```markdown

---- Image portfolios

title: "文章标题"

date: 2025-11-12T09:00:00+08:00### 方法 2：使用命令行- Landing pages

draft: false          # false=发布, true=草稿

tags: ["AI", "技术"]  # 标签- Business, professional, and personal blogs

categories: ["资讯"]  # 分类

description: "文章简介，会显示在列表页"```bash- Resumes and CVs

---

# 启动开发服务器

## 标题

.\hugo.exe server -D --source ai-news-siteUse Hugo's embedded web server during development to instantly see changes to content, structure, behavior, and presentation. Then deploy the site to your host, or push changes to your Git provider for automated builds and deployment.

正文内容使用 Markdown 格式编写...



- 列表项 1

- 列表项 2# 创建新文章Hugo's fast asset pipelines include:



### 子标题.\hugo.exe new posts/my-article.md --source ai-news-site



**粗体文字** *斜体文字*- Image processing &ndash; Convert, resize, crop, rotate, adjust colors, apply filters, overlay text and images, and extract EXIF data



[链接文本](https://example.com)# 构建生产版本- JavaScript bundling &ndash; Transpile TypeScript and JSX to JavaScript, bundle, tree shake, minify, create source maps, and perform SRI hashing.

```

.\hugo.exe --source ai-news-site- Sass processing &ndash; Transpile Sass to CSS, bundle, tree shake, minify, create source maps, perform SRI hashing, and integrate with PostCSS

### 示例文章

```- Tailwind CSS processing &ndash; Compile Tailwind CSS utility classes into standard CSS, bundle, tree shake, optimize, minify, perform SRI hashing, and integrate with PostCSS

项目已包含 3 篇示例文章：

1. **GPT-5即将发布** - 技术突破类

2. **AI医疗新突破** - 应用案例类  

3. **特斯拉FSD更新** - 行业动态类## ✨ 网站特性And with [Hugo Modules], you can share content, assets, data, translations, themes, templates, and configuration with other projects via public or private Git repositories.



## 🎨 自定义配置



编辑 `hugo.toml` 可修改：### PaperMod 主题优势See the [features] section of the documentation for a comprehensive summary of Hugo's capabilities.

- 网站标题、描述

- 导航菜单- ✅ **简约美观** - 专注内容展示

- 主题参数

- 社交链接等- 📱 **完全响应式** - 完美支持移动端## Sponsors



## 📦 部署到 GitHub Pages- 🌓 **深色模式** - 自动/手动切换



### 步骤 1：创建 GitHub 仓库- ⚡ **超快速度** - Hugo 构建速度极快<p>&nbsp;</p>



1. 访问 https://github.com/new- 🔍 **内置搜索** - 快速查找文章<p float="left">

2. 创建名为 `daily-ai-news-blog` 的仓库

3. 不要添加 README、.gitignore 或 License- 🎨 **代码高亮** - 支持多种编程语言  <a href="https://www.linode.com/?utm_campaign=hugosponsor&utm_medium=banner&utm_source=hugogithub" target="_blank"><img src="https://raw.githubusercontent.com/gohugoio/gohugoioTheme/master/assets/images/sponsors/linode-logo_standard_light_medium.png" width="200" alt="Linode"></a>



### 步骤 2：推送代码- 🏷️ **标签分类** - 智能组织内容&nbsp;&nbsp;&nbsp;



```bash- 📊 **社交分享** - 一键分享到社交平台  <a href="https://www.jetbrains.com/go/?utm_source=OSS&utm_medium=referral&utm_campaign=hugo" target="_blank"><img src="https://raw.githubusercontent.com/gohugoio/gohugoioTheme/master/assets/images/sponsors/goland.svg" width="200" alt="The complete IDE crafted for professional Go developers."></a>

# 添加远程仓库（替换为你的 GitHub 用户名）

git remote add origin https://github.com/你的用户名/daily-ai-news-blog.git</p>



# 推送代码### 已配置功能

git push -u origin master

```- ✅ 中文界面## Editions



### 步骤 3：启用 GitHub Pages- ✅ 导航菜单（首页、资讯、归档、标签）



1. 进入仓库的 Settings > Pages- ✅ 文章元信息（日期、阅读时间、标签）Hugo is available in three editions: standard, extended, and extended/deploy. While the standard edition provides core functionality, the extended and extended/deploy editions offer advanced features.

2. Source 选择 "GitHub Actions"

3. 保存后会自动部署- ✅ 代码复制按钮



详细说明请查看 [GITHUB_PUSH_GUIDE.md](GITHUB_PUSH_GUIDE.md)- ✅ 面包屑导航Feature|extended edition|extended/deploy edition



## 🔧 常用命令- ✅ RSS 订阅:--|:-:|:-:



```bashEncode to the WebP format when [processing images]. You can decode WebP images with any edition.|:heavy_check_mark:|:heavy_check_mark:

# 查看 Hugo 版本

.\hugo.exe version## 📝 编写文章[Transpile Sass to CSS] using the embedded LibSass transpiler. You can use the [Dart Sass] transpiler with any edition.|:heavy_check_mark:|:heavy_check_mark:



# 启动服务器（包含草稿）Deploy your site directly to a Google Cloud Storage bucket, an AWS S3 bucket, or an Azure Storage container. See&nbsp;[details].|:x:|:heavy_check_mark:

.\hugo.exe server -D

### 文章格式模板

# 启动服务器（仅发布内容）

.\hugo.exe server[dart sass]: https://gohugo.io/functions/css/sass/#dart-sass



# 创建新文章在 `ai-news-site\content\posts\` 目录下创建 `.md` 文件：[processing images]: https://gohugo.io/content-management/image-processing/

.\hugo.exe new posts/文章名.md

[transpile sass to css]: https://gohugo.io/functions/css/sass/

# 构建网站

.\hugo.exe```markdown[details]: https://gohugo.io/hosting-and-deployment/hugo-deploy/



# 清理生成的文件---

.\hugo.exe clean

```title: "文章标题"Unless your specific deployment needs require the extended/deploy edition, we recommend the extended edition.



## 🔄 更新主题date: 2025-11-12T09:00:00+08:00



```bashdraft: false          # false=发布, true=草稿## Installation

# 更新 PaperMod 主题到最新版本

git submodule update --remote --mergetags: ["AI", "技术"]  # 标签

```

categories: ["资讯"]  # 分类Install Hugo from a [prebuilt binary], package manager, or package repository. Please see the installation instructions for your operating system:

## 📚 资源链接

description: "文章简介，会显示在列表页"

- **Hugo 官方文档**: https://gohugo.io/documentation/

- **PaperMod 主题**: https://github.com/adityatelange/hugo-PaperMod---- [macOS]

- **Markdown 语法**: https://markdown.com.cn/

- **Hugo 主题库**: https://themes.gohugo.io/- [Linux]



## 💡 使用技巧## 标题- [Windows]



1. **实时预览**：启动服务器后，修改文章会自动刷新浏览器- [DragonFly BSD, FreeBSD, NetBSD, and OpenBSD]

2. **草稿功能**：设置 `draft: true` 只在开发环境显示

3. **快捷键**：在网站上按 `/` 键快速打开搜索正文内容使用 Markdown 格式编写...

4. **图片资源**：放在 `static\images\` 目录

5. **自定义CSS**：在 `assets\css\` 添加样式## Build from source



## 🆘 常见问题- 列表项 1



**Q: 如何修改网站标题？**  - 列表项 2Prerequisites to build Hugo from source:

A: 编辑 `hugo.toml` 中的 `title` 字段



**Q: 如何添加新的导航菜单？**  

A: 在 `hugo.toml` 的 `[[menu.main]]` 部分添加配置### 子标题- Standard edition: Go 1.23.0 or later



**Q: 文章不显示？**  - Extended edition: Go 1.23.0 or later, and GCC

A: 检查文章的 `draft` 是否为 `false`，或使用 `-D` 参数启动服务器

**粗体文字** *斜体文字*- Extended/deploy edition: Go 1.23.0 or later, and GCC

**Q: 如何更换主题？**  

A: 访问 https://themes.gohugo.io/ 选择主题，按说明安装配置



**Q: 推送到 GitHub 时需要什么？**  [链接文本](https://example.com)Build the standard edition:

A: 需要 Git 已配置用户信息，并有 GitHub 账号

```

## 📞 技术栈

```text

- **静态网站生成器**: Hugo v0.146.0 Extended

- **主题**: PaperMod (最新版)### 示例文章go install github.com/gohugoio/hugo@latest

- **部署**: GitHub Pages + GitHub Actions

- **版本控制**: Git```



## 📄 许可证项目已包含 3 篇示例文章：



本项目使用的主题 PaperMod 遵循 MIT 许可证。1. **GPT-5即将发布** - 技术突破类Build the extended edition:



---2. **AI医疗新突破** - 应用案例类  



**祝您创作愉快！** 🎉3. **特斯拉FSD更新** - 行业动态类```text



如需帮助，请参考 [GITHUB_PUSH_GUIDE.md](GITHUB_PUSH_GUIDE.md)CGO_ENABLED=1 go install -tags extended github.com/gohugoio/hugo@latest


## 🎨 自定义配置```



编辑 `ai-news-site\hugo.toml` 可修改：Build the extended/deploy edition:

- 网站标题、描述

- 导航菜单```text

- 主题参数CGO_ENABLED=1 go install -tags extended,withdeploy github.com/gohugoio/hugo@latest

- 社交链接等```



## 📦 部署发布## Star History



### 部署到 GitHub Pages[![Star History Chart](https://api.star-history.com/svg?repos=gohugoio/hugo&type=Timeline)](https://star-history.com/#gohugoio/hugo&Timeline)



1. 构建静态文件：`.\hugo.exe --source ai-news-site`## Documentation

2. 将 `ai-news-site\public\` 目录推送到 GitHub Pages 仓库

3. 配置仓库设置启用 GitHub PagesHugo's [documentation] includes installation instructions, a quick start guide, conceptual explanations, reference information, and examples.



### 部署到 Netlify/VercelPlease submit documentation issues and pull requests to the [documentation repository].



1. 连接 Git 仓库## Support

2. 设置构建命令：`hugo`

3. 设置发布目录：`public`Please **do not use the issue queue** for questions or troubleshooting. Unless you are certain that your issue is a software defect, use the [forum].

4. 自动部署完成

Hugo’s [forum] is an active community of users and developers who answer questions, share knowledge, and provide examples. A quick search of over 20,000 topics will often answer your question. Please be sure to read about [requesting help] before asking your first question.

## 🔧 常用命令

## Contributing

```bash

# 查看 Hugo 版本You can contribute to the Hugo project by:

.\hugo.exe version

- Answering questions on the [forum]

# 启动服务器（包含草稿）- Improving the [documentation]

.\hugo.exe server -D --source ai-news-site- Monitoring the [issue queue]

- Creating or improving [themes]

# 启动服务器（仅发布内容）- Squashing [bugs]

.\hugo.exe server --source ai-news-site

Please submit documentation issues and pull requests to the [documentation repository].

# 创建新文章

.\hugo.exe new posts/文章名.md --source ai-news-siteIf you have an idea for an enhancement or new feature, create a new topic on the [forum] in the "Feature" category. This will help you to:



# 构建网站- Determine if the capability already exists

.\hugo.exe --source ai-news-site- Measure interest

- Refine the concept

# 清理生成的文件

.\hugo.exe clean --source ai-news-siteIf there is sufficient interest, [create a proposal]. Do not submit a pull request until the project lead accepts the proposal.

```

For a complete guide to contributing to Hugo, see the [Contribution Guide](CONTRIBUTING.md).

## 📚 资源链接

## Dependencies

- **Hugo 官方文档**: https://gohugo.io/documentation/

- **PaperMod 主题**: https://github.com/adityatelange/hugo-PaperModHugo stands on the shoulders of great open source libraries. Run `hugo env --logLevel info` to display a list of dependencies.

- **Markdown 语法**: https://markdown.com.cn/

- **Hugo 主题库**: https://themes.gohugo.io/<details>

<summary>See current dependencies</summary>

## 💡 使用技巧

```text

1. **实时预览**：启动服务器后，修改文章会自动刷新浏览器github.com/BurntSushi/locker="v0.0.0-20171006230638-a6e239ea1c69"

2. **草稿功能**：设置 `draft: true` 只在开发环境显示github.com/PuerkitoBio/goquery="v1.10.1"

3. **快捷键**：在网站上按 `/` 键快速打开搜索github.com/alecthomas/chroma/v2="v2.15.0"

4. **图片资源**：放在 `ai-news-site\static\images\` 目录github.com/andybalholm/cascadia="v1.3.3"

5. **自定义CSS**：在 `ai-news-site\assets\css\` 添加样式github.com/armon/go-radix="v1.0.1-0.20221118154546-54df44f2176c"

github.com/bep/clocks="v0.5.0"

## 🆘 常见问题github.com/bep/debounce="v1.2.0"

github.com/bep/gitmap="v1.6.0"

**Q: 如何修改网站标题？**  github.com/bep/goat="v0.5.0"

A: 编辑 `ai-news-site\hugo.toml` 中的 `title` 字段github.com/bep/godartsass/v2="v2.3.2"

github.com/bep/golibsass="v1.2.0"

**Q: 如何添加新的导航菜单？**  github.com/bep/gowebp="v0.3.0"

A: 在 `hugo.toml` 的 `[[menu.main]]` 部分添加配置github.com/bep/imagemeta="v0.8.4"

github.com/bep/lazycache="v0.7.0"

**Q: 文章不显示？**  github.com/bep/logg="v0.4.0"

A: 检查文章的 `draft` 是否为 `false`，或使用 `-D` 参数启动服务器github.com/bep/mclib="v1.20400.20402"

github.com/bep/overlayfs="v0.9.2"

**Q: 如何更换主题？**  github.com/bep/simplecobra="v0.5.0"

A: 访问 https://themes.gohugo.io/ 选择主题，按说明安装配置github.com/bep/tmc="v0.5.1"

github.com/cespare/xxhash/v2="v2.3.0"

## 📞 技术支持github.com/clbanning/mxj/v2="v2.7.0"

github.com/cpuguy83/go-md2man/v2="v2.0.4"

- 项目位置：`d:\100_workspace\160_VScode\daily_ai_news_blog`github.com/disintegration/gift="v1.2.1"

- Hugo 版本：v0.146.0 Extendedgithub.com/dlclark/regexp2="v1.11.5"

- 主题：PaperMod (最新版)github.com/dop251/goja="v0.0.0-20250125213203-5ef83b82af17"

- 当前状态：✅ 开发服务器已启动在 http://localhost:1313github.com/evanw/esbuild="v0.24.2"

github.com/fatih/color="v1.18.0"

---github.com/frankban/quicktest="v1.14.6"

github.com/fsnotify/fsnotify="v1.8.0"

**祝您创作愉快！** 🎉github.com/getkin/kin-openapi="v0.129.0"

github.com/ghodss/yaml="v1.0.0"
github.com/go-openapi/jsonpointer="v0.21.0"
github.com/go-openapi/swag="v0.23.0"
github.com/go-sourcemap/sourcemap="v2.1.4+incompatible"
github.com/gobuffalo/flect="v1.0.3"
github.com/gobwas/glob="v0.2.3"
github.com/gohugoio/go-i18n/v2="v2.1.3-0.20230805085216-e63c13218d0e"
github.com/gohugoio/hashstructure="v0.5.0"
github.com/gohugoio/httpcache="v0.7.0"
github.com/gohugoio/hugo-goldmark-extensions/extras="v0.2.0"
github.com/gohugoio/hugo-goldmark-extensions/passthrough="v0.3.0"
github.com/gohugoio/locales="v0.14.0"
github.com/gohugoio/localescompressed="v1.0.1"
github.com/golang/freetype="v0.0.0-20170609003504-e2365dfdc4a0"
github.com/google/go-cmp="v0.6.0"
github.com/google/pprof="v0.0.0-20250208200701-d0013a598941"
github.com/gorilla/websocket="v1.5.3"
github.com/hairyhenderson/go-codeowners="v0.7.0"
github.com/hashicorp/golang-lru/v2="v2.0.7"
github.com/jdkato/prose="v1.2.1"
github.com/josharian/intern="v1.0.0"
github.com/kr/pretty="v0.3.1"
github.com/kr/text="v0.2.0"
github.com/kyokomi/emoji/v2="v2.2.13"
github.com/lucasb-eyer/go-colorful="v1.2.0"
github.com/mailru/easyjson="v0.7.7"
github.com/makeworld-the-better-one/dither/v2="v2.4.0"
github.com/marekm4/color-extractor="v1.2.1"
github.com/mattn/go-colorable="v0.1.13"
github.com/mattn/go-isatty="v0.0.20"
github.com/mattn/go-runewidth="v0.0.9"
github.com/mazznoer/csscolorparser="v0.1.5"
github.com/mitchellh/mapstructure="v1.5.1-0.20231216201459-8508981c8b6c"
github.com/mohae/deepcopy="v0.0.0-20170929034955-c48cc78d4826"
github.com/muesli/smartcrop="v0.3.0"
github.com/niklasfasching/go-org="v1.7.0"
github.com/oasdiff/yaml3="v0.0.0-20241210130736-a94c01f36349"
github.com/oasdiff/yaml="v0.0.0-20241210131133-6b86fb107d80"
github.com/olekukonko/tablewriter="v0.0.5"
github.com/pbnjay/memory="v0.0.0-20210728143218-7b4eea64cf58"
github.com/pelletier/go-toml/v2="v2.2.3"
github.com/perimeterx/marshmallow="v1.1.5"
github.com/pkg/browser="v0.0.0-20240102092130-5ac0b6a4141c"
github.com/pkg/errors="v0.9.1"
github.com/rivo/uniseg="v0.4.7"
github.com/rogpeppe/go-internal="v1.13.1"
github.com/russross/blackfriday/v2="v2.1.0"
github.com/sass/libsass="3.6.6"
github.com/spf13/afero="v1.11.0"
github.com/spf13/cast="v1.7.1"
github.com/spf13/cobra="v1.8.1"
github.com/spf13/fsync="v0.10.1"
github.com/spf13/pflag="v1.0.6"
github.com/tdewolff/minify/v2="v2.20.37"
github.com/tdewolff/parse/v2="v2.7.15"
github.com/tetratelabs/wazero="v1.8.2"
github.com/webmproject/libwebp="v1.3.2"
github.com/yuin/goldmark-emoji="v1.0.4"
github.com/yuin/goldmark="v1.7.8"
go.uber.org/automaxprocs="v1.5.3"
golang.org/x/crypto="v0.33.0"
golang.org/x/exp="v0.0.0-20250210185358-939b2ce775ac"
golang.org/x/image="v0.24.0"
golang.org/x/mod="v0.23.0"
golang.org/x/net="v0.35.0"
golang.org/x/sync="v0.11.0"
golang.org/x/sys="v0.30.0"
golang.org/x/text="v0.22.0"
golang.org/x/tools="v0.30.0"
golang.org/x/xerrors="v0.0.0-20240903120638-7835f813f4da"
gonum.org/v1/plot="v0.15.0"
google.golang.org/protobuf="v1.36.5"
gopkg.in/yaml.v2="v2.4.0"
gopkg.in/yaml.v3="v3.0.1"
oss.terrastruct.com/d2="v0.6.9"
oss.terrastruct.com/util-go="v0.0.0-20241005222610-44c011a04896"
rsc.io/qr="v0.2.0"
software.sslmate.com/src/go-pkcs12="v0.2.0"
```
</details>
