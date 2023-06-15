//Get request example
fetch("http://www.boredapi.com/api/activity/") // Grab the base URL from an API and let the promise begin
  .then((response) => response.json()) ////HTTP Status code is important 200 or 201 = ok
  //   Then when the Promise has been completed... show me the response
  // Response value changing the body into a json object... WAIT I promise I will do that for you.
  .then((data) => console.log(data.activity));

//  1. Im not getting it
// 2. Sort of have to pratice more
// 3. I`m getting it!

//Get request example
fetch("https://api.chucknorris.io/jokes/random") // Grab the base URL from an API and let the promise begin
  .then((response) => response.json()) ////HTTP Status code is important 200 or 201 = ok
  //   Then when the Promise has been completed... show me the response
  // Response value changing the body into a json object... WAIT I promise I will do that for you.
  .then((data) => console.log(data.value));

//  1. Im not getting it
// 2. Sort of have to pratice more
// 3. I`m getting it!

// Fetching a random joke from the Chuck Norris API
fetch("https://api.chucknorris.io/jokes/random")
  .then((response) => response.json())
  .then((data) => {
    const joke = data.value; // Extracting the joke from the API response
    console.log(joke); // Displaying the joke in the console or you can show it on the webpage
  })
  .catch((error) => {
    console.log("Oops, something went wrong:", error);
  });

// Fetching a random joke from the Chuck Norris API using await and async
async function fetchRandomJoke() {
  try {
    const response = await fetch("https://api.chucknorris.io/jokes/random"); // Wait for the response
    const data = await response.json(); /// convert the response to JSON using the .json() method.
    const joke = data.value; // Extracting the joke from the API response
    console.log(joke); // Displaying the joke in the console or you can show it on the webpage
  } catch (error) {
    console.log("Oops, something went wrong:", error);
  }
}

fetchRandomJoke();

async function fetchRandomJoke() {
  try {
    const response = await fetch("https://api.chucknorris.io/jokes/random");
    const data = await response.json();
    const joke = data.value; // Extracting the joke from the API response
    handleJoke(joke); // Call a different function to handle the joke
  } catch (error) {
    console.log("Oops, something went wrong:", error);
  }
}

function handleJoke(joke) {
  console.log("Received joke:", joke);
  // Handle the joke data as needed, such as displaying it on a webpage or performing additional operations
}

fetchRandomJoke();

let resultJoke2; // Variable to store the resulting joke

async function fetchRandomJoke() {
  try {
    const response = await fetch("https://api.chucknorris.io/jokes/random");
    const data = await response.json();
    resultJoke = data.value; // Store the joke in the result variable
    handleJoke(); // Call a different function to handle the joke
  } catch (error) {
    console.log("Oops, something went wrong:", error);
  }
}

function handleJoke() {
  console.log("Received joke:", resultJoke);
  // Handle the joke data as needed, such as displaying it on a webpage or performing additional operations
}

fetchRandomJoke();

let resultJoke; // Variable to store the resulting joke

async function fetchRandomJoke() {
  try {
    const response = await fetch("https://api.chucknorris.io/jokes/random");

    if (response.ok) {
      const data = await response.json();
      resultJoke = data.value; // Store the joke in the result variable
      handleJoke(); // Call a different function to handle the joke
    } else {
      throw new Error("Failed to fetch joke. HTTP status: " + response.status);
    }
  } catch (error) {
    console.log("Oops, something went wrong:", error);
  }
}

function handleJoke() {
  console.log("Received joke:", resultJoke);
  // Handle the joke data as needed, such as displaying it on a webpage or performing additional operations
}

fetchRandomJoke();
