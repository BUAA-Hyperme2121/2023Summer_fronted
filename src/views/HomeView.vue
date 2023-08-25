<template>
  <div class="home">
    <!-- 左边导航区 -->
    <div class="home-left">
      <!-- logo -->
      <div class="logo">HyperDev</div>
      <!-- 侧边栏 -->
      <div>
        <el-menu @select="handleSelect">
          <!-- 我的团队 -->
          <el-sub-menu index="1">
            <template #title>
              <el-icon><IconMenu /></el-icon>
              <span>我的团队</span>
            </template>

            <el-menu-item index="1-1">团队1</el-menu-item>
            <el-menu-item index="1-2">团队2</el-menu-item>
            <el-menu-item index="1-3">团队3</el-menu-item>
            <el-menu-item index="1-4">
              <el-icon><Plus /></el-icon>
              <span @click="createTeamDialogVisible=true">创建团队</span>
            </el-menu-item>
          </el-sub-menu>
          <!-- 消息中心 -->
          <el-menu-item index="2">
            <el-icon><Bell /></el-icon>
            <span>消息中心</span>
          </el-menu-item>
          <!-- 聊天区域 -->
          <el-menu-item index="3">
            <el-icon><ChatDotSquare /></el-icon>
            <span>聊天区域</span>
          </el-menu-item>
        </el-menu>
      </div>
    </div>
    <!-- 右边工作区 -->
    <div class="home-right">
      <!-- 顶部栏 -->
      <div class="home-right-top">
        <!-- 头像 -->
        <el-avatar
          :size="30"
          src="https://avatars.githubusercontent.com/u/20665579?v=4"
          class="home-right-top-item"
        ></el-avatar>
        <!-- 设置 -->
        <el-icon :size="20" class="home-right-top-item"><Setting /></el-icon>
        <!-- 通知 -->
        <el-icon :size="20" class="home-right-top-item"><Bell /></el-icon>
      </div>
      <!-- 分割线   -->
      <el-divider style="margin: 8px"></el-divider>
      <RouterView />
    </div>

    <!-- 创建团队对话框 -->
    <el-dialog
      v-model="createTeamDialogVisible"
      title="创建团队"
      width="30%"
      align-center
    >
      <el-input>
        <template #prepend>团队名称</template>
      </el-input>

      <template #footer>
        <span class="dialog-footer">
          <el-button @click="createTeamDialogVisible = false">取消</el-button>
          <el-button type="primary" @click="createTeamDialogVisible = false">
            确认
          </el-button>
        </span>
      </template>
    </el-dialog>
  </div>
</template>

<script setup>
import {
  Menu as IconMenu,
  Setting,
  Bell,
  ChatDotSquare,
  Plus,
} from "@element-plus/icons-vue";
import { useRouter, RouterView } from "vue-router";
import { ref } from "vue";

const router = useRouter();
const handleSelect = (index) => {
  if (index == "1-1") {
    router.push("/home/team");
  } else if (index == "2") {
    router.push("/home/message");
  } else if (index == "3") {
    router.push("/home/chat");
  }
};

const createTeamDialogVisible = ref(false);
</script>

<style>
.home {
  display: flex;
  height: 100%;
  width: 100%;
}
.home-left {
  width: 20%;
  background-color: 0xff0000;
}
.logo {
  height: 60px;
  line-height: 60px;
  text-align: center;
  font-size: 20px;
  color: black;
}
.home-right {
  width: 78%;
  background-color: 0x00ff00;
}

.home-right-top {
  height: 5%;
  margin-right: 10px;
}
.home-right-top-item {
  float: right;
  margin: 8px;
}
</style>
