// 封装分类数据相关的业务代码
import { ref, onMounted } from "vue";
import { onBeforeRouteUpdate } from "vue-router";
import { useRoute } from "vue-router";
import { getTopCategoryAPI } from "@/apis/category";

export function useCategory() {
  const categoryData = ref({});

  const route = useRoute();
  const getTopCategory = async (id = route.params.id) => {
    const res = await getTopCategoryAPI(id);
    categoryData.value = res.result;
  };
  onMounted(() => getTopCategory());

  onBeforeRouteUpdate((to) => {
    getTopCategory(to.params.id);
  });
  return {
    categoryData
  }
}