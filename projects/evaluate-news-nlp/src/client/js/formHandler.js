import { checkURL } from "./urlChecker";

function handleSubmit(event) {
  // Prevent the form from reloading
  event && event.preventDefault();

  // Check what text was put into the form field
  let inputURL =
    document.getElementById("name") && document.getElementById("name").value;

  // Call the function the validates the url to make sure if
  // it is valid or not
  const validURL = checkURL(inputURL);

  // Initialize an object for the headers of the request body that shall be sent
  // to the server
  const requestHeaders = {
    method: "POST",
    credentials: "same-origin",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
    },
    // Add the input url to the body of the request to post it
    // to the server and get the corresponding response
    body: JSON.stringify({
      url: inputURL,
    }),
  };

  // Check if the url is valid or not and upon this, post the url
  // to the server or not
  if (validURL) {
    // Get the form loader by its id and display it as flex
    const loader = document.getElementById("page-loader");
    loader.style.display = "flex";
    // Initialize a fetch request that will send a post request to
    // the server through the endpoint
    fetch("http://localhost:8082/add-url", requestHeaders)
      .then((res) => res.json())
      .then(function (res) {
        // Hide the loader once the request to the server succeeds
        loader.style.display = "none";
        // Get the targeted properties (through object destructing) that
        // shall be displayed within the form results
        const { score_tag, agreement, subjectivity, confidence, irony } = res;
        // Change the style of the form results container to be displayed as
        // flex not none
        document.getElementById("form-results").classList.remove("d-none");
        // Change the innerHTML of the results tag and add the resulted
        // properties fetched from the server accordingly
        document.getElementById("results").innerHTML = `
        <span><b>Score Tag : </b>${score_tag}</span>
        <span><b>Agreement : </b>${agreement}</span>
        <span><b>Subjectivity : </b>${subjectivity}</span>
        <span><b>Confidence : </b>${confidence}</span>
        <span><b>Irony : </b>${irony}</span>
      `;
      })
      .catch((error) => {
        // Hide the loader once the request to the server succeeds
        loader.style.display = "none";
        // Add an error msg to the user when the request to the server
        // fails
        document.getElementById("results").innerText =
          "The request has failed. Kindly try again!";
      });
  }
}

export { handleSubmit };
