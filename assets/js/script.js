document.addEventListener('DOMContentLoaded', () => {
    const body = document.body;
    const themeToggle = document.getElementById('theme-toggle');
    
    // 1. GESTÃO DE TEMA (DARK/LIGHT MODE)
    const savedTheme = localStorage.getItem('karyus-theme') || 'dark-mode';
    body.classList.add(savedTheme);

    const updateThemeIcon = () => {
        if (!themeToggle) return;
        const icon = themeToggle.querySelector('i');
        icon.className = body.classList.contains('dark-mode') ? 'fas fa-sun' : 'fas fa-moon';
    };

    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            if (body.classList.contains('dark-mode')) {
                body.classList.replace('dark-mode', 'light-mode');
                localStorage.setItem('karyus-theme', 'light-mode');
            } else {
                body.classList.replace('light-mode', 'dark-mode');
                localStorage.setItem('karyus-theme', 'dark-mode');
            }
            updateThemeIcon();
        });
    }
    updateThemeIcon();

    // 2. SMOOTH SCROLL PARA PÁGINA ÚNICA (SPA)
    document.querySelectorAll('.sidebar-nav a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const targetId = this.getAttribute('href');
            
            // Verifica se é uma âncora interna
            if (targetId.startsWith('#')) {
                e.preventDefault();
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    targetElement.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    });

    // 3. DATA AUTOMÁTICA
    const yearSpan = document.getElementById('current-year');
    if (yearSpan) yearSpan.textContent = new Date().getFullYear();

    // 4. REVEAL OBSERVER (Animação de Entrada)
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.one-page-section, .project-image-container').forEach(el => {
        el.style.opacity = "0";
        el.style.transform = "translateY(30px)";
        el.style.transition = "all 0.8s ease-out";
        revealObserver.observe(el);
    });
});
