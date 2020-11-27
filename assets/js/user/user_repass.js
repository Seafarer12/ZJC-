$(function () {
    var form = layui.form;
    var layer = layui.layer;







// 修改密码按钮
$("#userform").on("submit",function (e) {
//  这里不能用button的点击事件，因为只要点了就会发送ajax，不管有没有通过验证   
    e.preventDefault();
// 按钮的默认提交是提交到那里的？？
    let  data=$("#userform").serialize()
    $.ajax({
        type:"POST",
        data,
        url:"/my/updatepwd",
        success:function (res) {
             if(res.status==1){return  layer.msg(res.message)}
             layer.msg(res.message)
            $("#userform")[0].reset()
        }

    }) 

})

// 重置按键
$("#resetBtn").on("click",function () {
  layer.msg("已重置")
})











form.verify({
    samepass: function(value, item){ //value：表单的值、item：表单的DOM对象
      if(value!==$("#newpass").val()){
        return '两次密码输入不相符';
      }
    }
    
    //我们既支持上述函数式的方式，也支持下述数组的形式
    //数组的两个值分别代表：[正则匹配、匹配不符时的提示文字]
    ,pass: [
      /^[\S]{6,12}$/
      ,'密码必须6到12位，且不能出现空格'
    ] 
    
    ,newpass: function(value, item){ //value：表单的值、item：表单的DOM对象
    if(value==$("#oldpass").val()){
      return '新密码不能与原密码相同';
    }
  
    }
  });      
        





})