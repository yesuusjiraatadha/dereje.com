 let MenuBtn = document.getElementById('MenuBtn');
let navbar = document.querySelector('.navbar');
let sections = document.querySelectorAll('section');
let navlinks = document.querySelectorAll('nav ul li a');

// Toggle navbar visibility on mobile
MenuBtn.addEventListener('click', () => {
    document.body.classList.toggle('mobile-nav-active');
     this.classList.toggle('fa-xmark');
});

// Highlight active section link on scroll
window.addEventListener('scroll', function () {
    const scrollpos = window.scrollY + 20;
    sections.forEach(section => {
        if (scrollpos > section.offsetTop && scrollpos < (section.offsetTop + section.offsetHeight)) {
            navlinks.forEach(link => {
                link.classList.remove('active');
                if (section.getAttribute('id') === link.getAttribute('href').substring(1)) {
                    link.classList.add('active');
                }
            });
        }
    });
});

// Handle link click to set active class and hide the menu in mobile view
navlinks.forEach(link => {
    link.addEventListener('click', () => {
        navlinks.forEach(l => l.classList.remove('active'));
        link.classList.add('active');
        document.body.classList.remove('mobile-nav-active');
    });
});


// Typing effect
let typed = new Typed('.auto-input', {
    strings: ['Front-End Developer|', 'Ethiopian|', 'UI Designer|', 'YouTuber|'], // 'youtuber|' changed to 'YouTuber|'
    typeSpeed: 100, // 'typedSpeed' changed to 'typeSpeed'
    backSpeed: 100, // Corrected, was 'typedSpeed'
    backDelay: 2000,
    loop: true
});



