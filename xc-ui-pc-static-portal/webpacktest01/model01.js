/**
 * Created by Administrator on 2018/6/9.
 */

var add = function (x, y) {
    return x+y;
}
var add2 = function (x, y) {
    return x+y+2;
}
module.exports.add = add;
// module.exports ={add,add2};//如果有多个方法这样导出
// module.exports.add2 = add2//如果有多个方法也可以这样导出