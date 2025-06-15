"use client";

import {
  Brain, Cpu, Eye, ChevronRight, PlayCircle, BookOpen, Zap,
  TrendingUp, Settings, BarChart3, Network, Target, Clock, Users, Award
} from 'lucide-react';
import { useState } from 'react';

type CategoryID = 'ml' | 'dl' | 'ai';

interface AICategory {
  id: CategoryID;
  title: string;
  subtitle: string;
  description: string;
  icon: React.ElementType;
  color: string;
  gradient: string;
  features: string[];
}

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

  const aiCategories: AICategory[] = [
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

  const getDifficultyColor = (difficulty: string): string => {
    switch (difficulty) {
      case '入門': return 'bg-green-100 text-green-800';
      case '初級': return 'bg-blue-100 text-blue-800';
      case '中級': return 'bg-yellow-100 text-yellow-800';
      case '高級': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const handleCategoryClick = (categoryId: CategoryID): void => {
    if (categoryId === 'ml') {
      setSelectedCategory('ml');
    } else {
      setSelectedCategory(null);
    }
  };

  const handleModelClick = (model: MLModel): void => {
    setSelectedModel(model);
  };

  const closeModal = (): void => {
    setSelectedModel(null);
  };
