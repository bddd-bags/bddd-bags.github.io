const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.jumbotron ul');

menuToggle.addEventListener('click', function () {
    nav.classList.toggle('opacity');
})