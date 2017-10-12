$(function(){
    login.init();
})

function promptPopup(e){
    $('.prompt-popup').show();
    $('.prompt-popup').find('.nowrap-text').text(e);
    setTimeout(function() {
        $('.prompt-popup').hide()
    }, 2000)
}

var login = {
    init:function(){
        $('.eye').click(function() {
            login.event.isShowPassword(this);
        });
        $('#login').click(function(){
            login.event.isComplete();
        })
    },
    event:{
        isShowPassword:function(e){
            var input = $(e).parents('.mima').find('input');
            if($(e).hasClass('icon-biyan')){
                $(e).removeClass('icon-biyan');
                $(e).addClass('icon-zhengyan');
                input.attr('type','text');

            }else{
                $(e).removeClass('icon-zhengyan');
                $(e).addClass('icon-biyan');
                input.attr('type','password');
            }
        },
        isComplete:function(){
            if($("#tel").val()==''){
                promptPopup('手机号不能为空');
                return false;
            }
            if(!$("#tel").val().match(/^(((13[0-9]{1})|159|153)+\d{8})$/)){
                promptPopup('手机号格式错误');
                return false;
            }
            if($("#pas").val()==''){
                promptPopup('密码不能为空');
                return false;
            }
            login.submit();
            
        },
    },
    submit:function(){
        promptPopup('登录成功');
    }
    
}