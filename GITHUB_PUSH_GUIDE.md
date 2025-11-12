# GitHub 推送指南

## 步骤 1：在 GitHub 上创建仓库

1. 访问 https://github.com/new
2. 填写仓库信息：
   - Repository name: `daily-ai-news-blog`
   - Description: "每日AI资讯博客 - 基于 Hugo + PaperMod 主题"
   - 选择 Public 或 Private
   - **不要**勾选 "Add a README file"
   - **不要**勾选 "Add .gitignore"
   - **不要**添加 License
3. 点击 "Create repository"

## 步骤 2：推送代码到 GitHub

复制 GitHub 显示的仓库 URL（类似：https://github.com/你的用户名/daily-ai-news-blog.git）

然后在当前目录执行以下命令：

```bash
# 添加远程仓库（替换为你的仓库地址）
git remote add origin https://github.com/你的用户名/daily-ai-news-blog.git

# 推送代码到 GitHub
git push -u origin master
```

## 步骤 3：验证推送成功

刷新 GitHub 仓库页面，应该能看到所有文件。

## 可选：部署到 GitHub Pages

### 方法 1：使用 GitHub Actions（推荐）

在项目根目录创建 `.github/workflows/deploy.yml`：

```yaml
name: Deploy Hugo site to Pages

on:
  push:
    branches: ["master"]
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: "pages"
  cancel-in-progress: false

defaults:
  run:
    shell: bash

jobs:
  build:
    runs-on: ubuntu-latest
    env:
      HUGO_VERSION: 0.146.0
    steps:
      - name: Install Hugo CLI
        run: |
          wget -O ${{ runner.temp }}/hugo.deb https://github.com/gohugoio/hugo/releases/download/v${HUGO_VERSION}/hugo_extended_${HUGO_VERSION}_linux-amd64.deb \
          && sudo dpkg -i ${{ runner.temp }}/hugo.deb
      - name: Checkout
        uses: actions/checkout@v4
        with:
          submodules: recursive
      - name: Setup Pages
        id: pages
        uses: actions/configure-pages@v5
      - name: Build with Hugo
        env:
          HUGO_CACHEDIR: ${{ runner.temp }}/hugo_cache
          HUGO_ENVIRONMENT: production
        run: |
          hugo \
            --minify \
            --baseURL "${{ steps.pages.outputs.base_url }}/"
      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: ./public

  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    needs: build
    steps:
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
```

然后在 GitHub 仓库设置中：
1. 进入 Settings > Pages
2. Source 选择 "GitHub Actions"
3. 保存后自动部署

### 方法 2：手动构建部署

```bash
# 构建网站
hugo

# 推送 public 目录到 gh-pages 分支
cd public
git init
git add -A
git commit -m "Deploy"
git push -f git@github.com:你的用户名/daily-ai-news-blog.git master:gh-pages
```

## 常用 Git 命令

```bash
# 查看状态
git status

# 添加新文件
git add .

# 提交更改
git commit -m "描述信息"

# 推送到 GitHub
git push

# 拉取最新代码
git pull

# 查看提交历史
git log
```

## 注意事项

1. 首次推送可能需要输入 GitHub 用户名和密码（或使用 Personal Access Token）
2. 确保已安装 Git 并配置了用户信息：
   ```bash
   git config --global user.name "你的名字"
   git config --global user.email "你的邮箱"
   ```
3. 如果使用 HTTPS 推送遇到问题，可以考虑使用 SSH 方式
