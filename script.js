// Unspash Api
const count = 10;
const apiKey = '_hesGOYt6asDFHvrC_R-FuVAeBL-Ql7GnPfQUM5jv7s';
const apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`;

// Get photos/data from Unsplash Api

async function getPhotos() {
  try {
    const response = await fetch(apiUrl);
    const data = await response.json();
    console.log(data);
  } catch (error) {
    // Catch error here

  }
}

// On load
getPhotos();