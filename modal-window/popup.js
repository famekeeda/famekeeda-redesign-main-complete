// Get the modal
var modal = document.getElementById("knowMoreModal");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close-btn")[0];

// Get all "Know More" buttons
// var btns = document.querySelectorAll(".service-card-button");
// Step 1: Define the list of arrays containing the button classes
var buttonClasses = [
    [".nav-cta"],
    [".cta_hero_button"],
    [".imcc-button"],
    [".service-card-button"]
];

// Step 2: Use the list to construct a selector string
var selector = buttonClasses.map(classes => classes.join('.')).join(', ');

// Step 3: Use the selector string in document.querySelectorAll
var btns = document.querySelectorAll(selector);

// Get the video element and controls
var modalVideo = document.getElementById("modalVideo");
var videoThumbnail = document.getElementById("videoThumbnail");
var playButton = document.querySelector(".play-button");
var muteButton = document.querySelector(".mute-button");
var restartButton = document.querySelector(".restart-button");

// Function to open the modal and set its content
function openModal(title, content, videoUrl, thumbnailUrl) {
    var modalContent = modal.querySelector(".modal-content");
    modalContent.querySelector("h2").textContent = title;
    modalContent.querySelector(".video-section .custom-video source").src = videoUrl;
    videoThumbnail.src = thumbnailUrl;
    modalVideo.load(); // Load the new video source
    videoThumbnail.style.display = "block"; // Show the thumbnail
    modal.style.display = "block";
}

// Add click event listeners to all buttons
btns.forEach(function(button) {
    button.addEventListener("click", function(event) {
        event.preventDefault(); // Prevent the default anchor behavior
        var title = button.getAttribute("data-title");
        var content = button.getAttribute("data-content");
        var videoUrl = button.getAttribute("data-video");
        var thumbnailUrl = button.getAttribute("data-thumbnail");
        openModal(title, content, videoUrl, thumbnailUrl);
    });
});

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

// Video control functionality
playButton.addEventListener("click", function() {
    if (modalVideo.paused) {
        modalVideo.play();
        playButton.querySelector(".button-text").textContent = "Pause";
        playButton.querySelector(".video-control-svg").innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
            <path fill="#FAFAFA" d="M10.75 8a.75.75 0 0 0-1.5 0v8a.75.75 0 0 0 1.5 0V8Zm4 0a.75.75 0 0 0-1.5 0v8a.75.75 0 0 0 1.5 0V8Z"/>
            <path fill="#FAFAFA" fill-rule="evenodd" d="M12.285 1.03a5.75 5.75 0 0 0-.57 0c-.734.037-1.409.25-2.161.6-.733.34-1.585.83-2.662 1.453l-.06.035c-1.078.622-1.93 1.113-2.59 1.578-.679.477-1.201.955-1.6 1.572a5.75 5.75 0 0 0-.284.494c-.336.653-.489 1.345-.562 2.171-.072.805-.072 1.788-.072 3.032v.07c0 1.244 0 2.227.072 3.032.073.826.226 1.517.562 2.17.086.17.182.335.285.495.398.617.92 1.095 1.599 1.572.66.464 1.512.956 2.59 1.578l.06.035c1.077.622 1.929 1.114 2.662 1.454.752.349 1.427.562 2.16.598.19.01.381.01.571 0 .733-.036 1.409-.25 2.161-.598.733-.34 1.584-.832 2.662-1.454l.06-.035c1.078-.622 1.93-1.114 2.59-1.578.679-.477 1.2-.955 1.6-1.572.102-.16.197-.325.284-.494.335-.654.489-1.345.562-2.171.072-.805.072-1.788.072-3.032v-.07c0-1.244 0-2.227-.072-3.032-.073-.826-.227-1.518-.562-2.17a5.734 5.734 0 0 0-.285-.495c-.398-.617-.92-1.095-1.599-1.572-.66-.465-1.512-.956-2.59-1.578l-.06-.035c-1.078-.622-1.93-1.114-2.662-1.454-.752-.349-1.428-.562-2.161-.598Zm-.496 1.499c.14-.007.281-.007.422 0 .473.023.952.158 1.604.46.665.31 1.459.767 2.573 1.41 1.114.644 1.908 1.103 2.507 1.524.588.413.945.761 1.202 1.159.076.118.146.24.21.365.217.421.34.904.403 1.62.066.73.066 1.646.066 2.933s0 2.203-.066 2.933c-.064.716-.186 1.199-.402 1.62a4.253 4.253 0 0 1-.211.365c-.257.398-.614.745-1.202 1.159-.6.421-1.393.88-2.507 1.523-1.114.644-1.908 1.101-2.573 1.41-.652.302-1.131.438-1.604.461-.14.007-.281.007-.422 0-.473-.023-.952-.159-1.604-.461-.665-.309-1.459-.766-2.573-1.41-1.115-.643-1.908-1.102-2.508-1.523-.587-.414-.944-.761-1.201-1.159a4.259 4.259 0 0 1-.21-.365c-.217-.421-.34-.904-.403-1.62-.066-.73-.066-1.646-.066-2.933s0-2.203.066-2.933c.064-.716.186-1.199.402-1.62a4.54 4.54 0 0 1 .21-.365c.258-.398.615-.746 1.202-1.159.6-.421 1.393-.88 2.508-1.524 1.114-.643 1.908-1.1 2.573-1.41.652-.302 1.131-.437 1.604-.46Z" clip-rule="evenodd"/>
        </svg>`;
        videoThumbnail.style.display = "none"; // Hide the thumbnail
    } else {
        modalVideo.pause();
        playButton.querySelector(".button-text").textContent = "Play";
        playButton.querySelector(".video-control-svg").innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="19" height="20" fill="none" viewBox="0 0 19 20">
            <path fill="currentColor" fill-rule="evenodd" d="M12.073 3.207c-1.732-.988-3.077-1.755-4.17-2.253C6.806.454 5.854.173 4.93.27a5.236 5.236 0 0 0-3.68 2.097C.7 3.116.47 4.077.36 5.265.25 6.45.25 7.985.25 9.96v.082c0 1.974 0 3.51.11 4.694.11 1.189.34 2.15.89 2.898a5.236 5.236 0 0 0 3.68 2.096c.925.096 1.877-.186 2.974-.685 1.093-.498 2.438-1.265 4.17-2.253l.07-.04c1.732-.987 3.078-1.754 4.06-2.44.986-.688 1.713-1.363 2.094-2.208a5.118 5.118 0 0 0 0-4.21c-.381-.845-1.108-1.52-2.093-2.208-.983-.686-2.329-1.453-4.06-2.44l-.07-.04ZM5.083 1.76c.52-.054 1.172.09 2.198.558 1.024.466 2.31 1.199 4.084 2.21 1.775 1.012 3.06 1.746 3.98 2.388.924.645 1.374 1.128 1.585 1.594.427.948.427 2.03 0 2.978-.21.466-.66.95-1.585 1.594-.92.642-2.205 1.376-3.98 2.387-1.774 1.012-3.06 1.745-4.084 2.21-1.026.468-1.678.613-2.198.56a3.735 3.735 0 0 1-2.624-1.496c-.304-.413-.502-1.038-.605-2.148C1.75 13.489 1.75 12.024 1.75 10s0-3.49.104-4.596c.103-1.11.3-1.735.605-2.148a3.736 3.736 0 0 1 2.624-1.495Z" clip-rule="evenodd"/>
        </svg>`;
    }
});

muteButton.addEventListener("click", function() {
    modalVideo.muted = !modalVideo.muted;
    muteButton.querySelector(".button-text").textContent = modalVideo.muted ? "Unmute" : "Mute";

    // Update the SVG icon based on the mute state
    if (modalVideo.muted) {
        muteButton.querySelector(".video-control-svg").innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
            <path fill="currentColor" d="M18.75 13a.75.75 0 0 0-1.5 0h1.5Zm-4.35 6.623.49-.568-.01-.009-.01-.009-.47.586Zm-.93-1.708a.75.75 0 0 0-.94 1.17l.94-1.17ZM8.5 8.22v-.75.75Zm6.193 11.655.49-.567-.49.567ZM10.056 8.22v-.75.75Zm1.798.08 3.329-2.875-.98-1.135-3.33 2.876.98 1.135ZM8.5 8.97h1.556v-1.5H8.5v1.5Zm-1.75 5.043V10.72h-1.5v3.293h1.5Zm4.05 1.75H8.5v1.5h2.3v-1.5Zm6.45-1.263v3.862h1.5V14.5h-1.5Zm0-8.13V9h1.5V6.37h-1.5Zm0 6.63v1.5h1.5V13h-1.5Zm-2.067 6.308-.293-.253-.98 1.135.292.253.98-1.135Zm-.314-.27-1.4-1.123-.938 1.17 1.4 1.123.938-1.17ZM5.25 14.012a3.25 3.25 0 0 0 3.25 3.25v-1.5a1.75 1.75 0 0 1-1.75-1.75h-1.5ZM8.5 7.47a3.25 3.25 0 0 0-3.25 3.25h1.5c0-.967.783-1.75 1.75-1.75v-1.5Zm6.683-2.045c.81-.7 2.067-.125 2.067.946h1.5c0-2.355-2.766-3.62-4.548-2.081l.98 1.135Zm2.067 12.937c0 1.07-1.257 1.645-2.067.946l-.98 1.135c1.781 1.539 4.547.273 4.547-2.081h-1.5ZM10.873 7.166a1.25 1.25 0 0 1-.817.304v1.5a2.75 2.75 0 0 0 1.798-.67l-.981-1.134Z"/>
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M22 5 7 20"/>
        </svg>`;
    } else {
        muteButton.querySelector(".video-control-svg").innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
            <path fill="currentColor" d="M18.75 13a.75.75 0 0 0-1.5 0h1.5Zm-4.35 6.623.49-.568-.01-.009-.01-.009-.47.586Zm-.93-1.708a.75.75 0 0 0-.94 1.17l.94-1.17ZM8.5 8.22v-.75.75Zm6.193 11.655.49-.567-.49.567ZM10.056 8.22v-.75.75Zm1.798.08 3.329-2.875-.98-1.135-3.33 2.876.98 1.135ZM8.5 8.97h1.556v-1.5H8.5v1.5Zm-1.75 5.043V10.72h-1.5v3.293h1.5Zm4.05 1.75H8.5v1.5h2.3v-1.5Zm6.45-1.263v3.862h1.5V14.5h-1.5Zm0-8.13V9h1.5V6.37h-1.5Zm0 6.63v1.5h1.5V13h-1.5Zm-2.067 6.308-.293-.253-.98 1.135.292.253.98-1.135Zm-.314-.27-1.4-1.123-.938 1.17 1.4 1.123.938-1.17ZM5.25 14.012a3.25 3.25 0 0 0 3.25 3.25v-1.5a1.75 1.75 0 0 1-1.75-1.75h-1.5ZM8.5 7.47a3.25 3.25 0 0 0-3.25 3.25h1.5c0-.967.783-1.75 1.75-1.75v-1.5Zm6.683-2.045c.81-.7 2.067-.125 2.067.946h1.5c0-2.355-2.766-3.62-4.548-2.081l.98 1.135Zm2.067 12.937c0 1.07-1.257 1.645-2.067.946l-.98 1.135c1.781 1.539 4.547.273 4.547-2.081h-1.5ZM10.873 7.166a1.25 1.25 0 0 1-.817.304v1.5a2.75 2.75 0 0 0 1.798-.67l-.981-1.134Z"/>
        </svg>`;
    }
});

restartButton.addEventListener("click", function() {
    modalVideo.currentTime = 0;
    modalVideo.play();
    playButton.querySelector(".button-text").textContent = "Pause";
    videoThumbnail.style.display = "none"; // Hide the thumbnail
});

// Hide the thumbnail when the video starts playing
modalVideo.addEventListener("play", function() {
    videoThumbnail.style.display = "none";
});

// Show the thumbnail when the video is paused
modalVideo.addEventListener("pause", function() {
    videoThumbnail.style.display = "block";
});