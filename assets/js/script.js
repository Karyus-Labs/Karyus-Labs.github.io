document.addEventListener('DOMContentLoaded', () => {
    const body = document.body;
    const themeToggle = document.getElementById('theme-toggle');
    
    // 1. GESTÃO DE TEMA CORRIGIDA (Dark/Light Mode)
    const currentTheme = localStorage.getItem('karyus-theme') || 'dark-mode';
    body.classList.add(currentTheme);

    const updateIcon = () => {
        const icon = themeToggle.querySelector('i');
        icon.className = body.classList.contains('dark-mode') ? 'fas fa-sun' : 'fas fa-moon';
    };

    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            // Alterna entre as classes explicitamente
            if (body.classList.contains('dark-mode')) {
                body.classList.replace('dark-mode', 'light-mode');
                localStorage.setItem('karyus-theme', 'light-mode');
            } else {
                body.classList.replace('light-mode', 'dark-mode');
                localStorage.setItem('karyus-theme', 'dark-mode');
            }
            updateIcon();
            
            // Re-renderiza o MathJax se houver equações na página
            if (window.MathJax) window.MathJax.typeset();
        });
    }
    updateIcon();

    // 2. ANIMAÇÃO DE REVELAÇÃO (Scroll Reveal)
    const revealOnScroll = () => {
        const elements = document.querySelectorAll('.project-card, section, h2');
        elements.forEach(el => {
            const rect = el.getBoundingClientRect();
            if (rect.top < window.innerHeight - 100) {
                el.style.opacity = "1";
                el.style.transform = "translateY(0)";
            }
        });
    };

    // Estilo inicial para animação
    document.querySelectorAll('.project-card, section, h2').forEach(el => {
        el.style.opacity = "0";
        el.style.transform = "translateY(30px)";
        el.style.transition = "all 0.8s ease-out";
    });

    window.addEventListener('scroll', revealOnScroll);
    revealOnScroll(); // Trigger inicial
});
