        function playTrailer() {
            const video = document.getElementById('trailer-video');
            const controls = document.getElementById('video-controls');
            const playButton = document.querySelector('.play-button');
            
            video.style.display = 'block';
            controls.style.display = 'flex'; // Show volume and close button
            playButton.style.display = 'none'; // Hide play button
            video.play();
           
        }

        function adjustVolume() {
            const video = document.getElementById('trailer-video');
            const volumeSlider = document.getElementById('volume-slider');
            video.volume = volumeSlider.value;
            
        }

        function closeTrailer() {
            const video = document.getElementById('trailer-video');
            const controls = document.getElementById('video-controls');
            const playButton = document.querySelector('.play-button');
            
            video.pause();
            video.style.display = 'none';
            controls.style.display = 'none'; // Hide volume and close button
            playButton.style.display = 'block'; // Show play button
    }

// Select the image and favorite button
const imageElement = document.getElementById('homepageImage');
const favoriteButton = document.getElementById('favoriteButton');

// Add event listener to favorite button
favoriteButton.addEventListener('click', () => {
  // Store the image URL in localStorage
  const imageUrl = imageElement.src;
  localStorage.setItem('favoriteImage', imageUrl);

  alert('Image added to favorites!');
});