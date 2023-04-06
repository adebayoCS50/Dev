const getPhotos = document.getElementById("btn");
const errorMsg = document.getElementById("errorMessage");
const galleryElement = document.getElementById("gallery");

// Fetch images from Unsplash API
async function fetchImages() {
  try {
    const userInput = document.getElementById("input").value;
    const isValidInput = userInput >= 1 && userInput <= 10;

    if (!isValidInput) {
      errorMsg.style.display = "block";
      errorMsg.textContent = "Please enter a number between 1 and 6 inclusive";
      return;
    }

    // Hide the getPhotos button while fetching images
    getPhotos.style.display = "none";

    // Show a loading spinner while fetching images
    const loadingSpinner = `<img src="spinner.svg"/>`;
    galleryElement.innerHTML = loadingSpinner;

    const response = await fetch(
      `https://api.unsplash.com/photos?per_page=${userInput}&page=${Math.round(
        Math.random() * 1000
      )}&client_id=6fqqShXyV2c05Woyo8I7iz1y8G8yQ8DjBKpc5zEvHtE`
    );

    const data = await response.json();

    if (data && data.length > 0) {
      const images = buildImagesHTML(data);
      galleryElement.innerHTML = images;
      galleryElement.style.display = "block";
      errorMsg.style.display = "none";
    } else {
      errorMsg.style.display = "block";
      errorMsg.textContent = "No images found. Try again later.";
    }
  } catch (error) {
    errorMsg.style.display = "block";
    errorMsg.textContent = "An error occurred, Try again later.";
    galleryElement.style.display = "none";
  } finally {
    // Show the getPhotos button after fetching images
    getPhotos.style.display = "block";
  }
}

// Build HTML for images
function buildImagesHTML(images) {
  return images.map(({ urls: { small } }) => `<img src="${small}" alt="image"/>`).join("");
}

// Add event listener to getPhotos button
getPhotos.addEventListener("click", fetchImages);
