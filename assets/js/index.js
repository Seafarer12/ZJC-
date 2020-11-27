$(function () {
    var layer = layui.layer;


   indexGetInfo()
    //  删除按钮的功能
     $("#exit").on("click",function () {
        layer.confirm('确认退出吗?', {icon: 3, title:'提示'}, function(index){
            //do something
            localStorage.removeItem("token")
            location.href="/zjc项目/home/login.html"
            layer.close(index);
          });

     })



})


function indexGetInfo() {
       
   $.ajax({
    // 获取个人基本信息的ajax请求
     
        url:"/my/userinfo",
        // headers:{"Authorization":localStorage.getItem("token")},
        success:function (res) {
             if(res.status==1){
          
                return  layer.msg("获取用户信息失败！");
             }
             
             //  昵称处理
             let name=res.data.nickname||res.data.username
             let first=name[0].toUpperCase()
             $("#welcome").text(`欢迎  `+ name)



            //  头像处理
            if(res.data.user_pic){
                $(".layui-nav-img").show().attr("src",res.data.user_pic) 
                $(".text-avatar").hide()

             }
             else{
                 $(".layui-nav-img").hide()
                 $(".text-avatar").show().text(first)
             }
        },




     })
}