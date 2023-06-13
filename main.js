const hamburger = document.querySelector('.hamburger');
const navList = document.querySelector('.nav-list');
const links = document.querySelector('.nav-list li');


hamburger.addEventListener('click', () => {
  navList.classList.toggle('open');
  links.forEach(link => {
    link.classList.toggle('fade');
  });

  hamburger.classList.toggle('toggle');
});