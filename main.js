import { getTranslation, setLanguage, getPortfolioData } from 'i18n.js';

/**
 * =========================================================
 * Portafolio Interactivo de Oscar Villegas: Lógica Principal
 * =========================================================
 *
 * Este script gestiona la interfaz de usuario, la simulación de API,
 * el resaltado de JSON, el plegado de nodos, la copia de campos y
 * la paginación de arrays largos.
 */

/**
 * @constant {string[]} FIELDS_TO_COPY_AND_STYLE - Rutas de los campos JSON (valores de tipo string)
 * que serán copiables al clic y tendrán un estilo visual distintivo (subrayado punteado y cursor pointer).
 * @comment Para desarrolladores:
 * - Añade o elimina rutas de campos específicos aquí para controlar cuáles son copiables.
 * - Las rutas deben ser exactas a la estructura del objeto `PORTFOLIO_DATA`.
 * - Ejemplos: "details[0].personalInfo.fullName", "details[0].experience[0].title".
 * - El campo definido en `RESUME_PDF_PATH` se maneja por separado como un enlace navegable real,
 * por lo que NO debe incluirse en esta lista.
 */
const FIELDS_TO_COPY_AND_STYLE = [
    "details[0].personalInfo.fullName",
    "details[0].personalInfo.email",
    "details[0].personalInfo.phone",
    "details[0].personalInfo.linkedIn"
];

/**
 * @constant {string} RESUME_PDF_PATH - Ruta exacta del campo en el JSON que contiene la URL del CV en PDF.
 * @comment Para desarrolladores:
 * - Este campo se renderizará como un enlace HTML <a> real que el navegador abrirá en una nueva pestaña.
 * - NO debe incluirse en `FIELDS_TO_COPY_AND_STYLE` para evitar conflictos de comportamiento.
 */
const RESUME_PDF_PATH = "details[0].personalInfo.cvPdf";

/**
 * @constant {Object} SHOW_MORE_CONFIG - Configuración para la funcionalidad "Ver más..." en arrays específicos.
 * @comment Para desarrolladores:
 * - Define 'limit' para los arrays que desees paginar. La clave es la ruta completa al array.
 * - Ejemplos: "details[0].experience": { limit: 3 } limitará la sección de experiencia a 3 items inicialmente.
 * - Asegúrate de que estas rutas apunten a ARRAYS en tu objeto `PORTFOLIO_DATA`.
 */
const SHOW_MORE_CONFIG = {
    "details[0].experience": { limit: 3 },
    "details[0].projects": { limit: 2 },
    "details[0].skills": { limit: 3 },
    "details[0].certifications": { limit: 2 },
    "details[0].courses": { limit: 3 },
    "details[0].courses[0].gcp": { limit: 2 },
    "details[0].courses[1].aws": { limit: 2 },
    "details[0].courses[2].platziCourses": { limit: 2 }
};

/**
 * @property {Object} expandedSections - Almacena el estado de expansión de los arrays paginados.
 * @comment Para desarrolladores: Gestionado internamente por el script, no modificar directamente.
 * Clave: ruta del array, Valor: booleano (true si está expandido, false si está colapsado).
 */
const expandedSections = {};

const sendButton = document.getElementById('send-button');
const jsonDisplay = document.getElementById('json-display');
const statusCodeSpan = document.getElementById('status-code');
const responseTimeSpan = document.getElementById('response-time');
const responseSizeSpan = document.getElementById('response-size');
const copyMessageDiv = document.getElementById('copy-message');
const tabButtons = document.querySelectorAll('.tab');
const tabContents = document.querySelectorAll('.tab-content');

/**
 * Función auxiliar para obtener un valor de un objeto anidado usando una ruta de string.
 * @comment Para desarrolladores: Accede a propiedades profundas en objetos/arrays de forma segura.
 * @param {Object} obj - El objeto base.
 * @param {string} path - La ruta del atributo (ej. "key.nestedKey" o "array[index].key").
 * @returns {*} El valor del atributo, o `undefined` si la ruta no es válida.
 */
function getObjectValueByPath(obj, path) {
    const parts = path.replace(/\\[(\\w+)\\]/g, '.$1').split('.');
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
 * Maneja el plegado de nodos, la copia de campos específicos y la navegación para el PDF.
 * @comment Para desarrolladores:
 * Esta es la función recursiva central que genera el HTML a partir de los datos JSON.
 * Modifica la forma en que los valores son representados visualmente.
 * @param {Object|Array} data - El sub-objeto o sub-array actual del JSON a renderizar.
 * @param {string[]} fieldsToStyle - Rutas de campos que deben ser copiables y estilizados.
 * @param {string} currentPath - La ruta completa al nodo `data` actual desde la raíz del JSON.
 * @param {number} indentLevel - El nivel actual de indentación para el formato visual.
 * @returns {string} El fragmento de HTML generado.
 */
function highlightAndFoldJson(data, fieldsToStyle, currentPath = '', indentLevel = 0) {
    let html = '';
    const indent = ' '.repeat(indentLevel * 4); // Calcula el espaciado para la indentación

    // Renderiza Arrays
    if (Array.isArray(data)) {
        const config = SHOW_MORE_CONFIG[currentPath];
        const isExpanded = expandedSections[currentPath] || false;
        const displayLimit = (config && !isExpanded) ? config.limit : data.length;
        const remainingItems = data.length - displayLimit;

        // Añade el toggle de plegado para el array, si aplica y tiene contenido.
        // `details` no tiene un toggle porque es el array principal y siempre está "abierto".
        if (currentPath !== 'details' && data.length > 0) {
             html += `${indent}<span class="json-foldable-toggle">▾</span>`; 
        }
        
        html += `<span class="json-bracket">[</span>\n`;
        html += `<span class="json-folded-content">`; // Contenedor para el contenido plegable/expandible

        for (let i = 0; i < displayLimit; i++) {
            const item = data[i];
            const itemPath = `${currentPath}[${i}]`;
            const nextIndentLevel = indentLevel + 1; 

            // Determina cómo renderizar el elemento del array (primitivo, objeto o array anidado)
            if (typeof item !== 'object' || item === null) { // Si el ítem es un valor primitivo (string, number, boolean, null)
                // Lógica específica para el enlace PDF
                if (itemPath === RESUME_PDF_PATH) {
                    html += `${' '.repeat(nextIndentLevel * 4)}<span class="string"><a href="${item}" target="_blank" rel="noopener noreferrer" class="json-pdf-link" data-copy-text="${item}">${JSON.stringify(item)}</a></span>`;
                } else {
                    // Lógica para strings copiables y estilizados (FIELDS_TO_COPY_AND_STYLE)
                    const isCopiable = fieldsToStyle.includes(itemPath);
                    const classAttr = isCopiable ? ' class="json-copyable-field"' : '';
                    html += `${' '.repeat(nextIndentLevel * 4)}<span class="string"><span${classAttr} data-copy-text="${item}">${JSON.stringify(item)}</span></span>`;
                }
            } else { // Si el ítem es un objeto o array anidado, se llama a la función recursivamente.
                html += highlightAndFoldJson(item, fieldsToStyle, itemPath, nextIndentLevel);
            }

            // Añade una coma después del elemento, a menos que sea el último elemento visible.
            if (i < displayLimit - 1 || (config && remainingItems > 0 && !isExpanded && i === displayLimit - 1)) {
                html += `,\n`;
            } else {
                html += `\n`;
            }
        }
        html += `</span>`; // Cierra el contenedor de contenido plegable

        // Botón "Ver más/menos" e indicador de items restantes (si el array es paginado).
        if (config && data.length > config.limit) {
            const buttonText = isExpanded ? '[−]' : '[+]';
            const buttonLineIndentSpaces = (indentLevel + 1) * 4; 
            const inlineStyle = `margin-left: ${buttonLineIndentSpaces}px;`;

            // Muestra el comentario "... and X more items" solo si no está expandido.
            if (!isExpanded) {
                html += `${' '.repeat(buttonLineIndentSpaces)}<span class="json-comment-line" style="${inlineStyle}">${getTranslation('show_more_items_comment', [remainingItems])}</span>\n`;
            }

            // Botón de expansión/colapso
            html += `${' '.repeat(buttonLineIndentSpaces)}<button class="show-more-button" data-path="${currentPath}" data-expanded="${isExpanded}" style="${inlineStyle}">`;
            html += `${buttonText}`;
            html += `</button>\n`;
        }
        
        html += `${indent}<span class="json-bracket">]</span>`;

    } else if (typeof data === 'object' && data !== null) {
        // Renderiza Objetos
        const keys = Object.keys(data);
        const hasContent = keys.length > 0;

        // Toggle de plegado para el objeto.
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
            
            // Renderiza la clave.
            html += `${' '.repeat((indentLevel + 1) * 4)}<span class="key">"${key}"</span>: `;

            // Renderiza el valor de la clave.
            if (typeof value === 'string') {
                // Lógica específica para el enlace PDF
                if (keyPath === RESUME_PDF_PATH) {
                    html += `<span class="string"><a href="${value}" target="_blank" rel="noopener noreferrer" class="json-pdf-link" data-copy-text="${value}">${JSON.stringify(value)}</a></span>`;
                } else {
                    // Lógica para strings copiables y estilizados (FIELDS_TO_COPY_AND_STYLE)
                    const isCopiable = fieldsToStyle.includes(keyPath);
                    const classAttr = isCopiable ? ' class="json-copyable-field"' : '';
                    html += `<span class="string"><span${classAttr} data-copy-text="${value}">${JSON.stringify(value)}</span></span>`;
                }
            } else if (typeof value === 'number') {
                html += `<span class="number">${value}</span>`;
            } else if (typeof value === 'boolean') {
                html += `<span class="boolean">${value}</span>`;
            } else if (value === null) {
                html += `<span class="null">null</span>`;
            } else if (typeof value === 'object') { // Recursión para objetos o arrays anidados.
                html += highlightAndFoldJson(value, fieldsToStyle, keyPath, indentLevel + 1);
            }

            // Añade coma después del par clave-valor, si es necesario.
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
        // Manejo de valores primitivos directos (ej. "code": 200, "message": "ok")
        // Lógica específica para el enlace PDF si fuera un primitivo directo (menos común, pero manejado)
        if (currentPath === RESUME_PDF_PATH && typeof data === 'string') {
            const currentPrimitiveIndent = indentLevel > 0 ? indent : '';
            html += `${currentPrimitiveIndent}<span class="string"><a href="${data}" target="_blank" rel="noopener noreferrer" class="json-pdf-link" data-copy-text="${data}">${JSON.stringify(data)}</a></span>`;
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
    }

    return html;
}

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
        copyMessageDiv.textContent = getTranslation('copy_message_success');
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
        alert(getTranslation('copy_message_error'));
    });
}

/**
 * Maneja el clic en los elementos de texto copiables dentro del JSON.
 * @comment Para desarrolladores:
 * Este manejador solo se activa para campos que son *solamente* copiables (no enlaces navegables reales).
 * Los enlaces reales (como el PDF) son manejados por el navegador directamente.
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

/**
 * Simula la acción de enviar una petición API y actualiza la interfaz con los datos del portafolio.
 * @comment Para desarrolladores:
 * Esta es la función que se ejecuta al hacer clic en el botón 'Send'.
 * Simula una interacción real con una API, incluyendo un retardo para imitar el tiempo de red.
 * Los datos del portafolio ya están disponibles globalmente (PORTFOLIO_DATA).
 */
function sendApiRequest() {
    sendButton.disabled = true; // Deshabilita el botón mientras se "envía"
    sendButton.innerHTML = `<i class="fas fa-spinner fa-spin"></i> ${getTranslation('sending_button')}`;

    statusCodeSpan.textContent = getTranslation('status_sending');
    jsonDisplay.innerHTML = `<span class="comment">${getTranslation('fetching_data_comment')}</span>`;
    statusCodeSpan.style.color = '#CCCCCC';
    responseTimeSpan.textContent = '';
    responseSizeSpan.textContent = '';

    setTimeout(() => {
        renderPortfolioJson(); // Renderiza el JSON con los datos precargados

        // Actualiza los detalles de la "respuesta API" simulada
        statusCodeSpan.textContent = getTranslation('status_ok');
        statusCodeSpan.style.color = '#B5CEA8'; // Verde para OK
        const time = Math.floor(Math.random() * (250 - 50 + 1)) + 50;
        responseTimeSpan.textContent = `${getTranslation('response_time_label')}: ${time} ms`;
        const jsonString = JSON.stringify(getPortfolioData());
        responseSizeSpan.textContent = `${getTranslation('response_size_label')}: ${(new TextEncoder().encode(jsonString).length / 1024).toFixed(2)} KB`;

        sendButton.disabled = false; // Habilita el botón de nuevo
        sendButton.textContent = getTranslation('send_button');

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
    const portfolioData = getPortfolioData();
    if (!portfolioData) return;
    // Genera el HTML del JSON a partir de los datos y las configuraciones
    jsonDisplay.innerHTML = highlightAndFoldJson(portfolioData, FIELDS_TO_COPY_AND_STYLE, '', 0);

    // Adjunta listeners a los elementos interactivos recién creados.
    // Es crucial adjuntar estos listeners DESPUÉS de que el HTML se ha insertado en el DOM,
    // ya que los elementos antiguos son reemplazados cada vez que se renderiza.
    jsonDisplay.querySelectorAll('.json-foldable-toggle').forEach(toggle => {
        toggle.addEventListener('click', handleFoldToggle);
    });
    // Adjuntamos el listener solo a 'json-copyable-field' (no a los enlaces PDF que navegan directamente)
    jsonDisplay.querySelectorAll('.json-copyable-field').forEach(element => {
        element.addEventListener('click', handleJsonContentClick);
    });
    jsonDisplay.querySelectorAll('.show-more-button').forEach(button => {
        button.addEventListener('click', handleShowMoreClick);
    });
}

function updateUI() {
    const lang = getPortfolioData().lang;
    document.documentElement.lang = lang;
    const elements = document.querySelectorAll('[data-translate-key]');
    elements.forEach(element => {
        const key = element.dataset.translateKey;
        const translation = getTranslation(key);
        if (translation) {
            element.innerText = translation;
        }
    });
}

/**
 * Se ejecuta una vez que todo el DOM del documento ha sido cargado.
 * @comment Para desarrolladores:
 * Este es el punto de entrada de la aplicación. Aquí se configuran los estados iniciales
 * de la interfaz y se adjuntan los listeners a los elementos DOM estáticos.
 * El JSON del portafolio se carga directamente como una constante global (importada).
 */
document.addEventListener('DOMContentLoaded', () => {
    // Mensaje inicial en la pantalla, listo para la primera "petición" simulada.
    jsonDisplay.innerHTML = `<span class="comment">${getTranslation('initial_display_comment')}</span>`;
    statusCodeSpan.textContent = getTranslation('status_ready');
    statusCodeSpan.style.color = '#CCCCCC'; // Default gray color for "Ready"

    // Adjunta los listeners a los elementos DOM estáticos de la interfaz.
    sendButton.addEventListener('click', sendApiRequest);
    tabButtons.forEach(tab => {
        tab.addEventListener('click', handleTabClick);
    });

    // Actualiza el año actual en el pie de página
    const currentYearSpan = document.getElementById('current-year');
    if (currentYearSpan) {
        currentYearSpan.textContent = new Date().getFullYear();
    }
});

document.addEventListener('languageChange', (e) => {
    updateUI();
    jsonDisplay.innerHTML = `<span class="comment">${getTranslation('press_send_comment')}</span>`;
    statusCodeSpan.textContent = getTranslation('status_ready');
});
