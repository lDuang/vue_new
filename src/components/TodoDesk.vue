<!-- src/components/TodoDesk.vue -->
<script setup lang="ts">
import { ref, nextTick } from 'vue'; // 导入 nextTick 用于 DOM 更新后操作
// 手动导入 Arco Design 的组件和 API
import { Notification } from '@arco-design/web-vue';
import type { InputInstance } from '@arco-design/web-vue';

// 定义待办事项的类型
interface TodoItem {
  id: number;
  content: string;
}

// 响应式变量：新的待办事项内容
const newTodo = ref('');
// 响应式变量：待办事项列表
const todoList = ref<TodoItem[]>([]);
// 用于生成唯一 ID
let nextId = 0;
// 输入框的引用，用于聚焦
const inputRef = ref<InputInstance | null>(null);

// 添加待办事项的函数
const addTodo = async () => { // 更改为 async 函数以正确使用 await nextTick
  if (newTodo.value.trim() === '') {
    Notification.warning({
      title: '操作失败',
      content: '待办事项内容不能为空！',
      duration: 3000,
      closable: true,
      position: 'topRight',
    });
    return;
  }
  todoList.value.push({
    id: nextId++,
    content: newTodo.value.trim(),
  });
  newTodo.value = ''; // 清空输入框

  Notification.success({
    title: '操作成功',
    content: '待办事项已添加！',
    duration: 3000,
    closable: true,
    position: 'topRight',
  });

  // [优化] 添加成功后，输入框重新聚焦，方便连续添加
  await nextTick(); // 等待 DOM 更新
  inputRef.value?.focus();
};

// 删除待办事项的函数
const deleteTodo = (id: number) => {
  todoList.value = todoList.value.filter(item => item.id !== id);
  Notification.info({
    title: '操作提示',
    content: '待办事项已删除！',
    duration: 3000,
    closable: true,
    position: 'topRight',
  });
};
</script>

<template>
  <!-- 最外层容器，实现垂直和水平居中 -->
  <div class="todo-desk-wrapper-centered">
    <!-- 使用 a-row 和 a-col 实现响应式布局和内容居中 -->
    <a-row justify="center" align="center" class="todo-row">
      <a-col :xs="24" :sm="20" :md="16" :lg="12" :xl="10">
        <a-card :style="{ width: '100%', margin: '0' }" title="我的待办事项" class="todo-card">
          <!-- 输入框和添加按钮 -->
          <a-input-group class="input-group">
            <a-input
              ref="inputRef"
              v-model="newTodo"
              placeholder="添加新的待办事项..."
              @press-enter="addTodo"
              allow-clear
            />
            <a-button type="primary" @click="addTodo">添加</a-button>
          </a-input-group>

          <!-- 待办事项列表 -->
          <a-list :bordered="false" class="todo-list" :hoverable="true"> <!-- [优化] 添加 hoverable 使列表项可悬停 -->
            <a-list-item v-for="item in todoList" :key="item.id" class="todo-list-item">
              <a-list-item-meta :title="item.content" />
              <template #actions>
                <!-- 删除确认气泡框 -->
                <a-popconfirm
                  content="确定要删除此待办事项吗？"
                  @ok="deleteTodo(item.id)"
                  position="left"
                  type="warning"
                >
                  <a-button status="danger" size="small">删除</a-button>
                </a-popconfirm>
              </template>
            </a-list-item>
            <template #empty>
              <a-empty description="暂无待办事项，快来添加吧！" />
            </template>
          </a-list>
        </a-card>
      </a-col>
    </a-row>
  </div>
</template>

<style scoped>
/* 最外层容器，实现垂直和水平居中 */
.todo-desk-wrapper-centered {
  background-color: var(--color-fill-1);
  min-height: 100vh; /* 确保占据整个视口高度 */
  display: flex; /* 启用 Flexbox 布局 */
  justify-content: center; /* 水平居中 */
  align-items: center; /* 垂直居中 */
  padding: 20px; /* 添加一些内边距，防止内容紧贴边缘 */
  box-sizing: border-box; /* 确保 padding 不会增加总宽度/高度 */
}

.todo-row {
  width: 100%; /* 让行占据全部宽度 */
  max-width: 800px; /* [调整] 稍微减小最大宽度，使卡片在较大屏幕上更聚焦 */
}

.todo-card {
  box-shadow: var(--shadow-2);
  border-radius: var(--border-radius-medium);
  margin: 0; /* 确保卡片没有额外的上下外边距，以免影响垂直居中 */
}

.input-group {
  margin-bottom: 24px; /* [微调] 稍微增加输入组下方的间距 */
}

.todo-list {
  margin-top: 16px; /* [微调] 稍微调整列表上方的间距 */
}

/* [优化] 列表项样式调整，确保内容和操作按钮垂直居中对齐 */
.todo-list-item :deep(.arco-list-item-meta) {
  align-items: center; /* 确保 meta 内容垂直居中 */
}
.todo-list-item :deep(.arco-list-item-action) {
  align-items: center; /* 确保操作按钮区域垂直居中 */
  margin-top: 0; /* 清除可能的默认顶部边距，依赖flex对齐 */
}


/* 调整列表项标题的样式 */
:deep(.arco-list-item-meta-title) {
  font-size: 16px;
  font-weight: normal;
  color: var(--color-text-1);
  line-height: 1.5; /* [新增] 增加行高，改善长文本的可读性 */
}

/* [优化] 列表项 hover 效果，Arco Design 的 a-list hoverable 属性已提供此功能，
   如果需要更自定义的样式可以取消注释并调整下面的样式。
   确保 a-list 上添加了 :hoverable="true"
*/
/*
.todo-list-item:hover {
  background-color: var(--color-fill-2);
}
*/

/* 调整 Popconfirm 按钮的间距 (通常 Arco Design 的 List Action 会处理好间距)
   如果 Popconfirm 外部还有其他 action item，此规则可能需要调整或由 <a-space> 处理。
   对于单个 Popconfirm，其内部按钮，此规则通常不需要。
*/
/*
.a-list-item-action .arco-btn {
  margin-left: 8px;
}
*/
</style>