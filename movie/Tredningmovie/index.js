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

function addToFavorites(movieTitle) {
    let favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    if (!favorites.includes(movieTitle)) {
        favorites.push(movieTitle);
        localStorage.setItem('favorites', JSON.stringify(favorites));
        alert(`${movieTitle} has been added to your favorites!`);
    } else {
        alert(`${movieTitle} is already in your favorites!`);
    }
}

function loadFavorites() {
    const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    const favoritesContainer = document.getElementById('favorites-container');
    favoritesContainer.innerHTML = '';

    if (favorites.length === 0) {
        favoritesContainer.innerHTML = '<p>You have no favorite movies yet!</p>';
        return;
    }

    favorites.forEach(movie => {
        const movieElement = document.createElement('div');
        movieElement.className = 'favorite-movie';
        movieElement.innerHTML = `<h3>${movie}</h3>`;
        favoritesContainer.appendChild(movieElement);
    });
}

document.addEventListener('DOMContentLoaded', loadFavorites);