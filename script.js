// Smooth scrolling para navegación interna
document.querySelectorAll('.nav-link[href^="#"]').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        
        if (targetSection) {
            targetSection.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Highlight en sección activa
const sections = document.querySelectorAll('.section');
const navLinks = document.querySelectorAll('.nav-link[href^="#"]');

function highlightActiveSection() {
    let current = '';
    const scrollPosition = window.scrollY + 100;

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
}

// Copiar código al hacer click
document.querySelectorAll('.code-block').forEach(block => {
    block.addEventListener('click', function() {
        const text = this.innerText;
        navigator.clipboard.writeText(text).then(() => {
            const originalContent = this.innerHTML;
            this.innerHTML = '<span style="color: #27ae60">✓ Código copiado</span>';
            
            setTimeout(() => {
                this.innerHTML = originalContent;
            }, 1500);
        });
    });
});

// Event listeners
window.addEventListener('scroll', highlightActiveSection);
document.addEventListener('DOMContentLoaded', highlightActiveSection);