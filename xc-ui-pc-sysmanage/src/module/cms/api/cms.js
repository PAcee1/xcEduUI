import http from './../../../base/api/public'
import querystring from 'querystring'
let sysConfig = require('@/../config/sysConfig')
let apiUrl = sysConfig.xcApiUrlPre;

// 查询接口
export const page_list = (page,size,params) => {
  // 拼接查询参数，使用封装的参数处理，就相当于拼接成 id=params.id&name=params.name
  let queryparams = querystring.stringify(params);
  return http.requestQuickGet(apiUrl + '/cms/page/list/'+ page +'/' + size + '?' + queryparams);
}

// 新增接口
export const page_add = (pageParams) => {
  return http.requestPost(apiUrl + "/cms/page/add",pageParams);
}
// 根据ID查询接口
export const page_get = (id) => {
  return http.requestQuickGet(apiUrl + "/cms/page/get/" + id);
}
// 修改接口
export const page_edit = (id,pageParams) => {
  return http.requestPut(apiUrl + "/cms/page/update/" + id,pageParams);
}
