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
    $(".filter-wrapper").animate({
        scrollLeft: "-=" + step + "px"
    })
});
$(".next-menus").bind("click",function(e){
    e.preventDefault();
    $(".filter-wrapper").animate({
        scrollLeft: "+=" + step + "px"
    });
});
const cart = [];
const cartContainer = document.querySelector('.cart-items');
const totalAmount = document.querySelector('.total-amount');
function addToCart(itemName, itemPrice) {
    const item = { name: itemName, price: itemPrice };
    cart.push(item);
    updateCart();
}
function updateCart() {
    cartContainer.innerHTML = '';
    let total = 0;
    cart.forEach((item, index) => {
        const cartItem = document.createElement('li');
        cartItem.innerHTML = `${item.name} - &#8377;${item.price}`;
        cartContainer.appendChild(cartItem);
        total += item.price;
    });
    totalAmount.innerText = total;
}
const addToCartButtons = document.querySelectorAll('.detail-card');
addToCartButtons.forEach(button => {
    button.addEventListener('click', () => {
        const itemName = button.querySelector('h4').innerText;
        const itemPrice = Number(button.querySelector('.price').innerText.replace('₹', ''));
        addToCart(itemName, itemPrice);
    });
});
const checkoutButton = document.querySelector('.checkout-btn');
checkoutButton.addEventListener('click', () => {
    alert('Thank you for your purchase!');
    cart.length = 0; // Clear the cart
    updateCart();
});