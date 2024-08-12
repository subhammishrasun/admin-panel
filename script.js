// scripts.js
document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('form').forEach(form => {
        form.addEventListener('submit', handleFormSubmit);
    });
});

function handleFormSubmit(event) {
    event.preventDefault(); // Prevent default form submission

    const form = event.target;
    const formData = new FormData(form);
    const data = {};
    formData.forEach((value, key) => {
        data[key] = value;
    });

    // Send data to the server
    fetch('http://localhost:3000/api/formdata', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    })
    .then(response => response.json())
    .then(result => {
        console.log('Success:', result);
        alert('Form submitted successfully!');
        form.reset(); // Reset form
    })
    .catch(error => {
        console.error('Error:', error);
        alert('There was an error submitting the form.');
    });
}
