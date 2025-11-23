const aboutBox = document.querySelector('#aboutbox');
const aboutLink = document.querySelector('.about a');
aboutBox.addEventListener('mouseenter', () => {
  aboutLink.classList.add('active')

});
aboutBox.addEventListener('mouseleave', () => {
  aboutLink.classList.remove('active')
});

const projectBox = document.querySelector('#projectbox');
const projectLink = document.querySelector('.project a');
projectBox.addEventListener('mouseenter', () => {
  projectLink.classList.add('active')

});
projectBox.addEventListener('mouseleave', () => {
  projectLink.classList.remove('active')
});

const homeBox = document.querySelector('#infobox');
const homeLink = document.querySelector('.home a');
homeBox.addEventListener('mouseenter', () => {
  homeLink.classList.add('active')
});
homeBox.addEventListener('mouseleave', () => {
  homeLink.classList.remove('active')
});

const skillsBox = document.querySelector('#skills');
const skillsLink = document.querySelector('.skills a');
skillsBox.addEventListener('mouseenter', () => {
  skillsLink.classList.add('active')
});
skillsBox.addEventListener('mouseleave', () => {
  skillsLink.classList.remove('active')
});

const navshow = document.querySelector('.navshow');


navshow.onclick = function () {
  document.querySelector('.nav').classList.toggle('active');
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

//Dark mode Section

const black__mode = document.querySelector('.bt')
const main = document.querySelector('main')
const about__title = document.querySelector('.about__title')
const sub__title = document.querySelector('.sub__title')
const about__text = document.querySelector('.about__text')
const icons = document.querySelectorAll('.icons')
const web = document.querySelector('.web')
const my__name = document.querySelector('.my__name')
const nav = document.querySelector('#homebox')
const logo = document.querySelector('.logo')
const sardor = document.querySelector('.sardor')
const my__photo = document.querySelector('.my__photo')
const skills__text = document.querySelector('.skills__text')
const project__text = document.querySelector('.project__text')
const header__active = document.querySelector('.header.active')

black__mode.addEventListener('click', () => {
  black__mode.classList.toggle('active');

  if
    (black__mode.classList.contains('active')) {
    homeBox.style.backgroundColor = '#121212';
    main.style.backgroundColor = '#121212';
    about__title.style.color = 'white';
    about__text.style.color = 'white';
    about__text.style.backgroundColor = '#121212';
    about__text.style.boxShadow = 'INSET 0px 0px 10px 3px rgba(255, 0, 0, 0.12)';
    icons.forEach(icon => {
      icon.style.color = 'red';
    });  
    web.style.color = 'red';
    my__name.style.color = 'white';
    sub__title.style.color = 'white';
    nav.style.backgroundColor = '#121212';
    nav.style.boxShadow = '0px 0px 10px 3px rgba(255, 0, 0, 0.12)';
    logo.style.color = 'white';
    sardor.style.color = 'red';
    my__photo.style.boxShadow = '0px 0px 50px 3px rgba(255, 0, 0, 0.12)';
    skills__text.style.color = 'white';
    project__text.style.color = 'white';
    header__active.style.color = 'red';

  } else {
    homeBox.style.backgroundColor = '';
    main.style.backgroundColor = '';
    about__title.style.color = '';
    about__text.style.color = '';
    about__text.style.backgroundColor = '';
    about__text.style.boxShadow = '';
    icons.forEach(icon => {
      icon.style.color = '';
    });
    web.style.color = '';
     my__name.style.color = '';
     sub__title.style.color = '';
    logo.style.color = '';
    sardor.style.color = '';
    my__photo.style.boxShadow = '';
    nav.style.backgroundColor = '';
    nav.style.boxShadow = '';
      skills__text.style.color = '';
      project__text.style.color = '';
      header__active.style.color = '';
  }
})