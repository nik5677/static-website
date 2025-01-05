//sprawdzenie czy dotykowy
const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;

if(isTouchDevice) {
    document.querySelectorAll('.gallery-item').forEach(item => {
        item.addEventListener('click', () => {
            // jeśli już aktywne, zdejmij klasę
            if (item.classList.contains('active')) {
                item.classList.remove('active');
            } else {
                // zdejmij klasę z innych elementów
                document.querySelectorAll('.gallery-item.active').forEach(activeItem => {
                    activeItem.classList.remove('active');
                });
                // dodaj klasę do klikniętego elementu
                item.classList.add('active');
            }
        });
    });
}
