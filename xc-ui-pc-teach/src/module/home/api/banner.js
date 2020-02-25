import http from './../../../base/api/public'
// 查询广告图片
export const getBannerPic = () => {
  return http.fetchQuickSearch('/banner')
}