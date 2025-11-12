# 每日AI资讯网站 📰[bep]: https://github.com/bep

[bugs]: https://github.com/gohugoio/hugo/issues?q=is%3Aopen+is%3Aissue+label%3ABug

🎉 一个基于 Hugo + PaperMod 主题的静态资讯展示网站已成功搭建！[contributing]: CONTRIBUTING.md

[create a proposal]: https://github.com/gohugoio/hugo/issues/new?labels=Proposal%2C+NeedsTriage&template=feature_request.md

## 📁 项目结构[documentation repository]: https://github.com/gohugoio/hugoDocs

[documentation]: https://gohugo.io/documentation

```[dragonfly bsd, freebsd, netbsd, and openbsd]: https://gohugo.io/installation/bsd

daily_ai_news_blog/[features]: https://gohugo.io/about/features/

├── hugo.exe              # Hugo 静态网站生成器（v0.146.0）[forum]: https://discourse.gohugo.io

├── ai-news-site/         # 网站源码目录[friends]: https://github.com/gohugoio/hugo/graphs/contributors

│   ├── content/         # 内容目录[go]: https://go.dev/

│   │   ├── posts/      # AI资讯文章存放处[hugo modules]: https://gohugo.io/hugo-modules/

│   │   ├── archives.md # 归档页面[installation]: https://gohugo.io/installation

│   │   └── search.md   # 搜索页面[issue queue]: https://github.com/gohugoio/hugo/issues

│   ├── themes/         # 主题目录[linux]: https://gohugo.io/installation/linux

│   │   └── PaperMod/   # 简约美观的 PaperMod 主题[macos]: https://gohugo.io/installation/macos

│   ├── hugo.toml       # 网站配置文件[prebuilt binary]: https://github.com/gohugoio/hugo/releases/latest

│   ├── public/         # 生成的静态文件（构建后）[requesting help]: https://discourse.gohugo.io/t/requesting-help/9132

│   └── README.md       # 详细说明文档[spf13]: https://github.com/spf13

├── start-server.bat    # 启动开发服务器（一键启动）[static site generator]: https://en.wikipedia.org/wiki/Static_site_generator

├── build.bat          # 构建生产版本[support]: https://discourse.gohugo.io

└── new-post.bat       # 快速创建新文章[themes]: https://themes.gohugo.io/

```[website]: https://gohugo.io

[windows]: https://gohugo.io/installation/windows

## 🚀 快速开始

<a href="https://gohugo.io/"><img src="https://raw.githubusercontent.com/gohugoio/gohugoioTheme/master/static/images/hugo-logo-wide.svg?sanitize=true" alt="Hugo" width="565"></a>

### 方法 1：使用批处理脚本（推荐）

A fast and flexible static site generator built with love by [bep], [spf13], and [friends] in [Go].

1. **启动开发服务器**

   ```---

   双击 start-server.bat

   浏览器访问：http://localhost:1313[![GoDoc](https://godoc.org/github.com/gohugoio/hugo?status.svg)](https://godoc.org/github.com/gohugoio/hugo)

   ```[![Tests on Linux, MacOS and Windows](https://github.com/gohugoio/hugo/workflows/Test/badge.svg)](https://github.com/gohugoio/hugo/actions?query=workflow%3ATest)

[![Go Report Card](https://goreportcard.com/badge/github.com/gohugoio/hugo)](https://goreportcard.com/report/github.com/gohugoio/hugo)

2. **创建新文章**

   ```[Website] | [Installation] | [Documentation] | [Support] | [Contributing] | <a rel="me" href="https://fosstodon.org/@gohugoio">Mastodon</a>

   双击 new-post.bat

   按提示输入文章标题和文件名## Overview

   ```

Hugo is a [static site generator] written in [Go], optimized for speed and designed for flexibility. With its advanced templating system and fast asset pipelines, Hugo renders a complete site in seconds, often less.

3. **构建生产版本**

   ```Due to its flexible framework, multilingual support, and powerful taxonomy system, Hugo is widely used to create:

   双击 build.bat

   静态文件生成在 ai-news-site\public\ 目录- Corporate, government, nonprofit, education, news, event, and project sites

   ```- Documentation sites

- Image portfolios

### 方法 2：使用命令行- Landing pages

- Business, professional, and personal blogs

```bash- Resumes and CVs

# 启动开发服务器

.\hugo.exe server -D --source ai-news-siteUse Hugo's embedded web server during development to instantly see changes to content, structure, behavior, and presentation. Then deploy the site to your host, or push changes to your Git provider for automated builds and deployment.



# 创建新文章Hugo's fast asset pipelines include:

.\hugo.exe new posts/my-article.md --source ai-news-site

- Image processing &ndash; Convert, resize, crop, rotate, adjust colors, apply filters, overlay text and images, and extract EXIF data

# 构建生产版本- JavaScript bundling &ndash; Transpile TypeScript and JSX to JavaScript, bundle, tree shake, minify, create source maps, and perform SRI hashing.

.\hugo.exe --source ai-news-site- Sass processing &ndash; Transpile Sass to CSS, bundle, tree shake, minify, create source maps, perform SRI hashing, and integrate with PostCSS

```- Tailwind CSS processing &ndash; Compile Tailwind CSS utility classes into standard CSS, bundle, tree shake, optimize, minify, perform SRI hashing, and integrate with PostCSS



## ✨ 网站特性And with [Hugo Modules], you can share content, assets, data, translations, themes, templates, and configuration with other projects via public or private Git repositories.



### PaperMod 主题优势See the [features] section of the documentation for a comprehensive summary of Hugo's capabilities.

- ✅ **简约美观** - 专注内容展示

- 📱 **完全响应式** - 完美支持移动端## Sponsors

- 🌓 **深色模式** - 自动/手动切换

- ⚡ **超快速度** - Hugo 构建速度极快<p>&nbsp;</p>

- 🔍 **内置搜索** - 快速查找文章<p float="left">

- 🎨 **代码高亮** - 支持多种编程语言  <a href="https://www.linode.com/?utm_campaign=hugosponsor&utm_medium=banner&utm_source=hugogithub" target="_blank"><img src="https://raw.githubusercontent.com/gohugoio/gohugoioTheme/master/assets/images/sponsors/linode-logo_standard_light_medium.png" width="200" alt="Linode"></a>

- 🏷️ **标签分类** - 智能组织内容&nbsp;&nbsp;&nbsp;

- 📊 **社交分享** - 一键分享到社交平台  <a href="https://www.jetbrains.com/go/?utm_source=OSS&utm_medium=referral&utm_campaign=hugo" target="_blank"><img src="https://raw.githubusercontent.com/gohugoio/gohugoioTheme/master/assets/images/sponsors/goland.svg" width="200" alt="The complete IDE crafted for professional Go developers."></a>

</p>

### 已配置功能

- ✅ 中文界面## Editions

- ✅ 导航菜单（首页、资讯、归档、标签）

- ✅ 文章元信息（日期、阅读时间、标签）Hugo is available in three editions: standard, extended, and extended/deploy. While the standard edition provides core functionality, the extended and extended/deploy editions offer advanced features.

- ✅ 代码复制按钮

- ✅ 面包屑导航Feature|extended edition|extended/deploy edition

- ✅ RSS 订阅:--|:-:|:-:

Encode to the WebP format when [processing images]. You can decode WebP images with any edition.|:heavy_check_mark:|:heavy_check_mark:

## 📝 编写文章[Transpile Sass to CSS] using the embedded LibSass transpiler. You can use the [Dart Sass] transpiler with any edition.|:heavy_check_mark:|:heavy_check_mark:

Deploy your site directly to a Google Cloud Storage bucket, an AWS S3 bucket, or an Azure Storage container. See&nbsp;[details].|:x:|:heavy_check_mark:

### 文章格式模板

[dart sass]: https://gohugo.io/functions/css/sass/#dart-sass

在 `ai-news-site\content\posts\` 目录下创建 `.md` 文件：[processing images]: https://gohugo.io/content-management/image-processing/

[transpile sass to css]: https://gohugo.io/functions/css/sass/

```markdown[details]: https://gohugo.io/hosting-and-deployment/hugo-deploy/

---

title: "文章标题"Unless your specific deployment needs require the extended/deploy edition, we recommend the extended edition.

date: 2025-11-12T09:00:00+08:00

draft: false          # false=发布, true=草稿## Installation

tags: ["AI", "技术"]  # 标签

categories: ["资讯"]  # 分类Install Hugo from a [prebuilt binary], package manager, or package repository. Please see the installation instructions for your operating system:

description: "文章简介，会显示在列表页"

---- [macOS]

- [Linux]

## 标题- [Windows]

- [DragonFly BSD, FreeBSD, NetBSD, and OpenBSD]

正文内容使用 Markdown 格式编写...

## Build from source

- 列表项 1

- 列表项 2Prerequisites to build Hugo from source:



### 子标题- Standard edition: Go 1.23.0 or later

- Extended edition: Go 1.23.0 or later, and GCC

**粗体文字** *斜体文字*- Extended/deploy edition: Go 1.23.0 or later, and GCC



[链接文本](https://example.com)Build the standard edition:

```

```text

### 示例文章go install github.com/gohugoio/hugo@latest

```

项目已包含 3 篇示例文章：

1. **GPT-5即将发布** - 技术突破类Build the extended edition:

2. **AI医疗新突破** - 应用案例类  

3. **特斯拉FSD更新** - 行业动态类```text

CGO_ENABLED=1 go install -tags extended github.com/gohugoio/hugo@latest

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
