const btnText = document.getElementById("btn");
const jokeText = document.getElementById("joke");

const apiKey = "ANN5Y2qWw1CHGsQe0nxNoQ==GtbO0kDFhD7JIHY4";

// Set up the api parameters according to API Ninja configuration.
const apiData = {
  method: "GET",
  headers: { // Fix typo: Headers -> headers
    "X-Api-key": apiKey,
  },
};
const apiURL = "https://api.api-ninjas.com/v1/dadjokes?limit=1";

// Create the API endpoint

async function getJoke() { // Rename function to getJoke (singular)
  try {
    jokeText.innerText = "Mic testing..testing..1..2..";
    btnText.disabled = true;
    btnText.innerText = "...thinking";

    const response = await fetch(apiURL, apiData); // Fix typo: fectch -> fetch
    const data = await response.json();

    btnText.disabled = false;
    btnText.innerText = "Take Mic";

    jokeText.innerText = data[0].joke;
  } catch (error) {
    jokeText.innerText =
      "Something unspokable happened and mic dropped, please try again";
    btnText.disabled = false;
    btnText.innerText = "Take Mic";
  }
}

// Move event listener outside of the getJoke function, so it only gets added once.
btnText.addEventListener("click", getJoke);