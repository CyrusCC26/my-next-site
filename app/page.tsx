import Link from 'next/link'

export default function Home() {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center px-4 py-20">
      <div className="max-w-2xl text-center space-y-8">
        <h1 className="text-5xl md:text-6xl font-bold mb-12">我是 Cyrus</h1>

        <div className="space-y-6 text-lg md:text-xl leading-relaxed">
          <div className="p-6">
            <h2 className="text-2xl font-semibold mb-4">我是谁</h2>
            <p>我是一个对世界充满好奇的学习者，正在探索 AI 和编程的奇妙世界。我相信技术可以让生活变得更美好，也希望通过代码创造出有价值的东西。</p>
          </div>

          <div className="p-6">
            <h2 className="text-2xl font-semibold mb-4">我为什么学 AI 编程</h2>
            <p>我被 AI 能够改变世界的潜力所吸引。我想通过学习编程和 AI，不仅掌握一项技能，更能参与到塑造未来的过程中，用技术解决实际问题。</p>
          </div>

          <div className="p-6">
            <h2 className="text-2xl font-semibold mb-4">我接下来想做什么项目</h2>
            <p>我希望创建一些有趣的项目，比如 AI 驱动的工具、实用的 Web 应用，或者能够帮助他人的小程序。我相信在实践中学到的知识最有价值。</p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-12">
          <Link
            href="/projects"
            className="px-8 py-3 bg-black text-white rounded hover:bg-gray-800 transition-colors"
          >
            查看我的项目
          </Link>
          <a
            href="mailto:cyrus@example.com"
            className="px-8 py-3 border-2 border-black rounded hover:bg-black hover:text-white transition-colors"
          >
            联系我
          </a>
        </div>
      </div>
    </div>
  )
}