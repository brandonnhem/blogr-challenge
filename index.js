function toggleMenu() {
    var x = document.getElementById('menu');
    var hamburger = document.getElementById('menu-open');
    var close = document.getElementById('menu-close');
    if (x.style.display === 'block') {
        x.style.display = 'none';
        hamburger.style.display = 'block';
        close.style.display = 'none';
    } else {
        x.style.display = 'block';
        hamburger.style.display = 'none';
        close.style.display = 'block';
    }
}