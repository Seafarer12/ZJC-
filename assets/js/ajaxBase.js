$.ajaxPrefilter(function (options) {
    options.url="http://ajax.frontend.itheima.net"+options.url;


    if(options.url.indexOf("/my/")!==-1){
        options.headers={
            Authorization: localStorage.getItem("token"),
          };
    }

    options.complete=function (xhr) {
        if(xhr.responseJSON.status!==0&&xhr.responseJSON.message === "身份认证失败！"){
            localStorage.removeItem("token")
            location.href="/zjc项目/home/login.html"

        }
        
    }













})
























// 点击测试
$(".loginBox .title img").on("click" ,function () {
    $("#alog").click() 
    console.log( "shhhj" );
})
