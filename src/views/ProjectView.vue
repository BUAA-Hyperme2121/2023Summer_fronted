<template>
  <el-aside
    style="width: 15%; height: 100%; position: absolute; top: 0px; left: 0px"
  >
    <el-menu
      class="el-menu-vertical-demo"
      :default-active="this.$router.path"
      router
      :collapse="isCollapse"
      style="height: 100%"
      @mouseenter="mouseOver"
      @mouseleave="mouseLeave"
      @select="handleMenuSelect"
    >
      <el-menu-item index="/project/designlist">
        <el-icon><EditPen /></el-icon>
        <span>页面设计</span>
      </el-menu-item>
      <el-menu-item index="/project/doclist">
        <el-icon><Document /></el-icon>
        <span>项目文档</span>
      </el-menu-item>
      <el-menu-item index="/home">
        <el-icon><CircleClose /></el-icon>
        <span>退出项目</span>
      </el-menu-item>
    </el-menu>
  </el-aside>
  <el-main style="width: 85%; margin-left: 10%">
    <RouterView></RouterView>
  </el-main>
</template>
<script>
import { ref } from "vue";
import { Document, CircleClose, EditPen } from "@element-plus/icons-vue";
export default {
  components: {
    Document,
    CircleClose,
    EditPen,
  },
  setup() {
    const isCollapse = ref(true);
    const activeIndex = ref(1);
    function mouseOver() {
      isCollapse.value = false;
    }
    function mouseLeave() {
      isCollapse.value = true;
    }
    function handleMenuSelect(index) {
      activeIndex.value = index;
    }
    return {
      isCollapse,
      activeIndex,
      mouseOver,
      mouseLeave,
      handleMenuSelect,
    };
  },
};
</script>
<style scoped></style>
