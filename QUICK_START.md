# 🚀 快速开始指南

## ✅ 项目已完成设置

### 本地开发
```bash
# 启动开发服务器
.\hugo.exe server -D

# 或双击
start-server.bat
```
访问：http://localhost:1313

### 创建文章
```bash
# 使用命令
.\hugo.exe new posts/article-name.md

# 或双击
new-post.bat
```

### 构建网站
```bash
# 使用命令
.\hugo.exe

# 或双击
build.bat
```

## 📤 推送到 GitHub

### 第一步：创建 GitHub 仓库
1. 访问 https://github.com/new
2. 仓库名：`daily-ai-news-blog`
3. 不要添加 README、.gitignore、License
4. 点击 "Create repository"

### 第二步：推送代码
```bash
# 添加远程仓库（替换 YOUR_USERNAME）
git remote add origin https://github.com/YOUR_USERNAME/daily-ai-news-blog.git

# 推送代码
git push -u origin master
```

### 第三步：启用 GitHub Pages
1. 进入仓库 Settings > Pages
2. Source 选择 "GitHub Actions"
3. 保存 - 自动部署！

## 📝 Git 常用命令

```bash
# 查看状态
git status

# 添加更改
git add .

# 提交
git commit -m "你的提交信息"

# 推送
git push

# 拉取
git pull
```

## 🎯 当前状态

✅ Hugo 已安装（v0.146.0 Extended）
✅ PaperMod 主题已配置
✅ 3 篇示例文章已创建
✅ Git 仓库已初始化
✅ GitHub Actions 配置已就绪
✅ 批处理脚本已创建

📍 等待：推送到 GitHub

## 📂 重要文件

- `hugo.toml` - 网站配置
- `content/posts/` - 文章目录
- `.github/workflows/deploy.yml` - 自动部署
- `GITHUB_PUSH_GUIDE.md` - 详细推送指南
- `README.md` - 完整文档

## 🆘 需要帮助？

查看详细文档：
- `README.md` - 完整使用说明
- `GITHUB_PUSH_GUIDE.md` - GitHub 部署指南

---

**提示**: 记得在首次推送前配置 Git：
```bash
git config --global user.name "你的名字"
git config --global user.email "your-email@example.com"
```
