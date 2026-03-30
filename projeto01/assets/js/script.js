document.addEventListener('DOMContentLoaded', () => {
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }

    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('reveal');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    document.querySelectorAll('.reveal').forEach(el => {
        observer.observe(el);
    });

    const reservationBtns = Array.from(document.querySelectorAll('button')).filter(btn => 
        btn.textContent.includes('Solicitar Reserva')
    );

    reservationBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const modal = document.createElement('div');
            modal.className = 'modal-overlay';
            modal.innerHTML = `
                <div class="modal-content">
                    <i data-lucide="check-circle" style="color: #c5a059; width: 64px; height: 64px; margin: 0 auto 2rem; display: block;"></i>
                    <h2 class="serif" style="font-size: 2.5rem; margin-bottom: 1rem;">Pedido Recebido</h2>
                    <p style="font-weight: 300; margin-bottom: 2rem; color: #4a4a4a;">Sua solicitação de reserva para esta peça exclusiva foi enviada. Um de nossos especialistas entrará em contato em breve.</p>
                    <button class="btn btn-outline" id="close-modal">Fechar</button>
                </div>
            `;
            document.body.appendChild(modal);
            
            if (typeof lucide !== 'undefined') {
                lucide.createIcons();
            }

            setTimeout(() => modal.classList.add('active'), 50);

            modal.querySelector('#close-modal').onclick = () => {
                modal.classList.remove('active');
                setTimeout(() => modal.remove(), 500);
            };

            modal.onclick = (e) => {
                if (e.target === modal) {
                    modal.querySelector('#close-modal').click();
                }
            };
        });
    });

    const header = document.querySelector('header');
    if (header) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        });
    }

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
});
