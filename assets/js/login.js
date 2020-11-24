$("#alog").on("click",function () {
     $(".Register").hide()
     $(".Login").show()
})
$("#areg").on("click",function () {
    $(".Register").show()
    $(".Login").hide()
})


let layer=layui.layer

// -----------表单的校验
layui.use('form', function(){
    var form = layui.form;
    form.verify({
        repassword: function(value, item){ //value：表单的值、item：表单的DOM对象
          let res=$("#regword").val()
          if(value!==res){
            return '两次密码不一致';
          }

        }
        
        //我们既支持上述函数式的方式，也支持下述数组的形式
        //数组的两个值分别代表：[正则匹配、匹配不符时的提示文字]
        ,pass: [
          /^[\S]{6,12}$/
          ,'密码必须6到12位，且不能出现空格'
        ] 
      })   



    //各种基于事件的操作，下面会有进一步介绍
  });                                                                                                     
  
//   注册的ajax代码
$("#registerForm").on("submit",function (e) {
    console.log( "zhuce" );
    e.preventDefault();
    let data=$("#registerForm").serialize()

     $.ajax({
        type:"POST",
        url:"/api/reguser",
        data,
        success:function (res) {
             if ( res.status!=0 ) {
                return  layer.msg('注册失败,'+res.message, {icon: 7}); 
             }
             $("#alog").click()
             layer.msg('恭喜，注册成功', {icon: 6});
        }
     })


})

//   登陆的ajax代码
$("#loginForm").on("submit",function (e) {
    console.log('denglu' );

    e.preventDefault();
    let data=$("#loginForm").serialize()

    $.ajax({
       type:"POST",
       url:"/api/login",
       data,
       success:function (res) {
          if ( res.status!=0 ) {
              return layer.msg(res.message);
          }

          localStorage.setItem("token",res.token)

          layer.msg('登陆成功，正在跳转', {
            icon: 1,
            time: 2000 //2秒关闭（如果不配置，默认是3秒）
          }, function(){
            location.href="/zjc项目/home/index.html"
          });   
       }
    })

} )
