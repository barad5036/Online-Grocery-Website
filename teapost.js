document.addEventListener('DOMContentLoaded', function() {
    const addToCartButtons = document.querySelectorAll('.visit-btn');
    const cartCount = document.getElementById('cart-count');
    let count = 0;

    addToCartButtons.forEach(button => {
        button.addEventListener('click', function() {
            count++;
            cartCount.textContent = count;
            alert('Item added to cart!');
        });
    });

   /* const basketIcon = document.getElementById('basket');
    basketIcon.addEventListener('click', function() {
        window.location.href = 'billing.html'; // Redirect to billing page
    });
}); */