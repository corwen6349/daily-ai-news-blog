# Gitalk 评论系统配置指南

本项目已集成 Gitalk 评论系统，基于 GitHub Issues 实现。需要以下配置步骤：

## 1. 创建 GitHub OAuth 应用

1. 访问 GitHub Settings: https://github.com/settings/developers
2. 点击 "New OAuth App"
3. 填写信息：
   - **Application name**: Daily AI News Blog Comments
   - **Homepage URL**: `https://corwen6349.github.io/daily-ai-news-blog/`
   - **Authorization callback URL**: `https://corwen6349.github.io/daily-ai-news-blog/`
4. 点击 "Register application"
5. 创建后会获得 **Client ID** 和 **Client Secret**

## 2. 更新 hugo.toml 配置

将获得的 Client ID 和 Client Secret 填入 `hugo.toml` 文件：

```toml
[params.gitalk]
  clientID = "你的_Client_ID"
  clientSecret = "你的_Client_Secret"
  repo = "daily-ai-news-blog"
  owner = "corwen6349"
  admin = "corwen6349"
```

## 3. 启用 GitHub Issues

确保你的 GitHub 仓库已启用 Issues 功能：

1. 进入仓库设置: https://github.com/corwen6349/daily-ai-news-blog/settings
2. 在 Features 部分，确保 "Issues" 已勾选

## 4. 初始化评论

部署网站后，访问每篇文章：
- 作为管理员（corwen6349），首次访问文章时需要点击"使用 GitHub 登录"
- Gitalk 会自动为该文章创建对应的 Issue
- 其他访客就可以在该文章下评论了

## 注意事项

- Gitalk 使用文章路径作为 Issue 标识符
- 评论数据存储在 GitHub Issues 中
- 游客需要 GitHub 账号才能评论
- Client Secret 是敏感信息，不要公开提交到公共仓库
- 建议创建 `.env` 文件或使用 GitHub Secrets 存储敏感配置

## 替代方案

如果不想使用 Gitalk，还可以考虑：
- **Giscus**: 基于 GitHub Discussions（推荐）
- **Utterances**: 基于 GitHub Issues（更轻量）
- **Disqus**: 第三方评论服务
- **Waline**: 自托管评论系统

选择建议：
- 公开博客：Giscus 或 Utterances
- 需要匿名评论：Waline
- 企业用户：Disqus
