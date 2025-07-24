const themeToggle = document.getElementById('theme-toggle'); // Botón de tema
let currentTheme = localStorage.getItem('portfolioTheme') || 'dark'; // Tema por defecto o guardado

/**
 * Aplica el tema seleccionado (claro u oscuro) al documento.
 * Guarda la preferencia en localStorage.
 * @param {string} theme - 'dark' o 'light'.
 */
function applyTheme(theme) {
    document.documentElement.classList.toggle('light-mode', theme === 'light');
    const icon = themeToggle.querySelector('i');
    if (icon) {
        icon.className = theme === 'dark' ? 'fas fa-sun' : 'fas fa-moon'; // Icono de sol para oscuro, luna para claro
    }
    localStorage.setItem('portfolioTheme', theme);
}

themeToggle.addEventListener('click', () => {
        currentTheme = currentTheme === 'dark' ? 'light' : 'dark';
        applyTheme(currentTheme);
    });