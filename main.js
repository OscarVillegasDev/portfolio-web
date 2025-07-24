// main.js

// --- Data del Portafolio (Simulación de Respuesta API) ---
const portfolioData = {
    "code": 200,
    "message": "ok",
    "details": [
        {
            "personalInfo": {
                "fullName": "Oscar Eduardo Villegas Martinez",
                "title": "API Developer",
                "email": "oscarnickvillegas@gmail.com",
                "phone": "+52 7712620593",
                "location": {
                    "country": "Mexico",
                    "state": "Hidalgo",
                    "city": "Pachuca"
                },
                "linkedIn": "https://www.linkedin.com/in/dev-oscar-villegas/",
            },
            "summary": "I have worked on projects using the agile Scrum methodology, which has allowed me to adapt quickly to changes and meet established deadlines. Additionally, I have skills in various programming languages and tools, which gives me a broader and more comprehensive approach to the projects that I’ve developed. I am committed to quality and efficiency in my work, always seeking innovative solutions to achieve team and company objectives.",
            "experience": [
                {
                    "id": 0,
                    "title": "Apigee developer",
                    "company": "Infosys/Loreal",
                    "location": "MX",
                    "years": "March 2024 - Present",
                    "description": [
                        "Experienced Apigee Developer with a strong understanding of API lifecycle management. Skilled in developing and deploying API proxies, implementing security policies (OAuth, API Key), managing API traffic, and monitoring performance within the Apigee ecosystem. Detail-oriented Apigee Developer adept at troubleshooting and resolving issues within the Apigee platform. Experienced in analyzing API logs, implementing error handling, and optimizing API performance for scalability and reliability. Work with international teams"
                    ]
                },
                {
                    "id": 1,
                    "title": "API developer",
                    "company": "Grupo Salinas",
                    "location": "MX",
                    "years": "April 2021 - March 2024",
                    "description": [
                        "Experience in developing and designing APIs using the Contract First methodology. Proficient in performing stress testing and configuring Apigee Edge gateway, applying best practices in security and policy management. Competent in implementing security policies to protect APIs. Experienced in manual and automated testing to ensure software quality. Collaborative teamwork with other developers and infrastructure specialists to troubleshoot and optimize solution delivery. Ability to learn and adapt to new technologies and tools in an agile environment."
                    ]
                },
                {
                    "id": 2,
                    "title": "Fullstack developer",
                    "company": "Softmotion",
                    "location": "MX",
                    "years": "March 2018 - April 2021",
                    "description": [
                        "Software developer with experience in various development areas, including Scrum Master, Frontend Developer, Backend Developer, Business Analyst, Database Administrator, Android and Desktop Application Developer. Proficient in consuming APIs and web platforms using PHP, ASP.NET, and JavaScript frameworks such as AngularJS, ReactJS, and VueJS. Experienced in implementing CRMs and cloud services such as GCP, AWS, and Azure. Competent in managing software projects using agile methodologies such as Scrum and Kanban. Skilled in teamwork, problem-solving, and quickly adapting to new environments and technologies. Continuous learner with a focus on improving the quality and efficiency of work."
                    ]
                }
            ],
            "skills": [
                "API Design",
                "Agile",
                "Software engineering",
                "RESTful APIs",
                "Microservices",
                "Cloud Computing (AWS, GCP, Azure)",
                "CI/CD",
                "Git",
                "JavaScript",
                "Node.js",
                "Python",
                "Java",
                "PHP",
                "SQL",
                "NoSQL",
                "Scrum",
                "Kanban",
                "Problem Solving",
                "Teamwork"
            ],
            "education": [
                {
                    "id": 0,
                    "institution": "Autonomous University Of the State of Hidalgo",
                    "degree": "Bachelor's degree in Computer Science",
                    "years": "2016 - 2021"
                }
            ],
            "certifications": [
                "Management 3.0",
                "Scrum Fundamentals",
                "Kanban",
                "Scrum Master",
                "TOEFL - ITP B2"
            ],
            "courses": [
                {
                    "API":[
                        "API Design and Fundamentals of Google Cloud's Apigee API Platform",
                        "API Security on Google Cloud's Apigee API Platform",
                        "API Development on Google Cloud's Apigee API"
                    ]
                },
                {
                    "AWS":[
                        "AWS Cloud Practitioner Essentials Day",
                        "Security Engineering on AWS Jam",
                        "MLOps Engineering on AWS",
                        "Migrating to AWS",
                        "AWS Well-Architected Best Practices"
                    ]
                },
                {
                    "softwareDeveloperPlatziCourses":[
                    ]
                },
                "Google Cloud Platform Courses",
                "Desarrollo aplicaciones Android con Kotlin",
                "Desarrollo páginas web con nodeJS",
                "Crea tu primera página web en un día con WordPress"
            ]
        }
    ]
};

// --- Constantes y Referencias DOM ---
const sendButton = document.getElementById('send-button');
const jsonDisplay = document.getElementById('json-display');
const statusCodeSpan = document.getElementById('status-code');
const responseTimeSpan = document.getElementById('response-time');
const responseSizeSpan = document.getElementById('response-size');
const copyMessageDiv = document.getElementById('copy-message');
const tabButtons = document.querySelectorAll('.tab');
const tabContents = document.querySelectorAll('.tab-content');

const originalButtonText = sendButton.textContent;

// Define aquí las rutas completas de los campos que quieres que sean copiables y estilizados.
// Las rutas deben coincidir con la estructura del objeto 'portfolioData'.
const fieldsToMakeCopiableAndStyle = [
    "details[0].personalInfo.fullName",
    "details[0].personalInfo.email",
    "details[0].personalInfo.phone",
    "details[0].personalInfo.linkedIn"
];

// Define los arrays que deberían tener la funcionalidad "ver más..." y cuántos elementos mostrar inicialmente.
const showMoreConfig = {
    "details[0].experience": { limit: 3 },
    "details[0].skills": { limit: 10 },
    "details[0].certifications": { limit: 2 },
    "details[0].courses": { limit: 2 },
    "details[0].courses[0].API": { limit: 2 },
    "details[0].courses[1].AWS": { limit: 2 },
    "details[0].courses[2].softwareDeveloperPlatziCourses": { limit: 2 }
};

// Objeto para almacenar el estado de "ver más..." por cada sección
const expandedSections = {}; // Key: path, Value: boolean (true if expanded)


// --- Funciones de Utilidad ---

/**
 * Función auxiliar para obtener un valor de un objeto usando una ruta de string (ej. "a.b[0].c").
 * @param {object} obj - El objeto en el que buscar el valor.
 * @param {string} path - La ruta del valor.
 * @returns {*} El valor encontrado o undefined si la ruta no existe.
 */
function getObjectValueByPath(obj, path) {
    const parts = path.replace(/\[(\w+)\]/g, '.$1').split('.'); // Convierte [index] a .index
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
 * Resalta la sintaxis de un objeto JSON construyendo elementos DOM.
 * Aplica estilos y funcionalidad de copia basándose en rutas de campos.
 * @param {object | Array} data - El objeto o array JSON a resaltar.
 * @param {string[]} fieldsToMakeCopiableAndStyle - Rutas de campos a hacer copiables y estilizados.
 * @param {string} currentPath - Ruta actual en la recursión (para construir paths completos).
 * @param {number} indentLevel - Nivel de indentación actual.
 * @returns {string} HTML con la sintaxis resaltada.
 */
function highlightAndFoldJson(data, fieldsToMakeCopiableAndStyle, currentPath = '', indentLevel = 0) {
    let html = '';
    const indent = ' '.repeat(indentLevel * 4); // 4 espacios por nivel

    if (Array.isArray(data)) {
        const config = showMoreConfig[currentPath];
        const isExpanded = expandedSections[currentPath] || false;
        const displayLimit = (config && !isExpanded) ? config.limit : data.length;
        const remainingItems = data.length - displayLimit;

        // Añadir el toggle para el array (si no es el array 'details' raíz, que ya tiene una flecha general)
        // Y si el array tiene contenido o puede ser plegado/desplegado
        if (currentPath !== 'details' && data.length > 0) { // Añadida condición data.length > 0
            // El toggle de array debe estar a la misma indentación que el corchete de apertura
            html += `${indent}<span class="json-foldable-toggle">▾</span>`; 
        }
        
        html += `<span class="json-bracket">[</span>\n`;
        html += `<span class="json-folded-content">`; // Contenido plegable para arrays

        for (let i = 0; i < displayLimit; i++) {
            const item = data[i];
            const itemPath = `${currentPath}[${i}]`;
            
            // **** LA CLAVE ESTÁ AQUÍ ****
            // Para la indentación de los ITEMS dentro de un array,
            // siempre se le añade un nivel extra al indentLevel del array.
            const itemIndent = ' '.repeat((indentLevel + 1) * 4); 

            // Si el ítem es un valor primitivo (string, number, boolean, null)
            // se le aplica directamente la indentación calculada.
            if (typeof item !== 'object' || item === null) {
                const isCopiableAndStyled = fieldsToMakeCopiableAndStyle.includes(itemPath);
                const classAttr = isCopiableAndStyled ? ' class="json-copyable-field"' : '';
                
                // Indentación directa para elementos primitivos de array
                html += `${itemIndent}<span class="string"><span${classAttr} data-copy-text="${item}">${JSON.stringify(item)}</span></span>`;
            } else {
                // Si el ítem es un objeto o array anidado, la función recursiva se encarga
                // de su propia indentación, pero le pasamos el nivel base correcto.
                html += highlightAndFoldJson(item, fieldsToMakeCopiableAndStyle, itemPath, indentLevel + 1);
            }

            if (i < displayLimit - 1 || (config && remainingItems > 0 && !isExpanded && i === displayLimit - 1)) {
                html += `,\n`;
            } else {
                html += `\n`;
            }
        }
        html += `</span>`; // Cierra json-folded-content del array

        // Botón "Ver más..."
        if (config && data.length > config.limit) {
            const buttonText = isExpanded ? '[−]' : '[+]';
            const buttonLineIndentSpaces = (indentLevel + 1) * 4; // Indentación para el botón y comentario
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
        // ... (esta parte para objetos regulares, incluyendo la lógica de key: value, permanece igual) ...
        const keys = Object.keys(data);
        const hasContent = keys.length > 0;

        // Añadir toggle para objetos
        if (hasContent) {
            html += `${indent}<span class="json-foldable-toggle">▾</span>`; // Flecha hacia abajo por defecto
        }
        html += `<span class="json-bracket">{</span>\n`;
        
        if (hasContent) {
            html += `<span class="json-folded-content">`; // Contenido plegable para objetos
        }

        keys.forEach((key, index) => {
            const value = data[key];
            const keyPath = currentPath ? `${currentPath}.${key}` : key;
            
            html += `${' '.repeat((indentLevel + 1) * 4)}<span class="key">"${key}"</span>: `;

            // Determinar tipo y renderizar
            if (typeof value === 'string') {
                const isCopiableAndStyled = fieldsToMakeCopiableAndStyle.includes(keyPath);
                const classAttr = isCopiableAndStyled ? ' class="json-copyable-field"' : '';
                html += `<span class="string"><span${classAttr} data-copy-text="${value}">${JSON.stringify(value)}</span></span>`;
            } else if (typeof value === 'number') {
                html += `<span class="number">${value}</span>`;
            } else if (typeof value === 'boolean') {
                html += `<span class="boolean">${value}</span>`;
            } else if (value === null) {
                html += `<span class="null">null</span>`;
            } else if (typeof value === 'object') { // Objeto o array anidado
                html += highlightAndFoldJson(value, fieldsToMakeCopiableAndStyle, keyPath, indentLevel + 1);
            }

            if (index < keys.length - 1) {
                html += `,\n`;
            } else {
                html += `\n`;
            }
        });

        if (hasContent) {
            html += `</span>`; // Cierra el contenido plegable
        }
        html += `${indent}<span class="json-bracket">}</span>`;

    } else { // Manejo de tipos primitivos directos (fuera de objetos/arrays)
        // Estos casos no deberían tener indentación si no están dentro de un contexto superior,
        // o si lo están, la indentación la lleva el llamador.
        // Aquí no necesitan un `itemIndent` adicional ya que el `indentLevel` ya es correcto.
        const isCopiableAndStyled = fieldsToMakeCopiableAndStyle.includes(currentPath);
        const classAttr = isCopiableAndStyled ? ' class="json-copyable-field"' : '';

        // Solo aplica indent si el nivel es > 0, o si es la raíz y tiene un nivel asignado
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


/**
 * Alterna el estado de plegado de un bloque JSON.
 * @param {Event} event - El evento de clic.
 */
function handleFoldToggle(event) {
    const target = event.target;
    if (target.classList.contains('json-foldable-toggle')) {
        // Encuentra el span que contiene el corchete/llave y es el hermano directo del toggle
        const parentBracketSpan = target.nextElementSibling; 
        
        // El contenido plegable debe ser el hermano del bracket/llave (o el foldable-content del array)
        const foldableContent = parentBracketSpan.nextElementSibling;

        if (foldableContent && foldableContent.classList.contains('json-folded-content')) {
            foldableContent.classList.toggle('hidden');
            target.textContent = foldableContent.classList.contains('hidden') ? '▸' : '▾';
        }
    }
}


/**
 * Copia texto al portapapeles y muestra un mensaje de confirmación.
 * @param {string} text - El texto a copiar.
 * @param {HTMLElement} element - El elemento DOM desde donde se originó la copia (para posicionar el mensaje).
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
        console.error('Error al copiar el texto: ', err);
        alert('No se pudo copiar el texto. Por favor, inténtalo manualmente.');
    });
}

/**
 * Maneja el clic en los elementos copiables dentro del JSON.
 * @param {Event} event - El evento de clic.
 */
function handleJsonContentClick(event) {
    const target = event.target;
    // Solo respondemos a clics en elementos con la clase 'json-copyable-field'
    if (target.classList.contains('json-copyable-field')) {
        const textToCopy = target.dataset.copyText || target.textContent;
        handleCopyToClipboard(textToCopy, target);
    }
}

/**
 * Maneja el cambio de pestañas en la interfaz de Postman.
 * @param {Event} event - El evento de clic.
 */
function handleTabClick(event) {
    // Actualizar estados de pestañas
    tabButtons.forEach(tab => {
        tab.classList.remove('active');
        tab.setAttribute('aria-selected', 'false');
    });
    this.classList.add('active');
    this.setAttribute('aria-selected', 'true');

    // Mostrar el contenido de la pestaña activa
    tabContents.forEach(content => content.style.display = 'none');
    const targetTabId = this.dataset.tab + '-content';
    document.getElementById(targetTabId).style.display = 'block';
}

/**
 * Maneja el clic en el botón "Ver más..."
 * @param {Event} event - El evento de clic.
 */
function handleShowMoreClick(event) {
    const button = event.target;
    const path = button.dataset.path;
    
    // Alternar el estado de expansión
    expandedSections[path] = !expandedSections[path];

    // Volver a renderizar el JSON para reflejar el cambio
    renderPortfolioJson();
}


/**
 * Simula la acción de enviar una petición API y actualiza la interfaz.
 */
function sendApiRequest() {
    sendButton.disabled = true;
    sendButton.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';

    statusCodeSpan.textContent = 'Sending...';
    jsonDisplay.innerHTML = '<span class="comment">// Fetching portfolio data...</span>';
    statusCodeSpan.style.color = '#CCCCCC'; // Resetear color
    responseTimeSpan.textContent = '';
    responseSizeSpan.textContent = '';

    setTimeout(() => {
        renderPortfolioJson(); // Llama a la nueva función de renderizado principal

        // Actualizar detalles de la respuesta
        statusCodeSpan.textContent = 'Status: 200 OK';
        statusCodeSpan.style.color = '#B5CEA8';
        responseTimeSpan.textContent = 'Time: ' + (Math.floor(Math.random() * (250 - 50 + 1)) + 50) + ' ms';
        const jsonString = JSON.stringify(portfolioData); // Usar portfolioData para el cálculo
        responseSizeSpan.textContent = 'Size: ' + (new TextEncoder().encode(jsonString).length / 1024).toFixed(2) + ' KB';

        sendButton.disabled = false;
        sendButton.textContent = originalButtonText;

    }, 1500); // Simula 1.5 segundos de retraso
}

/**
 * Función central para renderizar el JSON del portfolio.
 * Separada para ser llamada por el botón Send y por los botones "Ver más...".
 */
function renderPortfolioJson() {
    jsonDisplay.innerHTML = highlightAndFoldJson(portfolioData, fieldsToMakeCopiableAndStyle, '', 0);

    // Volver a adjuntar event listeners para elementos interactivos recién creados
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


// --- Inicialización y Event Listeners Principales ---
document.addEventListener('DOMContentLoaded', () => {
    // Estado inicial de la pantalla
    jsonDisplay.innerHTML = '<span class="comment">// Press "Send" to retrieve portfolio data...</span>';
    statusCodeSpan.textContent = 'Ready';

    // Adjuntar Event Listeners
    sendButton.addEventListener('click', sendApiRequest);
    tabButtons.forEach(tab => {
        tab.addEventListener('click', handleTabClick);
    });
});