const getPhotos = document.getElementById("btn");
const errorMsg = document.getElementById("errorMessage");
const galleryElement = document.getElementById("gallery");

async function fetchImages() {
  const userInput = document.getElementById("input").value;
  
  if (userInput > 10 || userInput < 1) {
    errorMsg.style.display = "block";
    errorMsg.innerText = "Please enter a number between 1 and 6 inclusive";
    return;
  }
  img = " ";
  try {
    getPhotos.style.display = "none";
    const loading= `<img src="spinner.svg"/>`
    galleryElement.innerHTML = loading;

    await fetch(
      `https://api.unsplash.com/photos?per_page=${userInput}&page=${Math.round(
        Math.random() * 1000
      )}&client_id=...`
    ).then((res) =>
      res.json().then((data) => {
        if (data) {
          data.forEach((pic) => {
            img += `<img src="${pic.urls.small} alt="image"/>`;
          });
          galleryElement.style.display = 'none';
          galleryElement.innerHTML = img;
          getPhotos.style.display = "block";
          errorMsg.style.display = "none";

        }
      })
    );
    
  } catch (error) {
    errorMsg.style.display = "block";
    errorMsg.innerHTML = "An error occurred, Try again later.";
    getPhotos.style.display = "block";
    galleryElement.style.display = 'none';
  }
}

getPhotos.addEventListener("click", fetchImages);
