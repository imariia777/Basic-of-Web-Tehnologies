// Пример с использованием jQuery
$(document).ready(function() {
    var url = window.location.pathname;
    $('nav a[href="' + url + '"]').addClass('active');
});
