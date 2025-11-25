// Consts    
    // header section

    const homeBox = document.querySelector('#homebox');
    const logo = document.querySelector('.logo');
    const sardor = document.querySelector('.sardor');
    const navshow = document.querySelector('.navshow');
    const dark__mode = document.querySelector('.bt');
    const nav__text = document.querySelector('.header');

        // header / nav section

        const nav = document.querySelector('.nav');
        const home = document.querySelector('.home a');
        const about = document.querySelector('.about a');
        const skills = document.querySelector('skills a');
        const project =document.querySelector('.project a');

    // main section 

        // infobox section, social

        const infobox = document.querySelector('#infobox');
        const icons = document.querySelectorAll('.icons'); // foreach

        // aboutbox section 

        const aboutBox = document.querySelector('#aboutbox');
        const about__text = document.querySelector('.about__text'); 

        // skills section 

        const skillsBox = document.querySelector('#skills');

    // footer section 
        const footer = document.querySelector('.footer')

// Nav 

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

  
