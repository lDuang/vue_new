<template>
    <div class="home-view-container">
      <a-card :bordered="false" class="home-card">
        <a-typography-title :level="3">欢迎来到您的应用首页！</a-typography-title>
        <a-typography-paragraph>这里是您应用的主要内容区域。</a-typography-paragraph>
        <a-typography-paragraph>您可以将您的组件和内容放置在这里。</a-typography-paragraph>
        <div style="text-align: center; margin-top: 30px;">
          <a-button type="primary" size="large">开始构建</a-button>
        </div>
      </a-card>
    </div>
  </template>
  
  <style scoped>
  .home-view-container {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    box-sizing: border-box;
  }
  
  .home-card {
    width: 100%;
    max-width: 800px;
    padding: 40px;
    background-color: var(--color-bg-2);
    border-radius: 8px;
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.05);
  }
  
  @media (max-width: 768px) {
    .home-card {
      padding: 20px;
    }
  }
  </style>