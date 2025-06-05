<script setup lang="ts">
import { ref } from 'vue';

const teamMembers = ref([
  {
    name: '张三',
    role: '项目经理',
    avatar: 'https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3vd/77894a8fbc8a2380a49567d7945d8b7b.png~tplv-uwbnlip3vd-webp.webp',
    description: '负责项目整体规划与团队管理，确保项目顺利进行。'
  },
  {
    name: '李四',
    role: '前端开发工程师',
    avatar: 'https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3vd/77894a8fbc8a2380a49567d7945d8b7b.png~tplv-uwbnlip3vd-webp.webp',
    description: '专注于用户界面与交互体验，将设计转化为代码。'
  },
  {
    name: '王五',
    role: 'UI/UX 设计师',
    avatar: 'https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3vd/77894a8fbc8a2380a49567d7945d8b7b.png~tplv-uwbnlip3vd-webp.webp',
    description: '创造美观且易用的产品设计，提升用户满意度。'
  },
  {
    name: '赵六',
    role: '后端开发工程师',
    avatar: 'https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3vd/77894a8fbc8a2380a49567d7945d8b7b.png~tplv-uwbnlip3vd-webp.webp',
    description: '负责服务器端逻辑与数据库设计，提供稳定可靠的支撑。'
  }
]);

const openLink = (url: string) => {
  window.open(url, '_blank');
};
</script>

<template>
  <div class="about-page-container">
    <a-card :bordered="false" class="about-card">
      <a-typography-title :level="2" style="text-align: center; margin-bottom: 30px;">关于我们</a-typography-title>

      <a-typography-paragraph
        style="text-align: center; max-width: 800px; margin: 0 auto 40px; font-size: 16px; line-height: 1.8;">
        我们是一个充满激情和创造力的团队，致力于打造卓越的Web应用。我们相信通过技术和设计，可以为用户提供更好的体验。
        此应用是一个基于 Vue 3 和 Arco Design 构建的现代化前端框架示例，旨在提供一个干净、高效且美观的开发起点。
        我们致力于提供高质量、易于维护和扩展的解决方案，以满足不断变化的用户需求。
      </a-typography-paragraph>

      <a-divider orientation="center">我们的团队</a-divider>

      <a-row :gutter="[24, 24]" justify="center" class="team-members">
        <a-col v-for="member in teamMembers" :key="member.name" :xs="24" :sm="12" :md="8" :lg="6">
          <a-card hoverable class="member-card">
            <a-avatar :size="80" :src="member.avatar" style="margin-bottom: 15px;">
              <icon-user v-if="!member.avatar" />
            </a-avatar>
            <a-typography-title :level="4" style="margin-bottom: 5px;">{{ member.name }}</a-typography-title>
            <a-typography-text type="secondary" style="margin-bottom: 10px; display: block;">{{ member.role
              }}</a-typography-text>
            <a-typography-paragraph style="font-size: 13px; color: var(--color-text-2);">
              {{ member.description }}
            </a-typography-paragraph>
          </a-card>
        </a-col>
      </a-row>

      <a-divider orientation="center" style="margin-top: 50px;">联系我们</a-divider>

      <div class="contact-info">
        <a-space :size="20">
          <a-button type="text" @click="openLink('mailto:info@example.com')">
            <template #icon><icon-email /></template>
            info@example.com
          </a-button>
          <a-button type="text" @click="openLink('tel:+1234567890')">
            <template #icon><icon-phone /></template>
            +1 (234) 567-890
          </a-button>
          <a-button type="text" @click="openLink('https://github.com/your-org')" target="_blank">
            <template #icon><icon-github /></template>
            GitHub
          </a-button>
        </a-space>
      </div>
    </a-card>
  </div>
</template>

<style scoped>
.about-page-container {
  background-color: var(--color-fill-1);
  display: flex;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
  box-sizing: border-box;
}

.about-card {
  width: 100%;
  max-width: 1000px;
  margin: 0 auto;
  padding: 40px;
  background-color: var(--color-bg-2);
  border-radius: 12px;
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.08);
}

@media (max-width: 768px) {
  .about-card {
    padding: 20px;
  }
}

.team-members {
  margin-top: 30px;
}

.member-card {
  text-align: center;
  padding: 20px;
  border-radius: 8px;
  transition: all 0.3s ease;
}

.member-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.1);
}

.contact-info {
  text-align: center;
  margin-top: 30px;
}
</style>