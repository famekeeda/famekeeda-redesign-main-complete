window.addEventListener('scroll', () => {
    const flowBoxes = document.querySelectorAll('.flow-box');
    const images = document.querySelectorAll('.scroll-inner-container .vs-img');
    const scrollPosition = window.scrollY;
    const viewportHeight = window.innerHeight;

    flowBoxes.forEach((flowBox, index) => {
        const borderLine = flowBox.querySelector('.border-line');
        const flowBoxPosition = flowBox.getBoundingClientRect().top;
        const flowBoxHeight = flowBox.offsetHeight;

        // Calculate the height of the border-line based on scroll position
        const maxHeight = flowBoxHeight - 114; // Subtract the height of the flow-num
        const scrollProgress = Math.max(0, Math.min(1, (viewportHeight / 2 - flowBoxPosition) / (viewportHeight / 2)));

        // Update the height of the border-line
        if (scrollProgress > 0 && scrollProgress < 1) {
            borderLine.style.height = `${scrollProgress * 100}%`;
        } else if (scrollProgress >= 1) {
            borderLine.style.height = '100%';
        } else {
            borderLine.style.height = '0%';
        }

        // Change the image when the flow box comes into view
        if (flowBoxPosition < viewportHeight / 1.5 && flowBoxPosition > -flowBoxHeight / 1.5) {
            images.forEach((img, imgIndex) => {
                if (imgIndex === index) {
                    img.classList.add('active');
                } else {
                    img.classList.remove('active');
                }
            });
        }
    });
});

// Ensure the first image is visible initially
document.addEventListener('DOMContentLoaded', () => {
    const firstImage = document.querySelector('.vs-img-1');
    firstImage.classList.add('active');
});