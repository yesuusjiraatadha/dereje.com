// Header toggle
let MenuBtn = document.getElementById('MenuBtn');
MenuBtn.addEventListener('click', function(e) {
    document.querySelector('body').classList.toggle('mobile-nav-active');
    this.classList.toggle('fa-xmark');
});

// Typing effect
let typed = new Typed('.auto-input', {
    strings: ['Front-End Developer|', 'Ethiopian|', 'UI Designer|', 'YouTuber|'], // 'youtuber|' changed to 'YouTuber|'
    typeSpeed: 100, // 'typedSpeed' changed to 'typeSpeed'
    backSpeed: 100, // Corrected, was 'typedSpeed'
    backDelay: 2000,
    loop: true
});
let navbar = document.querySelector('.navbar');
let sections = document.querySelectorAll('section');
let navlinks = document.querySelectorAll('nav ul li a');
window.onscroll = () => {
    sections.forEach(section => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 100;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                document.querySelector(`header nav ul li a[href*="${id}"]`).classList.add('active');
            });
        }
    });

    navbar.classList.remove('active');
    MenuBtn.classList.remove('fa-xmark');
    
};








window.addEventListener('scroll' ,function (){
    const scrollpos =window.scrollY+20
    sections.forEach(section =>{
        if(scrollpos>section.offsetTop && scrollpos (section.offsetTop+section.offsetHeight)){
            navlinks.forEach(link=>{
               link.classList.remove('active');
               MenuBtn.classList.remove('active');
               if(section.getAttribute('id')===link.getAttribute('href').substring(1)){
                link.classList.add('active');
               }
            }) ; 
        }
    });

});
navlinks.forEach(link => {
link.addEventListener('click', () => {
navlinks.forEach(l => l.classList.remove('active'));
link.classList.add('active');
});
});
