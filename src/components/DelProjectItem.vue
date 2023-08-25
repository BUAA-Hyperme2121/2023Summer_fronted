<template>
  <el-card class="box-card">
    <template #header>
      <div class="card-header">
        <span>
          {{ item.project_name }}
        </span>
        <!-- 操作按钮 -->
        <el-dropdown>
          <span class="el-dropdown-link"> ··· </span>
          <template #dropdown>
            <el-dropdown-menu>
              <el-dropdown-item :icon="Check">恢复</el-dropdown-item>
            </el-dropdown-menu>
          </template>
        </el-dropdown>
      </div>
    </template>
    <div v-for="o in 4" :key="o" class="text item">{{ "List item " + o }}</div>
  </el-card>
</template>

<script setup>
import { defineProps } from "vue";
const props = defineProps({
  item: {
    type: Object,
    default: () => ({}),
  },
});
</script>

<style scoped>
.box-card {
  margin: 20px;
}
.box-card:hover {
  cursor: pointer;
  filter: drop-shadow(0 0 0.5em #5e5f68aa);
}
.card-header {
  display: flex;
  justify-content: space-between;
}

.el-dropdown-link {
  font-weight: 700;
}
</style>
