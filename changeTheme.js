document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.getElementById('theme-toggle');
    let currentTheme = localStorage.getItem('portfolioTheme') || 'dark';

    function applyTheme(theme) {
        document.documentElement.classList.toggle('light-mode', theme === 'light');
        localStorage.setItem('portfolioTheme', theme);
    }

    applyTheme(currentTheme);

    themeToggle.addEventListener('click', () => {
        currentTheme = currentTheme === 'dark' ? 'light' : 'dark';
        applyTheme(currentTheme);
    });
});