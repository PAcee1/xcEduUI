import http from './public'

/*数据字典 */
export const sys_getDictionary= dType => {
  return http.requestQuickGet('/sys/dictionary/get/'+dType)
}

/*存储文件元数据*/
export const sys_saveFileMetedata = params => {
  return http.requestPost('/filesystem/saveFileMetedata',params)
}

/*删除文件*/
export const sys_deleteFile = params => {
  return http.requestPost('/filesystem/delete',params)
}
/*课程查询*/
export const course_findByIds = ids => {
  return http.requestGet('/openapi/search/course/getbase/'+ids);
}
export const course_view = id => {
  // return http.requestGet('/openapi/portalview/course/get/'+id);
  return http.requestGet('/openapi/search/course/getall/'+id);
}
/*获取jwt令牌*/
export const getjwt= () => {
  return http.requestQuickGet('/openapi/auth/userjwt')
}
