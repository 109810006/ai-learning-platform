'use client';

import React from 'react';
import { Brain, Cpu, Eye, ChevronRight } from 'lucide-react';

export default function AILearningPlatform() {
  const aiCategories = [
    {
      key: 'ml',
      title: '機器學習 (Machine Learning)',
      icon: Brain,
      color: 'blue',
      description: '通過數據學習模式，進行預測和分類的傳統演算法',
    },
    {
      key: 'dl', 
      title: '深度學習 (Deep Learning)',
      icon: Cpu,
      color: 'purple',
      description: '使用神經網路進行複雜模式識別和生成',
    },
    {
      key: 'ai',
      title: '人工智慧應用 (AI Applications)', 
      icon: Eye,
      color: 'green',
      description: '實際應用場景中的AI技術整合',
    }
  ];

  const colorClasses = {
    blue: 'from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700',
    purple: 'from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700',
    green: 'from-green-500 to-green-600 hover:from-green-600 hover:to-green-700'
  };

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
          {aiCategories.map((category) => {
            const IconComponent = category.icon;
            return (
              <div
                key={category.key}
                className={`bg-gradient-to-br ${colorClasses[category.color]} p-8 rounded-xl text-white cursor-pointer transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl`}
              >
                <IconComponent size={48} className="mb-4" />
                <h3 className="text-2xl font-bold mb-3">{category.title}</h3>
                <p className="text-sm opacity-90 mb-4">{category.description}</p>
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
            互動式學習平台
          </h2>
          <div className="text-center">
            <p className="text-gray-600 text-lg">
              網站正在建設中，敬請期待完整功能！
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
