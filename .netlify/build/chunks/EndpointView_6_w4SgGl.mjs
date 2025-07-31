import { c as createComponent, d as createAstro, r as renderTemplate, j as renderSlot, f as addAttribute, k as renderHead, m as maybeRenderHead, l as defineScriptVars, i as renderComponent } from './astro/server_Br2SCbNd.mjs';
import 'kleur/colors';
import 'clsx';
/* empty css                               */

const loading_portfolio$1 = "Loading portfolio...";
const send_button$1 = "Send";
const sending_button$1 = "Sending...";
const request_tab_params$1 = "Params";
const request_tab_headers$1 = "Headers (0)";
const request_tab_body$1 = "Body";
const request_tab_scripts$1 = "Scripts";
const request_tab_settings$1 = "Settings";
const params_content$1 = "This request does not have a param.";
const headers_content$1 = "No headers configured for this request.";
const body_content_get$1 = "No request body for GET method.";
const scripts_content$1 = "No pre-request or test scripts.";
const settings_content$1 = "Default settings applied.";
const response_title$1 = "Response";
const status_ready$1 = "Ready";
const status_sending$1 = "Sending...";
const status_ok$1 = "Status: 200 OK";
const status_404$1 = "Status: 404 Not Found";
const errorVerb$1 = "Only GET method is allowed";
const errorUrl$1 = "This endpoint does not exist";
const response_time_label$1 = "Time";
const response_size_label$1 = "Size";
const fetching_data_comment$1 = "// Fetching portfolio data...";
const press_send_comment$1 = "// Press \"Send\" to retrieve portfolio data...";
const copy_message_success$1 = "Text Copied!";
const copy_message_error$1 = "Could not copy text. Please try manually.";
const show_more_items_comment$1 = "... and %s more items";
const tour_step1_title$1 = "Portfolio Tour";
const tour_step1_desc$1 = "This interface simulates an API request to get portfolio data.";
const tour_step2_title$1 = "Tabs";
const tour_step2_desc$1 = "You can interact with the different requests that exist for each query.";
const tour_step3_title$1 = "Personal Data";
const tour_step3_desc$1 = "In this request, you can view my personal information such as name, email, phone, etc.";
const tour_step4_title$1 = "Experience";
const tour_step4_desc$1 = "In this request, you can view my professional experience information such as company, position, description, etc.";
const tour_step5_title$1 = "Projects";
const tour_step5_desc$1 = "In this request, you can view information about the projects I have done, both personal and as part of a development team.";
const tour_step6_title$1 = "Verb!";
const tour_step6_desc$1 = "In a request, always check the verb of the request to know what type of request is being made. In this case, it will always be GET.";
const tour_step7_title$1 = "URL!";
const tour_step7_desc$1 = "Also, check the URL of the request to know which endpoint will be queried.";
const tour_step8_title$1 = "Interact";
const tour_step8_desc$1 = "Click this button to get the portfolio data.";
const tour_step9_title$1 = "Response";
const tour_step9_desc$1 = "After clicking the Send button, the portfolio data will be shown in JSON format.";
const tour_step10_title$1 = "That's it!";
const tour_step10_desc$1 = "Some data can be copied by clicking. Welcome to my portfolio!";
const footer_made_by$1 = "Made with ❤️ and code by Oscar Villegas.";
const footer_reserved$1 = "All rights reserved.";
const footer_note$1 = "This is an interactive demonstration. The content presented simulates an API response.";
const enTranslations = {
  loading_portfolio: loading_portfolio$1,
  send_button: send_button$1,
  sending_button: sending_button$1,
  request_tab_params: request_tab_params$1,
  request_tab_headers: request_tab_headers$1,
  request_tab_body: request_tab_body$1,
  request_tab_scripts: request_tab_scripts$1,
  request_tab_settings: request_tab_settings$1,
  params_content: params_content$1,
  headers_content: headers_content$1,
  body_content_get: body_content_get$1,
  scripts_content: scripts_content$1,
  settings_content: settings_content$1,
  response_title: response_title$1,
  status_ready: status_ready$1,
  status_sending: status_sending$1,
  status_ok: status_ok$1,
  status_404: status_404$1,
  errorVerb: errorVerb$1,
  errorUrl: errorUrl$1,
  response_time_label: response_time_label$1,
  response_size_label: response_size_label$1,
  fetching_data_comment: fetching_data_comment$1,
  press_send_comment: press_send_comment$1,
  copy_message_success: copy_message_success$1,
  copy_message_error: copy_message_error$1,
  show_more_items_comment: show_more_items_comment$1,
  tour_step1_title: tour_step1_title$1,
  tour_step1_desc: tour_step1_desc$1,
  tour_step2_title: tour_step2_title$1,
  tour_step2_desc: tour_step2_desc$1,
  tour_step3_title: tour_step3_title$1,
  tour_step3_desc: tour_step3_desc$1,
  tour_step4_title: tour_step4_title$1,
  tour_step4_desc: tour_step4_desc$1,
  tour_step5_title: tour_step5_title$1,
  tour_step5_desc: tour_step5_desc$1,
  tour_step6_title: tour_step6_title$1,
  tour_step6_desc: tour_step6_desc$1,
  tour_step7_title: tour_step7_title$1,
  tour_step7_desc: tour_step7_desc$1,
  tour_step8_title: tour_step8_title$1,
  tour_step8_desc: tour_step8_desc$1,
  tour_step9_title: tour_step9_title$1,
  tour_step9_desc: tour_step9_desc$1,
  tour_step10_title: tour_step10_title$1,
  tour_step10_desc: tour_step10_desc$1,
  footer_made_by: footer_made_by$1,
  footer_reserved: footer_reserved$1,
  footer_note: footer_note$1,
};

const loading_portfolio = "Cargando portafolio...";
const send_button = "Enviar";
const sending_button = "Enviando...";
const request_tab_params = "Parámetros";
const request_tab_headers = "Headers (0)";
const request_tab_body = "Body";
const request_tab_scripts = "Scripts";
const request_tab_settings = "Configuración";
const params_content = "Esta solicitud no tiene parámetros.";
const headers_content = "No hay encabezados configurados para esta solicitud.";
const body_content_get = "El método GET no tiene body de solicitud.";
const scripts_content = "No hay scripts de pre-solicitud o de prueba.";
const settings_content = "Se aplica la configuración predeterminada.";
const response_title = "Respuesta";
const status_ready = "Listo";
const status_sending = "Enviando...";
const status_ok = "Estado: 200 OK";
const status_404 = "Estado: 404 Not Found";
const errorVerb = "Solo el método GET es permitido";
const errorUrl = "Este endpoint no existe";
const response_time_label = "Tiempo";
const response_size_label = "Tamaño";
const fetching_data_comment = "// Obteniendo datos del portafolio...";
const press_send_comment = "// Presiona \"Enviar\" para obtener los datos del portafolio...";
const copy_message_success = "¡Texto Copiado!";
const copy_message_error = "No se pudo copiar el texto. Por favor, inténtalo manualmente.";
const show_more_items_comment = "... y %s elementos más";
const tour_step1_title = "Tour del Portafolio";
const tour_step1_desc = "Esta interfaz simula una solicitud de API para obtener datos del portafolio.";
const tour_step2_title = "Pestañas";
const tour_step2_desc = "Puedes interactuar con las distintas peticiones que existen para cada consulta.";
const tour_step3_title = "Información personal";
const tour_step3_desc = "En esta petición puedes consultar mi información personal como nombre, correo, teléfono, etc.";
const tour_step4_title = "Experiencia";
const tour_step4_desc = "En esta petición puedes consultar la información de mi experiencia profesional como empresa, puesto, descripcion, etc.";
const tour_step5_title = "Proyectos";
const tour_step5_desc = "En esta petición puedes consultar la información de los proyectos que he realizado tanto como personales como en equipo de desarrollo.";
const tour_step6_title = "¡Verbo!";
const tour_step6_desc = "En una petición, revisa siempre el verbo de la petición para saber qué tipo de petición se está realizando. En este caso, siempre será GET.";
const tour_step7_title = "¡URL!";
const tour_step7_desc = "También, revisa la URL de la petición para saber a que a que endpoint se va a consultar.";
const tour_step8_title = "Interactúa";
const tour_step8_desc = "Haz clic en este botón para obtener los datos del portafolio.";
const tour_step9_title = "Respuesta";
const tour_step9_desc = "Después de hacer clic en el botón Enviar, los datos del portafolio se mostrarán en formato JSON.";
const tour_step10_title = "¡Eso es todo!";
const tour_step10_desc = "Algunos datos se pueden copiar haciendo clic. ¡Bienvenid@ a mi portafolio!";
const footer_made_by = "Hecho con ❤️ y código por Oscar Villegas.";
const footer_reserved = "Todos los derechos reservados.";
const footer_note = "Esta es una demostración interactiva. El contenido presentado simula una respuesta de API.";
const esTranslations = {
  loading_portfolio,
  send_button,
  sending_button,
  request_tab_params,
  request_tab_headers,
  request_tab_body,
  request_tab_scripts,
  request_tab_settings,
  params_content,
  headers_content,
  body_content_get,
  scripts_content,
  settings_content,
  response_title,
  status_ready,
  status_sending,
  status_ok,
  status_404,
  errorVerb,
  errorUrl,
  response_time_label,
  response_size_label,
  fetching_data_comment,
  press_send_comment,
  copy_message_success,
  copy_message_error,
  show_more_items_comment,
  tour_step1_title,
  tour_step1_desc,
  tour_step2_title,
  tour_step2_desc,
  tour_step3_title,
  tour_step3_desc,
  tour_step4_title,
  tour_step4_desc,
  tour_step5_title,
  tour_step5_desc,
  tour_step6_title,
  tour_step6_desc,
  tour_step7_title,
  tour_step7_desc,
  tour_step8_title,
  tour_step8_desc,
  tour_step9_title,
  tour_step9_desc,
  tour_step10_title,
  tour_step10_desc,
  footer_made_by,
  footer_reserved,
  footer_note,
};

const LANGUAGES = {
  en: "English",
  es: "Español"
};
const DEFAULT_LANG = "es";
const translations = {
  en: enTranslations,
  es: esTranslations
};
function getLangFromUrl(url) {
  const [, lang] = url.pathname.split("/");
  if (lang in LANGUAGES) return lang;
  return DEFAULT_LANG;
}
function useTranslations(lang) {
  return function t(key) {
    return translations[lang][key] || translations[DEFAULT_LANG][key];
  };
}

var __freeze$1 = Object.freeze;
var __defProp$1 = Object.defineProperty;
var __template$1 = (cooked, raw) => __freeze$1(__defProp$1(cooked, "raw", { value: __freeze$1(cooked.slice()) }));
var _a$1;
const $$Astro$2 = createAstro();
const $$BaseLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$BaseLayout;
  const lang = getLangFromUrl(Astro2.url);
  const t = useTranslations(lang);
  const currentPath = Astro2.url.pathname.substring(3);
  const otherLang = lang === "es" ? "en" : "es";
  const otherLangUrl = `/${otherLang}${currentPath}`;
  return renderTemplate(_a$1 || (_a$1 = __template$1(["<html", '> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>PortfolioAPI - OEVM</title><link href="https://fonts.googleapis.com/css2?family=Fira+Code:wght@400;700&display=swap" rel="stylesheet"><link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"><script src="https://cdn.jsdelivr.net/npm/driver.js@latest/dist/driver.js.iife.js" defer><\/script><link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/driver.js@latest/dist/driver.css"><link as="style" rel="stylesheet preload prefetch" href="/assets/bobGif.gif" crossorigin="anonymous">', '</head> <body> <header class="top-bar"> <div class="top-bar-content"> <div class="language-switcher"> <a', "", '>EN</a> <span class="lang-separator">/</span> <a', "", '>ES</a> </div> <button id="theme-toggle" class="theme-toggle-button" aria-label="Toggle dark/light theme"> <i class="fas fa-sun"></i> <i class="fas fa-moon"></i> </button> </div> </header> <div class="page-wrapper"> ', ' </div> <footer class="main-footer"> <div class="footer-content"> <div class="footer-links"></div> <p class="footer-text"> ', " <br> <span>&copy; ", " ", '</span> </p> <p class="footer-note">', "</p> <span>v2.1.0</span> </div> </footer> <script>\n        // Funci\xF3n para aplicar el tema y guardarlo en localStorage\n        const applyTheme = (theme) => {\n            document.documentElement.classList.toggle('light-mode', theme === 'light');\n            localStorage.setItem('portfolioTheme', theme);\n        };\n\n        // Obtener el tema guardado o usar 'dark' por defecto\n        let currentTheme = localStorage.getItem('portfolioTheme') || 'dark';\n        \n        // Aplicar el tema tan pronto como se cargue la p\xE1gina\n        applyTheme(currentTheme);\n\n        // A\xF1adir el listener al bot\xF3n\n        document.addEventListener('DOMContentLoaded', () => {\n            const themeToggleButton = document.getElementById('theme-toggle');\n            if (themeToggleButton) {\n                themeToggleButton.addEventListener('click', () => {\n                    currentTheme = currentTheme === 'dark' ? 'light' : 'dark';\n                    applyTheme(currentTheme);\n                });\n            }\n        });\n    <\/script> </body> </html>"])), addAttribute(lang, "lang"), renderHead(), addAttribute(lang === "en" ? Astro2.url.pathname : otherLangUrl, "href"), addAttribute(["lang-button", { active: lang === "en" }], "class:list"), addAttribute(lang === "es" ? Astro2.url.pathname : otherLangUrl, "href"), addAttribute(["lang-button", { active: lang === "es" }], "class:list"), renderSlot($$result, $$slots["default"]), t("footer_made_by"), (/* @__PURE__ */ new Date()).getFullYear(), t("footer_reserved"), t("footer_note"));
}, "C:/Users/PC PRIDE RACCOON/Desktop/portfolio-web/src/layouts/BaseLayout.astro", void 0);

const $$Astro$1 = createAstro();
const $$TabsNav = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$TabsNav;
  const lang = getLangFromUrl(Astro2.url);
  return renderTemplate`${maybeRenderHead()}<nav class="endpoint-tabs" data-astro-cid-4xcvulfc> <a${addAttribute(`/${lang}/`, "href")} id="personal-data-tab"${addAttribute(["endpoint-tab", { "is-active": Astro2.url.pathname === `/${lang}` || Astro2.url.pathname === `/${lang}/` }], "class:list")} data-astro-cid-4xcvulfc>
GET /personal-data
</a> <a${addAttribute(`/${lang}/experiences`, "href")} id="experience-tab"${addAttribute(["endpoint-tab", { "is-active": Astro2.url.pathname === `/${lang}/experiences` }], "class:list")} data-astro-cid-4xcvulfc>
GET /experiences
</a> <a${addAttribute(`/${lang}/projects`, "href")} id="project-tab"${addAttribute(["endpoint-tab", { "is-active": Astro2.url.pathname === `/${lang}/projects` }], "class:list")} data-astro-cid-4xcvulfc>
GET /projects
</a> </nav> `;
}, "C:/Users/PC PRIDE RACCOON/Desktop/portfolio-web/src/components/TabsNav.astro", void 0);

/**
 * @constant {Object} DATA_404 - Contains 404 error
 * Exported to be imported and used in main.js.
 */
const DATA_404 = {
    "code": 404,
    "message": "Not Found",
    "details": []
};

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$Astro = createAstro();
const $$EndpointView = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$EndpointView;
  const {
    endpointTitle,
    dataToShow,
    isHomePage = false,
    copyableFields = [],
    showMoreConfig = {}
  } = Astro2.props;
  const lang = getLangFromUrl(Astro2.url);
  const t = useTranslations(lang);
  const clientStrings = {
    sending: t("sending_button"),
    send: t("send_button"),
    statusReady: t("status_ready"),
    statusSending: t("status_sending"),
    statusOk: t("status_ok"),
    status404: t("status_404"),
    errorVerb: t("errorVerb"),
    errorUrl: t("errorUrl"),
    responseTime: t("response_time_label"),
    responseSize: t("response_size_label"),
    pressSend: t("press_send_comment"),
    copySuccess: t("copy_message_success"),
    moreItems: t("show_more_items_comment"),
    // Traducciones para el tour
    tourStep1Title: t("tour_step1_title"),
    tourStep1Desc: t("tour_step1_desc"),
    tourStep2Title: t("tour_step2_title"),
    tourStep2Desc: t("tour_step2_desc"),
    tourStep3Title: t("tour_step3_title"),
    tourStep3Desc: t("tour_step3_desc"),
    tourStep4Title: t("tour_step4_title"),
    tourStep4Desc: t("tour_step4_desc"),
    tourStep5Title: t("tour_step5_title"),
    tourStep5Desc: t("tour_step5_desc"),
    tourStep6Title: t("tour_step6_title"),
    tourStep6Desc: t("tour_step6_desc"),
    tourStep7Title: t("tour_step7_title"),
    tourStep7Desc: t("tour_step7_desc"),
    tourStep8Title: t("tour_step8_title"),
    tourStep8Desc: t("tour_step8_desc"),
    tourStep9Title: t("tour_step9_title"),
    tourStep9Desc: t("tour_step9_desc"),
    tourStep10Title: t("tour_step10_title"),
    tourStep10Desc: t("tour_step10_desc")
  };
  return renderTemplate(_a || (_a = __template(["", '<div class="postman-container"> ', ' <div class="request-bar"> <select id="method-select" class="method-select" aria-label="HTTP Method"><option>GET</option><option disabled>POST</option> <option disabled>PUT</option> <option disabled>DELETE</option></select> <input id="url-input" type="text" class="url-input"', ' readonly> <button id="send-button" class="send-button">', '</button> </div> <div class="tabs" role="tablist"> <div class="tab active" data-tab="params" role="tab" aria-selected="true" aria-controls="params-content"> ', ' </div> <div class="tab" data-tab="headers" role="tab" aria-selected="false" aria-controls="headers-content">\nHeaders (0)\n</div> <div class="tab" data-tab="body" role="tab" aria-selected="false" aria-controls="body-content">\nBody\n</div> <div class="tab" data-tab="scripts" role="tab" aria-selected="false" aria-controls="scripts-content">\nScripts\n</div> <div class="tab" data-tab="settings" role="tab" aria-selected="false" aria-controls="settings-content"> ', ' </div> </div> <div class="tab-content-container"> <div class="tab-content active" id="params-content" role="tabpanel" aria-labelledby="params"> <p class="no-body-message">', '</p> </div> <div class="tab-content" id="headers-content" role="tabpanel" aria-labelledby="headers" style="display: none;"> <p class="no-body-message">', '</p> </div> <div class="tab-content" id="body-content" role="tabpanel" aria-labelledby="body" style="display: none;"> <p class="no-body-message">', '</p> </div> <div class="tab-content" id="scripts-content" role="tabpanel" aria-labelledby="scripts" style="display: none;"> <p class="no-body-message">', '</p> </div> <div class="tab-content" id="settings-content" role="tabpanel" aria-labelledby="settings" style="display: none;"> <p class="no-body-message">', '</p> </div> </div> <div class="response-section"> <div class="response-header"> <span class="response-title">', '</span> <div class="response-details"> <span id="status-code" class="status-code">', '</span> <span id="response-time" class="response-time"></span> <span id="response-size" class="response-size"></span> </div> </div> <div class="response-body"> <pre id="json-display" class="json-comment-line">', '</pre> </div> </div> </div> <div id="copy-message" class="copy-message"></div> <script>(function(){', '\n    class EndpointViewer {\n        constructor(\n            data,\n            strings,\n            isHomePage,\n            copyableFields,\n            showMoreConfig,\n            endpointTitle,\n        ) {\n            this.data = data;\n            this.strings = strings;\n            this.isHomePage = isHomePage;\n            this.endpointTitle = endpointTitle;\n\n            this.FIELDS_TO_COPY_AND_STYLE = copyableFields;\n            this.RESUME_PDF_PATH = "details.personalInfo.cvPdf";\n            this.SHOW_MORE_CONFIG = showMoreConfig;\n            this.expandedSections = {};\n\n            this.sendButton = document.getElementById("send-button");\n            this.jsonDisplay = document.getElementById("json-display");\n            this.copyMessageDiv = document.getElementById("copy-message");\n            this.statusCodeSpan = document.getElementById("status-code");\n            this.responseTimeSpan = document.getElementById("response-time");\n            this.responseSizeSpan = document.getElementById("response-size");\n            this.tabButtons = document.querySelectorAll(".tab");\n            this.tabContents = document.querySelectorAll(".tab-content");\n            this.selectVerb = document.getElementById("method-select");\n\n            this.DATA_404 = DATA_404;\n            this.driverObj = null;\n\n            this.init();\n        }\n\n        init() {\n            this.sendButton.addEventListener("click", () =>\n                this.sendApiRequest(),\n            );\n            this.startTour();\n            \n            this.tabButtons.forEach((tab) => {\n                tab.addEventListener("click", this.handleTabClick.bind(this));\n            });\n\n            this.tourTabLinks = document.querySelectorAll(".endpoint-tab");\n            this.tourTabLinks.forEach((link) => {\n                link.addEventListener("click", (e) =>\n                    this.handleTourLinkClick(e),\n                );\n            });\n        }\n\n        sendApiRequest() {\n            this.sendButton.disabled = true;\n            this.sendButton.innerHTML = `<i class="fas fa-spinner fa-spin"></i> ${this.strings.sending}`;\n            this.statusCodeSpan.textContent = this.strings.statusSending;\n            this.responseTimeSpan.textContent = "";\n            this.responseSizeSpan.textContent = "";\n            this.jsonDisplay.textContent = "";\n\n            setTimeout(() => {\n                this.updateResponseDetails(this.selectVerb.value);\n                this.sendButton.disabled = false;\n                this.sendButton.textContent = this.strings.send;\n            }, 800);\n        }\n\n        updateResponseDetails(verb) {\n            const time = Math.floor(Math.random() * (250 - 50 + 1)) + 50;\n            const size = (\n                new TextEncoder().encode(JSON.stringify(this.data)).length /\n                1024\n            ).toFixed(2);\n            this.responseTimeSpan.textContent = `${this.strings.responseTime}: ${time} ms`;\n            this.responseSizeSpan.textContent = `${this.strings.responseSize}: ${size} KB`;\n            const urlInput = document.querySelector(".url-input");\n            const currentUrl = urlInput ? urlInput.value : "";\n            if (\n                verb === "GET" &&\n                currentUrl ===\n                    `https://airashistudio.dev/api/oscar-villegas/v1/${endpointTitle.toLowerCase()}`\n            ) {\n                this.statusCodeSpan.textContent = this.strings.statusOk;\n                this.statusCodeSpan.style.color = "#B5CEA8";\n                this.renderPortfolioJson();\n            } else {\n                let errorMessage = [];\n\n                if (\n                    currentUrl !=\n                    `https://airashistudio.dev/api/oscar-villegas/v1/${endpointTitle.toLowerCase()}`\n                ) {\n                    errorMessage.push(`${this.strings.errorUrl}`);\n                }\n                if (verb != "GET") {\n                    errorMessage.push(`${this.strings.errorVerb}`);\n                }\n                this.statusCodeSpan.textContent = this.strings.status404;\n                this.statusCodeSpan.style.color = "#F04747";\n                this.renderPortfolioJson404(errorMessage);\n            }\n        }\n\n        renderPortfolioJson404(errorMessage) {\n            if (!this.DATA_404) return;\n            this.DATA_404.details = [];\n            this.DATA_404.details.push(errorMessage);\n\n            this.jsonDisplay.innerHTML = this.highlightAndFoldJson(\n                this.DATA_404,\n                this.FIELDS_TO_COPY_AND_STYLE, // Mant\xE9n esto si quieres que los campos del 404 sean copiables\n            );\n            // Si el JSON 404 tiene elementos plegables o copiables, aseg\xFArate de que sus event listeners se adjunten\n            this.jsonDisplay\n                .querySelectorAll(".json-foldable-toggle")\n                .forEach((t) =>\n                    t.addEventListener("click", (e) =>\n                        this.handleFoldToggle(e),\n                    ),\n                );\n            this.jsonDisplay\n                .querySelectorAll(".json-copyable-field")\n                .forEach((e) =>\n                    e.addEventListener("click", (ev) =>\n                        this.handleJsonContentClick(ev),\n                    ),\n                );\n            this.jsonDisplay\n                .querySelectorAll(".show-more-button")\n                .forEach((b) =>\n                    b.addEventListener("click", (e) =>\n                        this.handleShowMoreClick(e),\n                    ),\n                );\n        }\n\n        renderPortfolioJson() {\n            if (!this.data) return;\n            this.jsonDisplay.innerHTML = this.highlightAndFoldJson(\n                this.data,\n                this.FIELDS_TO_COPY_AND_STYLE,\n            );\n            this.jsonDisplay\n                .querySelectorAll(".json-foldable-toggle")\n                .forEach((t) =>\n                    t.addEventListener("click", (e) =>\n                        this.handleFoldToggle(e),\n                    ),\n                );\n            this.jsonDisplay\n                .querySelectorAll(".json-copyable-field")\n                .forEach((e) =>\n                    e.addEventListener("click", (ev) =>\n                        this.handleJsonContentClick(ev),\n                    ),\n                );\n            this.jsonDisplay\n                .querySelectorAll(".show-more-button")\n                .forEach((b) =>\n                    b.addEventListener("click", (e) =>\n                        this.handleShowMoreClick(e),\n                    ),\n                );\n        }\n\n        highlightAndFoldJson(\n            data,\n            fieldsToStyle,\n            currentPath = "",\n            indentLevel = 0,\n        ) {\n            const indent = " ".repeat(indentLevel * 4);\n\n            if (data === null) {\n                return `<span class="null">null</span>`;\n            }\n\n            if (Array.isArray(data)) {\n                // Filtra los elementos undefined/null al principio para asegurar que solo procesas elementos v\xE1lidos\n                const filteredData = data.filter(\n                    (item) => item !== undefined && item !== null,\n                );\n\n                const config = this.SHOW_MORE_CONFIG[currentPath];\n                const isExpanded = this.expandedSections[currentPath] || false;\n\n                // Usa la longitud de los datos filtrados para displayLimit\n                const actualDisplayLimit =\n                    config && !isExpanded && config.limit < filteredData.length\n                        ? config.limit\n                        : filteredData.length;\n\n                const remainingItems = filteredData.length - actualDisplayLimit;\n\n                let html = "";\n                if (currentPath && filteredData.length > 0) {\n                    html += `<span class="json-foldable-toggle">\u25BE</span>`;\n                }\n                html += `<span class="json-bracket">[</span>\\n<span class="json-folded-content">`;\n\n                for (let i = 0; i < actualDisplayLimit; i++) {\n                    const item = filteredData[i]; // Itera sobre los datos filtrados\n                    const itemPath = `${currentPath}[${i}]`; // La ruta del path a\xFAn puede basarse en el \xEDndice original si es relevante\n\n                    html += `${" ".repeat((indentLevel + 1) * 4)}${this.highlightAndFoldJson(item, fieldsToStyle, itemPath, indentLevel + 1)}`;\n\n                    // A\xF1adir coma solo si NO es el \xFAltimo elemento visible y real\n                    if (i < actualDisplayLimit - 1) {\n                        html += ",\\n";\n                    } else if (config && remainingItems > 0 && !isExpanded) {\n                        // Caso especial: si es el \xFAltimo elemento visible y habr\xE1 un bot\xF3n "show more"\n                        html += ",\\n";\n                    } else {\n                        html += "\\n";\n                    }\n                }\n                html += `</span>`;\n\n                if (config && filteredData.length > config.limit) {\n                    // Usa filteredData.length aqu\xED tambi\xE9n\n                    const buttonText = isExpanded ? "[-]" : "[+]";\n                    const buttonLineIndent = " ".repeat((indentLevel + 1) * 4);\n                    if (!isExpanded) {\n                        html += `${buttonLineIndent}<span class="json-comment-line">${this.strings.moreItems.replace("%s", remainingItems)}</span>\\n`;\n                    }\n                    html += `${buttonLineIndent}<button class="show-more-button" data-path="${currentPath}">${buttonText}</button>\\n`;\n                }\n\n                html += `${indent}<span class="json-bracket">]</span>`;\n                return html;\n            }\n\n            if (typeof data === "object") {\n                const keys = Object.keys(data);\n                let html = "";\n                if (keys.length > 0) {\n                    html += `<span class="json-foldable-toggle">\u25BE</span>`;\n                }\n                html += `<span class="json-bracket">{</span>\\n<span class="json-folded-content">`;\n\n                keys.forEach((key, index) => {\n                    const value = data[key];\n                    const keyPath = currentPath ? `${currentPath}.${key}` : key;\n                    html += `${" ".repeat((indentLevel + 1) * 4)}<span class="key">"${key}"</span>: ${this.highlightAndFoldJson(value, fieldsToStyle, keyPath, indentLevel + 1)}`;\n                    if (index < keys.length - 1) {\n                        html += ",\\n";\n                    }\n                });\n\n                html += `\\n</span>${indent}<span class="json-bracket">}</span>`;\n                return html;\n            }\n\n            // Para tipos primitivos\n            if (typeof data === "string") {\n                const isCopiable = fieldsToStyle.includes(currentPath);\n                const isPdfLink = currentPath === this.RESUME_PDF_PATH;\n                if (isPdfLink) {\n                    return `<span class="string"><a href="${data}" target="_blank" rel="noopener noreferrer" class="json-pdf-link">${JSON.stringify(data)}</a></span>`;\n                }\n                if (isCopiable) {\n                    return `<span class="string"><span class="json-copyable-field" data-copy-text="${data}">${JSON.stringify(data)}</span></span>`;\n                }\n                return `<span class="string">${JSON.stringify(data)}</span>`;\n            }\n            if (typeof data === "number")\n                return `<span class="number">${data}</span>`;\n            if (typeof data === "boolean")\n                return `<span class="boolean">${data}</span>`;\n\n            return "";\n        }\n\n        handleTabClick(event) {\n            // Get the clicked tab button from the event\n            const clickedTab = event.currentTarget;\n            const targetTabId = clickedTab.dataset.tab + "-content";\n\n            // Deactivate all tabs\n            this.tabButtons.forEach((tab) => {\n                tab.classList.remove("active");\n                tab.setAttribute("aria-selected", "false");\n            });\n\n            // Activate the clicked tab\n            clickedTab.classList.add("active");\n            clickedTab.setAttribute("aria-selected", "true");\n\n            // Hide all tab contents\n            this.tabContents.forEach((content) => {\n                content.style.display = "none";\n                content.setAttribute("aria-hidden", "true"); // Add for accessibility\n            });\n\n            // Show the target tab content\n            const activeContent = document.getElementById(targetTabId);\n            if (activeContent) {\n                activeContent.style.display = "block";\n                activeContent.setAttribute("aria-hidden", "false"); // Add for accessibility\n            }\n        }\n\n        handleFoldToggle(event) {\n            const target = event.currentTarget;\n            const content = target.nextElementSibling.nextElementSibling;\n            if (content?.classList.contains("json-folded-content")) {\n                content.classList.toggle("hidden");\n                target.textContent = content.classList.contains("hidden")\n                    ? "\u25B8"\n                    : "\u25BE";\n            }\n        }\n\n        handleJsonContentClick(event) {\n            const target = event.currentTarget;\n            this.handleCopyToClipboard(\n                target.dataset.copyText || target.textContent,\n                target,\n            );\n        }\n\n        handleShowMoreClick(event) {\n            const button = event.currentTarget;\n            this.expandedSections[button.dataset.path] =\n                !this.expandedSections[button.dataset.path];\n            this.renderPortfolioJson();\n        }\n\n        handleCopyToClipboard(text, element) {\n            navigator.clipboard.writeText(text).then(() => {\n                this.copyMessageDiv.textContent = this.strings.copySuccess;\n                const rect = element.getBoundingClientRect();\n                this.copyMessageDiv.style.top = `${rect.top - 30}px`;\n                this.copyMessageDiv.style.left = `${rect.left + rect.width / 2}px`;\n                this.copyMessageDiv.classList.add("show");\n                setTimeout(\n                    () => this.copyMessageDiv.classList.remove("show"),\n                    1500,\n                );\n            });\n        }\n\n        handleTourLinkClick(event) {\n            // Guarda el paso actual del tour antes de que el navegador navegue a la nueva p\xE1gina\n            if (this.driverObj && this.driverObj.isActivated()) {\n                const currentStepIndex = this.driverObj.state.activeIndex;\n                localStorage.setItem("currentTourStep", currentStepIndex);\n            }\n        }\n\n        startTour(retries = 15) {\n            if (localStorage.getItem("portfolioTourSeen") === "true") {\n                return;\n            }\n            if (retries <= 0) {\n                console.error(\n                    "Driver.js no se pudo cargar a tiempo. El tour no se iniciar\xE1.",\n                );\n                return;\n            }\n\n            if (window.driver) {\n                const driver = window.driver.js.driver;\n                this.driverObj = driver({\n                    nextBtnText: ">",\n                    prevBtnText: "<",\n                    doneBtnText: "\u2715",\n                    showProgress: true,\n                    allowClose: false,\n                    onNextClick: (element, step, { config, state, driver }) => {\n                        driver.moveNext();\n                        localStorage.setItem(\n                            "currentTourStep",\n                            state.activeIndex,\n                        );\n                    },\n                    onPrevClick: (element, step, { config, state, driver }) => {\n                        \n                        driver.movePrevious();\n                        localStorage.setItem(\n                            "currentTourStep",\n                            state.activeIndex,\n                        );\n                    },\n                    steps: [\n                        {\n                            //intro\n                            popover: {\n                                title: this.strings.tourStep1Title,\n                                description: this.strings.tourStep1Desc,\n                            },\n                        },\n                        {\n                            element: ".endpoint-tabs",\n                            popover: {\n                                title: this.strings.tourStep2Title,\n                                description: this.strings.tourStep2Desc,\n                                side: "bottom",\n                                align: "start",\n                            },\n                        },\n                        {\n                            element: "#personal-data-tab",\n                            popover: {\n                                title: this.strings.tourStep3Title,\n                                description: this.strings.tourStep3Desc,\n                                side: "bottom",\n                                align: "start",\n                            },\n                        },\n                        {\n                            element: "#experience-tab",\n                            popover: {\n                                title: this.strings.tourStep4Title,\n                                description: this.strings.tourStep4Desc,\n                                side: "bottom",\n                                align: "start",\n                            },\n                        },\n                        {\n                            element: "#project-tab",\n                            popover: {\n                                title: this.strings.tourStep5Title,\n                                description: this.strings.tourStep5Desc,\n                                side: "bottom",\n                                align: "start",\n                            },\n                        },\n                        {\n                            element: "#method-select",\n                            popover: {\n                                title: this.strings.tourStep6Title,\n                                description: this.strings.tourStep6Desc,\n                                side: "bottom",\n                                align: "start",\n                            },\n                        },\n                        {\n                            element: "#url-input",\n                            popover: {\n                                title: this.strings.tourStep7Title,\n                                description: this.strings.tourStep7Desc,\n                                side: "bottom",\n                                align: "start",\n                            },\n                        },\n                        {\n                            element: "#send-button",\n                            popover: {\n                                title: this.strings.tourStep8Title,\n                                description: this.strings.tourStep8Desc,\n                                side: "bottom",\n                                align: "start",\n                            },\n                        },\n                        {\n                            element: ".response-section",\n                            popover: {\n                                title: this.strings.tourStep9Title,\n                                description: this.strings.tourStep9Desc,\n                                side: "top",\n                                align: "start",\n                            },\n                        },\n                        {\n                            popover: {\n                                title: this.strings.tourStep10Title,\n                                description: `<img src=\'/assets/bobGif.gif\' style=\'height: 202.5px; width: 270px;\' /><span style=\'font-size: 15px; display: block; margin-top: 10px; text-align: center;\'>${this.strings.tourStep10Desc}</span>`,\n                            },\n                        },\n                    ],\n\n                    onDestroyed: () => {\n                        localStorage.setItem("portfolioTourSeen", "true");\n                        localStorage.removeItem("currentTourStep");\n                    },\n                });\n\n                const savedTourStep = localStorage.getItem("currentTourStep");\n                this.driverObj.drive(\n                    savedTourStep ? parseInt(savedTourStep) : 0,\n                );\n            } else {\n                setTimeout(() => this.startTour(retries - 1), 200);\n            }\n        }\n    }\n\n    new EndpointViewer(\n        dataToShow,\n        clientStrings,\n        isHomePage,\n        copyableFields,\n        showMoreConfig,\n    );\n})();<\/script>'], ["", '<div class="postman-container"> ', ' <div class="request-bar"> <select id="method-select" class="method-select" aria-label="HTTP Method"><option>GET</option><option disabled>POST</option> <option disabled>PUT</option> <option disabled>DELETE</option></select> <input id="url-input" type="text" class="url-input"', ' readonly> <button id="send-button" class="send-button">', '</button> </div> <div class="tabs" role="tablist"> <div class="tab active" data-tab="params" role="tab" aria-selected="true" aria-controls="params-content"> ', ' </div> <div class="tab" data-tab="headers" role="tab" aria-selected="false" aria-controls="headers-content">\nHeaders (0)\n</div> <div class="tab" data-tab="body" role="tab" aria-selected="false" aria-controls="body-content">\nBody\n</div> <div class="tab" data-tab="scripts" role="tab" aria-selected="false" aria-controls="scripts-content">\nScripts\n</div> <div class="tab" data-tab="settings" role="tab" aria-selected="false" aria-controls="settings-content"> ', ' </div> </div> <div class="tab-content-container"> <div class="tab-content active" id="params-content" role="tabpanel" aria-labelledby="params"> <p class="no-body-message">', '</p> </div> <div class="tab-content" id="headers-content" role="tabpanel" aria-labelledby="headers" style="display: none;"> <p class="no-body-message">', '</p> </div> <div class="tab-content" id="body-content" role="tabpanel" aria-labelledby="body" style="display: none;"> <p class="no-body-message">', '</p> </div> <div class="tab-content" id="scripts-content" role="tabpanel" aria-labelledby="scripts" style="display: none;"> <p class="no-body-message">', '</p> </div> <div class="tab-content" id="settings-content" role="tabpanel" aria-labelledby="settings" style="display: none;"> <p class="no-body-message">', '</p> </div> </div> <div class="response-section"> <div class="response-header"> <span class="response-title">', '</span> <div class="response-details"> <span id="status-code" class="status-code">', '</span> <span id="response-time" class="response-time"></span> <span id="response-size" class="response-size"></span> </div> </div> <div class="response-body"> <pre id="json-display" class="json-comment-line">', '</pre> </div> </div> </div> <div id="copy-message" class="copy-message"></div> <script>(function(){', '\n    class EndpointViewer {\n        constructor(\n            data,\n            strings,\n            isHomePage,\n            copyableFields,\n            showMoreConfig,\n            endpointTitle,\n        ) {\n            this.data = data;\n            this.strings = strings;\n            this.isHomePage = isHomePage;\n            this.endpointTitle = endpointTitle;\n\n            this.FIELDS_TO_COPY_AND_STYLE = copyableFields;\n            this.RESUME_PDF_PATH = "details.personalInfo.cvPdf";\n            this.SHOW_MORE_CONFIG = showMoreConfig;\n            this.expandedSections = {};\n\n            this.sendButton = document.getElementById("send-button");\n            this.jsonDisplay = document.getElementById("json-display");\n            this.copyMessageDiv = document.getElementById("copy-message");\n            this.statusCodeSpan = document.getElementById("status-code");\n            this.responseTimeSpan = document.getElementById("response-time");\n            this.responseSizeSpan = document.getElementById("response-size");\n            this.tabButtons = document.querySelectorAll(".tab");\n            this.tabContents = document.querySelectorAll(".tab-content");\n            this.selectVerb = document.getElementById("method-select");\n\n            this.DATA_404 = DATA_404;\n            this.driverObj = null;\n\n            this.init();\n        }\n\n        init() {\n            this.sendButton.addEventListener("click", () =>\n                this.sendApiRequest(),\n            );\n            this.startTour();\n            \n            this.tabButtons.forEach((tab) => {\n                tab.addEventListener("click", this.handleTabClick.bind(this));\n            });\n\n            this.tourTabLinks = document.querySelectorAll(".endpoint-tab");\n            this.tourTabLinks.forEach((link) => {\n                link.addEventListener("click", (e) =>\n                    this.handleTourLinkClick(e),\n                );\n            });\n        }\n\n        sendApiRequest() {\n            this.sendButton.disabled = true;\n            this.sendButton.innerHTML = \\`<i class="fas fa-spinner fa-spin"></i> \\${this.strings.sending}\\`;\n            this.statusCodeSpan.textContent = this.strings.statusSending;\n            this.responseTimeSpan.textContent = "";\n            this.responseSizeSpan.textContent = "";\n            this.jsonDisplay.textContent = "";\n\n            setTimeout(() => {\n                this.updateResponseDetails(this.selectVerb.value);\n                this.sendButton.disabled = false;\n                this.sendButton.textContent = this.strings.send;\n            }, 800);\n        }\n\n        updateResponseDetails(verb) {\n            const time = Math.floor(Math.random() * (250 - 50 + 1)) + 50;\n            const size = (\n                new TextEncoder().encode(JSON.stringify(this.data)).length /\n                1024\n            ).toFixed(2);\n            this.responseTimeSpan.textContent = \\`\\${this.strings.responseTime}: \\${time} ms\\`;\n            this.responseSizeSpan.textContent = \\`\\${this.strings.responseSize}: \\${size} KB\\`;\n            const urlInput = document.querySelector(".url-input");\n            const currentUrl = urlInput ? urlInput.value : "";\n            if (\n                verb === "GET" &&\n                currentUrl ===\n                    \\`https://airashistudio.dev/api/oscar-villegas/v1/\\${endpointTitle.toLowerCase()}\\`\n            ) {\n                this.statusCodeSpan.textContent = this.strings.statusOk;\n                this.statusCodeSpan.style.color = "#B5CEA8";\n                this.renderPortfolioJson();\n            } else {\n                let errorMessage = [];\n\n                if (\n                    currentUrl !=\n                    \\`https://airashistudio.dev/api/oscar-villegas/v1/\\${endpointTitle.toLowerCase()}\\`\n                ) {\n                    errorMessage.push(\\`\\${this.strings.errorUrl}\\`);\n                }\n                if (verb != "GET") {\n                    errorMessage.push(\\`\\${this.strings.errorVerb}\\`);\n                }\n                this.statusCodeSpan.textContent = this.strings.status404;\n                this.statusCodeSpan.style.color = "#F04747";\n                this.renderPortfolioJson404(errorMessage);\n            }\n        }\n\n        renderPortfolioJson404(errorMessage) {\n            if (!this.DATA_404) return;\n            this.DATA_404.details = [];\n            this.DATA_404.details.push(errorMessage);\n\n            this.jsonDisplay.innerHTML = this.highlightAndFoldJson(\n                this.DATA_404,\n                this.FIELDS_TO_COPY_AND_STYLE, // Mant\xE9n esto si quieres que los campos del 404 sean copiables\n            );\n            // Si el JSON 404 tiene elementos plegables o copiables, aseg\xFArate de que sus event listeners se adjunten\n            this.jsonDisplay\n                .querySelectorAll(".json-foldable-toggle")\n                .forEach((t) =>\n                    t.addEventListener("click", (e) =>\n                        this.handleFoldToggle(e),\n                    ),\n                );\n            this.jsonDisplay\n                .querySelectorAll(".json-copyable-field")\n                .forEach((e) =>\n                    e.addEventListener("click", (ev) =>\n                        this.handleJsonContentClick(ev),\n                    ),\n                );\n            this.jsonDisplay\n                .querySelectorAll(".show-more-button")\n                .forEach((b) =>\n                    b.addEventListener("click", (e) =>\n                        this.handleShowMoreClick(e),\n                    ),\n                );\n        }\n\n        renderPortfolioJson() {\n            if (!this.data) return;\n            this.jsonDisplay.innerHTML = this.highlightAndFoldJson(\n                this.data,\n                this.FIELDS_TO_COPY_AND_STYLE,\n            );\n            this.jsonDisplay\n                .querySelectorAll(".json-foldable-toggle")\n                .forEach((t) =>\n                    t.addEventListener("click", (e) =>\n                        this.handleFoldToggle(e),\n                    ),\n                );\n            this.jsonDisplay\n                .querySelectorAll(".json-copyable-field")\n                .forEach((e) =>\n                    e.addEventListener("click", (ev) =>\n                        this.handleJsonContentClick(ev),\n                    ),\n                );\n            this.jsonDisplay\n                .querySelectorAll(".show-more-button")\n                .forEach((b) =>\n                    b.addEventListener("click", (e) =>\n                        this.handleShowMoreClick(e),\n                    ),\n                );\n        }\n\n        highlightAndFoldJson(\n            data,\n            fieldsToStyle,\n            currentPath = "",\n            indentLevel = 0,\n        ) {\n            const indent = " ".repeat(indentLevel * 4);\n\n            if (data === null) {\n                return \\`<span class="null">null</span>\\`;\n            }\n\n            if (Array.isArray(data)) {\n                // Filtra los elementos undefined/null al principio para asegurar que solo procesas elementos v\xE1lidos\n                const filteredData = data.filter(\n                    (item) => item !== undefined && item !== null,\n                );\n\n                const config = this.SHOW_MORE_CONFIG[currentPath];\n                const isExpanded = this.expandedSections[currentPath] || false;\n\n                // Usa la longitud de los datos filtrados para displayLimit\n                const actualDisplayLimit =\n                    config && !isExpanded && config.limit < filteredData.length\n                        ? config.limit\n                        : filteredData.length;\n\n                const remainingItems = filteredData.length - actualDisplayLimit;\n\n                let html = "";\n                if (currentPath && filteredData.length > 0) {\n                    html += \\`<span class="json-foldable-toggle">\u25BE</span>\\`;\n                }\n                html += \\`<span class="json-bracket">[</span>\\\\n<span class="json-folded-content">\\`;\n\n                for (let i = 0; i < actualDisplayLimit; i++) {\n                    const item = filteredData[i]; // Itera sobre los datos filtrados\n                    const itemPath = \\`\\${currentPath}[\\${i}]\\`; // La ruta del path a\xFAn puede basarse en el \xEDndice original si es relevante\n\n                    html += \\`\\${" ".repeat((indentLevel + 1) * 4)}\\${this.highlightAndFoldJson(item, fieldsToStyle, itemPath, indentLevel + 1)}\\`;\n\n                    // A\xF1adir coma solo si NO es el \xFAltimo elemento visible y real\n                    if (i < actualDisplayLimit - 1) {\n                        html += ",\\\\n";\n                    } else if (config && remainingItems > 0 && !isExpanded) {\n                        // Caso especial: si es el \xFAltimo elemento visible y habr\xE1 un bot\xF3n "show more"\n                        html += ",\\\\n";\n                    } else {\n                        html += "\\\\n";\n                    }\n                }\n                html += \\`</span>\\`;\n\n                if (config && filteredData.length > config.limit) {\n                    // Usa filteredData.length aqu\xED tambi\xE9n\n                    const buttonText = isExpanded ? "[-]" : "[+]";\n                    const buttonLineIndent = " ".repeat((indentLevel + 1) * 4);\n                    if (!isExpanded) {\n                        html += \\`\\${buttonLineIndent}<span class="json-comment-line">\\${this.strings.moreItems.replace("%s", remainingItems)}</span>\\\\n\\`;\n                    }\n                    html += \\`\\${buttonLineIndent}<button class="show-more-button" data-path="\\${currentPath}">\\${buttonText}</button>\\\\n\\`;\n                }\n\n                html += \\`\\${indent}<span class="json-bracket">]</span>\\`;\n                return html;\n            }\n\n            if (typeof data === "object") {\n                const keys = Object.keys(data);\n                let html = "";\n                if (keys.length > 0) {\n                    html += \\`<span class="json-foldable-toggle">\u25BE</span>\\`;\n                }\n                html += \\`<span class="json-bracket">{</span>\\\\n<span class="json-folded-content">\\`;\n\n                keys.forEach((key, index) => {\n                    const value = data[key];\n                    const keyPath = currentPath ? \\`\\${currentPath}.\\${key}\\` : key;\n                    html += \\`\\${" ".repeat((indentLevel + 1) * 4)}<span class="key">"\\${key}"</span>: \\${this.highlightAndFoldJson(value, fieldsToStyle, keyPath, indentLevel + 1)}\\`;\n                    if (index < keys.length - 1) {\n                        html += ",\\\\n";\n                    }\n                });\n\n                html += \\`\\\\n</span>\\${indent}<span class="json-bracket">}</span>\\`;\n                return html;\n            }\n\n            // Para tipos primitivos\n            if (typeof data === "string") {\n                const isCopiable = fieldsToStyle.includes(currentPath);\n                const isPdfLink = currentPath === this.RESUME_PDF_PATH;\n                if (isPdfLink) {\n                    return \\`<span class="string"><a href="\\${data}" target="_blank" rel="noopener noreferrer" class="json-pdf-link">\\${JSON.stringify(data)}</a></span>\\`;\n                }\n                if (isCopiable) {\n                    return \\`<span class="string"><span class="json-copyable-field" data-copy-text="\\${data}">\\${JSON.stringify(data)}</span></span>\\`;\n                }\n                return \\`<span class="string">\\${JSON.stringify(data)}</span>\\`;\n            }\n            if (typeof data === "number")\n                return \\`<span class="number">\\${data}</span>\\`;\n            if (typeof data === "boolean")\n                return \\`<span class="boolean">\\${data}</span>\\`;\n\n            return "";\n        }\n\n        handleTabClick(event) {\n            // Get the clicked tab button from the event\n            const clickedTab = event.currentTarget;\n            const targetTabId = clickedTab.dataset.tab + "-content";\n\n            // Deactivate all tabs\n            this.tabButtons.forEach((tab) => {\n                tab.classList.remove("active");\n                tab.setAttribute("aria-selected", "false");\n            });\n\n            // Activate the clicked tab\n            clickedTab.classList.add("active");\n            clickedTab.setAttribute("aria-selected", "true");\n\n            // Hide all tab contents\n            this.tabContents.forEach((content) => {\n                content.style.display = "none";\n                content.setAttribute("aria-hidden", "true"); // Add for accessibility\n            });\n\n            // Show the target tab content\n            const activeContent = document.getElementById(targetTabId);\n            if (activeContent) {\n                activeContent.style.display = "block";\n                activeContent.setAttribute("aria-hidden", "false"); // Add for accessibility\n            }\n        }\n\n        handleFoldToggle(event) {\n            const target = event.currentTarget;\n            const content = target.nextElementSibling.nextElementSibling;\n            if (content?.classList.contains("json-folded-content")) {\n                content.classList.toggle("hidden");\n                target.textContent = content.classList.contains("hidden")\n                    ? "\u25B8"\n                    : "\u25BE";\n            }\n        }\n\n        handleJsonContentClick(event) {\n            const target = event.currentTarget;\n            this.handleCopyToClipboard(\n                target.dataset.copyText || target.textContent,\n                target,\n            );\n        }\n\n        handleShowMoreClick(event) {\n            const button = event.currentTarget;\n            this.expandedSections[button.dataset.path] =\n                !this.expandedSections[button.dataset.path];\n            this.renderPortfolioJson();\n        }\n\n        handleCopyToClipboard(text, element) {\n            navigator.clipboard.writeText(text).then(() => {\n                this.copyMessageDiv.textContent = this.strings.copySuccess;\n                const rect = element.getBoundingClientRect();\n                this.copyMessageDiv.style.top = \\`\\${rect.top - 30}px\\`;\n                this.copyMessageDiv.style.left = \\`\\${rect.left + rect.width / 2}px\\`;\n                this.copyMessageDiv.classList.add("show");\n                setTimeout(\n                    () => this.copyMessageDiv.classList.remove("show"),\n                    1500,\n                );\n            });\n        }\n\n        handleTourLinkClick(event) {\n            // Guarda el paso actual del tour antes de que el navegador navegue a la nueva p\xE1gina\n            if (this.driverObj && this.driverObj.isActivated()) {\n                const currentStepIndex = this.driverObj.state.activeIndex;\n                localStorage.setItem("currentTourStep", currentStepIndex);\n            }\n        }\n\n        startTour(retries = 15) {\n            if (localStorage.getItem("portfolioTourSeen") === "true") {\n                return;\n            }\n            if (retries <= 0) {\n                console.error(\n                    "Driver.js no se pudo cargar a tiempo. El tour no se iniciar\xE1.",\n                );\n                return;\n            }\n\n            if (window.driver) {\n                const driver = window.driver.js.driver;\n                this.driverObj = driver({\n                    nextBtnText: ">",\n                    prevBtnText: "<",\n                    doneBtnText: "\u2715",\n                    showProgress: true,\n                    allowClose: false,\n                    onNextClick: (element, step, { config, state, driver }) => {\n                        driver.moveNext();\n                        localStorage.setItem(\n                            "currentTourStep",\n                            state.activeIndex,\n                        );\n                    },\n                    onPrevClick: (element, step, { config, state, driver }) => {\n                        \n                        driver.movePrevious();\n                        localStorage.setItem(\n                            "currentTourStep",\n                            state.activeIndex,\n                        );\n                    },\n                    steps: [\n                        {\n                            //intro\n                            popover: {\n                                title: this.strings.tourStep1Title,\n                                description: this.strings.tourStep1Desc,\n                            },\n                        },\n                        {\n                            element: ".endpoint-tabs",\n                            popover: {\n                                title: this.strings.tourStep2Title,\n                                description: this.strings.tourStep2Desc,\n                                side: "bottom",\n                                align: "start",\n                            },\n                        },\n                        {\n                            element: "#personal-data-tab",\n                            popover: {\n                                title: this.strings.tourStep3Title,\n                                description: this.strings.tourStep3Desc,\n                                side: "bottom",\n                                align: "start",\n                            },\n                        },\n                        {\n                            element: "#experience-tab",\n                            popover: {\n                                title: this.strings.tourStep4Title,\n                                description: this.strings.tourStep4Desc,\n                                side: "bottom",\n                                align: "start",\n                            },\n                        },\n                        {\n                            element: "#project-tab",\n                            popover: {\n                                title: this.strings.tourStep5Title,\n                                description: this.strings.tourStep5Desc,\n                                side: "bottom",\n                                align: "start",\n                            },\n                        },\n                        {\n                            element: "#method-select",\n                            popover: {\n                                title: this.strings.tourStep6Title,\n                                description: this.strings.tourStep6Desc,\n                                side: "bottom",\n                                align: "start",\n                            },\n                        },\n                        {\n                            element: "#url-input",\n                            popover: {\n                                title: this.strings.tourStep7Title,\n                                description: this.strings.tourStep7Desc,\n                                side: "bottom",\n                                align: "start",\n                            },\n                        },\n                        {\n                            element: "#send-button",\n                            popover: {\n                                title: this.strings.tourStep8Title,\n                                description: this.strings.tourStep8Desc,\n                                side: "bottom",\n                                align: "start",\n                            },\n                        },\n                        {\n                            element: ".response-section",\n                            popover: {\n                                title: this.strings.tourStep9Title,\n                                description: this.strings.tourStep9Desc,\n                                side: "top",\n                                align: "start",\n                            },\n                        },\n                        {\n                            popover: {\n                                title: this.strings.tourStep10Title,\n                                description: \\`<img src=\'/assets/bobGif.gif\' style=\'height: 202.5px; width: 270px;\' /><span style=\'font-size: 15px; display: block; margin-top: 10px; text-align: center;\'>\\${this.strings.tourStep10Desc}</span>\\`,\n                            },\n                        },\n                    ],\n\n                    onDestroyed: () => {\n                        localStorage.setItem("portfolioTourSeen", "true");\n                        localStorage.removeItem("currentTourStep");\n                    },\n                });\n\n                const savedTourStep = localStorage.getItem("currentTourStep");\n                this.driverObj.drive(\n                    savedTourStep ? parseInt(savedTourStep) : 0,\n                );\n            } else {\n                setTimeout(() => this.startTour(retries - 1), 200);\n            }\n        }\n    }\n\n    new EndpointViewer(\n        dataToShow,\n        clientStrings,\n        isHomePage,\n        copyableFields,\n        showMoreConfig,\n    );\n})();<\/script>'])), maybeRenderHead(), renderComponent($$result, "TabsNav", $$TabsNav, {}), addAttribute(`https://airashistudio.dev/api/oscar-villegas/v1/${endpointTitle.toLowerCase()}`, "value"), t("send_button"), t("request_tab_params"), t("request_tab_settings"), t("params_content"), t("headers_content"), t("body_content_get"), t("scripts_content"), t("settings_content"), t("response_title"), t("status_ready"), t("press_send_comment"), defineScriptVars({
    dataToShow,
    clientStrings,
    isHomePage,
    copyableFields,
    showMoreConfig,
    DATA_404,
    endpointTitle
  }));
}, "C:/Users/PC PRIDE RACCOON/Desktop/portfolio-web/src/components/EndpointView.astro", void 0);

export { $$BaseLayout as $, $$EndpointView as a };
