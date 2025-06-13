import { Brain, Cpu, Eye, ChevronRight } from 'lucide-react';

export default function Home() {
  const aiCategories = [
    {
      id: 'ml',
      title: '機器學習',
      subtitle: 'Machine Learning',
      description: '通過數據學習模式，進行預測和分類',
      icon: Brain,
      color: 'blue',
      gradient: 'from-blue-500 to-blue-600',
      features: ['SVM', 'Random Forest', 'K-Means']
    },
    {
      id: 'dl',
      title: '深度學習',
      subtitle: 'Deep Learning',
      description: '使用神經網路進行複雜模式識別',
      icon: Cpu,
      color: 'purple',
      gradient: 'from-purple-500 to-purple-600',
      features: ['CNN', 'RNN', 'YOLO']
    },
    {
      id: 'ai',
      title: '人工智慧應用',
      subtitle: 'AI Applications',
      description: '實際應用場景中的AI技術整合',
      icon: Eye,
      color: 'green',
      gradient: 'from-green-500 to-green-600',
      features: ['NLP', 'Computer Vision', '強化學習']
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50">
      {/* 頁面標題 */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold text-gray-900 mb-4">
              AI 互動學習平台
            </h1>
            <p className="text-xl text-gray-600">
              從基礎到進階，用互動方式掌握人工智慧
            </p>
          </div>
        </div>
      </header>

      {/* 主要內容 */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* 分類卡片區域 */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {aiCategories.map((category) => {
            const IconComponent = category.icon;
            return (
              <div
                key={category.id}
                className={`bg-gradient-to-br ${category.gradient} p-8 rounded-xl text-white cursor-pointer transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl`}
              >
                <IconComponent size={48} className="mb-4" />
                <h3 className="text-2xl font-bold mb-2">{category.title}</h3>
                <p className="text-sm opacity-90 mb-1">{category.subtitle}</p>
                <p className="text-sm opacity-80 mb-6">{category.description}</p>
                
                {/* 特色功能標籤 */}
                <div className="space-y-2 mb-6">
                  <div className="text-xs opacity-75">包含技術:</div>
                  <div className="flex flex-wrap gap-2">
                    {category.features.map((feature, idx) => (
                      <span 
                        key={idx} 
                        className="text-xs bg-white bg-opacity-20 px-2 py-1 rounded-full"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>

                {/* 開始學習按鈕 */}
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">開始學習</span>
                  <ChevronRight size={20} />
                </div>
              </div>
            );
          })}
        </div>

        {/* 特色介紹區域 */}
        <div className="bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">
            為什麼選擇互動式學習？
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Brain className="text-blue-600" size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-3">動手實作</h3>
              <p className="text-gray-600">直接調整參數，即時看到結果變化，加深理解</p>
            </div>
            <div className="text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Cpu className="text-purple-600" size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-3">理論結合實務</h3>
              <p className="text-gray-600">用真實案例和數據來學習，不只是紙上談兵</p>
            </div>
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Eye className="text-green-600" size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-3">循序漸進</h3>
              <p className="text-gray-600">從入門到專家，清晰的學習路徑指引</p>
            </div>
          </div>
        </div>

        {/* 狀態提示 */}
        <div className="mt-8 text-center">
          <div className="inline-block bg-yellow-100 border border-yellow-300 rounded-lg px-4 py-2">
            <p className="text-yellow-800 text-sm">
              🚧 互動功能開發中，敬請期待！
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
