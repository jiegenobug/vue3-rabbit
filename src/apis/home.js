import requ from "@/utils/http.js"

// 获取Banner
export function getBannerAPI(params = {}) {
  // 默认为1，商品为2
  const { distributionSite = '1' } = params
  return requ({
    url: '/home/banner',
    params: {
      distributionSite
    }
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
/**
 * @description: 获取所有商品模块
 * @param {*}
 * @return {*}
 */
export const getGoodsAPI = () => {
  return requ({
    url: '/home/goods'
  })
}