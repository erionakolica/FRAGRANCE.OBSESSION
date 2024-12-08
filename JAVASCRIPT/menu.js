const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('nav ul');


function handleResize() {
    if (window.innerWidth > 768) {
        hamburger.style.display = 'none'; 
        navMenu.style.display = 'flex';   
        navMenu.classList.remove('show'); 
    } else {
        hamburger.style.display = 'flex'; 
        navMenu.style.display = 'none';   
    }
}


hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('show');  
});


window.addEventListener('resize', handleResize);


handleResize();

