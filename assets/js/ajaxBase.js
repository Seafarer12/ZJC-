$.ajaxPrefilter(function (options) {
    options.url="http://ajax.frontend.itheima.net"+options.url
    return options

})

// 点击测试
$(".loginBox .title img").on("click" ,function () {
    $("#alog").click() 
    console.log( "shhhj" );
})
