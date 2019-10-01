
window.addEventListener("load", function() {

    var csschange = document.getElementById('csschange');

    css01.addEventListener('click', function() {
        csschange = document.getElementById('Neon');
    });

    css02.addEventListener('click', function() {
        csschange = document.getElementsByName('style2.css');
    });
})