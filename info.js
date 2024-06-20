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
window.addEventListener('scroll' ,function (){
    const scrollpos =window.scrollY+20
    sections.forEach(section =>{
        if(scrollpos>section.offsetTop && scrollpos (section.offsetTop+section.offsetHeight)){
            navlinks.forEach(link=>{
               link.classList.remove('active');
                navbar.classList.remove('active');
               if(section.getAttribute('id')===link.getAttribute('href').substring(1)){
                link.classList.add('active');
               }
            }) ; 
        }
    });

});
