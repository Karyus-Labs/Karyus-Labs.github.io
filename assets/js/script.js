document.addEventListener('DOMContentLoaded', () => {
    const body = document.body;
    const themeToggle = document.getElementById('theme-toggle');
    
    // 1. GESTÃO DE TEMA (DARK/LIGHT MODE)
    // Karyus Labs prioriza Dark Mode
    const savedTheme = localStorage.getItem('karyus-theme') || 'dark-mode';
    body.classList.add(savedTheme);

    const updateThemeIcon = () => {
        if (!themeToggle) return;
        const icon = themeToggle.querySelector('i');
        // Ícone mostra o SOL no modo escuro (para mudar para claro) e LUA no modo claro
        icon.className = body.classList.contains('dark-mode') ? 'fas fa-sun' : 'fas fa-moon';
    };

    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            if (body.classList.contains('dark-mode')) {
                body.classList.remove('dark-mode');
                body.classList.add('light-mode');
                localStorage.setItem('karyus-theme', 'light-mode');
            } else {
                body.classList.remove('light-mode');
                body.classList.add('dark-mode');
                localStorage.setItem('karyus-theme', 'dark-mode');
            }
            updateThemeIcon();
            
            // Re-renderiza o MathJax para garantir visibilidade das fórmulas
            if (window.MathJax && window.MathJax.typeset) {
                window.MathJax.typeset();
            }
        });
    }
    updateThemeIcon();

    // 2. DATA AUTOMÁTICA DO RODAPÉ
    const yearSpan = document.getElementById('current-year');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }

    // 3. ANIMAÇÃO DE REVELAÇÃO "LÚDICA" (Intersection Observer)
    const observerOptions = {
        threshold: 0.15,
        rootMargin: '0px 0px -50px 0px'
    };

    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
            }
        });
    }, observerOptions);

    // Seleciona seções e cards para animar
    document.querySelectorAll('section, .project-card, h2, .research-item').forEach(el => {
        el.classList.add('reveal-on-scroll');
        revealObserver.observe(el);
    });
});
