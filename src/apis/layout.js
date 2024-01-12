import requ from "@/utils/http";

export function getCategoryAPI() {
  return requ({
    url: '/home/category/head'
  })
}