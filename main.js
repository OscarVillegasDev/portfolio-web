// main.js

// --- IMPORTACIÓN DE DATOS DEL PORTAFOLIO ---
import { PORTFOLIO_DATA } from './portfolio-data.js'; // Ajusta la ruta si es necesario

/**
 * =========================================================
 * Portafolio Interactivo de Oscar Villegas: Configuración
 * =========================================================
 *
 * Este archivo contiene la lógica principal para el portafolio.
 * Las secciones están organizadas para facilitar la configuración
 * y la extensión por parte de un desarrollador.
 */

// --- 1. CONFIGURACIÓN DE COMPORTAMIENTO ---

// portfolioData ya no es 'let', es importado como 'const'
// isDataLoaded ya no es necesaria, porque los datos ya están disponibles al cargar el JS.

/**
 * @constant {string[]} FIELDS_TO_COPY_AND_STYLE - Rutas de los campos JSON cuyos valores de tipo string
 * serán copiables al clic y tendrán un estilo visual distintivo (subrayado punteado y cursor pointer).
 * @comment Para desarrolladores:
 * Añade o elimina rutas de campos específicos aquí para controlar cuáles son copiables.
 * Las rutas deben ser exactas a la estructura del objeto `PORTFOLIO_DATA`.
 * Ejemplos: "details[0].personalInfo.fullName", "details[0].experience[0].title".
 */
const FIELDS_TO_COPY_AND_STYLE = [
    "details[0].personalInfo.fullName",
    "details[0].personalInfo.email",
    "details[0].personalInfo.phone",
    "details[0].personalInfo.linkedIn",
];

/**
 * @constant {Object} SHOW_MORE_CONFIG - Configuración para la funcionalidad "Ver más..." en arrays específicos.
 * @comment Para desarrolladores:
 * Define 'limit' para los arrays que desees paginar. La clave es la ruta completa al array.
 * Ejemplos: "details[0].experience": { limit: 3 } limitará la sección de experiencia a 3 items inicialmente.
 */
const SHOW_MORE_CONFIG = {
    "details[0].experience": { limit: 3 },
    "details[0].skills": { limit: 10 },
    "details[0].certifications": { limit: 2 },
    "details[0].courses": { limit: 2 },
    "details[0].courses[0].API": { limit: 2 },
    "details[0].courses[1].AWS": { limit: 2 },
    "details[0].courses[2].softwareDeveloperPlatziCourses": { limit: 2 }
};

/**
 * @property {Object} expandedSections - Almacena el estado de expansión de los arrays paginados.
 * @comment Para desarrolladores: No modificar directamente; es gestionado internamente por el script.
 */
const expandedSections = {};


// --- 2. REFERENCIAS DOM Y UTILIDADES DE INTERFAZ ---

const sendButton = document.getElementById('send-button');
const jsonDisplay = document.getElementById('json-display');
const statusCodeSpan = document.getElementById('status-code');
const responseTimeSpan = document.getElementById('response-time');
const responseSizeSpan = document.getElementById('response-size');
const copyMessageDiv = document.getElementById('copy-message');
const tabButtons = document.querySelectorAll('.tab');
const tabContents = document.querySelectorAll('.tab-content');

const originalButtonText = sendButton.textContent;


// --- 3. FUNCIONES CORE DE RENDERIZADO Y LÓGICA ---

/**
 * Función auxiliar para obtener un valor de un objeto anidado usando una ruta de string.
 * @comment Para desarrolladores:
 * Útil para acceder a datos profundos en objetos usando una sintaxis de ruta (ej. "key" o "array[index].nestedKey").
 * @param {Object} obj - El objeto base desde donde buscar el valor.
 * @param {string} path - La ruta del atributo.
 * @returns {*} El valor del atributo o `undefined` si no se encuentra.
 */
function getObjectValueByPath(obj, path) {
    const parts = path.replace(/\[(\w+)\]/g, '.$1').split('.');
    let current = obj;
    for (const part of parts) {
        if (current === null || typeof current === 'undefined') {
            return undefined;
        }
        current = current[part];
    }
    return current;
}

/**
 * Resalta la sintaxis de un objeto/array JSON y construye el HTML interactivo.
 * Maneja el plegado de nodos y marca campos copiables/estilizados recursivamente.
 * @comment Para desarrolladores:
 * Esta es la función principal que transforma tu objeto JSON en HTML visible.
 * Es una función recursiva que se autollama para procesar objetos y arrays anidados.
 * @param {Object|Array} data - El objeto o array JSON actual a renderizar.
 * @param {string[]} fieldsToStyle - Rutas de campos a estilizar y hacer copiables.
 * @param {string} currentPath - Ruta del nodo actual en la recursión (para rastrear la posición en el JSON).
 * @param {number} indentLevel - Nivel de indentación actual.
 * @returns {string} Fragmento de HTML que representa el JSON resaltado.
 */
function highlightAndFoldJson(data, fieldsToStyle, currentPath = '', indentLevel = 0) {
    let html = '';
    const indent = ' '.repeat(indentLevel * 4); // Calcula la indentación en espacios

    // Renderiza Arrays
    if (Array.isArray(data)) {
        const config = SHOW_MORE_CONFIG[currentPath];
        const isExpanded = expandedSections[currentPath] || false;
        const displayLimit = (config && !isExpanded) ? config.limit : data.length;
        const remainingItems = data.length - displayLimit;

        // Añade el toggle de plegado para el array, si aplica.
        if (currentPath !== 'details' && data.length > 0) {
            html += `${indent}<span class="json-foldable-toggle">▾</span>`; 
        }

        html += `<span class="json-bracket">[</span>\n`;
        html += `<span class="json-folded-content">`; 

        for (let i = 0; i < displayLimit; i++) {
            const item = data[i];
            const itemPath = `${currentPath}[${i}]`;
            const nextIndentLevel = indentLevel + 1; 

            if (typeof item !== 'object' || item === null) {
                const isCopiable = fieldsToStyle.includes(itemPath);
                const classAttr = isCopiable ? ' class="json-copyable-field"' : '';
                html += `${' '.repeat(nextIndentLevel * 4)}<span class="string"><span${classAttr} data-copy-text="${item}">${JSON.stringify(item)}</span></span>`;
            } else {
                html += highlightAndFoldJson(item, fieldsToStyle, itemPath, nextIndentLevel);
            }

            if (i < displayLimit - 1 || (config && remainingItems > 0 && !isExpanded && i === displayLimit - 1)) {
                html += `,\n`;
            } else {
                html += `\n`;
            }
        }
        html += `</span>`;

        if (config && data.length > config.limit) {
            const buttonText = isExpanded ? '[−]' : '[+]';
            const buttonLineIndentSpaces = (indentLevel + 1) * 4; 
            const inlineStyle = `margin-left: ${buttonLineIndentSpaces}px;`;

            if (!isExpanded) {
                html += `${' '.repeat(buttonLineIndentSpaces)}<span class="json-comment-line" style="${inlineStyle}">... and ${remainingItems} more items</span>\n`;
            }

            html += `${' '.repeat(buttonLineIndentSpaces)}<button class="show-more-button" data-path="${currentPath}" data-expanded="${isExpanded}" style="${inlineStyle}">`;
            html += `${buttonText}`;
            html += `</button>\n`;
        }

        html += `${indent}<span class="json-bracket">]</span>`;

    } else if (typeof data === 'object' && data !== null) {
        const keys = Object.keys(data);
        const hasContent = keys.length > 0;

        if (hasContent) {
            html += `${indent}<span class="json-foldable-toggle">▾</span>`;
        }
        html += `<span class="json-bracket">{</span>\n`;

        if (hasContent) {
            html += `<span class="json-folded-content">`;
        }

        keys.forEach((key, index) => {
            const value = data[key];
            const keyPath = currentPath ? `${currentPath}.${key}` : key;

            html += `${' '.repeat((indentLevel + 1) * 4)}<span class="key">"${key}"</span>: `;

            if (typeof value === 'string') {
                const isCopiable = fieldsToStyle.includes(keyPath);
                const classAttr = isCopiable ? ' class="json-copyable-field"' : '';
                html += `<span class="string"><span${classAttr} data-copy-text="${value}">${JSON.stringify(value)}</span></span>`;
            } else if (typeof value === 'number') {
                html += `<span class="number">${value}</span>`;
            } else if (typeof value === 'boolean') {
                html += `<span class="boolean">${value}</span>`;
            } else if (value === null) {
                html += `<span class="null">null</span>`;
            } else if (typeof value === 'object') {
                html += highlightAndFoldJson(value, fieldsToStyle, keyPath, indentLevel + 1);
            }

            if (index < keys.length - 1) {
                html += `,\n`;
            } else {
                html += `\n`;
            }
        });

        if (hasContent) {
            html += `</span>`;
        }
        html += `${indent}<span class="json-bracket">}</span>`;

    } else {
        const isCopiable = fieldsToStyle.includes(currentPath);
        const classAttr = isCopiable ? ' class="json-copyable-field"' : '';
        const currentPrimitiveIndent = indentLevel > 0 ? indent : '';

        if (typeof data === 'string') {
            html += `${currentPrimitiveIndent}<span class="string"><span${classAttr} data-copy-text="${data}">${JSON.stringify(data)}</span></span>`;
        } else if (typeof data === 'number') {
            html += `${currentPrimitiveIndent}<span class="number">${data}</span>`;
        } else if (typeof data === 'boolean') {
            html += `${currentPrimitiveIndent}<span class="boolean">${data}</span>`;
        } else if (data === null) {
            html += `${currentPrimitiveIndent}<span class="null">null</span>`;
        }
    }

    return html;
}


// --- 4. MANEJADORES DE EVENTOS ---

/**
 * Maneja el clic en los toggles de plegado/desplegado de los nodos JSON.
 * @param {Event} event - Evento de clic.
 */
function handleFoldToggle(event) {
    const target = event.target;
    if (target.classList.contains('json-foldable-toggle')) {
        const parentBracketSpan = target.nextElementSibling; 
        const foldableContent = parentBracketSpan.nextElementSibling;

        if (foldableContent && foldableContent.classList.contains('json-folded-content')) {
            foldableContent.classList.toggle('hidden');
            target.textContent = foldableContent.classList.contains('hidden') ? '▸' : '▾';
        }
    }
}

/**
 * Copia texto al portapapeles del usuario y muestra un mensaje de confirmación.
 * @param {string} text - El texto a copiar.
 * @param {HTMLElement} element - El elemento DOM que activó la copia (para posicionar el mensaje).
 */
function handleCopyToClipboard(text, element) {
    navigator.clipboard.writeText(text).then(() => {
        copyMessageDiv.textContent = 'Text Copied!';
        const rect = element.getBoundingClientRect();
        copyMessageDiv.style.top = `${rect.top - 30}px`;
        copyMessageDiv.style.left = `${rect.left + (rect.width / 2)}px`;
        copyMessageDiv.style.transform = 'translateX(-50%)';
        copyMessageDiv.classList.add('show');

        setTimeout(() => {
            copyMessageDiv.classList.remove('show');
        }, 1500);
    }).catch(err => {
        console.error("DEVELOPER ALERT: Error copying text. Clipboard API might be restricted or failed.", err);
        alert('Could not copy text. Please try manually.');
    });
}

/**
 * Maneja el clic en los elementos de texto copiables dentro del JSON.
 * @param {Event} event - Evento de clic.
 */
function handleJsonContentClick(event) {
    const target = event.target;
    if (target.classList.contains('json-copyable-field')) {
        const textToCopy = target.dataset.copyText || target.textContent;
        handleCopyToClipboard(textToCopy, target);
    }
}

/**
 * Maneja el cambio de pestañas en la interfaz estilo Postman (Params, Headers, etc.).
 * @param {Event} event - Evento de clic.
 */
function handleTabClick(event) {
    tabButtons.forEach(tab => {
        tab.classList.remove('active');
        tab.setAttribute('aria-selected', 'false');
    });
    this.classList.add('active');
    this.setAttribute('aria-selected', 'true');

    tabContents.forEach(content => content.style.display = 'none');
    const targetTabId = this.dataset.tab + '-content';
    document.getElementById(targetTabId).style.display = 'block';
}

/**
 * Maneja el clic en el botón "Ver más..." o "Ver menos..." para arrays largos.
 * @param {Event} event - Evento de clic.
 */
function handleShowMoreClick(event) {
    const button = event.target;
    const path = button.dataset.path;

    expandedSections[path] = !expandedSections[path]; // Alterna el estado de expansión

    renderPortfolioJson(); // Vuelve a renderizar para aplicar el cambio
}


// --- 5. LÓGICA PRINCIPAL DE LA SIMULACIÓN DE API ---

/**
 * Simula la acción de enviar una petición API y actualiza la interfaz con los datos del portafolio.
 * @comment Para desarrolladores:
 * Esta es la función que se ejecuta al hacer clic en el botón 'Send'.
 * Simula una interacción real con una API, incluyendo un retardo para imitar el tiempo de red.
 * Los datos del portafolio ya están disponibles globalmente (PORTFOLIO_DATA).
 */
function sendApiRequest() {
    sendButton.disabled = true; // Deshabilita el botón mientras se "envía"
    sendButton.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...'; // Muestra spinner

    statusCodeSpan.textContent = 'Sending...';
    jsonDisplay.innerHTML = '<span class="comment">// Fetching portfolio data...</span>'; // Mensaje de carga
    statusCodeSpan.style.color = '#CCCCCC';
    responseTimeSpan.textContent = '';
    responseSizeSpan.textContent = '';

    setTimeout(() => {
        renderPortfolioJson(); // Renderiza el JSON con los datos precargados

        // Actualiza los detalles de la "respuesta API" simulada
        statusCodeSpan.textContent = 'Status: 200 OK';
        statusCodeSpan.style.color = '#B5CEA8'; // Verde para OK
        responseTimeSpan.textContent = 'Time: ' + (Math.floor(Math.random() * (250 - 50 + 1)) + 50) + ' ms';
        const jsonString = JSON.stringify(PORTFOLIO_DATA); // Calcula el tamaño de los datos
        responseSizeSpan.textContent = 'Size: ' + (new TextEncoder().encode(jsonString).length / 1024).toFixed(2) + ' KB';

        sendButton.disabled = false; // Habilita el botón de nuevo
        sendButton.textContent = originalButtonText; // Restaura el texto original

    }, 1500); // Retraso de 1.5 segundos para simular la petición
}

/**
 * Función central para renderizar el JSON del portfolio en el DOM.
 * Se encarga de llamar a `highlightAndFoldJson` y de adjuntar todos los listeners
 * a los elementos dinámicamente creados.
 * @comment Para desarrolladores:
 * Esta función es clave para la reactividad de la interfaz. Cada vez que el estado
 * de expansión cambia, o cuando se simula una nueva petición, esta función redibuja
 * la sección del JSON y vuelve a vincular los eventos a los nuevos elementos HTML.
 */
function renderPortfolioJson() {
    // Genera el HTML del JSON a partir de los datos y las configuraciones
    jsonDisplay.innerHTML = highlightAndFoldJson(PORTFOLIO_DATA, FIELDS_TO_COPY_AND_STYLE, '', 0);

    // Adjunta listeners a los elementos interactivos recién creados.
    // Es crucial adjuntar estos listeners DESPUÉS de que el HTML se ha insertado en el DOM,
    // ya que los elementos antiguos son reemplazados cada vez que se renderiza.
    jsonDisplay.querySelectorAll('.json-foldable-toggle').forEach(toggle => {
        toggle.addEventListener('click', handleFoldToggle);
    });
    jsonDisplay.querySelectorAll('.json-copyable-field').forEach(element => {
        element.addEventListener('click', handleJsonContentClick);
    });
    jsonDisplay.querySelectorAll('.show-more-button').forEach(button => {
        button.addEventListener('click', handleShowMoreClick);
    });
}


// --- 6. INICIALIZACIÓN DE LA APLICACIÓN ---

/**
 * Se ejecuta una vez que todo el DOM del documento ha sido cargado.
 * @comment Para desarrolladores:
 * Este es el punto de entrada de la aplicación. Aquí se configuran los estados iniciales
 * de la interfaz y se adjuntan los listeners a los elementos DOM estáticos.
 * El JSON del portafolio se carga directamente como una constante global (importada).
 */
document.addEventListener('DOMContentLoaded', () => {
    // Mensaje inicial en la pantalla, listo para la primera "petición" simulada.
    jsonDisplay.innerHTML = '<span class="comment">// Press "Send" to retrieve portfolio data...</span>';
    statusCodeSpan.textContent = 'Ready';
    statusCodeSpan.style.color = '#CCCCCC'; // Default gray color for "Ready"

    // Adjunta los listeners a los elementos DOM estáticos de la interfaz.
    sendButton.addEventListener('click', sendApiRequest);
    tabButtons.forEach(tab => {
        tab.addEventListener('click', handleTabClick);
    });
});