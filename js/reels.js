
// let currentlyPlayingVideo = null;  // Variable to track the currently playing video

// document.querySelectorAll('.video-wrapper').forEach(wrapper => {
//     const video = wrapper.querySelector('video');
//     const playIcon = wrapper.querySelector('.play-icon');
//     const pauseIcon = wrapper.querySelector('.pause-icon');

//     // Ensure video only plays/pauses on click
//     wrapper.addEventListener('click', () => {
//         // Pause the previously playing video if any
//         if (currentlyPlayingVideo && currentlyPlayingVideo !== video) {
//             currentlyPlayingVideo.pause();
//             currentlyPlayingVideo.currentTime = 0; // Reset video time to the start
//             // Reset play/pause icon for the previous video
//             const previousWrapper = currentlyPlayingVideo.closest('.video-wrapper');
//             const previousPlayIcon = previousWrapper.querySelector('.play-icon');
//             const previousPauseIcon = previousWrapper.querySelector('.pause-icon');
//             previousPlayIcon.style.display = 'block';
//             previousPauseIcon.style.display = 'none';
//         }

//         // Play or pause the current video
//         if (video.paused) {
//             video.play();
//             playIcon.style.display = 'none';
//             pauseIcon.style.display = 'block';
//         } else {
//             video.pause();
//             playIcon.style.display = 'block';
//             pauseIcon.style.display = 'none';
//         }

//         // Set the currently playing video
//         currentlyPlayingVideo = video;
//     });

//     // Reset icons when video ends
//     video.addEventListener('ended', () => {
//         video.currentTime = 0;
//         playIcon.style.display = 'block';
//         pauseIcon.style.display = 'none';
//         currentlyPlayingVideo = null; // Reset the currently playing video when it ends
//     });
// });


let currentlyPlayingVideo = null;  // Variable to track the currently playing video

document.querySelectorAll('.video-wrapper').forEach(wrapper => {
    const video = wrapper.querySelector('video');
    const playIcon = wrapper.querySelector('.play-icon');
    const pauseIcon = wrapper.querySelector('.pause-icon');

    // Ensure video only plays/pauses on click
    wrapper.addEventListener('click', () => {
        // Pause the previously playing video if any
        if (currentlyPlayingVideo && currentlyPlayingVideo !== video) {
            currentlyPlayingVideo.pause();
            currentlyPlayingVideo.currentTime = 0; // Reset video time to the start
            currentlyPlayingVideo.load(); // Ensure the poster image appears again

            // Reset play/pause icon for the previous video
            const previousWrapper = currentlyPlayingVideo.closest('.video-wrapper');
            const previousPlayIcon = previousWrapper.querySelector('.play-icon');
            const previousPauseIcon = previousWrapper.querySelector('.pause-icon');
            previousPlayIcon.style.display = 'block';
            previousPauseIcon.style.display = 'none';
        }

        // Play or pause the current video
        if (video.paused) {
            video.play();
            playIcon.style.display = 'none';
            pauseIcon.style.display = 'block';
        } else {
            video.pause();
            video.currentTime = 0; // Reset video to show the first frame
            video.load(); // Ensure the poster image appears again
            playIcon.style.display = 'block';
            pauseIcon.style.display = 'none';
        }

        // Set the currently playing video
        currentlyPlayingVideo = video;
    });

    // Reset icons when video ends
    video.addEventListener('ended', () => {
        video.currentTime = 0;
        video.load(); // Ensure the poster image appears again
        playIcon.style.display = 'block';
        pauseIcon.style.display = 'none';
        currentlyPlayingVideo = null; // Reset the currently playing video when it ends
    });
});
