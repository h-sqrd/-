const windows = document.getElementById('window');
windows.style.pointerEvents = 'none';
document.querySelectorAll('.foo').forEach(function (el) {
    el.addEventListener('mouseover', function () {
        el.style.left = Math.random()*400+400+'px';
        el.style.top  = Math.random()*100+200+'px';
    });
});
document.querySelectorAll('.butterfly').forEach(function (el) {
    el.addEventListener('mouseover', function () {
        el.style.left = Math.random()*820+30+'px';
        el.style.top  = Math.random()*100+360+'px';
    });
});
