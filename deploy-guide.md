# GitHub 部署步骤

## 已经完成的步骤：
✅ 初始化 Git 仓库
✅ 配置全局 Git 用户（需要你替换为真实信息）
✅ 创建 .gitignore 文件
✅ 添加文件到 Git
✅ 提交代码

## 接下来的步骤（需要你手动操作）：

### 1. 在 GitHub 创建仓库
- 访问 https://github.com
- 点击右上角 "+" → "New repository"
- Repository name: `my-next-site`
- Description: `我的个人小站 - Next.js 项目`
- 选择 Public
- 不要勾选任何选项
- 点击 "Create repository"

### 2. 获取仓库 URL
创建成功后，页面会显示类似：
```
...or create a new repository on the command line
echo "# my-next-site" >> README.md
git init
git add README.md
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/你的用户名/my-next-site.git
git push -u origin main
```

### 3. 复制并执行命令
从 GitHub 页面复制这一行：
```bash
git remote add origin https://github.com/你的用户名/my-next-site.git
```

然后在终端执行。

接着复制并执行：
```bash
git push -u origin main
```

### 4. 如果需要认证
- 如果提示用户名/密码，使用你的 GitHub 账号密码
- 建议设置 Personal Access Token（更安全）

## 推送成功后
- 刷新 GitHub 页面
- 应该能看到你的代码文件
- 点击 "Code" 按钮，可以看到 Clone 选项