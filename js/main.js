// Show Mobile Bar

const mobileBar = document.getElementById('mobile-bar');
const overlay = document.getElementById('overlay');
const mobileMenu = document.getElementById('mobile-menu');
const closeBtn = document.getElementById('close-btn');

function handleBarClick() {
  overlay.classList.remove('hidden');
  mobileMenu.classList.remove('hidden');
}

function handleOverlayClick() {
  overlay.classList.add('hidden');
  mobileMenu.classList.add('hidden');
}

function handleCloseBtn() {
  overlay.classList.add('hidden');
  mobileMenu.classList.add('hidden');
}

// Animation

const observerLeft = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('showLeft');
      entry.target.classList.add('fadeInLeft');
    }
  });
});

const hiddenLeftElements = document.querySelectorAll('.hiddenLeft');
hiddenLeftElements.forEach((el) => observerLeft.observe(el));

const observerRight = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('showRight');
      entry.target.classList.add('fadeInRight');
    }
  });
});

const hiddenRightElements = document.querySelectorAll('.hiddenRight');
hiddenRightElements.forEach((el) => observerRight.observe(el));
