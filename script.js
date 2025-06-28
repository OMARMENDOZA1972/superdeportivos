// Obtener la modal
        const modal = document.getElementById('imageModal');
        // Obtener la imagen que se mostrará dentro de la modal
        const modalImg = document.getElementById('img01');
        // Obtener todas las imágenes de la galería (ahora en múltiples contenedores)
        const galleryImages = document.querySelectorAll('.contenedor img');
        // Obtener el botón de cerrar
        const closeButton = document.querySelector('.close-button');

        // Recorrer todas las imágenes de la galería y añadir un evento de clic
        galleryImages.forEach(img => {
            img.addEventListener('click', function() {
                modal.classList.add('show'); // Mostrar la modal añadiendo la clase 'show'
                modalImg.src = this.src; // Establecer la fuente de la imagen de la modal a la imagen clicada
            });
        });

        // Cuando el usuario hace clic en el botón de cerrar, ocultar la modal
        closeButton.addEventListener('click', function() {
            modal.classList.remove('show'); // Ocultar la modal quitando la clase 'show'
        });

        // Cuando el usuario hace clic fuera de la imagen (en el fondo oscuro de la modal), ocultar la modal
        modal.addEventListener('click', function(event) {
            if (event.target === modal) { // Si el clic es directamente en el fondo de la modal
                modal.classList.remove('show'); // Ocultar la modal
            }
        });

        // Escuchar la tecla 'Escape' para cerrar la modal
        document.addEventListener('keydown', function(event) {
            if (event.key === 'Escape' && modal.classList.contains('show')) {
                modal.classList.remove('show');
            }
        });