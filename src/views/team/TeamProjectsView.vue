<template>
  <div class="projects-box">
    <ProjectItem v-for="item in projectList" :key="item.id" :item="item" />
    <!-- 新建项目 -->
    <el-card class="box-card" @click="createProjectDialogVisible = true">
      <el-icon><Plus /></el-icon>
      <span>新建项目</span>
    </el-card>
  </div>

  <!-- 创建项目对话框 -->
  <el-dialog
    v-model="createProjectDialogVisible"
    title="创建项目"
    width="30%"
    align-center
  >
    <el-input>
      <template #prepend>项目名称</template>
    </el-input>

    <template #footer>
      <span class="dialog-footer">
        <el-button @click="createProjectDialogVisible = false">取消</el-button>
        <el-button type="primary" @click="createProjectDialogVisible = false">
          确认
        </el-button>
      </span>
    </template>
  </el-dialog>
</template>

<script setup>
import { ref, reactive } from "vue";
import ProjectItem from "../../components/ProjectItem.vue";
import { Plus } from "@element-plus/icons-vue";

const projectList = reactive([
  {
    id: 1,
    project_name: "项目1",
  },
  {
    id: 2,
    project_name: "项目2",
  },
  {
    id: 3,
    project_name: "项目3",
  },
]);

const createProjectDialogVisible = ref(false);
</script>

<style scoped>
.projects-box {
  display: flex;
}
.box-card {
  margin: 20px;
}
.box-card:hover {
  cursor: pointer;
  filter: drop-shadow(0 0 0.5em #5e5f68aa);
}
</style>
