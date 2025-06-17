document.addEventListener('DOMContentLoaded', function() {
    const googleButton = document.querySelector('.google-button');

    googleButton.addEventListener('click', function() {
        window.location.href = 'https://accounts.google.com/signin';
    });
    signInButton.addEventListener('click', function() {
        window.location.href = 'mystore.html'; 
    });
});
