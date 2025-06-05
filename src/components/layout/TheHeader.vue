<script setup lang="ts">
import { useRoute }
from 'vue-router';
import { computed, defineEmits, defineProps } from 'vue';

const props = defineProps<{
  isMobile: boolean;
}>();

const emit = defineEmits(['toggleSider']);

const route = useRoute();
const selectedKeys = computed(() => [route.name as string || 'home']);

const handleToggleSider = () => {
  emit('toggleSider');
};
</script>

<template>
  <div class="header-container">
    <div class="logo">
      <img src="/logo.png" alt="App Logo" class="logo-img" />
      <span class="logo-text">My App</span>
    </div>

    <a-menu v-if="!props.isMobile" mode="horizontal" :selected-keys="selectedKeys" class="header-menu">
      <a-menu-item key="home">
        <router-link to="/">首页</router-link>
      </a-menu-item>
      <a-menu-item key="about">
        <router-link to="/about">关于</router-link>
      </a-menu-item>
    </a-menu>

    <div class="right-actions">
      <a-button v-if="props.isMobile" type="text" shape="circle" @click="handleToggleSider">
        <template #icon><icon-menu /></template>
      </a-button>
      <a-button type="text" shape="circle">
        <template #icon><icon-search /></template>
      </a-button>
      <a-button type="text" shape="circle" style="margin-left: 8px;">
        <template #icon><icon-user /></template>
      </a-button>
    </div>
  </div>
</template>

<style scoped>
.header-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
}

.logo {
  display: flex;
  align-items: center;
  margin-right: 24px;
  flex-shrink: 0;
}

.logo-img {
  height: 32px;
  width: 32px;
  margin-right: 8px;
}

.logo-text {
  font-size: 20px;
  font-weight: 600;
  color: var(--color-text-1);
  white-space: nowrap;
}

.header-menu {
  flex-grow: 1;
  border-bottom: none;
  min-width: 0;
}

.header-menu :deep(.arco-menu-inner) {
  padding: 0;
  min-width: 0;
}

.header-menu :deep(.arco-menu-overflow-wrap) {
  overflow-x: hidden;
  min-width: 0;
}

.header-menu :deep(.arco-menu-item) {
  flex-shrink: 1;
  min-width: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  height: 64px;
  line-height: 64px;
  padding: 0 12px;
  box-sizing: border-box;
}

.header-menu :deep(.arco-menu-item > .router-link-active) {
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;
  text-decoration: none;
  color: inherit;
}

.header-menu :deep(.arco-menu-item-selected .router-link-active) {
  color: var(--color-text-1);
}

.header-menu :deep(.arco-menu-item-selected) {
  background-color: transparent !important;
  border-bottom: none !important;
}

.header-menu :deep(.arco-menu-item-selected::after) {
  height: 2px;
  background-color: var(--color-primary-5);
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 60%;
  border-radius: 2px 2px 0 0;
  transition: all 0.2s cubic-bezier(0.34, 0.69, 0.1, 1);
}

.right-actions {
  margin-left: 20px;
  flex-shrink: 0;
  display: flex;
  align-items: center;
}
</style>