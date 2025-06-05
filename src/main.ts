// src/main.ts
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'; // 导入路由配置

import './style.css'
import '@arco-design/web-vue/es/index.css';

const app = createApp(App);
app.use(router); // 注册路由
app.mount('#app');