

// Loading animation
const loadingBox = document.getElementById('loadBox');

window.addEventListener('load', () => {
    loadingBox.style.opacity = '0';
    loadingBox.style.visibility = 'hidden';
})


// Navigation bar animation
let clickCounter = 1;
const menuBtn = document.getElementById('menuBtnBox');
const menuIcon = document.querySelector('#menuBtnBox i');
const navList = document.getElementById('navList');
const navLinks = document.querySelectorAll('#navList li a');


menuBtn.addEventListener('click', () => {

    if (clickCounter%2 !== 0) {
        navList.style.height = '316px';
        menuIcon.className = 'fas fa-times';
    } else {
        navList.style.height = '0';
        menuIcon.className = 'fas fa-bars';
    }

    clickCounter++;

})

navLinks.forEach( link => {
    link.addEventListener('click', () => {
        navList.style.height = '0';
        menuIcon.className = 'fas fa-bars';
        clickCounter++;
    })
})

// Back to home btn

const toHomeBtn = document.getElementById('backToHome');

window.addEventListener('scroll', () => {
    if(window.pageYOffset > screen.height / 3 * 2) {
        toHomeBtn.style.display = 'block';
    } else {
        toHomeBtn.style.display = 'none';
    }
})

// Style nav bar whene scrolling 

const scrollBar = document.getElementById('navBarContainer');

window.addEventListener('scroll', () => {
    if(window.pageYOffset > 200) {
        scrollBar.style.position = 'fixed';
        scrollBar.style.zIndex = '11111';
        scrollBar.style.top = '0';
        scrollBar.style.left = '0';
    } else {
        scrollBar.style.position = 'static';
    }
})

// Slowing down the vitess of scrolling 
if(screen.width > 500) {
    const scroll = new SmoothScroll('a[href*="#"]', {
        speed: 600,
        easing: 'easeOutQuad'
    });
} else {
    const scroll = new SmoothScroll('a[href*="#"]', {
        speed: 1000,
        easing: 'easeInOutQuad'
    });
}



