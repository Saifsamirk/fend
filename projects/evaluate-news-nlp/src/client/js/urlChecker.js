function checkURL(inputText) {
  // Initialize a regex to validate the url entered by the user
  const regex = /^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:[/?#]\S*)?$/i;

  // Test the input text if it matches the specified expression or not
  const match = regex.test(inputText);

  // Get the element that holds the validation message by its id
  const validationMsg = document.getElementById("validation-msg");

  // Set a condition to add an error message to the span if the url is incorrect or
  // remove it in case it is valid
  if (!match && validationMsg) {
    validationMsg.innerText = "Please add a valid url";
    // Remove the class that hides the the validation message in case
    // the url is corrupt
    validationMsg && validationMsg.classList.remove("d-none");
  }
  // Remove the validation message if the link is valid
  else {
    validationMsg && validationMsg.classList.add("d-none");
  }

  // Return the result of the URL testing to either proceed with
  // the fetch request or stop
  return match;
}

export { checkURL };
