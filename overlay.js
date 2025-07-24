// loading.js

/**
 * @file Maneja la pantalla de carga inicial del portafolio.
 * @comment Para desarrolladores:
 * Este script se carga de forma temprana para asegurar que la pantalla de carga
 * se muestre inmediatamente y se oculte solo cuando todos los recursos principales
 * de la página (HTML, CSS, otros scripts como main.js, driver.js) hayan terminado de cargar.
 */

document.addEventListener('DOMContentLoaded', () => {
    const loaderOverlay = document.getElementById('loader-overlay');

    window.onload = () => {
        if (loaderOverlay) {
            setTimeout(() => {
                loaderOverlay.classList.add('hidden');
                if (typeof startTour === 'function') {
                    startTour();
                }
            }, 300); 
        }
    };
});