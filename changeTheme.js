document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.getElementById('theme-toggle'); // Botón de tema
    let currentTheme = localStorage.getItem('portfolioTheme') || 'dark'; // Tema por defecto o guardado

    /**
     * Aplica el tema seleccionado (claro u oscuro) al documento.
     * Guarda la preferencia en localStorage.
     * @param {string} theme - 'dark' o 'light'.
     */
    function applyTheme(theme) {
        document.documentElement.classList.toggle('light-mode', theme === 'light');
        localStorage.setItem('portfolioTheme', theme);
    }

    // Initial application of the theme
    applyTheme(currentTheme);

    themeToggle.addEventListener('click', () => {
        currentTheme = currentTheme === 'dark' ? 'light' : 'dark';
        applyTheme(currentTheme);
    });
});