document.addEventListener("DOMContentLoaded", function(){
    const products = document.querySelectorAll('a.product');

    products.forEach(function(card){
        card.addEventListener("click", function(){
            event.preventDefault();

            const productName = card.querySelector('.product-name p').textContent;
            const productImage = card.querySelector('img').src;
            const productPrice = card.querySelector('#price').textContent;

            window.location.href=`details.html?name=${encodeURIComponent(productName)}&image=${encodeURIComponent(productImage)}&price=${encodeURIComponent(productPrice)}`;
        })
    });
});