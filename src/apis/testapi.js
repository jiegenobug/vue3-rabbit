import service from "@/utils/http";
export function getCategory() {
  return service({
    url: 'home/category/head'
  })
}