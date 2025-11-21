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

const black__mode = document.querySelector('.bt')
const main = document.querySelector('main')
const about__text = document.querySelector('.about__text')
const sub__title = document.querySelector('.sub__title')

black__mode.addEventListener('click', () => {
  black__mode.classList.toggle('active');

  if
    (black__mode.classList.contains('active')) {
    homeBox.style.backgroundColor = 'black';
    main.style.backgroundColor = 'black';
    about__text.style.color = 'blue';
    
  } else {
    homeBox.style.backgroundColor = '';
    main.style.backgroundColor = '';
    about__text.style.color = '';
  }
})