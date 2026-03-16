const themeToggle = document.getElementById('theme-toggle');
const body = document.body;
const icon = themeToggle.querySelector('i');

// Função para aplicar o tema
function applyTheme(theme) {
    if (theme === 'light') {
        body.classList.remove('dark-mode');
        body.classList.add('light-mode');
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
    } else {
        body.classList.remove('light-mode');
        body.classList.add('dark-mode');
        icon.classList.remove('fa-sun');
        icon.classList.add('fa-moon');
    }
}

// Verifica preferência salva ao iniciar
const savedTheme = localStorage.getItem('theme') || 'dark';
applyTheme(savedTheme);

themeToggle.addEventListener('click', () => {
    const isDark = body.classList.contains('dark-mode');
    const newTheme = isDark ? 'light' : 'dark';
    
    applyTheme(newTheme);
    localStorage.setItem('theme', newTheme);
});