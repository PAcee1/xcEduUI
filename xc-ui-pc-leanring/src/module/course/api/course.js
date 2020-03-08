import http from './../../../base/api/public'
let sysConfig = require('@/../config/sysConfig')
let apiUrl = sysConfig.xcApiUrlPre;
import querystring from 'querystring'
/*选课查询*/
export const course_list = (page,size,params) => {
  return http.requestPost(apiUrl+'/learning/choosecourse/list/'+page+'/'+size,params);
}
/*查询选课状态*/
export const course_learnstatus = courseId => {
  return http.requestPost(apiUrl+'/learning/choosecourse/learnstatus/'+courseId);
}
/*获取播放地址*/
export const get_media = (courseId,chapter) => {
  return http.requestGet(apiUrl+'/learning/course/getmedia/'+courseId+'/'+chapter);
}



