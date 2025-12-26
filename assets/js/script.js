document.addEventListener('DOMContentLoaded', () => {
    const body = document.body;
    const themeToggle = document.getElementById('theme-toggle');
    
    // 1. GESTÃO DE TEMA CORRIGIDA
    const currentTheme = localStorage.getItem('karyus-theme') || 'dark-mode';
    body.classList.add(currentTheme);

    const updateIcon = () => {
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
            updateIcon();
            if (window.MathJax) window.MathJax.typeset();
        });
    }
    updateIcon();

    // 2. REVEAL AO SCROLL (Lúdico)
    const observerOptions = { threshold: 0.1 };
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";
            }
        });
    }, observerOptions);

    document.querySelectorAll('section, .project-card').forEach(el => {
        el.style.opacity = "0";
        el.style.transform = "translateY(20px)";
        el.style.transition = "all 0.6s ease-out";
        observer.observe(el);
    });
});
