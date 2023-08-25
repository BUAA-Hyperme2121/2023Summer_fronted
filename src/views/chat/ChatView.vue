<template>
  <div class="chat-room">
    <!-- 左边的聊天列表 -->
    <div class="chat-left">
      <!-- 顶部搜索框 -->
      <div class="top-search">
        <el-input v-model="input" :prefix-icon="Search" style="width: 80%" />
      </div>
      <!-- 聊天列表 -->
      <div class="chat-list">
        <!-- 遍历聊天对象数组，生成聊天列表 -->
        <ChatObjItem v-for="item in chatObjList" :key="item.id" :item="item" />
      </div>
    </div>
    <!-- 右边的聊天内容 -->
    <div class="chat-right">
      <!-- 聊天对象名 -->
      <div class="chat-obj-name">
        <span>shyJyt</span>
      </div>
      <!-- 聊天内容 -->
      <div class="chat-content">
        <el-scrollbar height="340px" ref="scrollbarRef">
          <!-- 遍历聊天内容数组，生成聊天列表 -->
          <ChatContentItem
            v-for="item in chatContentList"
            :key="item.id"
            :item="item"
          />
        </el-scrollbar>
      </div>
      <!-- 发送消息区 -->
      <div class="chat-input">
        <!-- 工具栏 -->
        <div class="tools">
          <!-- 表情 -->
          <!-- 图片 -->
          <el-upload>
            <el-icon :size="25"><Picture /></el-icon>
          </el-upload>
          <!-- 文件 -->
          <el-upload>
            <el-icon :size="25" style="margin-left: 15px"><Folder /></el-icon>
          </el-upload>
        </div>
        <!-- 输入框 -->
        <div>
          <at-ta :members="members">
            <el-input
              type="textarea"
              maxlength="50"
              show-word-limit
              :rows="3"
              placeholder="请输入内容"
              v-model="content"
            ></el-input>
          </at-ta>
        </div>
        <!-- 底部栏 -->
        <div>
          <!-- 发送按钮 -->
          <el-button
            type="primary"
            style="margin-top: 10px; float: right"
            @click="sendMsg"
          >
            发送
          </el-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineComponent, onMounted, reactive, ref } from "vue";
import { Search, Folder, Picture } from "@element-plus/icons-vue";
import ChatObjItem from "@/components/chat/ChatObjItem.vue";
import ChatContentItem from "@/components/chat/ChatContentItem.vue";
import At from "vue-at";
import AtTa from "vue-at/dist/vue-at-textarea";

const input = ref("");
const chatObjList = reactive([
  {
    id: 1,
    name: "张三",
    avatar: "https://picsum.photos/200/200",
    unread: 1,
  },
  {
    id: 2,
    name: "李四",
    avatar: "https://picsum.photos/200/200",
    unread: 0,
  },
  {
    id: 3,
    name: "王五",
    avatar: "https://picsum.photos/200/200",
    unread: 0,
  },
  {
    id: 4,
    name: "赵六",
    avatar: "https://picsum.photos/200/200",
    unread: 0,
  },
]);
const chatContentList = reactive([
  {
    id: 1,
    avatar: "https://picsum.photos/200/200",
    date: "2021-08-01",
    content: "你好",
  },
  {
    id: 2,
    avatar: "https://picsum.photos/200/200",
    date: "2021-08-01",
    content: "你好",
  },
  {
    id: 3,
    avatar: "https://picsum.photos/200/200",
    date: "2021-08-01",
    content: "你好",
  },
  {
    id: 4,
    avatar: "https://picsum.photos/200/200",
    date: "2021-08-01",
    content: "你好",
  },
  {
    id: 5,
    avatar: "https://picsum.photos/200/200",
    date: "2021-08-01",
    content: "你好",
  },
  {
    id: 6,
    avatar: "https://picsum.photos/200/200",
    date: "2021-08-01",
    content: "你好",
  },
  {
    id: 7,
    avatar: "https://picsum.photos/200/200",
    date: "2021-08-01",
    content: "你好",
  },
  {
    id: 8,
    avatar: "https://picsum.photos/200/200",
    date: "2021-08-01",
    content: "你好",
  },
]);

const members = reactive(["Roxie Miles", "grace.carroll", "小浩"]);

const content = ref("");

const sendMsg = () => {
  console.log(content.value);
  // 向ChatContentList中添加一条消息
  // chatContentList.push({
  //   id: 1,
  //   avatar: "https://picsum.photos/200/200",
  //   date: "2021-08-01",
  //   content: content.value,
  // });

  socket.send(
    JSON.stringify({
      id: 1,
      avatar: "https://picsum.photos/200/200",
      date: "2021-08-01",
      content: content.value,
    })
  );

  // 清空输入框
  content.value = "";

  // 滚动到底部
};

const socket = ref(null);

onMounted(() => {
  console.log(11);
  socket = new WebSocket("ws://" + window.location.host + "/room/1/");
  socket.onopen = () => {
    console.log("连接成功");
  };
  socket.onmessage = (e) => {
    console.log("webSocket message", e);
    const msgData = JSON.parse(e.data);
    console.log(msgData);
    chatContentList.push(msgData);
  };
});
</script>

<style scoped>
.chat-room {
  margin-right: 20px;
  height: 80%;
  display: flex;
}

.chat-left {
  width: 20%;
  background-color: rgb(181, 183, 184);
}
.top-search {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
  border-bottom: 1px solid #ccc;
}

.chat-right {
  width: 80%;
  background-color: #d4d9de;
}
.chat-obj-name {
  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 30px;
  padding: 10px;
}
.chat-input {
  padding: 20px;
}
.tools {
  display: flex;
  /* align-items: center; */
  margin-top: 10px;
  border-top: 1px solid #ccc;
}
.scrollbar-demo-item {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50px;
  margin: 10px;
  text-align: center;
  border-radius: 4px;
  background: var(--el-color-primary-light-9);
  color: var(--el-color-primary);
}
</style>
