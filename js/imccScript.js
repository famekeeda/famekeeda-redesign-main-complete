// ---------------------------------  Cards Animation Moving Into 4 Different Directions ----------------------------------
document.addEventListener("DOMContentLoaded", () => {
    const imccVideoWrapper1 = document.querySelectorAll('.imcc-video-wrapper-1');
    const imccVideoWrapper2 = document.querySelectorAll('.imcc-video-wrapper-2');
    const imccVideoWrapper3 = document.querySelectorAll('.imcc-video-wrapper-3');
    const imccVideoWrapper4 = document.querySelectorAll('.imcc-video-wrapper-4');
    const headingWrapper = document.querySelectorAll('.imcc-head-para-wrapper');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
                // Optional: unobserve the element if you don't want the animation to be triggered again
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.5 // Trigger when 50% of the section is in view
    });

    imccVideoWrapper1.forEach(section => observer.observe(section));
    imccVideoWrapper2.forEach(section => observer.observe(section));
    imccVideoWrapper3.forEach(section => observer.observe(section));
    imccVideoWrapper4.forEach(section => observer.observe(section));
    headingWrapper.forEach(section => observer.observe(section));

    // Underline Text Animation
    const underlineText = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-underline');
            }
        });
    }, { threshold: 0.1 });

    const underline = document.querySelector('.span-underline-text');
    underlineText.observe(underline);
});



// ------------------------------- Video Play/Pause Button ----------------------------------------------
document.addEventListener('DOMContentLoaded', () => {
    const videoWrappers = document.querySelectorAll('.imcc-video-wrapper-1, .imcc-video-wrapper-2, .imcc-video-wrapper-3, .imcc-video-wrapper-4');

    videoWrappers.forEach(wrapper => {
        const video = wrapper.querySelector('video');
        const playPauseBtn = wrapper.querySelector('.play-pause-btn');
        const playIcon = playPauseBtn.querySelector('.play-icon');
        const pauseIcon = playPauseBtn.querySelector('.pause-icon');

        if (playPauseBtn && video) {
            let hideTimeout;

            playPauseBtn.style.display = 'flex'; // Initially show the button

            playPauseBtn.addEventListener('click', () => {
                if (video.paused) {
                    video.play();
                    playIcon.style.display = 'none';
                    pauseIcon.style.display = 'inline';
                    hideButtonAfterDelay(); // Start hide timer after play
                } else {
                    video.pause();
                    playIcon.style.display = 'inline';
                    pauseIcon.style.display = 'none';
                    clearTimeout(hideTimeout); // Clear timeout if video paused
                }
            });

            function hideButtonAfterDelay() {
                clearTimeout(hideTimeout);
                hideTimeout = setTimeout(() => {
                    playPauseBtn.style.display = 'none';
                }, 1500); // Hide after 1.5 seconds
            }

            video.addEventListener('play', () => {
                playIcon.style.display = 'none';
                pauseIcon.style.display = 'inline';
                hideButtonAfterDelay();
            });

            video.addEventListener('pause', () => {
                playIcon.style.display = 'inline';
                pauseIcon.style.display = 'none';
                playPauseBtn.style.display = 'flex'; // Show the button if paused
            });

            // Ensure the button shows on hover
            wrapper.addEventListener('mouseenter', () => {
                playPauseBtn.style.display = 'flex';
                clearTimeout(hideTimeout);
            });

            wrapper.addEventListener('mouseleave', () => {
                if (!video.paused) {
                    hideButtonAfterDelay();
                }
            });
        }
    });
});



// ------------------------------------- IMCC Label Animation ------------------------------------------
document.addEventListener("DOMContentLoaded", () => {
    const imccLabelElements1 = document.querySelectorAll('.imcc-label.l1');
    const imccLabelElements2 = document.querySelectorAll('.imcc-label.l2');
    const imccLabelElements3 = document.querySelectorAll('.imcc-label.l3');
    const imccLabelElements4 = document.querySelectorAll('.imcc-label.l4');

    const labelObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
                labelObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.9 });

    // Observe all label elements
    imccLabelElements1.forEach(label => labelObserver.observe(label));
    imccLabelElements2.forEach(label => labelObserver.observe(label));
    imccLabelElements3.forEach(label => labelObserver.observe(label));
    imccLabelElements4.forEach(label => labelObserver.observe(label));
});



