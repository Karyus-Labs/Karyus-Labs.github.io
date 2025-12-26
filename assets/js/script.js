document.addEventListener('DOMContentLoaded', () => {
    
    // 1. DATA AUTOMÁTICA
    const yearSpan = document.getElementById('current-year');
    if (yearSpan) yearSpan.textContent = new Date().getFullYear();

    // 2. ROTEAMENTO INTELIGENTE (Smart Routing)
    // Seleciona todos os links internos que apontam para IDs
    document.querySelectorAll('a[href*="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            
            // Pega o caminho do link e o caminho da página atual
            const linkPath = this.pathname.replace(/^\//, ''); // Remove barra inicial para comparar
            const currentPath = window.location.pathname.replace(/^\//, '');
            
            // Verifica se o link aponta para a MESMA página que estamos agora
            // (Considera "index.html" e vazio "" como iguais)
            const isSamePage = (linkPath === currentPath) || 
                               (linkPath === 'index.html' && currentPath === '') ||
                               (linkPath === '' && currentPath === 'index.html');

            if (isSamePage && this.hash) {
                // Se estamos na mesma página, impede o carregamento e faz scroll suave
                e.preventDefault();
                const targetElement = document.querySelector(this.hash);
                
                if (targetElement) {
                    targetElement.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                    
                    // Atualiza a URL sem recarregar (opcional, bom para UX)
                    history.pushState(null, null, this.hash);
                }
            }
            // SE NÃO FOR A MESMA PÁGINA (ex: estou no post):
            // O script não faz nada (não tem e.preventDefault), 
            // deixando o navegador carregar a página da Home normalmente.
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
