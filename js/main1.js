 (function () {

    'use strict';

    var contentWayPoint = function () {
        var i = 0;
        $('.animate-box').waypoint(function (direction) {

            if (direction === 'down' && !$(this.element).hasClass('animated-fast')) {

                i++;

                $(this.element).addClass('item-animate');
                setTimeout(function () {

                    $('body .animate-box.item-animate').each(function (k) {
                        var el = $(this);
                        setTimeout(function () {
                            var effect = el.data('animate-effect');
                            if (effect === 'fadeIn') {
                                el.addClass('fadeIn animated-fast');
                            } else if (effect === 'fadeInLeft') {
                                el.addClass('fadeInLeft animated-fast');
                            } else if (effect === 'fadeInRight') {
                                el.addClass('fadeInRight animated-fast');
                            } else {
                                el.addClass('fadeInUp animated-fast');
                            }

                            el.removeClass('item-animate');
                        }, k * 200, 'easeInOutExpo');
                    });

                }, 100);

            }

        }, { offset: '85%' });
    };

    var counter = function () {
        $('.js-counter').countTo({
            formatter: function (value, options) {
                return "+" + value.toFixed(options.decimals);
            },
        });
    };


    $(function () {
        //contentWayPoint();
        //counter();
        // Crear el observer
        let observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                // Verificar si el div-contador está visible
                if (entry.isIntersecting) {
                    contentWayPoint();
                    counter();  // Llamar a la función del contador cuando el div es visible
                }
            });
        }, { threshold: [0.5] });  // El threshold define qué porcentaje del target debe ser visible

        // Observar el div-contador
        observer.observe(document.getElementById('div-contador'));
    });


}());




/* toogle */
// Manejar el clic en el botón del ícono del ojo
$(document).ready(function(){
    $('.eye-icon').click(function(event){
        event.preventDefault(); // Previene el comportamiento por defecto del enlace.

        // Obtiene los datos del elemento clickeado
        var title = $(this).closest('.card').find('.card-title').text();
        var imagesData = $(this).closest('.card').data('images'); // Recupera el contenido del atributo data-images.
        var images = imagesData ? imagesData.split(',') : []; // Divide las URLs en un array.
        var content = $(this).closest('.card').find('.card-text').html(); // Usa .html() para mantener el formato.

        // Construye el HTML para el carousel con las imágenes obtenidas
        var carouselHtml = '<div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel"><div class="carousel-inner">';
        images.forEach(function(src, index) {
            carouselHtml += `<div class="carousel-item ${index === 0 ? "active" : ""}">`;
            carouselHtml += `<img src="${src}" class="d-block w-100" alt="Slide ${index + 1}">`;
            carouselHtml += '</div>';
        });
        carouselHtml += '</div><a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev"><span class="carousel-control-prev-icon" aria-hidden="true"></span><span class="sr-only">Previous</span></a><a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next"><span class="carousel-control-next-icon" aria-hidden="true"></span><span class="sr-only">Next</span></a></div>';

        // Actualiza el contenido de la sección de noticias
        $('.section-title h1').text(title);
        if(images.length > 0) { // Si hay imágenes, se muestra el carousel
            $('.mb-5 .col-md-6').first().html(carouselHtml); // Inserta el carousel en lugar de una sola imagen.
            $('#carouselExampleIndicators').carousel(); // Inicializa el carrusel después de insertarlo en el DOM
        } else { // Si no hay imágenes, podría optar por mostrar una imagen predeterminada o nada.
            $('.mb-5 .col-md-6 img').attr('src', 'https://placehold.co/600x400');
        }
        $('.mb-5 p').html(content);

        // Obtiene la posición de la sección de noticias y desplaza la página suavemente hasta allí
        var noticiasPosition = $('.mb-5').offset().top;
        $('html, body').animate({scrollTop: noticiasPosition}, 1000);
    });
});




/* Elipsis content */
$(document).ready(function(){
    $('.eye-icon').click(function(event){
        event.preventDefault(); // Previene el comportamiento por defecto del enlace.

        // Despliega el texto completo
        $('#text-collapse').toggleClass('ellipsis');
    });
});


(function () {

    'use strict';

    var contentWayPoint = function () {
        var i = 0;
        $('.animate-box').waypoint(function (direction) {

            if (direction === 'down' && !$(this.element).hasClass('animated-fast')) {

                i++;

                $(this.element).addClass('item-animate');
                setTimeout(function () {

                    $('body .animate-box.item-animate').each(function (k) {
                        var el = $(this);
                        setTimeout(function () {
                            var effect = el.data('animate-effect');
                            if (effect === 'fadeIn') {
                                el.addClass('fadeIn animated-fast');
                            } else if (effect === 'fadeInLeft') {
                                el.addClass('fadeInLeft animated-fast');
                            } else if (effect === 'fadeInRight') {
                                el.addClass('fadeInRight animated-fast');
                            } else {
                                el.addClass('fadeInUp animated-fast');
                            }

                            el.removeClass('item-animate');
                        }, k * 200, 'easeInOutExpo');
                    });

                }, 100);

            }

        }, { offset: '85%' });
    };

    var counter = function () {
        $('.js-counter').countTo({
            formatter: function (value, options) {
                return "+" + value.toFixed(options.decimals);
            },
        });
    };


    $(function () {
        //contentWayPoint();
        //counter();
        // Crear el observer
        let observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                // Verificar si el div-contador está visible
                if (entry.isIntersecting) {
                    contentWayPoint();
                    counter();  // Llamar a la función del contador cuando el div es visible
                }
            });
        }, { threshold: [0.5] });  // El threshold define qué porcentaje del target debe ser visible

        // Observar el div-contador
        observer.observe(document.getElementById('div-contador'));
    });


}());




/* toogle */
// Manejar el clic en el botón del ícono del ojo
$(document).ready(function(){
    $('.eye-icon').click(function(event){
        event.preventDefault(); // Previene el comportamiento por defecto del enlace.

        // Obtiene los datos del elemento clickeado
        var title = $(this).closest('.card').find('.card-title').text();
        var imagesData = $(this).closest('.card').data('images'); // Recupera el contenido del atributo data-images.
        var images = imagesData ? imagesData.split(',') : []; // Divide las URLs en un array.
        var content = $(this).closest('.card').find('.card-text').html(); // Usa .html() para mantener el formato.

        // Construye el HTML para el carousel con las imágenes obtenidas
        var carouselHtml = '<div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel"><div class="carousel-inner">';
        images.forEach(function(src, index) {
            carouselHtml += `<div class="carousel-item ${index === 0 ? "active" : ""}">`;
            carouselHtml += `<img src="${src}" class="d-block w-100" alt="Slide ${index + 1}">`;
            carouselHtml += '</div>';
        });
        carouselHtml += '</div><a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev"><span class="carousel-control-prev-icon" aria-hidden="true"></span><span class="sr-only">Previous</span></a><a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next"><span class="carousel-control-next-icon" aria-hidden="true"></span><span class="sr-only">Next</span></a></div>';

        // Actualiza el contenido de la sección de noticias
        $('.section-title h1').text(title);
        if(images.length > 0) { // Si hay imágenes, se muestra el carousel
            $('.mb-5 .col-md-6').first().html(carouselHtml); // Inserta el carousel en lugar de una sola imagen.
            $('#carouselExampleIndicators').carousel(); // Inicializa el carrusel después de insertarlo en el DOM
        } else { // Si no hay imágenes, podría optar por mostrar una imagen predeterminada o nada.
            $('.mb-5 .col-md-6 img').attr('src', 'https://placehold.co/600x400');
        }
        $('.mb-5 p').html(content);

        // Obtiene la posición de la sección de noticias y desplaza la página suavemente hasta allí
        var noticiasPosition = $('.mb-5').offset().top;
        $('html, body').animate({scrollTop: noticiasPosition}, 1000);
    });
});




/* Elipsis content */
$(document).ready(function(){
    $('.eye-icon').click(function(event){
        event.preventDefault(); // Previene el comportamiento por defecto del enlace.

        // Despliega el texto completo
        $('#text-collapse').toggleClass('ellipsis');
    });
});


$(document).ready(function() {
    $(".play-button").on('click', function() {
        var videoSrc = $(this).data('video');
        $('#videoModal iframe').attr('src', videoSrc);
        $('#videoModal').modal('show');
    });

    $('#videoModal').on('hide.bs.modal', function(e) {
        $('#videoModal iframe').attr('src', '');
    });
});


/* Menu desplegable */
function toggleButtons() {
    var secondaryButtons = document.getElementById('secondaryButtons');
    if (secondaryButtons.style.display === "none") {
        secondaryButtons.style.display = "block";
    } else {
        secondaryButtons.style.display = "none";
    }
}

// Modal topico comunicado
    $(document).ready(function(){
        $('#comunicadoModal').modal('show');
    });
