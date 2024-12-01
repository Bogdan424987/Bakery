        // Вибираємо елементи
        const openModalBtn = document.querySelector('.header_buttom');
        const modalOverlay = document.querySelector('.modal-overlay');
        const closeModalBtn = document.querySelector('.close-btn');

        // Відкрити модальне вікно
        openModalBtn.addEventListener('click', () => {
            modalOverlay.style.display = 'flex';
        });

        // Закрити модальне вікно
        closeModalBtn.addEventListener('click', () => {
            modalOverlay.style.display = 'none';
        });

        // Закриття при кліку поза модальним вікном
        modalOverlay.addEventListener('click', (e) => {
            if (e.target === modalOverlay) {
                modalOverlay.style.display = 'none';
            }
        });