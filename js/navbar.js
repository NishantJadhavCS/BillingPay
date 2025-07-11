document.addEventListener('DOMContentLoaded', function () {
    const hamburger = document.querySelector('.hamburger');
    const mobileMenu = document.querySelector('.mobile-menu');

    hamburger.addEventListener('click', function () {
        mobileMenu.classList.toggle('active');
        hamburger.classList.toggle('open');
    });
});


let prevScrollPos = window.pageYOffset;
const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
    let currentScrollPos = window.pageYOffset;

    if (prevScrollPos > currentScrollPos) {
        navbar.style.top = "20px"; // show
    } else {
        navbar.style.top = "-100px"; // hide
    }
    prevScrollPos = currentScrollPos;
});


document.addEventListener("DOMContentLoaded", () => {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            } else {
                entry.target.classList.remove('active');
            }
        });
    }, {
        rootMargin: "-45% 0px -45% 0px" // top, right, bottom, left
    });

    document.querySelectorAll('.service-card').forEach(card => {
        observer.observe(card);
    });
});


document.addEventListener("DOMContentLoaded", () => {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            } else {
                entry.target.classList.remove('active');
            }
        });
    }, {
        rootMargin: "-30% 0px -30% 0px" // triggers roughly when in center
    });

    document.querySelectorAll('.feature-card').forEach(card => {
        observer.observe(card);
    });
});