<script setup lang="ts">
import { computed } from 'vue';
import { useRoute } from 'vue-router';

const { collapsed } = defineProps<{
  collapsed: boolean;
}>();

const route = useRoute();
const selectedKeys = computed(() => [route.name as string]);
</script>

<template>
  <div class="sider-container">
    <a-menu
      :default-selected-keys="['home']"
      :selected-keys="selectedKeys"
      :collapsed="collapsed"
      :auto-open-selected="true"
      class="sider-menu"
    >
      <a-menu-item key="home">
        <template #icon><icon-apps /></template>
        <router-link to="/">
          概览
        </router-link>
      </a-menu-item>
      <a-menu-item key="about">
        <template #icon><icon-info-circle /></template>
        <router-link to="/about">
          关于
        </router-link>
      </a-menu-item>
    </a-menu>
  </div>
</template>

<style scoped>
.sider-container {
  height: 100%;
  display: flex;
  flex-direction: column;
}

.sider-menu {
  flex-grow: 1;
  border-right: none;
}

.sider-menu :deep(.arco-menu-inner) {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
}

.sider-menu :deep(.arco-menu-item) {
  flex-grow: 0;
  flex-shrink: 0;
}

.sider-menu :deep(.arco-menu-item > .router-link-active) {
  display: flex;
  align-items: center;
  height: 100%;
  width: 100%;
  text-decoration: none;
  color: inherit;
}

.sider-menu :deep(.arco-menu-item) .router-link-active,
.sider-menu :deep(.arco-menu-item) a {
  flex-grow: 1;
  height: 100%;
  display: flex;
  align-items: center;
  text-decoration: none;
  color: inherit;
  padding-left: 10px;
}

.sider-menu :deep(.arco-menu-item-selected .router-link-active) {
  color: var(--color-primary-6);
}
</style>