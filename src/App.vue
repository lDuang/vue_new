<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';
import TheHeader from './components/layout/TheHeader.vue';
import TheSider from './components/layout/TheSider.vue';
import TheContent from './components/layout/TheContent.vue';
// import TheFooter from './components/layout/TheFooter.vue';

const collapsed = ref(false);
const isMobile = ref(false);

const checkMobile = () => {
  isMobile.value = window.matchMedia('(max-width: 768px)').matches;
  if (isMobile.value) {
    collapsed.value = true;
  } else {
    collapsed.value = false;
  }
};

const onCollapse = (val: boolean) => {
  collapsed.value = val;
};

const toggleSider = () => {
  collapsed.value = !collapsed.value;
};

onMounted(() => {
  checkMobile();
  window.addEventListener('resize', checkMobile);
});

onUnmounted(() => {
  window.removeEventListener('resize', checkMobile);
});
</script>

<template>
  <a-layout class="main-layout-container">
    <a-layout-header class="layout-header">
      <TheHeader :isMobile="isMobile" @toggle-sider="toggleSider" />
    </a-layout-header>

    <a-layout class="middle-layout">
      <a-layout-sider
        class="layout-sider"
        :width="220"
        :collapsed="collapsed"
        :collapsible="true"
        @collapse="onCollapse"
        :hide-trigger="isMobile"
      >
        <TheSider :collapsed="collapsed" />
      </a-layout-sider>

      <a-layout-content class="layout-content">
        <TheContent />
      </a-layout-content>
    </a-layout>

    <!-- <a-layout-footer class="layout-footer">
      <TheFooter />
    </a-layout-footer> -->
  </a-layout>
</template>

<style scoped>
.main-layout-container {
  height: 100%;
  display: flex;
  flex-direction: column;
}

.layout-header {
  height: 64px;
  padding: 0 20px;
  background-color: var(--color-bg-2);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
  z-index: 100;
}

.middle-layout {
  flex-grow: 1;
  display: flex;
  overflow: hidden;
}

.layout-sider {
  background-color: var(--color-bg-2);
  box-shadow: 2px 0 8px rgba(0, 0, 0, 0.05);
  z-index: 99;
}

.layout-content {
  padding: 24px;
  background-color: var(--color-fill-1);
  flex-grow: 1;
  overflow-y: auto;
}

.layout-footer {
  height: 48px;
  line-height: 48px;
  text-align: center;
  color: var(--color-text-2);
  background-color: var(--color-bg-2);
  border-top: 1px solid var(--color-border-1);
}
</style>