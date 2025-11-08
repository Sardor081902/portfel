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