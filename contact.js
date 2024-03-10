const form = document.getElementById('contact-form');
form.addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.querySelector('.form-name').value;
    const email = document.querySelector('.form-email').value;
    const message = document.querySelector('.form-message').value;
    form.reset();
});