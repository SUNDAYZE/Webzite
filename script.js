// Function to add the 'animate' class to all h3 headers
function animateHeaders() {
    const headers = document.querySelectorAll('h2, h3, logo');
    headers.forEach(header => {
        header.classList.add('animate');
    });
}

