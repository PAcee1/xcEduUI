import http from './../../../base/api/public'
import querystring from 'querystring'
import qs from 'qs'

/*订单列表*/
export const order_list = (page,size,params) => {
  return http.requestPost('/api/order/list/'+page+'/'+size,params);
}
/*根据id查询订单*/
export const order_findById = id => {
  return http.requestGet('/api/order/get/'+id);
}
/*多个课程查询*/
export const course_findByIds = ids => {
  return http.requestGet('/openapi/portalview/course/getlist/'+ids);
}
/*单个课程查询*/
export const course_view = id => {
  return http.requestGet('/openapi/portalview/course/get/'+id);
}
/*创建 支付 二维码*/
export const pay_createWeixinQrcode = params => {
  let requestString = qs.stringify(params);
  return http.requestPostForm('/api/order/pay/createWeixinQrcode',requestString);
}
/*查询支付结果*/
export const pay_queryWeixinPayStatus = params => {
  return http.requestGet('/api/order/pay/queryWeixinPayStatus',params);
}

