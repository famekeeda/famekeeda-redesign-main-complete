document.addEventListener('DOMContentLoaded', function() {
    // Carousel functionality
    const track = document.querySelector('.carousel-track');
    const slides = Array.from(track.children);
    const nextButton = document.querySelector('.next-button');
    const prevButton = document.querySelector('.prev-button');
    const indicators = document.querySelectorAll('.carousel-indicator');
    
    let currentSlide = 0;
    const slideCount = slides.length;
    
    // Set slide positions
    const setSlidePosition = () => {
        track.style.transform = `translateX(-${currentSlide * 100}%)`;
        
        // Update indicators
        indicators.forEach((indicator, index) => {
            if (index === currentSlide) {
                indicator.classList.add('active');
            } else {
                indicator.classList.remove('active');
            }
        });
    };
    
    // Next slide function
    const moveToNextSlide = () => {
        currentSlide = (currentSlide + 1) % slideCount;
        setSlidePosition();
    };
    
    // Previous slide function
    const moveToPrevSlide = () => {
        currentSlide = (currentSlide - 1 + slideCount) % slideCount;
        setSlidePosition();
    };
    
    // Event listeners
    nextButton.addEventListener('click', moveToNextSlide);
    prevButton.addEventListener('click', moveToPrevSlide);
    
    // Click on indicators
    indicators.forEach((indicator, index) => {
        indicator.addEventListener('click', () => {
            currentSlide = index;
            setSlidePosition();
        });
    });
    
    // Auto-advance slides every 5 seconds
    let slideInterval = setInterval(moveToNextSlide, 5000);
    
    // Pause auto-advance on hover
    const carouselContainer = document.querySelector('.carousel-container');
    carouselContainer.addEventListener('mouseenter', () => {
        clearInterval(slideInterval);
    });
    
    carouselContainer.addEventListener('mouseleave', () => {
        slideInterval = setInterval(moveToNextSlide, 5000);
    });
    
    // Initialize slide positions
    setSlidePosition();
    
    // Add keyboard accessibility
    document.addEventListener('keydown', (e) => {
        if (document.activeElement === nextButton || document.activeElement === prevButton) {
            if (e.key === 'ArrowRight') {
                moveToNextSlide();
            } else if (e.key === 'ArrowLeft') {
                moveToPrevSlide();
            }
        }
    });
});