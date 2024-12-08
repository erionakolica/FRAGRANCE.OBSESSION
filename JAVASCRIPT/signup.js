document.getElementById('signupForm').addEventListener('submit', function(event) {
    event.preventDefault(); 
    alert('Account created successfully! Redirecting to Home Page...');
    window.location.href = "homepage.html"; 
});

document.addEventListener("DOMContentLoaded", function () {
    const hamburger = document.querySelector(".hamburger");
    const navMenu = document.querySelector("nav ul");

    hamburger.addEventListener("click", function () {
        navMenu.style.display = navMenu.style.display === "flex" ? "none" : "flex";
    });

    document.addEventListener("click", function (e) {
        if (!hamburger.contains(e.target) && !navMenu.contains(e.target)) {
            navMenu.style.display = "none";
        }
    });
});
