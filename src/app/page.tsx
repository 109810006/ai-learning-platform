'use client';

import React, { useState, useEffect } from 'react';
import { XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, ScatterChart, Scatter } from 'recharts';
import { Brain, Cpu, Eye, ArrowLeft, Play, BookOpen, Zap, Target, ChevronRight } from 'lucide-react';

const AILearningPlatform = () => {
  const [currentView, setCurrentView] = useState('home');
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedModel, setSelectedModel] = useState(null);

  const aiCategories = {
    ml: {
      title: '機器學習 (Machine Learning)',
      icon: Brain,
      color: 'blue',
      description: '通過數據學習模式，進行預測和分類的傳統演算法',
      models: {
        svm: {
          title: 'SVM (支援向量機)',
          description: '找到最佳決策邊界來分類數據',
          difficulty: '中級',
          applications: ['文本分類', '圖像識別', '生物資訊學']
        },
        randomforest: {
          title: 'Random Forest (隨機森林)',
          description: '結合多個決策樹的集成學習方法',
          difficulty: '初級',
          applications: ['特徵重要性分析', '回歸預測', '分類問題']
        },
        kmeans: {
          title: 'K-Means 聚類',
          description: '無監督學習，將數據分為K個群組',
          difficulty: '初級',
          applications: ['客戶分群', '市場細分', '圖像分割']
        },
        linear: {
          title: '線性/邏輯回歸',
          description: '最基礎的預測模型，易懂且實用',
          difficulty: '入門',
          applications: ['價格預測', '風險評估', '趨勢分析']
        }
      }
    },
    dl: {
      title: '深度學習 (Deep Learning)',
      icon: Cpu,
      color: 'purple',
      description: '使用神經網路進行複雜模式識別和生成',
      models: {
        cnn: {
          title: 'CNN (卷積神經網路)',
          description: '專門處理圖像數據的神經網路架構',
          difficulty: '高級',
          applications: ['圖像識別', '醫學影像', '自動駕駛']
        },
        rnn: {
          title: 'RNN/LSTM (遞歸神經網路)',
          description: '處理序列數據，具有記憶功能',
          difficulty: '高級',
          applications: ['語言翻譯', '時間序列', '語音識別']
        },
        yolo: {
          title: 'YOLO (物體偵測)',
          description: '實時物體偵測和定位系統',
          difficulty: '專家',
          applications: ['監控系統', '自動駕駛', '智慧零售']
        },
        gan: {
          title: 'GAN (生成對抗網路)',
          description: '兩個網路互相競爭來生成逼真數據',
          difficulty: '專家',
          applications: ['圖像生成', '數據增強', '藝術創作']
        }
      }
    },
    ai: {
      title: '人工智慧應用 (AI Applications)',
      icon: Eye,
      color: 'green',
      description: '實際應用場景中的AI技術整合',
      models: {
        nlp: {
          title: 'NLP (自然語言處理)',
          description: '讓電腦理解和生成人類語言',
          difficulty: '中級',
          applications: ['聊天機器人', '情感分析', '自動摘要']
        },
        cv: {
          title: 'Computer Vision (電腦視覺)',
          description: '讓電腦看懂圖像和影片',
          difficulty: '高級',
          applications: ['人臉識別', '醫學診斷', '品質檢測']
        },
        rl: {
          title: 'Reinforcement Learning (強化學習)',
          description: '通過獎勵機制學習最佳策略',
          difficulty: '專家',
          applications: ['遊戲AI', '機器人控制', '金融交易']
        },
        automl: {
          title: 'AutoML (自動機器學習)',
          description: '自動化機器學習流程和模型選擇',
          difficulty: '中級',
          applications: ['快速原型', '非專家使用', '模型優化']
        }
      }
    }
  };

  const InteractiveDemo = ({ modelKey, categoryKey }) => {
    const [margin, setMargin] = useState(1);
    const [k, setK] = useState(3);
    const [iteration, setIteration] = useState(0);
    const [clusterData, setClusterData] = useState([]);
    const [confidence, setConfidence] = useState(0.5);

    const maxIterations = 5;

    const dataPoints = [
      { x: 2, y: 3, class: 'A', color: '#3b82f6' },
      { x: 3, y: 4, class: 'A', color: '#3b82f6' },
      { x: 1, y: 2, class: 'A', color: '#3b82f6' },
      { x: 2, y: 2, class: 'A', color: '#3b82f6' },
      { x: 6, y: 6, class: 'B', color: '#ef4444' },
      { x: 7, y: 7, class: 'B', color: '#ef4444' },
      { x: 8, y: 6, class: 'B', color: '#ef4444' },
      { x: 7, y: 5, class: 'B', color: '#ef4444' },
    ];

    const detections = [
      { object: '雞蛋', x: 100, y: 80, width: 60, height: 40, conf: 0.89 },
      { object: '雞蛋', x: 200, y: 120, width: 55, height: 38, conf: 0.76 },
      { object: '雞蛋', x: 150, y: 200, width: 58, height: 42, conf: 0.91 },
      { object: '籃子', x: 50, y: 180, width: 250, height: 120, conf: 0.67 },
    ];

    const visibleDetections = detections.filter(d => d.conf >= confidence);

    const generateClusters = (numClusters) => {
      const data = [];
      const colors = ['#3b82f6', '#ef4444', '#22c55e', '#f59e0b', '#8b5cf6'];
      for (let cluster = 0; cluster < numClusters; cluster++) {
        const centerX = (cluster + 1) * (8 / (numClusters + 1)) + Math.random() * 2;
        const centerY = (cluster + 1) * (8 / (numClusters + 1)) + Math.random() * 2;
        for (let i = 0; i < 8; i++) {
          data.push({
            x: centerX + (Math.random() - 0.5) * 3,
            y: centerY + (Math.random() - 0.5) * 3,
            cluster: cluster,
            color: colors[cluster % colors.length]
          });
        }
      }
      return data;
    };

    useEffect(() => {
      if (modelKey === 'kmeans' && categoryKey === 'ml') {
        setClusterData(generateClusters(k));
      }
    }, [modelKey, categoryKey, k]);

    if (modelKey === 'svm' && categoryKey === 'ml') {
      return (
        <div className="space-y-6">
          <div className="bg-blue-50 p-4 rounded-lg">
            <h4 className="font-semibold mb-3">調整 SVM 參數</h4>
            <div>
              <label className="block text-sm font-medium mb-1">決策邊界邊距 (Margin)</label>
              <input
                type="range"
                min="0.5"
                max="2"
                step="0.1"
                value={margin}
                onChange={(e) => setMargin(parseFloat(e.target.value))}
                className="w-full"
              />
              <span className="text-sm text-gray-600">邊距: {margin}</span>
            </div>
          </div>

          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <ScatterChart data={dataPoints}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="x" domain={[0, 10]} />
                <YAxis dataKey="y" domain={[0, 10]} />
                <Tooltip formatter={(value, name) => [value, name === 'x' ? 'X座標' : 'Y座標']} />
                <Scatter dataKey="y" fill={(entry) => entry.color} />
              </ScatterChart>
            </ResponsiveContainer>
          </div>

          <div className="bg-gray-50 p-4 rounded-lg">
            <h5 className="font-medium mb-2">SVM 如何工作？</h5>
            <ul className="text-sm space-y-1">
              <li>• 找到兩類數據間的最佳分隔線</li>
              <li>• 最大化決策邊界到最近數據點的距離（邊距）</li>
              <li>• 支援向量是決定邊界位置的關鍵數據點</li>
              <li>• 調整邊距可以控制模型的泛化能力</li>
            </ul>
          </div>
        </div>
      );
    }

    if (modelKey === 'kmeans' && categoryKey === 'ml') {
      return (
        <div className="space-y-6">
          <div className="bg-purple-50 p-4 rounded-lg">
            <h4 className="font-semibold mb-3">K-Means 參數調整</h4>
            <div>
              <label className="block text-sm font-medium mb-1">群組數量 (K)</label>
              <input
                type="range"
                min="2"
                max="5"
                value={k}
                onChange={(e) => setK(parseInt(e.target.value))}
                className="w-full"
              />
              <span className="text-sm text-gray-600">K = {k}</span>
            </div>

            <div className="flex space-x-2 mt-4">
              <button
                onClick={() => setIteration(Math.min(iteration + 1, maxIterations))}
                className="px-3 py-1 bg-purple-600 text-white rounded text-sm hover:bg-purple-700"
                disabled={iteration >= maxIterations}
              >
                下一步迭代
              </button>
              <button
                onClick={() => setIteration(0)}
                className="px-3 py-1 bg-gray-600 text-white rounded text-sm hover:bg-gray-700"
              >
                重置
              </button>
              <span className="text-sm text-gray-600 self-center">
                迭代: {iteration}/{maxIterations}
              </span>
            </div>
          </div>

          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <ScatterChart data={clusterData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="x" domain={[0, 10]} />
                <YAxis dataKey="y" domain={[0, 10]} />
                <Tooltip />
                <Scatter dataKey="y" fill={(entry) => entry.color} />
              </ScatterChart>
            </ResponsiveContainer>
          </div>

          <div className="bg-gray-50 p-4 rounded-lg">
            <h5 className="font-medium mb-2">K-Means 演算法步驟</h5>
            <ol className="text-sm space-y-1 list-decimal list-inside">
              <li>隨機選擇 K 個中心點</li>
              <li>將每個數據點分配到最近的中心點</li>
              <li>重新計算每個群組的中心點</li>
              <li>重複步驟 2-3 直到收斂</li>
            </ol>
          </div>
        </div>
      );
    }

    if (modelKey === 'yolo' && categoryKey === 'dl') {
      return (
        <div className="space-y-6">
          <div className="bg-indigo-50 p-4 rounded-lg">
            <h4 className="font-semibold mb-3">YOLO 偵測參數</h4>
            <div>
              <label className="block text-sm font-medium mb-1">信心閾值 (Confidence Threshold)</label>
              <input
                type="range"
                min="0.1"
                max="1"
                step="0.05"
                value={confidence}
                onChange={(e) => setConfidence(parseFloat(e.target.value))}
                className="w-full"
              />
              <span className="text-sm text-gray-600">閾值: {confidence.toFixed(2)}</span>
            </div>
          </div>

          <div className="relative bg-gray-200 h-80 rounded-lg overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-yellow-100 to-orange-100"></div>
            {visibleDetections.map((detection, idx) => (
              <div
                key={idx}
                className="absolute border-2 border-red-500"
                style={{
                  left: `${detection.x}px`,
                  top: `${detection.y}px`,
                  width: `${detection.width}px`,
                  height: `${detection.height}px`,
                }}
              >
                <div className="bg-red-500 text-white text-xs px-1 -mt-5">
                  {detection.object} ({(detection.conf * 100).toFixed(0)}%)
                </div>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="bg-gray-50 p-3 rounded-lg">
              <h5 className="font-medium mb-2">偵測結果</h5>
              <ul className="text-sm space-y-1">
                {visibleDetections.map((d, idx) => (
                  <li key={idx}>
                    {d.object}: {(d.conf * 100).toFixed(1)}%
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-gray-50 p-3 rounded-lg">
              <h5 className="font-medium mb-2">YOLO 優勢</h5>
              <ul className="text-sm space-y-1">
                <li>• 實時偵測 (30+ FPS)</li>
                <li>• 單次網路運算</li>
                <li>• 多物體同時偵測</li>
                <li>• 準確的位置資訊</li>
              </ul>
            </div>
          </div>
        </div>
      );
    }

    return (
      <div className="text-center py-8">
        <div className="text-gray-500 mb-4">
          <Target size={48} className="mx-auto mb-2" />
          <p>此模型的互動演示正在開發中...</p>
        </div>
      </div>
    );
  };

  // 首頁視圖
  if (currentView === 'home') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50">
        <header className="bg-white shadow-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="text-center">
              <h1 className="text-4xl font-bold text-gray-900 mb-2">
                AI 互動學習平台
              </h1>
              <p className="text-xl text-gray-600">
                從基礎到進階，用互動方式掌握人工智慧
              </p>
            </div>
          </div>
        </header>

        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid md:grid-cols-3 gap-8">
            {Object.entries(aiCategories).map(([key, category]) => {
              const IconComponent = category.icon;
              const colorClasses = {
                blue: 'from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700',
                purple: 'from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700',
                green: 'from-green-500 to-green-600 hover:from-green-600 hover:to-green-700'
              };

              return (
                <div
                  key={key}
                  onClick={() => {
                    setSelectedCategory(key);
                    setCurrentView('category');
                  }}
                  className={`bg-gradient-to-br ${colorClasses[category.color]} p-8 rounded-xl text-white cursor-pointer transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl`}
                >
                  <IconComponent size={48} className="mb-4" />
                  <h3 className="text-2xl font-bold mb-3">{category.title}</h3>
                  <p className="text-sm opacity-90 mb-4">{category.description}</p>
                  <div className="space-y-2">
                    <div className="text-xs opacity-75">包含模型:</div>
                    <div className="flex flex-wrap gap-1">
                      {Object.keys(category.models).slice(0, 3).map(modelKey => (
                        <span key={modelKey} className="text-xs bg-white bg-opacity-20 px-2 py-1 rounded">
                          {category.models[modelKey].title.split(' ')[0]}
                        </span>
                      ))}
                      {Object.keys(category.models).length > 3 && (
                        <span className="text-xs bg-white bg-opacity-20 px-2 py-1 rounded">
                          +{Object.keys(category.models).length - 3}
                        </span>
                      )}
                    </div>
                  </div>
                  <div className="flex items-center mt-4 text-sm">
                    <span>開始學習</span>
                    <ChevronRight size={16} className="ml-1" />
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-16 bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">
              為什麼選擇互動式學習？
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Play className="text-blue-600" size={24} />
                </div>
                <h3 className="text-lg font-semibold mb-2">動手實作</h3>
                <p className="text-gray-600">直接調整參數，即時看到結果變化</p>
              </div>
              <div className="text-center">
                <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <BookOpen className="text-purple-600" size={24} />
                </div>
                <h3 className="text-lg font-semibold mb-2">理論結合實務</h3>
                <p className="text-gray-600">用農業數據等真實案例學習</p>
              </div>
              <div className="text-center">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="text-green-600" size={24} />
                </div>
                <h3 className="text-lg font-semibold mb-2">循序漸進</h3>
                <p className="text-gray-600">從入門到專家，階段式學習路徑</p>
              </div>
            </div>
          </div>
        </main>
      </div>
    );
  }

  // 分類頁面視圖
  if (currentView === 'category' && selectedCategory) {
    const category = aiCategories[selectedCategory];
    const IconComponent = category.icon;

    return (
      <div className="min-h-screen bg-gray-50">
        <header className="bg-white shadow-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <div className="flex items-center">
              <button
                onClick={() => setCurrentView('home')}
                className="flex items-center text-gray-600 hover:text-gray-900 mr-4"
              >
                <ArrowLeft size={20} className="mr-1" />
                返回首頁
              </button>
              <div className="flex items-center">
                <IconComponent size={32} className={`mr-3 ${category.color === 'blue' ? 'text-blue-600' : category.color === 'purple' ? 'text-purple-600' : 'text-green-600'}`} />
                <div>
                  <h1 className="text-2xl font-bold text-gray-900">{category.title}</h1>
                  <p className="text-gray-600">{category.description}</p>
                </div>
              </div>
            </div>
          </div>
        </header>

        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Object.entries(category.models).map(([modelKey, model]) => {
              const difficultyColors = {
                '入門': 'bg-green-100 text-green-800',
                '初級': 'bg-blue-100 text-blue-800',
                '中級': 'bg-yellow-100 text-yellow-800',
                '高級': 'bg-orange-100 text-orange-800',
                '專家': 'bg-red-100 text-red-800'
              };

              return (
                <div
                  key={modelKey}
                  onClick={() => {
                    setSelectedModel(modelKey);
                    setCurrentView('model');
                  }}
                  className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow cursor-pointer p-6"
                >
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-lg font-semibold text-gray-900">{model.title}</h3>
                    <span className={`text-xs px-2 py-1 rounded-full ${difficultyColors[model.difficulty]}`}>
                      {model.difficulty}
                    </span>
                  </div>
                  <p className="text-gray-600 text-sm mb-4">{model.description}</p>
                  <div className="space-y-2">
                    <div className="text-xs font-medium text-gray-700">應用場景:</div>
                    <div className="flex flex-wrap gap-1">
                      {model.applications.map((app, idx) => (
                        <span key={idx} className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded">
                          {app}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="mt-4 text-sm text-blue-600 flex items-center">
                    開始互動學習
                    <ChevronRight size={16} className="ml-1" />
                  </div>
                </div>
              );
            })}
          </div>
        </main>
      </div>
    );
  }

  // 模型頁視圖
  if (currentView === 'model' && selectedModel && selectedCategory) {
    const category = aiCategories[selectedCategory];
    const model = category.models[selectedModel];
    const IconComponent = category.icon;

    return (
      <div className="min-h-screen bg-gray-50">
        <header className="bg-white shadow-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <div className="flex items-center">
              <button
                onClick={() => setCurrentView('category')}
                className="flex items-center text-gray-600 hover:text-gray-900 mr-4"
              >
                <ArrowLeft size={20} className="mr-1" />
                返回 {category.title}
              </button>
              <div className="flex items-center">
                <IconComponent size={32} className={`mr-3 ${category.color === 'blue' ? 'text-blue-600' : category.color === 'purple' ? 'text-purple-600' : 'text-green-600'}`} />
                <div>
                  <h1 className="text-2xl font-bold text-gray-900">{model.title}</h1>
                  <p className="text-gray-600">{model.description}</p>
                </div>
              </div>
            </div>
          </div>
        </header>

        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="mb-8">
              <h2 className="text-xl font-bold text-gray-900 mb-4">互動式演示</h2>
              <InteractiveDemo modelKey={selectedModel} categoryKey={selectedCategory} />
            </div>

            <div className="border-t pt-8">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">模型資訊</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-medium text-gray-900 mb-2">難度等級</h4>
                  <span className="text-sm bg-blue-100 text-blue-800 px-3 py-1 rounded-full">
                    {model.difficulty}
                  </span>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900 mb-2">主要應用</h4>
                  <div className="space-y-1">
                    {model.applications.map((app, idx) => (
                      <div key={idx} className="text-sm text-gray-600">• {app}</div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    );
  }

  return null;
};

export default AILearningPlatform;
