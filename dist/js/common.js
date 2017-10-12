$(function(){

})

 var popupConfirm= {
    init:function(){
        
    },
    event:{
        confirmShow:function(){
            var html= $('<div class="confirm-modal normal-modal"><div class="modal-mask"></div><div class="modal-box form-group"><p class="confirm-text"></p><p class="modal-action"><a class="action-link j_close" href="javascript:void(0);">取消</a><a class="action-link j_sure" href="javascript:void(0);">确认</a></p></div></div>');
            if($('.confirm-modal').length){
                return false;
            }
            $('body').append(html);
        },
        confirmClose:function(){
            $('body').on('click','.j_close,.j_sure',function(){
                $(this).parents('.confirm-modal').remove();
            })
        }
    }
 }
 var loading = {
    init:function(){
        
    },
    event:{
        loadingShow:function(){
            var html= $('<div class="loading"></div>');
            if($('.loading').length){
                return false;
            }
            $('body').append(html);
        },
        loadingClose:function(){
            $('.loading').remove();
        }
    }

}