/**
 * Created by mrt on 2018/3/23.
 */
/*登陆*/
 const login = params => {
    //let loginRequest = querystring.stringify(params)
    //将参数格式化为key/value串
    let loginRequest = querystringify(params);
    return requestPostForm('/openapi/auth/userlogin',loginRequest);
}
/*退出*/
 const logout = () => {
    return requestPost('/openapi/auth/userlogout');
}
/*获取jwt令牌*/
const getjwt = () => {
    return requestGet('/openapi/auth/userjwt');
}