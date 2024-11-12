const images = document.querySelectorAll('.banner-img');
let currentIndex = 0;
const totalImages = images.length;

function showNextImage() {
    // Remove the 'active' class from the current image
    images[currentIndex].classList.remove('active');

    // Calculate the next image index
    currentIndex = (currentIndex + 1) % totalImages;

    // Add the 'active' class to the next image
    images[currentIndex].classList.add('active');
}

// Change image every 3 seconds
setInterval(showNextImage, 3000);


document.addEventListener("DOMContentLoaded", function() {
    const menu = document.querySelector(".menu");
    const dropdown = document.querySelector(".list-down");

    menu.addEventListener("click", function(event) {
        dropdown.classList.toggle("show"); // Toggle the .show class
    });

    // Optional: Close the dropdown when clicking outside
    document.addEventListener("click", function(event) {
        if (!menu.contains(event.target)) {
            dropdown.classList.remove("show");
        }
    });
});
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

// trending movie
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

