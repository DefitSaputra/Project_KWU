// Smooth Scrolling with Navbar Offset
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const navbarHeight = document.querySelector('header').offsetHeight;
            const offset = target.getBoundingClientRect().top + window.scrollY - navbarHeight;

            window.scrollTo({
                top: offset,
                behavior: 'smooth'
            });
        }
    });
});

let currentSlideIndex = 0;

function showSlides(n) {
    const slides = document.querySelectorAll('.carousel-images img');
    const dots = document.querySelectorAll('.carousel-indicators .dot');
    
    if (n >= slides.length) {
        currentSlideIndex = 0;
    } else if (n < 0) {
        currentSlideIndex = slides.length - 1;
    } else {
        currentSlideIndex = n;
    }

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
        dots[i].classList.remove("active");
    }

    slides[currentSlideIndex].style.display = "block";
    dots[currentSlideIndex].classList.add("active");
}

function moveSlide(n) {
    showSlides(currentSlideIndex + n);
}

function currentSlide(n) {
    showSlides(n - 1);
}

document.addEventListener('DOMContentLoaded', () => {
    showSlides(currentSlideIndex);
    setInterval(() => {
        moveSlide(1);
    }, 5000);
});
