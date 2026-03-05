import Link from 'next/link'

export default function ProjectsPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <nav className="mb-12">
        <Link href="/" className="text-black hover:text-gray-600 underline">← 返回首页</Link>
      </nav>

      <header className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">我的项目</h1>
        <p className="text-xl text-gray-600">我在编程学习过程中的实践作品</p>
      </header>

      <main className="max-w-4xl mx-auto space-y-16">
        {/* 项目1 */}
        <section className="border-b pb-16">
          <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-1/3">
              <div className="bg-gray-100 h-64 rounded-lg flex items-center justify-center">
                <span className="text-6xl">📝</span>
              </div>
            </div>
            <div className="md:w-2/3">
              <h2 className="text-3xl font-bold mb-4">个人博客系统</h2>
              <p className="text-lg mb-4 text-gray-700">一个简单的博客系统，支持文章发布、分类和评论功能。使用 HTML、CSS 和 JavaScript 构建，学习文件系统和本地存储的应用。</p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-3 py-1 bg-gray-100 rounded">HTML</span>
                <span className="px-3 py-1 bg-gray-100 rounded">CSS</span>
                <span className="px-3 py-1 bg-gray-100 rounded">JavaScript</span>
                <span className="px-3 py-1 bg-gray-100 rounded">本地存储</span>
              </div>
              <Link href="/projects/blog" className="text-black hover:text-gray-600 underline">查看详情 →</Link>
            </div>
          </div>
        </section>

        {/* 项目2 */}
        <section className="border-b pb-16">
          <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-1/3">
              <div className="bg-gray-100 h-64 rounded-lg flex items-center justify-center">
                <span className="text-6xl">🎮</span>
              </div>
            </div>
            <div className="md:w-2/3">
              <h2 className="text-3xl font-bold mb-4">记忆卡片游戏</h2>
              <p className="text-lg mb-4 text-gray-700">一个训练记忆力的翻牌配对游戏。包含计时功能、分数系统和难度选择。通过这个项目学习了 DOM 操作和事件处理。</p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-3 py-1 bg-gray-100 rounded">HTML</span>
                <span className="px-3 py-1 bg-gray-100 rounded">CSS</span>
                <span className="px-3 py-1 bg-gray-100 rounded">JavaScript</span>
                <span className="px-3 py-1 bg-gray-100 rounded">游戏逻辑</span>
              </div>
              <Link href="/projects/memory-game" className="text-black hover:text-gray-600 underline">查看详情 →</Link>
            </div>
          </div>
        </section>

        {/* 项目3 */}
        <section className="border-b pb-16">
          <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-1/3">
              <div className="bg-gray-100 h-64 rounded-lg flex items-center justify-center">
                <span className="text-6xl">📊</span>
              </div>
            </div>
            <div className="md:w-2/3">
              <h2 className="text-3xl font-bold mb-4">任务管理器</h2>
              <p className="text-lg mb-4 text-gray-700">一个简单的待办事项应用，支持添加、删除、标记完成任务。包含优先级设置和本地数据持久化功能。</p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-3 py-1 bg-gray-100 rounded">HTML</span>
                <span className="px-3 py-1 bg-gray-100 rounded">CSS</span>
                <span className="px-3 py-1 bg-gray-100 rounded">JavaScript</span>
                <span className="px-3 py-1 bg-gray-100 rounded">数据管理</span>
              </div>
              <Link href="/projects/task-manager" className="text-black hover:text-gray-600 underline">查看详情 →</Link>
            </div>
          </div>
        </section>

        {/* 项目4 */}
        <section className="pb-16">
          <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-1/3">
              <div className="bg-gray-100 h-64 rounded-lg flex items-center justify-center">
                <span className="text-6xl">🤖</span>
              </div>
            </div>
            <div className="md:w-2/3">
              <h2 className="text-3xl font-bold mb-4">AI 文本摘要工具</h2>
              <p className="text-lg mb-4 text-gray-700">一个使用 AI API 进行文本摘要的工具。用户可以输入长文本，快速生成简洁的摘要。这是我学习 AI 集成的第一个项目。</p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-3 py-1 bg-gray-100 rounded">HTML</span>
                <span className="px-3 py-1 bg-gray-100 rounded">CSS</span>
                <span className="px-3 py-1 bg-gray-100 rounded">JavaScript</span>
                <span className="px-3 py-1 bg-gray-100 rounded">AI API</span>
              </div>
              <Link href="/projects/ai-summary" className="text-black hover:text-gray-600 underline">查看详情 →</Link>
            </div>
          </div>
        </section>
      </main>

      <footer className="mt-16 text-center">
        <p className="text-gray-600">更多项目正在开发中...</p>
      </footer>
    </div>
  )
}