"use client";

import {
  Brain,
  Cpu,
  Eye,
  BarChart3,
  Network,
  Target,
  TrendingUp,
} from 'lucide-react';
import { useState } from 'react';

type CategoryID = 'ml';

interface MLModel {
  id: string;
  name: string;
  chineseName: string;
  difficulty: '入門' | '初級' | '中級' | '高級';
  duration: string;
  description: string;
  applications: string[];
  advantages: string[];
  disadvantages: string[];
  icon: React.ElementType;
  color: string;
}

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState<CategoryID | null>(null);
  const [selectedModel, setSelectedModel] = useState<MLModel | null>(null);

  const mlModels: MLModel[] = [
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
      color: 'bg-red-500',
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
      color: 'bg-green-500',
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
      color: 'bg-blue-500',
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
      color: 'bg-purple-500',
    }
  ];

  const handleCategoryClick = (categoryId: CategoryID): void => {
    setSelectedCategory(categoryId);
  };

  const handleModelClick = (model: MLModel): void => {
    setSelectedModel(model);
  };

  const closeModal = (): void => {
    setSelectedModel(null);
  };

  const getDifficultyColor = (difficulty: string): string => {
    switch (difficulty) {
      case '入門': return 'bg-green-100 text-green-800';
      case '初級': return 'bg-blue-100 text-blue-800';
      case '中級': return 'bg-yellow-100 text-yellow-800';
      case '高級': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  if (selectedCategory === 'ml') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 p-6">
        <h1 className="text-3xl font-bold mb-6 text-center">機器學習模型</h1>
        <div className="grid md:grid-cols-2 gap-6">
          {mlModels.map((model) => {
            const Icon = model.icon;
            return (
              <div
                key={model.id}
                className="p-6 bg-white shadow-md rounded-lg cursor-pointer hover:shadow-lg"
                onClick={() => handleModelClick(model)}
              >
                <div className="flex items-center mb-4">
                  <div className={`${model.color} p-3 rounded-lg mr-4`}>
                    <Icon className="text-white" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">{model.chineseName}</h3>
                    <p className="text-sm text-gray-500">{model.name}</p>
                  </div>
                  <span className={`ml-auto text-xs px-2 py-1 rounded-full ${getDifficultyColor(model.difficulty)}`}>
                    {model.difficulty}
                  </span>
                </div>
                <p className="text-gray-600">{model.description}</p>
              </div>
            );
          })}
        </div>

        {selectedModel && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-xl max-w-3xl w-full p-6 overflow-y-auto max-h-[90vh]">
              <div className="flex justify-between items-start mb-4">
                <div className="flex items-center">
                  <div className={`${selectedModel.color} p-3 rounded-lg mr-4`}>
                    <selectedModel.icon className="text-white" size={32} />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold">{selectedModel.chineseName}</h2>
                    <p className="text-sm text-gray-500">{selectedModel.name}</p>
                  </div>
                </div>
                <button onClick={closeModal} className="text-gray-400 hover:text-gray-600 text-xl font-bold">×</button>
              </div>
              <p className="mb-2"><strong>難度：</strong>{selectedModel.difficulty}</p>
              <p className="mb-2"><strong>時間：</strong>{selectedModel.duration}</p>
              <p className="mb-4"><strong>說明：</strong>{selectedModel.description}</p>

              <div className="mb-4">
                <h3 className="font-semibold mb-2">應用場景</h3>
                <ul className="list-disc list-inside text-sm text-gray-700">
                  {selectedModel.applications.map((app, idx) => <li key={idx}>{app}</li>)}
                </ul>
              </div>

              <div className="mb-4">
                <h3 className="font-semibold mb-2 text-green-700">優點</h3>
                <ul className="list-disc list-inside text-sm text-green-800">
                  {selectedModel.advantages.map((adv, idx) => <li key={idx}>{adv}</li>)}
                </ul>
              </div>

              <div>
                <h3 className="font-semibold mb-2 text-red-700">限制</h3>
                <ul className="list-disc list-inside text-sm text-red-800">
                  {selectedModel.disadvantages.map((dis, idx) => <li key={idx}>{dis}</li>)}
                </ul>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-50 flex flex-col items-center justify-center p-8">
      <h1 className="text-4xl font-bold mb-6">AI 互動學習平台</h1>
      <p className="text-lg text-gray-600 mb-8">請選擇一個分類開始探索</p>
      <button
        onClick={() => handleCategoryClick('ml')}
        className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition"
      >
        🚀 進入機器學習
      </button>
    </div>
  );
}
