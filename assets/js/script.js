document.addEventListener('DOMContentLoaded', () => {
    
    // 1. DATA AUTOMÁTICA
    const yearSpan = document.getElementById('current-year');
    if (yearSpan) yearSpan.textContent = new Date().getFullYear();

    // 2. SMOOTH SCROLL UNIVERSAL (Sidebar, Logo, Botões)
    // O seletor 'a[href^="#"]' pega QUALQUER link que aponte para uma ID interna
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault(); // Impede o pulo brusco
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start' // Alinha sempre ao TOPO da seção
                });
            }
        });
    });

    // 3. REVEAL OBSERVER (Animação de Entrada)
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
