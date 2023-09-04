const navBtn = document.querySelector('.nav-icon-btn');
const navIcon = document.querySelector('.nav-icon');
const header = document.querySelector('.header_top');

navBtn.addEventListener('click', () => {
    navIcon.classList.toggle('nav-icon--active');
    header.classList.toggle('header_top--mobile');
    document.body.classList.toggle('no-scroll')
})