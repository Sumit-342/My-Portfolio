//Menu icon working code


let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
let CloseIcon = document.querySelector('#close-icon');


menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('active');

}

CloseIcon.onclick = () =>{
    navbar.classList.remove('active')
}

window.onscroll = () => {
    menu.classList.remove('bx-x');
    navbar.classList.remove('active');
}

// Typing Effect code 


const typed = new Typed('.multiple-text', {
    strings: ['a Fronted Developer', 'a Web Developer','Passionate About Clean Code'],
    typeSpeed: 80,
    backSpeed:80,
    backDelay:1200,
    loop:true,
  });

 

// navbar underline effect code//

const navLinks = document.querySelectorAll('.navbar a');

// Function to update the active link
function updateActiveLink() {
    navLinks.forEach(link => {
        link.classList.remove('active');
        // Get the hash (#section-id) from the link's href
        const href = link.getAttribute('href');
        // Get the hash from the current URL
        const currentHash = window.location.hash;
        // Compare the hashes
        if (href === currentHash) {
            link.classList.add('active');
        }
    });
}

// Call the function initially
updateActiveLink();

// Call the function whenever the URL hash changes
window.addEventListener('hashchange', updateActiveLink);

// Optionally, call the function on link clicks (might be redundant now)
navLinks.forEach(link => {
    link.addEventListener('click', updateActiveLink);
});



// Project section button working code//

const imgSlide = document.querySelector('.img-slide');
const imgItems = document.querySelectorAll('.img-item');
const arrowLeft = document.querySelector('.arrow-left');
const arrowRight = document.querySelector('.arrow-right');
const portfolioDetails = document.querySelectorAll('.portfolio-detail');

let currentIndex = 0;

arrowRight.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % imgItems.length;
    updateCarousel();
    updatePortfolioDetail(currentIndex); // Call the function here
});

arrowLeft.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + imgItems.length) % imgItems.length;
    updateCarousel();
    updatePortfolioDetail(currentIndex); // Call the function here
});

function updateCarousel() {
    const itemWidth = imgItems[0].offsetWidth;
    const translatePixels = Math.floor(currentIndex * itemWidth);
    imgSlide.style.transform = `translateX(-${translatePixels}px)`;
}

function updatePortfolioDetail(index) {
    portfolioDetails.forEach(detail => {
        detail.classList.remove('active');
    });
    portfolioDetails[index].classList.add('active');
}

