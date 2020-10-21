const imageContainer = document.getElementById('image-container');
const loader = document.getElementById('loader');

let photosArray = [];

// Unsplash Api
const count = 10;
const apiKey = '_hesGOYt6asDFHvrC_R-FuVAeBL-Ql7GnPfQUM5jv7s';
const apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`;

// Helper function to set attributes to the DOM elements
function setAttributes(element, attributes) {
  for(const key in attributes) {
    element.setAttribute(key, attributes[key]);
  }
}

// Get elements for links and photos, add to the DOM
function displayPhotos() {
  // Loop through the photosArray for each object/photo
  photosArray.forEach((photo) => {
    // Create <a> to link to Unsplash
    const item = document.createElement('a');

    setAttributes(item, {
      href: photo.links.html,
      target: '_blank',
    });
    // Create <img> el for photo
    const img = document.createElement('img');

    setAttributes(img, {
      src: photo.urls.regular,
      alt: photo.alt_description,
      title: photo.alt_description,
    });
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
