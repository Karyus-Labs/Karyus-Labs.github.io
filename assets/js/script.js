document.addEventListener('DOMContentLoaded', () => {

    // --- 1. GESTÃO DE TEMA (DARK/LIGHT MODE) ---
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;
    
    // Karyus Labs prefere Dark Mode por padrão (Estética de Engenharia)
    const savedTheme = localStorage.getItem('karyus-theme') || 'dark-mode';
    body.classList.add(savedTheme);

    const updateThemeIcon = () => {
        const icon = themeToggle.querySelector('i');
        if (body.classList.contains('dark-mode')) {
            icon.className = 'fas fa-sun'; // Ícone para mudar para claro
        } else {
            icon.className = 'fas fa-moon'; // Ícone para mudar para escuro
        }
    };

    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            body.classList.toggle('dark-mode');
            const currentTheme = body.classList.contains('dark-mode') ? 'dark-mode' : 'light-mode';
            localStorage.setItem('karyus-theme', currentTheme);
            updateThemeIcon();
            
            // Compatibilidade com MathJax: Força re-renderização se necessário
            if (window.MathJax && window.MathJax.typeset) {
                window.MathJax.typeset();
            }
        });
    }

    updateThemeIcon();

    // --- 2. FILTRO DE PROJETOS (RESEARCH & R&D) ---
    const filterButtons = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            const filter = button.getAttribute('data-filter');

            projectCards.forEach(card => {
                if (filter === 'all' || card.getAttribute('data-category') === filter) {
                    card.style.display = 'block';
                    card.style.animation = 'fadeIn 0.5s ease forwards';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });

    // --- 3. SCROLL SUAVE PARA DOCUMENTAÇÃO ---
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    // --- 4. DATA AUTOMÁTICA (RODAPÉ) ---
    const yearSpan = document.getElementById('current-year');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }
});

// Adiciona uma pequena animação de entrada para os cards
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeIn {
        from { opacity: 0; transform: translateY(10px); }
        to { opacity: 1; transform: translateY(0); }
    }
`;
document.head.appendChild(style);
