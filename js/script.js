document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');
    form.addEventListener('submit', function(event) {
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;
        const referral = document.getElementById('referral').value;

        if (!name || !email || !message || referral === 'Choose one') {
            alert('Please fill out all required fields.');
            event.preventDefault();
        }
    });
});
