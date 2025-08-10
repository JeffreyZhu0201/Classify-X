<!-- src/App.vue -->
<template>
  <div class="app-container">
    <!-- 侧边栏 -->
    <aside class="sidebar">
      <div class="logo-container">
        <h1 class="logo">AI 学习助手</h1>
      </div>
      
      <nav class="menu">
        <router-link
          v-for="item in menuItems"
          :key="item.path"
          :to="item.path"
          class="menu-item"
          :class="{ active: route.path === item.path }"
        >
          <i :class="item.icon"></i>
          <span>{{ item.title }}</span>
        </router-link>
      </nav>
    </aside>

    <!-- 主内容区域 -->
    <main class="main-content">
      <router-view v-slot="{ Component }">
        <transition name="fade" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
    </main>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter, useRoute } from 'vue-router';

const route = useRoute(); 

// 菜单配置
const menuItems = ref([
  {
    path: '/introduction',
    title: '系统介绍',
    icon: 'iconfont icon-info-circle'
  },
  {
    path: '/training',
    title: '模型训练',
    icon: 'iconfont icon-dumbbell'
  },
  {
    path: '/classification',
    title: '数据分类',
    icon: 'iconfont icon-list'
  }
]);

// 可选：如果需要通过编程控制路由
// const router = useRouter();
// const route = useRoute();
</script>

<style scoped lang="scss">
.app-container {
  display: flex;
  min-height: 100vh;
  width: max-content;
  background-color: #f5f7fa;
}

.sidebar {
  width: 240px;
  background: linear-gradient(180deg, #2c3e50 0%, #1a252f 100%);
  color: #ecf0f1;
  box-shadow: 2px 0 10px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;

  .logo-container {
    padding: 24px 16px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    
    .logo {
      margin: 0;
      font-size: 1.5rem;
      font-weight: 600;
      letter-spacing: 1px;
      background: linear-gradient(90deg, #3498db, #2ecc71);
      -webkit-background-clip: text;
      background-clip: text;
      color: transparent;
    }
  }

  .menu {
    padding: 24px 0;
    flex: 1;

    .menu-item {
      display: flex;
      align-items: center;
      padding: 14px 24px;
      margin: 4px 12px;
      border-radius: 8px;
      color: #bdc3c7;
      text-decoration: none;
      transition: all 0.3s ease;
      cursor: pointer;

      &:hover {
        background-color: rgba(255, 255, 255, 0.1);
        color: #ecf0f1;
      }

      &.active {
        background-color: #3498db;
        color: white;
        box-shadow: 0 4px 12px rgba(52, 152, 219, 0.2);

        i {
          transform: scale(1.1);
        }
      }

      i {
        font-size: 1.2rem;
        margin-right: 16px;
        transition: transform 0.3s ease;
      }

      span {
        font-size: 1rem;
        font-weight: 500;
      }
    }
  }
}

.main-content {
  flex: 1;
  padding: 32px;
  overflow-y: auto;

  .page-title {
    font-size: 2rem;
    color: #2c3e50;
    margin-bottom: 24px;
    padding-bottom: 12px;
    border-bottom: 2px solid #3498db;
  }

  .page-content {
    max-width: 1000px;
    margin: 0 auto;
    color: #34495e;
    line-height: 1.6;
  }
}

// 路由切换过渡动画
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>