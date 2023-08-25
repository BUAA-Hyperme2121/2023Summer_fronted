<template>
  <div class="msg">
    <!-- 左边的消息列表 -->
    <div class="msg-left">
      <!-- 顶部操作栏 -->
      <div class="msg-tool">
        <!-- 一键已读 -->
        <el-button>
            一键已读
        </el-button>
        <!-- 一键删除已读消息 -->
        <el-button type="danger">
            删除已读消息
        </el-button>
      </div>
      <!-- 消息列表 -->
      <div>
        <MsgItem v-for="item in msgList" :key="item.id" :item="item" />
      </div>
    </div>
    <!-- 右边的消息内容 -->
    <div class="msg-right"></div>
  </div>
</template>

<script setup>
import MsgItem from "../../components/message/MsgItem.vue";
</script>

<style scoped>
.msg {
  width: 90%;
  height: 80%;
  display: flex;
}
.msg-left {
  width: 20%;
  height: 100%;
  background-color: #f5f5f5;
  float: left;
}
.msg-tool {
    display: flex;
    padding: 6px;
}
.msg-right {
  width: 80%;
  height: 100%;
  background-color: #c1acac;
  float: right;
}
</style>
