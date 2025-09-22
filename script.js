document.addEventListener('DOMContentLoaded', function() {
    const carruselItems = document.querySelectorAll('.carrusel-item');
    const btnAnterior = document.getElementById('anterior');
    const btnSiguiente = document.getElementById('siguiente');
    let currentIndex = 0;

    function showSlide(index) {
        // Oculta todos los slides
        carruselItems.forEach(item => {
            item.classList.remove('activo');
        });
        // Muestra el slide actual
        carruselItems[index].classList.add('activo');
    }

    btnSiguiente.addEventListener('click', function() {
        currentIndex++;
        if (currentIndex >= carruselItems.length) {
            currentIndex = 0;
        }
        showSlide(currentIndex);
    });

    btnAnterior.addEventListener('click', function() {
        currentIndex--;
        if (currentIndex < 0) {
            currentIndex = carruselItems.length - 1;
        }
        showSlide(currentIndex);
    });

    // Muestra el primer slide al cargar la página
    showSlide(currentIndex);
});