/**
 * @file i18n.js
 * @description Handles language detection, translation loading, and content switching.
 */

// --- STATE MANAGEMENT ---
let currentLang = 'en'; // Default language
let translations = {}; // To store loaded language strings
let portfolioData = {}; // To store loaded portfolio data

// --- DOM ELEMENTS ---
const langButtons = document.querySelectorAll('[data-lang]');

/**
 * =================================================================
 * CORE I18N FUNCTIONS
 * =================================================================
 */

/**
 * Fetches the translation file for the given language.
 * @param {string} lang - The language code (e.g., 'en', 'es').
 * @returns {Promise<Object>} A promise that resolves with the translation data.
 */
async function fetchTranslations(lang) {
    const response = await fetch(`locales/${lang}.json`);
    if (!response.ok) {
        throw new Error(`Failed to load translations for ${lang}`);
    }
    return response.json();
}

/**
 * Dynamically imports the portfolio data module for the given language.
 * @param {string} lang - The language code (e.g., 'en', 'es').
 * @returns {Promise<Object>} A promise that resolves with the portfolio data.
 */
async function fetchPortfolioData(lang) {
    try {
        const module = await import(`./portfolio-data-${lang}.js`);
        return module.PORTFOLIO_DATA;
    } catch (error) {
        console.error(`Failed to load portfolio data for ${lang}:`, error);
        // Fallback to English if the language-specific data fails
        const module = await import('./portfolio-data-en.js');
        return module.PORTFOLIO_DATA;
    }
}

/**
 * Applies the loaded translations to all elements with a 'data-translate-key' attribute.
 */
function applyTranslations() {
    document.querySelectorAll('[data-translate-key]').forEach(element => {
        const key = element.getAttribute('data-translate-key');
        if (translations[key]) {
            // Use textContent for security and performance
            element.textContent = translations[key];
        }
    });
}

/**
 * Updates the UI to reflect the currently selected language.
 * @param {string} lang - The active language code.
 */
function updateLangUI(lang) {
    langButtons.forEach(button => {
        if (button.dataset.lang === lang) {
            button.classList.add('active');
        } else {
            button.classList.remove('active');
        }
    });
    document.documentElement.lang = lang; // Update the lang attribute on the <html> tag
}

/**
 * =================================================================
 * PUBLIC API & INITIALIZATION
 * =================================================================
 */

/**
 * Main function to change the language of the application.
 * Fetches new data, applies translations, and updates the UI.
 * @param {string} lang - The target language code.
 */
export async function setLanguage(lang) {
    if (lang === currentLang && Object.keys(translations).length > 0) {
        return; // Avoid unnecessary re-loading
    }

    try {
        currentLang = lang;
        [translations, portfolioData] = await Promise.all([
            fetchTranslations(lang),
            fetchPortfolioData(lang)
        ]);

        applyTranslations();
        updateLangUI(lang);

        // Dispatch a custom event to notify other modules that the language has changed
        document.dispatchEvent(new CustomEvent('languageChange', { detail: { lang, translations, portfolioData } }));

    } catch (error) {
        console.error("Error setting language:", error);
        // Fallback to English in case of any error
        if (lang !== 'en') {
            setLanguage('en');
        }
    }
}

/**
 * Gets the current translation for a given key.
 * @param {string} key - The key for the translation string.
 * @param {string[]} [args] - Optional arguments to replace placeholders.
 * @returns {string} The translated string.
 */
export function getTranslation(key, args = []) {
    let translation = translations[key] || key;
    if (args.length > 0) {
        args.forEach(arg => {
            translation = translation.replace('%s', arg);
        });
    }
    return translation;
}

/**
 * Returns the currently loaded portfolio data.
 * @returns {Object} The portfolio data.
 */
export function getPortfolioData() {
    return portfolioData;
}

/**
 * Detects the user's preferred language from the browser or falls back to a default.
 * @returns {string} The detected language code.
 */
function detectLanguage() {
    const userLang = navigator.language || navigator.userLanguage; // 'en-US', 'es-ES', etc.
    return userLang.startsWith('es') ? 'es' : 'en'; // Default to English
}

/**
 * Initializes the internationalization module.
 * Detects language, sets it, and adds event listeners for manual switching.
 */
async function init() {
    const initialLang = detectLanguage();
    await setLanguage(initialLang);

    langButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            const newLang = e.target.dataset.lang;
            if (newLang) {
                setLanguage(newLang);
            }
        });
    });
    resolveI18nReady(); // Resolve the promise here
}

// --- INITIALIZE THE I18N SYSTEM ---
let resolveI18nReady;
export const i18nReadyPromise = new Promise(resolve => {
    resolveI18nReady = resolve;
});

await init();
