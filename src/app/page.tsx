"use client";

import { Brain, Cpu, Eye, ChevronRight, PlayCircle, BookOpen, Zap, TrendingUp, Settings, BarChart3, Network, Target, Clock, Users, Award } from 'lucide-react';
import { useState } from 'react';

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedModel, setSelectedModel] = useState(null);

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

  const mlModels = [
    {
      id: 'svm',
      name: 'Support Vector Machine',
      chineseName: '支持向量機',
      difficulty: '中級',
      duration: '45分鐘',
      description: '尋找最佳決策邊界來分類數據',
      applications: ['文本分類', '圖像識別', '生物信息學'],
      advantages: ['高維數據表現優秀', '記憶體效率高', '適用於小數據集'],
      disadvantages: ['大數據集訓練慢', '需要特徵縮放', '不提供概率估計'],
      icon: Target,
      color: 'bg-red-500'
    },
    {
      id: 'rf',
      name: 'Random Forest',
      chineseName: '隨機森林',
      difficulty: '初級',
      duration: '30分鐘',
      description: '結合多個決策樹的集成學習方法',
      applications: ['回歸分析', '特徵選擇', '異常檢測'],
      advantages: ['避免過擬合', '處理缺失值', '提供特徵重要性'],
      disadvantages: ['模型較大', '不易解釋', '偏向類別多的特徵'],
      icon: Network,
      color: 'bg-green-500'
    },
    {
      id: 'kmeans',
      name: 'K-Means Clustering',
      chineseName: 'K均值聚類',
      difficulty: '初級',
      duration: '25分鐘',
      description: '將數據分為K個群組的無監督學習算法',
      applications: ['客戶分群', '市場細分', '圖像分割'],
      advantages: ['簡單易懂', '計算效率高', '適用於球形分佈'],
      disadvantages: ['需預設K值', '對初始值敏感', '不適用於非球形分佈'],
      icon: BarChart3,
      color: 'bg-blue-500'
    },
    {
      id: 'lr',
      name: 'Linear Regression',
      chineseName: '線性回歸',
      difficulty: '入門',
      duration: '20分鐘',
      description: '建立變數間線性關係的基礎統計方法',
      applications: ['價格預測', '銷量預測', '風險評估'],
      advantages: ['易於理解', '計算快速', '提供統計顯著性'],
      disadvantages: ['假設線性關係', '對異常值敏感', '多重共線性問題'],
      icon: TrendingUp,
      color: 'bg-purple-500'
    }
  ];

  const getDifficultyColor = (difficulty) => {
    switch(difficulty) {
      case '入門': return 'bg-green-100 text-green-800';
      case '初級': return 'bg-blue-100 text-blue-800';
      case '中級': return 'bg-yellow-100 text-yellow-800';
      case '高級': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const handleCategoryClick = (categoryId) => {
    if (categoryId === 'ml') {
      setSelectedCategory('ml');
    } else {
      setSelectedCategory(null);
    }
  };

  const handleModelClick = (model) => {
    setSelectedModel(model);
  };

  const closeModal = () => {
    setSelectedModel(null);
  };

  if (selectedCategory === 'ml') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
        {/* 返回按鈕 */}
        <div className="bg-white shadow-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <button 
              onClick={() => setSelectedCategory(null)}
              className="flex items-center text-blue-600 hover:text-blue-800 font-medium"
            >
              <ChevronRight className="rotate-180 mr-2" size={20} />
              返回主頁
            </button>
          </div>
        </div>

        {/* 機器學習頁面標題 */}
        <header className="bg-white shadow-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="flex items-center justify-center mb-6">
              <Brain className="text-blue-600 mr-4" size={48} />
              <div>
                <h1 className="text-4xl font-bold text-gray-900">機器學習 Machine Learning</h1>
                <p className="text-lg text-gray-600 mt-2">探索數據中的模式，讓機器從經驗中學習</p>
              </div>
            </div>
            
            {/* 統計信息 */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
              <div className="bg-blue-50 p-4 rounded-lg text-center">
                <BookOpen className="text-blue-600 mx-auto mb-2" size={24} />
                <div className="text-2xl font-bold text-blue-600">{mlModels.length}</div>
                <div className="text-sm text-gray-600">模型介紹</div>
              </div>
              <div className="bg-green-50 p-4 rounded-lg text-center">
                <Clock className="text-green-600 mx-auto mb-2" size={24} />
                <div className="text-2xl font-bold text-green-600">2小時</div>
                <div className="text-sm text-gray-600">總學習時間</div>
              </div>
              <div className="bg-purple-50 p-4 rounded-lg text-center">
                <Users className="text-purple-600 mx-auto mb-2" size={24} />
                <div className="text-2xl font-bold text-purple-600">1,250+</div>
                <div className="text-sm text-gray-600">學習者</div>
              </div>
              <div className="bg-yellow-50 p-4 rounded-lg text-center">
                <Award className="text-yellow-600 mx-auto mb-2" size={24} />
                <div className="text-2xl font-bold text-yellow-600">4.8</div>
                <div className="text-sm text-gray-600">平均評分</div>
              </div>
            </div>
          </div>
        </header>

        {/* 機器學習模型列表 */}
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">核心演算法</h2>
            <p className="text-gray-600">點擊任一模型卡片查看詳細介紹</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {mlModels.map((model) => {
              const IconComponent = model.icon;
              return (
                <div
                  key={model.id}
                  onClick={() => handleModelClick(model)}
                  className="bg-white rounded-xl shadow-lg p-6 cursor-pointer hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-blue-200"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center">
                      <div className={`${model.color} p-3 rounded-lg mr-4`}>
                        <IconComponent className="text-white" size={24} />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900">{model.chineseName}</h3>
                        <p className="text-sm text-gray-500">{model.name}</p>
                      </div>
                    </div>
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${getDifficultyColor(model.difficulty)}`}>
                      {model.difficulty}
                    </span>
                  </div>

                  <p className="text-gray-600 mb-4">{model.description}</p>

                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <div className="flex items-center">
                      <Clock size={16} className="mr-1" />
                      {model.duration}
                    </div>
                    <div className="flex items-center text-blue-600">
                      <span className="mr-2">開始學習</span>
                      <PlayCircle size={16} />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* 學習路徑 */}
          <div className="mt-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl p-8 text-white">
            <h2 className="text-2xl font-bold mb-4">建議學習路徑</h2>
            <div className="grid md:grid-cols-4 gap-4">
              <div className="bg-white bg-opacity-20 rounded-lg p-4">
                <div className="text-lg font-semibold mb-2">1. 基礎概念</div>
                <div className="text-sm opacity-90">線性回歸 → 邏輯回歸</div>
              </div>
              <div className="bg-white bg-opacity-20 rounded-lg p-4">
                <div className="text-lg font-semibold mb-2">2. 分類算法</div>
                <div className="text-sm opacity-90">SVM → 決策樹</div>
              </div>
              <div className="bg-white bg-opacity-20 rounded-lg p-4">
                <div className="text-lg font-semibold mb-2">3. 集成方法</div>
                <div className="text-sm opacity-90">隨機森林 → 梯度提升</div>
              </div>
              <div className="bg-white bg-opacity-20 rounded-lg p-4">
                <div className="text-lg font-semibold mb-2">4. 無監督學習</div>
                <div className="text-sm opacity-90">K-Means → PCA</div>
              </div>
            </div>
          </div>
        </main>

        {/* 模型詳細介紹 Modal */}
        {selectedModel && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
              <div className="p-6">
                {/* Modal Header */}
                <div className="flex justify-between items-start mb-6">
                  <div className="flex items-center">
                    <div className={`${selectedModel.color} p-3 rounded-lg mr-4`}>
                      <selectedModel.icon className="text-white" size={32} />
                    </div>
                    <div>
                      <h2 className="text-3xl font-bold text-gray-900">{selectedModel.chineseName}</h2>
                      <p className="text-lg text-gray-600">{selectedModel.name}</p>
                    </div>
                  </div>
                  <button
                    onClick={closeModal}
                    className="text-gray-400 hover:text-gray-600"
                  >
                    ✕
                  </button>
                </div>

                {/* 基本信息 */}
                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h3 className="font-semibold text-gray-900 mb-2">基本信息</h3>
                    <div className="space-y-2 text-sm">
                      <div><span className="font-medium">難度等級:</span> {selectedModel.difficulty}</div>
                      <div><span className="font-medium">學習時間:</span> {selectedModel.duration}</div>
                      <div><span className="font-medium">算法描述:</span> {selectedModel.description}</div>
                    </div>
                  </div>

                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h3 className="font-semibold text-gray-900 mb-2">應用場景</h3>
                    <div className="flex flex-wrap gap-2">
                      {selectedModel.applications.map((app, idx) => (
                        <span key={idx} className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm">
                          {app}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* 優缺點分析 */}
                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h3 className="font-semibold text-green-800 mb-3 flex items-center">
                      <Zap className="mr-2" size={16} /> 優點
                    </h3>
                    <ul className="space-y-2 text-sm">
                      {selectedModel.advantages.map((advantage, idx) => (
                        <li key={idx} className="flex items-start">
                          <span className="text-green-600 mr-2">✓</span>
                          {advantage}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-red-50 p-4 rounded-lg">
                    <h3 className="font-semibold text-red-800 mb-3 flex items-center">
                      <Settings className="mr-2" size={16} /> 限制
                    </h3>
                    <ul className="space-y-2 text-sm">
                      {selectedModel.disadvantages.map((disadvantage, idx) => (
                        <li key={idx} className="flex items-start">
                          <span className="text-red-600 mr-2">!</span>
                          {disadvantage}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* 互動按鈕 */}
                <div className="flex gap-4">
                  <button className="flex-1 bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center">
                    <PlayCircle className="mr-2" size={20} />
                    開始互動學習
                  </button>
                  <button className="flex-1 bg-gray-100 text-gray-700 py-3 px-6 rounded-lg hover:bg-gray-200 transition-colors flex items-center justify-center">
                    <BookOpen className="mr-2" size={20} />
                    查看理論說明
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }

  // 主頁面
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
                onClick={() => handleCategoryClick(category.id)}
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
                  <span className="text-sm font-medium">
                    {category.id === 'ml' ? '立即探索' : '開始學習'}
                  </span>
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
          <div className="inline-block bg-blue-100 border border-blue-300 rounded-lg px-4 py-2">
            <p className="text-blue-800 text-sm">
              ✨ 機器學習模組已上線！深度學習和AI應用正在開發中
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
