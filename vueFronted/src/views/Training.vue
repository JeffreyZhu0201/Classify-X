<!-- src/views/Training.vue -->
<template>
  <div class="training-page">
    <h2 class="page-title">模型训练</h2>
    <div class="page-content">
      <div class="training-cards">
        <div class="card">
          <h3>基础模型训练</h3>
          <p>支持常见模型（如ResNet、BERT）的快速训练，提供预训练权重</p>
          <button class="train-btn">开始训练</button>
        </div>
        <div class="card">
          <h3>自定义模型训练</h3>
          <p>支持上传自定义模型结构，灵活配置训练参数（学习率、批次大小等）</p>
          <button class="train-btn">配置参数</button>
        </div>
        <div class="card">
          <h3>分布式训练</h3>
          <p>支持多GPU/多节点分布式训练，自动管理节点通信与资源调度</p>
          <button class="train-btn">集群设置</button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.training-cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 24px;
  margin-top: 24px;
}

.card {
  background: white;
  padding: 24px;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-4px);
  }

  h3 {
    color: #2c3e50;
    margin-bottom: 12px;
  }

  p {
    color: #7f8c8d;
    margin-bottom: 20px;
    line-height: 1.5;
  }

  .train-btn {
    background: #3498db;
    color: white;
    border: none;
    padding: 10px 20px;
    border-radius: 6px;
    cursor: pointer;
    transition: background 0.3s ease;

    &:hover {
      background: #2980b9;
    }
  }
}
</style>