$(function(){
    $('.featured-work  ul li').on('click',function(){
        $(this).addClass('active').siblings().removeClass('active');
        if($(this).data('class')==='all'){
            $('.shuffle-img .col-md').css('opacity',1);
        
        }else{
            $('.shuffle-img .col-md').css('opacity','0.1');
            $($(this).data('class')).parent().css('opacity',1);

        }









    });
}) ;