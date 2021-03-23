// Get the API key that we declared inside the .env file
var dotenv = require("dotenv");
dotenv.config();

// Get the API url from the environment variables file as it is
// declared there
const apiURL = process.env.API_URL;

// Get the API key declared in the .env file to be used
// in the request sent to the server
const apiKEY = process.env.API_KEY;

// Declare a constant that will store the value
// of the used port along the project
const usedPort = 8082;

var path = require("path");
var express = require("express");
var mockAPIResponse = require("./mockAPI.js");

// Import the cors to be used here in the server
var cors = require("cors");

var app = express();

app.use(cors());

app.use(express.static("dist"));

console.log(__dirname);

app.get("/", function (req, res) {
  // res.sendFile('dist/index.html')
  res.sendFile(path.resolve("src/client/views/index.html"));
});

// designates what port the app will listen to for incoming requests
app.listen(usedPort, (error) => {
  if (error) throw new Error(error);
  console.log(`Server listening on port ${usedPort}!`);
});

app.get("/test", function (req, res) {
  res.send(mockAPIResponse);
});

var fetch = require("node-fetch");

app.use(express.json()); // <==== parse request body as JSON

// INFO: a route that handling post request for new URL that coming from the frontend
app.post("/add-url", async (req, res) => {
  try {
    // Declare a variable that holds the url of the post request
    const addURL = `${apiURL}?key=${apiKEY}&of=json&lang=en&url=${req.body.url}`;

    fetch(addURL)
      .then((response) => response.json())
      .then((data) => {
        res.send(data);
      });
  } catch (error) {
    console.log(error.message);
  }
});
