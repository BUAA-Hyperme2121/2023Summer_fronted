<template>
  <div class="projects-box">
    <DelProjectItem
      v-for="item in delProjectList"
      :key="item.id"
      :item="item"
    />
  </div>
</template>

<script setup>
import { ref, reactive } from "vue";
import DelProjectItem from "../../components/DelProjectItem.vue";

const delProjectList = reactive([
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
</script>

<style scoped>
.projects-box {
  display: flex;
}
</style>
