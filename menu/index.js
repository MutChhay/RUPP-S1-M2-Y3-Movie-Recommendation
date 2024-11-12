// Retrieve the image URL from localStorage
const favoriteImageUrl = localStorage.getItem('favoriteImage');

// If there's a favorite image URL, display it
if (favoriteImageUrl) {
  const img = document.createElement('img');
  img.src = favoriteImageUrl;
  img.alt = 'Favorite Image';
  document.getElementById('favoriteImageContainer').appendChild(img);
} else {
  // Optional: Display a message if no image is favorited
  document.getElementById('favoriteImageContainer').innerText = 'No favorite image selected';
}