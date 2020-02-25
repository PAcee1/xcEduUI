import http from './../../../base/api/public'
import querystring from 'querystring'
import qs from 'qs'
/*登陆*/
export const login = params => {
  //let loginRequest = querystring.stringify(params)
  let loginRequest = qs.stringify(params);

  return http.requestPostForm('/auth/login',loginRequest);
}
/*退出*/
export const logout = params => {
  sessionStorage.removeItem('activeUser');
  return http.requestPost('/auth/userlogout');
}



