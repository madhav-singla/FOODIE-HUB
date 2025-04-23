const mobile = document.querySelector('.menu-toggle'); 
const mobileLink = document.querySelector('.sidebar');

mobile.addEventListener("click",function(){
    mobile.classList.toggle("is-active");
    mobileLink.classList.toggle("active");
})