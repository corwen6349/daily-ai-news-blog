@echo off
setlocal
set /p title="请输入文章标题: "
set /p filename="请输入文件名（不含.md）: "

hugo.exe new posts/%filename%.md

echo.
echo 文章已创建: content\posts\%filename%.md
echo 请编辑文章内容后刷新浏览器查看效果
pause
