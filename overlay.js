/**
 * @file Maneja la pantalla de carga inicial del portafolio.
 * @comment Para desarrolladores:
 * Este script se carga de forma temprana para asegurar que la pantalla de carga
 * se muestre inmediatamente y se oculte solo cuando todos los recursos principales
 * de la página (HTML, CSS, otros scripts como main.js, driver.js) hayan terminado de cargar.
 */

import { startTour } from './driver.js';
import { getTranslation, i18nReadyPromise } from './i18n.js';

console.log('overlay.js: Script started.');

const loaderOverlay = document.getElementById('loader-overlay');
const loadingText = document.querySelector('.loading-text');

(async () => {
    // Wait for i18n to be ready before setting text
    await i18nReadyPromise;
    console.log('overlay.js: i18nReadyPromise resolved!');

    if (loadingText) {
        loadingText.textContent = getTranslation('loading_portfolio');
        console.log('overlay.js: loadingText updated.');
    }

    if (loaderOverlay) {
        // Ensure the text is updated before hiding, then hide with a slight delay
        setTimeout(() => {
            loaderOverlay.style.display = 'none'; // Directly hide the element
            console.log('overlay.js: loaderOverlay hidden via display: none.');
        }, 300); // Small delay to ensure text update is rendered
    } else {
        console.error('overlay.js: loaderOverlay element not found when trying to hide!');
    }

    // Start the tour as soon as i18n is ready and the overlay is about to disappear
    if (typeof startTour === 'function') {
        startTour();
        console.log('overlay.js: startTour called after i18nReadyPromise and overlay hide.');
    } else {
        console.warn('overlay.js: startTour is not a function or not available.');
    }
})();