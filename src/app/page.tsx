'use client';

import React, { useState, useEffect } from 'react';
import { XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, ScatterChart, Scatter } from 'recharts';
import { Brain, Cpu, Eye, ArrowLeft, Play, BookOpen, Zap, Target, ChevronRight } from 'lucide-react';

const AILearningPlatform = () => {
  const [currentView, setCurrentView] = useState('home');
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedModel, setSelectedModel] = useState(null);

  const aiCategories = {
    // 此處保持原樣 (ml, dl, ai categories)...
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
        setIteration(0);
      }
    }, [modelKey, categoryKey, k]);

    if (modelKey === 'svm' && categoryKey === 'ml') {
      return (
        <div className="space-y-6"> {/* SVM demo code (略) */} </div>
      );
    }

    if (modelKey === 'kmeans' && categoryKey === 'ml') {
      return (
        <div className="space-y-6"> {/* K-Means demo code (略) */} </div>
      );
    }

    if (modelKey === 'yolo' && categoryKey === 'dl') {
      return (
        <div className="space-y-6"> {/* YOLO demo code (略) */} </div>
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

  // 首頁、分類頁、模型頁邏輯保持不變

  return null;
};

export default AILearningPlatform;
