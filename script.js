// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Add JavaScript code to control the video playback
var video = document.getElementById("myVideo");

// Play the video
function playVideo() {
  video.play();
}

// Pause the video
function pauseVideo() {
  video.pause();
}

// Stop the video
function stopVideo() {
  video.currentTime = 0;
  video.pause();
}
