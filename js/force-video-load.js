// Force Show Reel Videos to Load First Frame of the Video in iOS

  document.addEventListener("DOMContentLoaded", function () {
    let videos = document.querySelectorAll("video");
    videos.forEach(video => {
      video.currentTime = 0.1; // Forces loading of the first frame
    });
  });