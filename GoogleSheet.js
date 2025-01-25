const scriptURL = 'https://script.google.com/macros/s/AKfycbyass-FgaWXqHu1QZj_548sXG_LQWc3ISjmkNkbMt9kbg5LbtpS42IlgIUDXUKGj-ia/exec';
    
    const form = document.forms['contact-form']; // Corrected reference to form
    
    form.addEventListener('submit', e => {
        e.preventDefault();
        fetch(scriptURL, { method: 'POST', body: new FormData(form) })
            .then(response => {
                alert("Thank you! Your form is submitted successfully.");
                window.location.reload(); // Reload the page after success
            })
            .catch(error => {
                console.error('Error:', error.message);
            });
    });