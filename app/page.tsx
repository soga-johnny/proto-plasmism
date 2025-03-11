import { Scene3D } from './components/Scene3D'

export default function Home() {
  return (
    <main className="relative">
      {/* 3Dシーンの背景 */}
      <Scene3D />

      {/* コンテンツセクション */}
      <div className="relative z-10">
        {/* ヒーローセクション */}
        <section className="h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 to-blue-500">
              Innovation Through Technology
            </h1>
            <p className="mt-4 text-xl text-gray-600">
              未来を創造する、次世代のテクノロジーカンパニー
            </p>
          </div>
        </section>

        {/* ビジョンセクション */}
        <section className="min-h-screen bg-black/5 backdrop-blur-sm py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold mb-12 text-center">Our Vision</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="p-6 bg-white/80 rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold mb-4">Innovation</h3>
                <p className="text-gray-600">
                  最先端技術を活用し、革新的なソリューションを提供します。
                </p>
              </div>
              <div className="p-6 bg-white/80 rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold mb-4">Sustainability</h3>
                <p className="text-gray-600">
                  持続可能な未来のために、環境に配慮したテクノロジーを追求します。
                </p>
              </div>
              <div className="p-6 bg-white/80 rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold mb-4">Community</h3>
                <p className="text-gray-600">
                  テクノロジーを通じて、より良いコミュニティの創造に貢献します。
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* サービスセクション */}
        <section className="min-h-screen py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold mb-12 text-center">Our Services</h2>
            <div className="space-y-12">
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-4">AI Solutions</h3>
                  <p className="text-gray-600">
                    最新のAI技術を活用し、ビジネスプロセスの効率化と革新を実現します。
                  </p>
                </div>
                <div className="flex-1 bg-gradient-to-r from-purple-500 to-pink-500 h-64 rounded-lg"></div>
              </div>
              <div className="flex flex-col md:flex-row-reverse items-center gap-8">
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-4">Digital Transformation</h3>
                  <p className="text-gray-600">
                    デジタル技術を活用し、企業の変革と成長をサポートします。
                  </p>
                </div>
                <div className="flex-1 bg-gradient-to-r from-blue-500 to-cyan-500 h-64 rounded-lg"></div>
              </div>
            </div>
          </div>
        </section>

        {/* コンタクトセクション */}
        <section className="min-h-screen bg-black/5 backdrop-blur-sm py-20">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold mb-12">Contact Us</h2>
            <p className="text-xl text-gray-600 mb-8">
              お気軽にお問い合わせください
            </p>
            <button className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-8 py-3 rounded-full text-lg font-semibold hover:opacity-90 transition-opacity">
              お問い合わせ
            </button>
          </div>
        </section>
      </div>
    </main>
  )
}
