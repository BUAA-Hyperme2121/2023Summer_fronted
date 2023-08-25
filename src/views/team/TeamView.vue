<template>
  <!-- 工作区 -->
  <div class="team">
    <!-- 团队名称和所任职位 -->
    <div class="team-top">
      <span class="team-name">团队名称</span>
      <span class="team-pos">所任职位</span>
    </div>
    <!-- 水平导航 -->
    <el-menu mode="horizontal" @select="handleSelect">
      <el-menu-item index="1">
        团队项目
      </el-menu-item>
      <el-menu-item index="2">
        团队管理
      </el-menu-item>
      <el-menu-item index="3">
        团队设置
      </el-menu-item>
      <el-menu-item index="4">
        回收站
      </el-menu-item>
    </el-menu>
    <RouterView />
  </div>
</template>

<script setup>
import { useRouter, RouterView } from "vue-router";
const router = useRouter();
const handleSelect = (index) => {
  if(index === "1") {
    router.push("/home/team/projects");
  } else if(index === "2") {
    router.push("/home/team/manage");
  } else if(index === "3") {
    router.push("/home/team/setting");
  } else if(index === "4") {
    router.push("/home/team/recycle");
  }
};
</script>

<style scoped>
.team {
  padding: 0 20px;
  height: 80%;
}
.team-top {
  display: flex;
  align-items: center;
  height: 60px;
  border-bottom: 1px solid #ebeef5;
}
.team-name {
  font-size: 20px;
  font-weight: bold;
  margin-right: 20px;
}
.team-pos {
  font-size: 14px;
  color: #999;
}
</style>
