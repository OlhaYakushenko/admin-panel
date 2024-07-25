const hamburger = document.querySelector('.hamburger'),
    sidebar = document.querySelector('.sidebar'),
    closeElem = document.querySelector('.sidebar__close');

hamburger.addEventListener('click', () => {
    sidebar.classList.add('active');
});

closeElem.addEventListener('click', () => {
    sidebar.classList.remove('active');
});