<!-- src/views/Introduction.vue -->
<template>
  <div class="introduction-page">
    <h2 class="page-title">系统介绍</h2>
    <div class="page-content">
      <p>欢迎使用AI学习助手，这是一个专注于人工智能学习的辅助平台。</p>
      
      <h3>核心功能</h3>
      <ul>
        <li>提供专业的AI知识体系讲解</li>
        <li>支持多种模型的训练与调优</li>
        <li>内置海量数据集分类工具</li>
        <li>实时学习进度跟踪与反馈</li>
      </ul>

      <h3>技术架构</h3>
      <p>基于Vue3 + TypeScript构建前端界面，后端采用Node.js + Python混合架构，集成TensorFlow/PyTorch等主流机器学习框架，支持分布式训练与推理。</p>
    </div>
  </div>
</template>

<style scoped>
.page-title {
  margin-bottom: 24px;
}

.page-content {
  background: white;
  padding: 32px;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
}
</style>