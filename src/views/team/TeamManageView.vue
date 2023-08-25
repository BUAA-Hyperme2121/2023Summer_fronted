<template>
  <div class="manage-box">
    <el-table :data="tableData" height="250" style="width: 80%">
      <el-table-column prop="username" label="昵称" width="180" />
      <el-table-column prop="real_name" label="姓名" width="180" />
      <el-table-column prop="email" label="邮箱" />
      <el-table-column prop="status" label="身份" />
      <el-table-column label="操作" align="center">
        <template #default="scope">
          <el-button size="small" @click="centerDialogVisible = true"
            >修改身份</el-button
          >

          <el-button
            size="small"
            type="danger"
            @click="handleDelete(scope.$index, scope.row)"
            >移出团队</el-button
          >
        </template>
      </el-table-column>
    </el-table>
    <!-- 管理员可用！！！！！！！
      邀请成员 -->
    <div class="invite-box">
      <div>
        <el-input
          placeholder="请输入昵称以邀请新成员"
          v-model="search"
          @keyup.enter.native="handleSearch"
        >
        </el-input>
      </div>
      <el-button type="primary" @click="handleSearch">邀请</el-button>
    </div>

    <el-dialog
      v-model="centerDialogVisible"
      title="修改成员身份"
      width="30%"
      align-center
    >
      <el-select v-model="value" class="m-2" placeholder="选择新的身份" size="large">
        <el-option :key="1" label="管理员" :value="1" />
        <el-option :key="2" label="普通成员" :value="2" />
      </el-select>

      <template #footer>
        <span class="dialog-footer">
          <el-button @click="centerDialogVisible = false">取消</el-button>
          <el-button type="primary" @click="centerDialogVisible = false">
            确认
          </el-button>
        </span>
      </template>
    </el-dialog>
  </div>
</template>

<script setup>
import { ref } from "vue";

const value = ref("");
const centerDialogVisible = ref(false);
const tableData = ref([
  {
    username: "xiaohu",
    real_name: "王小虎",
    email: "11111",
    status: "创建者",
  },
  {
    username: "xiaohu",
    real_name: "王小虎",
    email: "11111",
    status: "管理员",
  },
  {
    username: "xiaohu",
    real_name: "王小虎",
    email: "11111",
    status: "普通成员",
  },
  {
    username: "xiaohu",
    real_name: "王小虎",
    email: "11111",
    status: "普通成员",
  },
  {
    username: "xiaohu",
    real_name: "王小虎",
    email: "11111",
    status: "普通成员",
  },
  {
    username: "xiaohu",
    real_name: "王小虎",
    email: "11111",
    status: "普通成员",
  },
  {
    username: "xiaohu",
    real_name: "王小虎",
    email: "11111",
    status: "普通成员",
  },
  {
    username: "xiaohu",
    real_name: "王小虎",
    email: "11111",
    status: "普通成员",
  },
  {
    username: "xiaohu",
    real_name: "王小虎",
    email: "11111",
    status: "普通成员",
  },
]);
</script>

<style scoped>
.manage-box {
  display: flex;
}
.invite-box {
  display: flex;
  margin-top: 20px;
}

.dialog-footer button:first-child {
  margin-right: 10px;
}
</style>
