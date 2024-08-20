// Smooth scrolling for navigation links
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        const offsetTop = targetElement.getBoundingClientRect().top + window.scrollY;
        
        window.scrollTo({
            top: offsetTop - 50, // Adjust this value to match your header height
            behavior: 'smooth'
        });
    });
});
