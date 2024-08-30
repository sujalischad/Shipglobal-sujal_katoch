
document.addEventListener('DOMContentLoaded', function () {
    const images = document.querySelectorAll('.carousel-images img');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    const fallbackImage = 'fallback.jpg'; 
    let currentIndex = 0;

    function updateCarousel() {
        const translateX = -currentIndex * 100;
        document.querySelector('.carousel-images').style.transform = `translateX(${translateX}%)`;
    }

   
    nextBtn.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % images.length;
        updateCarousel();
    });

    prevBtn.addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        updateCarousel();
    });

    images.forEach(image => {
        image.addEventListener('error', () => {
            image.src = fallbackImage;
        });
    });

    updateCarousel();
});
