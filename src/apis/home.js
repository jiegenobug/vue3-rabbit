import requ from "@/utils/http.js"

// 获取Banner
export function getBannerAPI() {
  return requ({
    url: '/home/banner'
  })
}

/**
 * @description: 获取新鲜好物
 * @param {*}
 * @return {*}
 */
export function findNewAPI() {
  return requ({
    url: '/home/new'
  })
}
/**
 * @description: 获取人气推荐
 * @param {*}
 * @return {*}
 */
export const getHotAPI = () => {
  return requ({
    url: '/home/hot'
  })
}