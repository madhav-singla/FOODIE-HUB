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
