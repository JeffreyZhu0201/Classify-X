<!-- src/views/Classification.vue -->
<template>
  <div class="classification-page">
    <h2 class="page-title">数据分类</h2>
    <div class="page-content">
      <div class="classification-container">
        <div class="dataset-info">
          <p>当前数据集：MNIST手写数字集（60,000张训练图 + 10,000张测试图）</p>
          <p>分类类别：0-9（共10个类别）</p>
        </div>

        <div class="classification-result">
          <h3>实时分类结果</h3>
          <div class="result-grid">
            <div 
              v-for="item in results" 
              :key="item.label" 
              class="result-item"
            >
              <div class="label">{{ item.label }}</div>
              <div class="progress-bar">
                <div 
                  class="progress" 
                  :style="{ width: `${item.percent}%` }"
                ></div>
              </div>
              <div class="percent">{{ item.percent }}%</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const results = ref([
  { label: '0', percent: 12.3 },
  { label: '1', percent: 8.7 },
  { label: '2', percent: 15.2 },
  { label: '3', percent: 9.8 },
  { label: '4', percent: 11.1 },
  { label: '5', percent: 7.5 },
  { label: '6', percent: 13.4 },
  { label: '7', percent: 6.9 },
  { label: '8', percent: 10.2 },
  { label: '9', percent: 5.9 }
]);
</script>

<style scoped>
.classification-container {
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 32px;
  margin-top: 24px;
}

.dataset-info {
  background: white;
  padding: 24px;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
  align-self: start;
}

.classification-result {
  background: white;
  padding: 24px;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);

  .result-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
    gap: 16px;
    margin-top: 20px;
  }

  .result-item {
    .label {
      color: #2c3e50;
      font-weight: 500;
      margin-bottom: 8px;
    }

    .progress-bar {
      height: 12px;
      background: #ecf0f1;
      border-radius: 6px;
      overflow: hidden;

      .progress {
        height: 100%;
        background: linear-gradient(90deg, #3498db, #2ecc71);
        transition: width 0.5s ease;
      }
    }

    .percent {
      color: #7f8c8d;
      font-size: 0.9rem;
      margin-top: 4px;
      text-align: right;
    }
  }
}
</style>