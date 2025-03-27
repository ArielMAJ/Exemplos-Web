document.getElementById('menu-toggle').addEventListener('click', function() {
    var links = document.querySelectorAll('nav a');
    for (var i = 0; i < links.length; i++) {
        if (links[i].style.display === 'block') {
            links[i].style.display = 'none';
        } else {
            links[i].style.display = 'block';
        }
    }
});