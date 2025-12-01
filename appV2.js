// Consts    
// header section

const homeBox = document.querySelector('#home__box');
const logo = document.querySelector('.logo');
const sardor = document.querySelector('.sardor');
const navshow = document.querySelector('.navshow');
const dark__mode = document.querySelector('.bt');
const nav__text = document.querySelector('.header');

// header / nav section

const nav = document.querySelector('.nav');


const Navs = document.querySelectorAll('.project, .skills, .about, .home');
const Boxs = document.querySelectorAll('#info__box, #about__box, #skills__box, #project__box');
// main section 

// infobox section, social


const icons = document.querySelectorAll('.icons'); // foreach

// aboutbox section 


const about__text = document.querySelector('.about__text');

// skills section 



// footer section 
const footer = document.querySelector('.footer')

// Nav 

navshow.onclick = function () {
  nav.classList.toggle('active');
}

navshow.addEventListener('click', () => {
  navshow.classList.toggle('active');
  if
    (navshow.classList.contains('active')) {
    navshow.style.color = 'black';
  } else {
    navshow.style.color = '';
  }
})
const dark__box = document.querySelectorAll(
  '.about__text, .html, .css, .js, .window,.main__box, #home__box, #info__box, #about__box, #project__box, #skills__box, .footer, .body, .header '
);

dark__mode.onclick = () => {
  dark__box.forEach(el => {
    el.classList.toggle('dark__mode');
  });
};

const dark__mode__logo = () => {
  const icon__dark = document.getElementById('icon__dark'); 

  if (dark__box.classList.contains('dark__mode')) {
    icon__dark.classList.remove('.fa-regular fa-moon') && add('.fa-regular fa-sun');
  } else {
    icon__dark.classList.remove('.fa-regular fa-sun') && add('fa-regular fa-moon');
  }
};

for (const box of Boxs) {
    box.addEventListener('mouseenter', () => {
        for (const menu of Navs) {
            menu.classList.add('active');
        }
    });
    box.addEventListener('mouseleave', () => {
      for (const menu of Navs) {
        menu.classList.remove('active')
      }
      
    });
}
