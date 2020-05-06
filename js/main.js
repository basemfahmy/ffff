$(document).ready(function(){
    
/*start scroll to element  smoothlt*/

$(".navbar-light .navbar-nav .home").click(function(e){ //for home link only
       e.preventDefault();
$("html,body").animate({scrollTop:0}
                ,1000)          })  
    
$(".navbar-light .navbar-nav .nav-link").click(function(e){ // for general links
       e.preventDefault();
$("html,body").animate({scrollTop:$("#"+$(this).data("location")).offset().top-80}
                ,1000)         }) 
    
  

/*end scroll to element  smoothlt*/
    
/*start add active class on element navbar  */
//$(".navbar-light .navbar-nav .nav-link").click(function(){
    
 //  $(this).parent(".nav-item ").addClass("active")
  //     .siblings().removeClass("active")
// })    
/*end add active class on element navbar  */
    

//  start sync links with sections 
     $(window).scroll(function(){
       $(".my-block").each(function(){
            
        if($(window).scrollTop() > $(this).offset().top-81){
           // console.log($(this).attr('id')) // test only
            var myele = $(this).attr('id')
$('.nav-link[data-location="'+ myele +'"]')
    .parent().addClass("active").siblings().removeClass("active")
        }
       })
    })
//  end  sync links with sections 
 
/*end sync links with sections*/ 
    
/*start show-hide go up button*/  
   $(window).scroll(function(){
       if( $(window).scrollTop()>200){
           $(".go-up").fadeIn(300) // show it 
       }
       else{
           $(".go-up").fadeOut(300) // hide it 
       }
   })

$(".go-up") .click(function(){
    $("html,body").animate({ scrollTop: 0} ,1000 ) // scroll to the top of website
})   
    
/*end show-hide go up button*/    
    
/*start make fixed navbar on scroll*/  
$(window).scroll(function(){
    
    if( $(window).scrollTop() > 0 ){
        $(".bg-light ").addClass("fixed-nav")
    }
    
    else{
        $(".bg-light ").removeClass("fixed-nav")

    }
})    
/*end make fixed navbar on scroll*/  
    
/* start theme options box*/
    $(".options-box .icon").click(function(){
        $(this).toggleClass("is-hidden") // toggle class on click
        
        if( $(this).hasClass("is-hidden")){
            $(".options-box").animate({left:"0px"},600) // to show optipn-box
        }
        else{
            $(".options-box").animate({left:"-251px"},600) // to hide it again
        }
    })
    
// change color by change theme css file
$(".options-box .options ul li").click(function(){
    var mycolor = $(this).data("mycolor") // define variable 
   $('link[href*="theme"]').attr("href",mycolor)  // * use it for search in file
})    
// change color by change theme css file
    
/* end theme options box*/
    
    
/*start header section*/
$(".header .my-button").click(function(){ 
  
    if( $(window).width() <= 991){   // for sx sm md  screens only
    $("html,body").animate({scrollTop: $(".appointmnet").offset().top-60},1000)
    }
    
    else{  // for bigger screens
     $("html,body").animate({scrollTop: $(".appointmnet").offset().top-120},1000)
    }
    
})    
/*end header section*/
    
/*start form in appointmnet section*/
    
   // show asterisk icon on input
$(".appointmnet form input").focusout(function(){  // when user focus out
    
    if( $(this).val()=="" ){  // if user does not enter value
        $(this).next("span").fadeIn() // show asterisk icon
        $(this).css({border: "1px solid red"})
    }
  
})   
    $(".appointmnet form input").keydown(function(){ // when user start to write
        $(this).next("span").hide()
        $(this).css({ border: "1px solid #ced4da"})
    })
    // show asterisk icon on input
    
//  hideplace holder in focus in  
$(".appointmnet form input,.appointmnet form textarea").focusin(function(){
       var old = $(this).attr("placeholder") // store old value 
    $(this).attr("placeholder","") // empty it 
    
    $(".appointmnet form input,.appointmnet form textarea").focusout(function(){
         $(this).attr("placeholder",old) // get stored value back
    })
    
})    
//  hideplace holder in focus in  
    
/*end form in appointmnet section*/    
    
/*start blogs section*/  
$(".blogs .blog-body img").mouseenter(function(){ //on mouse enter - hover
    $(this).css({transform: "scale(1.1 ,1.1)" ,transition:"all 0.3s ease"})
})  
    
$(".blogs .blog-body img").mouseleave(function(){ // on mouse leave
    $(this).css({transform: "scale(1 ,1)" ,transition:"all 0.3s ease"})
})    
     
/*start blogs section*/    
    
/*start our-patients owl caousel */
$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    center:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:3
        }
    }
})
/*end  our-patients owl caousel */

    
// end main function    
});
