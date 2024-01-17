import requ from "@/utils/http";

export function getTopCategoryAPI(id) {
  return requ({
    url: '/category',
    params: {
      id
    }
  })
}