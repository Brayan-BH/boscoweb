$(document).ready(function(){
    $('.eye-icon').click(function(event){
        event.preventDefault(); // Previene el comportamiento por defecto del enlace.

        // Obtiene la URL de la próxima página
        var nextPageURL = 'eventos.html ';

        // Redirige a la próxima página
        window.location.href = nextPageURL;
    });
});