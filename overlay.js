/**
 * @file Maneja la pantalla de carga inicial del portafolio.
 * @comment Para desarrolladores:
 * Este script se carga de forma temprana para asegurar que la pantalla de carga
 * se muestre inmediatamente y se oculte solo cuando todos los recursos principales
 * de la página (HTML, CSS, otros scripts como main.js, driver.js) hayan terminado de cargar.
 */

import { startTour } from './driver.js';
import { getTranslation } from './i18n.js';

document.addEventListener('DOMContentLoaded', () => {
    const loaderOverlay = document.getElementById('loader-overlay');
    const loadingText = document.querySelector('.loading-text');

    if (loadingText) {
        loadingText.textContent = getTranslation('loading_portfolio');
    }

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