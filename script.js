        // Lógica de Scroll do Navbar (Mudar cor ao rolar)
        window.addEventListener('scroll', () => {
            const navbar = document.getElementById('navbar');
            if (window.scrollY > 50) {
                navbar.classList.add('nav-scrolled');
                navbar.classList.remove('bg-transparent');
            } else {
                navbar.classList.remove('nav-scrolled');
                navbar.classList.add('bg-transparent');
            }
        });

        // Lógica de Rolagem Horizontal das Fileiras (Sliders)
        function scrollRow(rowId, amount) {
            const row = document.getElementById(rowId);
            row.scrollBy({
                left: amount,
                behavior: 'smooth'
            });
        }

        // Lógica do Modal de Vídeo
        const modal = document.getElementById('videoModal');
        const player = document.getElementById('videoPlayer');

        function openModal() {
            modal.classList.remove('hidden');
            // Timeout para permitir que a classe remova o hidden antes de iniciar para transição suave
            setTimeout(() => {
                player.play();
            }, 100);
            
            // Travar scroll da página
            document.body.style.overflow = 'hidden';
        }

        function closeModal() {
            modal.classList.add('hidden');
            player.pause();
            player.currentTime = 0; // Volta para o começo
            
            // Destravar scroll da página
            document.body.style.overflow = 'auto';
        }

        // Fechar modal ao clicar fora do vídeo (no overlay escuro)
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                closeModal();
            }
        });

        // Fechar com a tecla ESC
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
                closeModal();
            }
        });