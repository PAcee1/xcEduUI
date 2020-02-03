bus = new Vue();
window.onload = function () {
    VM = new Vue({
        el: "#app",
        created: function () {
            this.$message('这是一条消息提示');
        }
    });
}