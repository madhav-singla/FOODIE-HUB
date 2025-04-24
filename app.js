const mobile = document.querySelector('.menu-toggle'); 
const mobileLink = document.querySelector('.sidebar');
mobile.addEventListener("click",function(){
    mobile.classList.toggle("is-active");
    mobileLink.classList.toggle("active");
}) 
mobileLink.addEventListener("click",function(){
    const menuBars = document.querySelector(".is-active");
    if(window.innerWidth<=768 && menuBars) {
        mobile.classList.toggle("is-active");
        mobile.classList.toggle("active")
    }
})
var step = 100;
var stepFilter = 60;
var scrolling = true;
$(".back").bind("click",function(e){
    e.preventDefault();
    $(".highlight-wrapper").animate({
        scrollLeft: "-=" + step + "px"
    });
});
$(".next").bind("click",function(e){
    e.preventDefault();
    $(".highlight-wrapper").animate({
        scrollLeft: "+=" + step + "px"
    })
})
$(".back-menus").bind("click",function(e){
    e.preventDefault();
    