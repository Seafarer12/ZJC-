$(function () {
 
        
        var form = layui.form;
        let resetName
        var layer = layui.layer;
        // 获取用户信息的ajax函数
        function getinfo() {
            
            let data= $.ajax({
                url:"/my/userinfo",
                // headers:{"Authorization":localStorage.getItem("token")},
                success:function (res) { 
                resetName=res.data
                form.val("asd",resetName ) 
            }
            })
           
        }
        getinfo()


        // 重置按钮
        $("#resetBtn").click(function (e) {
            // e.preventDefault();
            form.val("asd",resetName )
            layer.msg("已重置") 
        })




        // 提交修改按钮

        $ ("#userform").submit(function (e) {
            e.preventDefault() 
            let data=$(this).serialize()
            console.log( data );
            $.ajax({
                type:"POST",
                data ,
                url:"/my/userinfo",
                success:function (res) {
                    console.log( res );
                     if(res.status==1){return layer.msg(res.message);}
                     layer.msg(res.message);
                    getinfo()
                    window.parent.indexGetInfo()

                }
            })

        })



        form.verify({
            length: function(value, item){ //value：表单的值、item：表单的DOM对象
              if(value.length>6){
                return '昵称长度须在1-6个字符';
              }

            }
            
            //我们既支持上述函数式的方式，也支持下述数组的形式
            //数组的两个值分别代表：[正则匹配、匹配不符时的提示文字]
            ,pass: [
              /^[\S]{6,12}$/
              ,'密码必须6到12位，且不能出现空格'
            ] 


            ,changename: function(value, item){ //value：表单的值、item：表单的DOM对象
              if(value==resetName.nickname&&$("#inpemail").val()==resetName.email){
                return '信息未作任何更改';
              }

            }

            
          });      






















     
})