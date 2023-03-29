$(document).ready(function(){
    $('#search-input').on('keyup', function() {
        var value = $(this).val().toLowerCase();
        $('.contenedor-img a').filter(function() {
        $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
        });
    });
});