import requ from "@/utils/http.js"

// 获取Banner
export function getBannerAPI() {
  return requ({
    url: '/home/banner'
  })
}
