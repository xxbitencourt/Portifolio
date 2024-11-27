// Caso queira adicionar algum efeito de animação ou interação com JS
document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.card');
    
    cards.forEach(card => {
        // Efeito de animação ao passar o mouse
        card.addEventListener('mouseenter', () => {
            card.classList.add('animate__animated', 'animate__zoomIn');
        });

        card.addEventListener('mouseleave', () => {
            card.classList.remove('animate__animated', 'animate__zoomIn');
        });
    });
});
