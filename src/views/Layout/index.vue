<script setup>
import LayoutNav from "./components/LayoutNav.vue";
import LayoutHeader from "./components/LayoutHeader.vue";
import LayoutFooter from "./components/LayoutFooter.vue";
import LayoutSticky from "./components/LayoutSticky.vue";

// 触发获取导航列表数据的action
import { useCategoryStore } from "@/stores/category";
import { onMounted } from "vue";
const categoryStore = useCategoryStore();

onMounted(() => categoryStore.getCategory());
</script>

<template>
  <LayoutSticky />
  <LayoutNav />
  <LayoutHeader />
  <!-- <RouterView :key="$route.fullPath"/> -->
  <RouterView />
  <LayoutFooter />
</template>