document.addEventListener('DOMContentLoaded', () => {
    const track = document.querySelector('.carousel-track');
    const items = document.querySelectorAll('.carousel-item');
    const prevBtn = document.querySelector('.prev');
    const nextBtn = document.querySelector('.next');

    let index = 0;
    const total = items.length;

    function updateCarousel() {
        track.style.transform = `translateX(-${index * 100}%)`;
    }

    nextBtn.addEventListener('click', () => {
        index = (index + 1) % total;
        updateCarousel();
    });

    prevBtn.addEventListener('click', () => {
        index = (index - 1 + total) % total;
        updateCarousel();
    });
});
