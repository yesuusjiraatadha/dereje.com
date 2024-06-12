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
