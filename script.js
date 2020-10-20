const imageContainer = document.getElementById('image-container');
const loader = document.getElementById('loader');

let photosArray = [];

// Unspash Api
const count = 10;
const apiKey = '_hesGOYt6asDFHvrC_R-FuVAeBL-Ql7GnPfQUM5jv7s';
const apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`;

// Get elements for links and photos, add to the DOM
function displayPhotos() {
  // Loop through the photosArray for each object/photo
  photosArray.forEach((photo) => {
    // Create <a> to link to Unsplash
    const item = document.createElement('a');
    item.setAttribute('href', photo.links.html);
    item.setAttribute('target', '_blank');
    // Create <img> el for photo
    const img = document.createElement('img');
    img.setAttribute('src', photo.urls.regular);
    img.setAttribute('alt', photo.alt_description);
    img.setAttribute('title', photo.alt_description);
    // Put the <img> inside <a>, then put both inside the imageContainer element
    item.appendChild(img);
    imageContainer.appendChild(item);
  });
}

// Get photos/data from Unsplash Api
async function getPhotos() {
  try {
    const response = await fetch(apiUrl);
    photosArray = await response.json();
    displayPhotos();
  } catch (error) {
    // Catch error here

  }
}

// On load
getPhotos();