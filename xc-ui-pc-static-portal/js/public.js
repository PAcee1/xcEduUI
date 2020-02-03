// 添加请求拦截器
  axios.interceptors.request.use(function (config) {
      // 在发送请求向header添加jwt
      let jwt =getJwt()
      if(jwt){
          config.headers['Authorization'] = 'Bearer '+jwt
      }
      return config;
  }, function (error) {
      return Promise.reject(error);
  });
  // 响应拦截
  axios.interceptors.response.use(data => {
      if(data && data.data){
          if(data.data.code && data.data.code =='10001'){
              //需要登录
              window.location = "http://ucenter.xuecheng.com/#/login?returnUrl="+ Base64.encode(window.location)
          }
      }
      return data
  })
  var requestGet = function (url, params = {}) {
    return new Promise((resolve, reject) => {
      axios.get(url, params).then(res => {
        resolve(res.data)
      }).catch(error => {
        reject(error)
      })
    })
  }
  //get请求不带参数
var requestQuickGet = function  (url) {
    return new Promise((resolve, reject) => {
      axios.get(url).then(res => {
        resolve(res.data)
      }).catch(error => {
        reject(error)
      })
    })
  }
  //post请求
var requestPost = function   (url, params = {}) {
    return new Promise((resolve, reject) => {
      axios.post(url, params).then(res => {
        resolve(res.data)
      }).catch(error => {
        reject(error)
      })
    })
  }
  //post请求
var requestPostForm = function  (url, params = {}) {
    return new Promise((resolve, reject) => {
      axios.post(url, params, {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      }).then(res => {
        resolve(res.data)//注意res是axios封装的对象，res.data才是服务端返回的信息
      }).catch(error => {
        reject(error)
      })
    })
  }
  //put请求
var requestPut = function   (url, params = {}) {
    return new Promise((resolve, reject) => {
      axios.put(url, params).then(res => {
        resolve(res.data)
      }).catch(error => {
        reject(error)
      })
    })
  }
  //delete请求
var requestDelete = function   (url, params = {}) {
    return new Promise((resolve, reject) => {
      axios.delete(url, params).then(res => {
        resolve(res.data)
      }).catch(error => {
        reject(error)
      })
    })
  }
