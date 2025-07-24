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

(async () => {
    // console.log('overlay.js: Async IIFE started.');
    const loaderOverlay = document.getElementById('loader-overlay');
    const loadingText = document.querySelector('.loading-text');

    // console.log('overlay.js: loaderOverlay element:', loaderOverlay);
    // console.log('overlay.js: loadingText element:', loadingText);

    // Wait for i18n to be ready before setting text and hiding overlay
    // console.log('overlay.js: Waiting for i18nReadyPromise...');
    await i18nReadyPromise;
    // console.log('overlay.js: i18nReadyPromise resolved!');

    if (loadingText) {
        loadingText.textContent = getTranslation('loading_portfolio');
        // console.log('overlay.js: loadingText updated.');
    }

    if (loaderOverlay) {
        // console.log('overlay.js: Attempting to hide loader overlay.');
        setTimeout(() => {
            loaderOverlay.classList.add('hidden');
            //console.log('overlay.js: loaderOverlay hidden class added.');
            if (typeof startTour === 'function') {
                startTour();
                //console.log('overlay.js: startTour called.');
            }
        }, 300); 
    } else {
        console.error('overlay.js: loaderOverlay element not found when trying to hide!');
    }
})();