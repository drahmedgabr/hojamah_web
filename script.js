const swiper = new Swiper('.swiper', {
  loop: true,
  autoplay: {
    delay: 3000,
  },
});

const contactButton = document.querySelector('.contact-button');
const contactSection = document.querySelector('.contact-section');
const closeButton = contactSection.querySelector('.close-button');

contactButton.addEventListener('click', () => {
    contactSection.style.bottom = '0';
});

closeButton.addEventListener('click', () => {
    contactSection.style.bottom = '-100%';
});