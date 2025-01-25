// Video data array
const videos = [
  {
    title: "Jonh Wick4",
    author: "Keanu Reeves",
    rating: "7.4",
    src: "../movie/Tredningmovie/Video/John Wick_ Chapter 4 (2023) Final Trailer – Keanu Reeves, Donnie Yen, Bill Skarsgård.mp4",
    link: "../movie/Tredningmovie/popularMovie6.html"
  },
  {
    title: "Killers of the Flower Moon",
    author: "Keanu Reeves",
    rating: "7.4",
    src: "../movie/Tredningmovie/Video/Killers of the Flower Moon — Official Trailer .mp4",
    link: "../movie/Tredningmovie/tranding1.html"
  },
  {
      title: "Avatar2",
      author: "John Doe",
      rating: "4.3",
      src: "../movie/Tredningmovie/Video/Avatar_ The Way of Water .mp4",
      link: "../movie/Tredningmovie/popularMovie4.html"
  },
  {
      title: "Barbie",
      author: "Margot Robbie",
      rating: "4.5",
      src: "../movie/Tredningmovie/Video/Barbie .mp4",
      link: "../movie/Tredningmovie/tranding2.html"
  },
  
];

let currentVideoIndex = 0;

// DOM elements
const videoPlayer = document.getElementById("video-player");
const videoSource = document.getElementById("video-source");
const bannerTitle = document.getElementById("banner-title");
const bannerAuthor = document.getElementById("banner-author");
const bannerRate = document.getElementById("banner-rate");
const watchButton = document.querySelector(".watch-button");
const prevButton = document.getElementById("prev");
const nextButton = document.getElementById("next");

// Function to load a video
function loadVideo(index) {
    const video = videos[index];
    videoSource.src = video.src;
    videoPlayer.load(); // Reload the video
    bannerTitle.textContent = video.title;
    bannerAuthor.textContent = `Author: ${video.author}`;
    bannerRate.textContent = `Rating: ${video.rating}`;
    watchButton.setAttribute("href", video.link); // Dynamically update the link
}

// Event listeners
prevButton.addEventListener("click", () => {
    currentVideoIndex = (currentVideoIndex - 1 + videos.length) % videos.length; // Loop backward
    loadVideo(currentVideoIndex);
});

nextButton.addEventListener("click", () => {
    currentVideoIndex = (currentVideoIndex + 1) % videos.length; // Loop forward
    loadVideo(currentVideoIndex);
});

// Initial load
loadVideo(currentVideoIndex);

const carouselInner = document.getElementById("carousel-inner");
const next = document.getElementById("nextButton");

let scrollPosition = 0;

nextButton.addEventListener("click", () => {
    const cardWidth = document.querySelector(".movie-poster").offsetWidth;
    const carouselWidth = carouselInner.scrollWidth;
    const visibleWidth = carouselInner.parentElement.offsetWidth;

    if (scrollPosition + visibleWidth < carouselWidth) {
        scrollPosition += cardWidth + 20; // Include margin
        carouselInner.style.transform = `translateX(-${scrollPosition}px)`;
    } else {
        // Loop back to the start
        scrollPosition = 0;
        carouselInner.style.transform = "translateX(0)";
    }
});
// Get elements
const scrollLeft = document.getElementById('scroll-left');
const scrollRight = document.getElementById('scroll-right');
const carousel = document.querySelector('.Card-Movie');

// Scroll left
scrollLeft.addEventListener("click", (e) => {
  e.preventDefault();
  carousel.scrollBy({ left: -300, behavior: "smooth" }); // Adjust scroll amount as needed
});

// Scroll right
scrollRight.addEventListener("click", (e) => {
  e.preventDefault();
  carousel.scrollBy({ left: 300, behavior: "smooth" }); // Adjust scroll amount as needed
});
function copyToClipboard(text) {
  navigator.clipboard.writeText(text)
      .then(() => alert("Link copied to clipboard!"))
      .catch(err => alert("Failed to copy the link."));
}

function shareTo(platform) {
  const shareLink = "https://example.com/movie-page";
  let url = "";

  switch (platform) {
      case 'facebook':
          url = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareLink)}`;
          break;
      case 'tiktok':
          alert('TikTok sharing functionality needs an API integration.');
          return;
      default:
          alert('Unsupported platform!');
          return;
  }

  window.open(url, '_blank');
}
