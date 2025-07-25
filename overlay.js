/**
 * @file Maneja la pantalla de carga inicial del portafolio.
 * @comment Para desarrolladores:
 * Este script se carga de forma temprana para asegurar que la pantalla de carga
 * se muestre inmediatamente y se oculte solo cuando todos los recursos principales
 * de la página (HTML, CSS, otros scripts como main.js, driver.js) hayan terminado de cargar.
 */

import { startTour } from './driver.js';
import { getTranslation, i18nReadyPromise } from './i18n.js';

const loaderOverlay = document.getElementById('loader-overlay');
const loadingText = document.querySelector('.loading-text');

(async () => {
    await i18nReadyPromise;

    if (loadingText) {
        loadingText.textContent = getTranslation('loading_portfolio');
    }

    if (loaderOverlay) {
        setTimeout(() => {
            loaderOverlay.style.display = 'none';
        }, 300);
    } else {
        console.error('overlay.js: loaderOverlay element not found when trying to hide!');
    }

    if (typeof startTour === 'function') {
        startTour();
    } else {
        console.warn('overlay.js: startTour is not a function or not available.');
    }
})();