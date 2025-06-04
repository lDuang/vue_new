<!-- src/components/test.vue -->
<script setup lang="ts">
// 接收父组件传递的 msg prop
defineProps<{
  msg: string
}>();

import { Message } from '@arco-design/web-vue'; 

// 导入 Vue 自身的 Composition API，例如 ref
import { ref } from 'vue';

const clickCount = ref(0);

const showArcoMessage = () => {
  clickCount.value++;
  Message.success(`你点击了 Arco 按钮 ${clickCount.value} 次！`);
};
</script>

<template>
  <div>
    <h1>{{ msg }}</h1>
    
    <!-- 使用 Arco Design 的按钮组件 -->
    <a-button type="primary" @click="showArcoMessage">
      点击我测试 Arco Design
    </a-button>

    <p style="margin-top: 20px;">
      当前点击次数: {{ clickCount }}
    </p>
  </div>
</template>

<style scoped>
/* test.vue 自己的样式 */
div {
  text-align: center;
  padding: 20px;
}
h1 {
  color: #35495e;
  margin-bottom: 30px;
}
p {
  color: #42b983;
  font-size: 1.2em;
}
</style>