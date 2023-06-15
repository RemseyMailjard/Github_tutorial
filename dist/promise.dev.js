"use strict";

// Creating a promise
var getToyPromise = new Promise(function (resolve, reject) {
  // Simulating some asynchronous task (e.g., going to the store)
  setTimeout(function () {
    var toy = "Teddy bear"; // Our promised toy

    var error = false; // Simulating if something went wrong

    if (!error) {
      // If everything went well, resolve the promise with the toy
      resolve(toy);
    } else {
      // If something went wrong, reject the promise with an error message
      reject("Sorry, the store is closed!");
    }
  }, 2000); // Simulating a delay of 2 seconds
}); // Using the promise

console.log("I want a toy!");
getToyPromise.then(function (toy) {
  console.log("Yay, I got a ".concat(toy, "!"));
})["catch"](function (error) {
  console.log(error);
});
console.log("I'll play with my other toys while waiting..."); // Output:
// I want a toy!
// I'll play with my other toys while waiting...
// Yay, I got a Teddy bear!
// Creating a promise using a placeholder API

var getToyPromise2 = new Promise(function (resolve, reject) {
  fetch('https://api.placeholder.com/toys') // Simulating a network request to a toy API
  .then(function (response) {
    return response.json();
  }).then(function (data) {
    var toy = data.toy; // Imaginary toy from the API response

    resolve(toy); // Resolve the promise with the toy
  })["catch"](function (error) {
    reject(error); // Reject the promise if there's an error
  });
}); // Using the promise

console.log("I want a toy!");
getToyPromise.then(function (toy) {
  console.log("Yay, I got a ".concat(toy, "!"));
})["catch"](function (error) {
  console.log("Oops, something went wrong:", error);
});
console.log("While waiting, I'll play with my other toys..."); // Output:
// I want a toy!
// While waiting, I'll play with my other toys...
// Yay, I got a Teddy bear!