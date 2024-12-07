document.getElementById('signupForm').addEventListener('submit', function(event) {
    event.preventDefault(); 
    alert('Account created successfully! Redirecting to Home Page...');
    window.location.href = "homepage.html"; 
});