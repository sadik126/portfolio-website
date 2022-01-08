$(document).ready(function(){
    $(window).scroll(function(){
        // sticky navbar on scroll script
        if(this.scrollY > 20){
            $('.navber').addClass("sticky");
        }else{
            $('.navber').removeClass("sticky");
        }
    })
});