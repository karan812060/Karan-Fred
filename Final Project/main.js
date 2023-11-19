document.addEventListener('DOMContentLoaded', function() {
    var burgerMenu = document.querySelector('.burger-menu');
    var menuUl = document.querySelector('.menu ul');

    burgerMenu.addEventListener('click', function() {
        menuUl.style.display = (menuUl.style.display === 'none' || menuUl.style.display === '') ? 'flex' : 'none';
    });

    window.addEventListener('resize', function() {
        if (window.innerWidth > 768) {
            menuUl.removeAttribute('style');
        }
    });
});
