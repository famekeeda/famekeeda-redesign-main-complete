// For Timeline scroll
window.addEventListener('scroll', () => {
    const flowBoxes = document.querySelectorAll('.flow-box');
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

    });
});

// Scroll on Button Click Vertical Scroll Section
function smoothScroll(targetY) {
    window.scrollTo({ top: targetY, behavior: 'smooth' });
}

document.getElementById("nxt-btn").addEventListener('click', function () {
    const numOfFlowBoxesToSkip = 0.58; // adjust this value as needed
    const targetY = window.innerHeight * numOfFlowBoxesToSkip + window.scrollY;
    smoothScroll(targetY);
});

document.getElementById("prev-btn").addEventListener('click', function () {
    const numOfFlowBoxesToSkip = -0.58; // adjust this value as needed
    const targetY = window.innerHeight * numOfFlowBoxesToSkip + window.scrollY;
    smoothScroll(targetY);
});