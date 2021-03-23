# Project Instructions

This repo is your starter code for the project. It is the same as the starter code we began with in lesson 2. Install and configure Webpack just as we did in the course. Feel free to refer to the course repo as you build this one, and remember to make frequent commits and to create and merge branches as necessary!

The goal of this project is to give you practice with:
- Setting up Webpack
- Sass styles
- Webpack Loaders and Plugins
- Creating layouts and page design
- Service workers
- Using APIs and creating requests to external urls

On top of that, I want to introduce you to the topic of Natural Language Processing. NLPs leverage machine learning and deep learning create a program that can interpret natural human speech. Systems like Alexa, Google Assistant, and many voice interaction programs are well known to us, but understanding human speech is an incredibly difficult task and requires a lot of resources to achieve. Full disclosure, this is the Wikipedia definition, but I found it to be a clear one:

> Natural language processing (NLP) is a subfield of computer science, information engineering, and artificial intelligence
concerned with the interactions between computers and human (natural) languages, in particular how to program computers to
process and analyze large amounts of natural language data.

You could spend years and get a masters degree focusing on the details of creating NLP systems and algorithms. Typically, NLP programs require far more resources than individuals have access to, but a fairly new API called Aylien has put a public facing API in front of their NLP system. We will use it in this project to determine various attributes of an article or blog post.

## Getting started

It would probably be good to first get your basic project setup and functioning. Follow the steps from the course up to Lesson 4 but don't add Service Workers just yet. We won't need the service workers during development and having extra caches floating around just means there's more potential for confusion. So, fork this repo and begin your project setup.

Remember that once you clone, you will still need to install everything:

`cd` into your new folder and run:
- `npm install`

## Setting up the API

The Meaningcloud API is helps incorporate Natural Language Processing in a quite abstract way so that all developers can use and integrate with seamlessly. It accepts either a text or a url and returns proper analysis to what sentiments shall this content be delivering 

### Step 1: Signup for an API key
First, you will need to go [here](https://www.meaningcloud.com/developer/sentiment-analysis). Signing up will get you an API key. Don't worry, at the time of this course, the API is free to use up to 1000 requests per day or 333 intensive requests. It is free to check how many requests you have remaining for the day.

### Step 4: Environment Variables
Next we need to declare our API keys, which will look something like this:
```
// set meaningcloud API credentias
var textapi = new meaningcloud({
  application_id: "your-api-id",
  application_key: "your-key"
});
```

...but there's a problem with this. We are about to put our personal API keys into a file, but when we push, this file is going to be available PUBLICLY on Github. Private keys, visible publicly are never a good thing. So, we have to figure out a way to make that not happen. The way we will do that is with environment variables. Environment variables are pretty much like normal variables in that they have a name and hold a value, but these variables only belong to your system and won't be visible when you push to a different environment like Github.

- [ ] Use npm or yarn to install the dotenv package ```npm install dotenv```. This will allow us to use environment variables we set in a new file
- [ ] Create a new ```.env``` file in the root of your project
- [ ] Go to your .gitignore file and add ```.env``` - this will make sure that we don't push our environment variables to Github! If you forget this step, all of the work we did to protect our API keys was pointless.
- [ ] Fill the .env file with your API keys like this:
```
API_ID=**************************
API_KEY=**************************
```
- [ ] Add this code to the very top of your server/index.js file:
```
const dotenv = require('dotenv');
dotenv.config();
```
- [ ] Reference variables you created in the .env file by putting ```process.env``` in front of it, an example might look like this:

--And you can use them everywhere in the project. My project has two environment variables; one for the endpoint that we shall use to fetch the analysis data after the user 
submits the correct url: 
1-API_URL=https://api.meaningcloud.com/sentiment-2.1	

The other one is simply the API_KEY=YOUR_OWN_API_KEY and you can signup through the link above and get your own. 

### Step 5: Using the API

We're ready to go! The API has a lot of different endpoints you can take a look at [here](https://www.meaningcloud.com/developer/documentation). And you can see how it operates. 

I won't provide further examples here, as it's up to you to create the various requests and make sure your server is set up appropriately.

## After the Meaning Cloud API

Once you are hooked up to the Aylien API, you are most of the way there! Along with making sure you are following all the requirements in the project rubric in the classroom, here are a few other steps to make sure you take.

*There are two major functions that manipulates the flow of the process in this project: 

checkURL --> it validates the input url given by the user thorugh a regular expression and it displays a warning in case this url is invalid 

handleSubmit --> it fetches the input text given by the user, passes it to the checkURL function, submit the request with the valid url to the server and then, display the 
returned data from the server in the UI (under the form-results section)

# Step 6: Testing the functions using jest 

There is a test done by jest applied on both functions to make sure that they work properly. There has to be a minor modification on the package.json so that you can have something like this in the end: 
"test":"jest"
and then, have your test scripts inside a separate folder named, "__test__" which will contain a separate file for each function's test script

-- You can simply run the test using the following command: npm run test 
The test results will show up in your log either they fail or pass 

# Step 7: Adding the service worker to your app 

--As we always do, we add the new plugin that supports the service workers within your app and then add this script inside the index html to activate the service worker and 
let the app be available online 
```
// Check that service workers are supported
if ('serviceWorker' in navigator) {
    // Use the window load event to keep the page load performant
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/service-worker.js');
    });
}
```

## Deploying

The final step is deploying the website. Netlify would be a great option to start with as a beginner. It is simple and straightforwards. I added the following configs to my 
deployment settings so that the build runs smoothly. 
publish folder --> dist 
build command --> npm run build-prod 
base folder --> /evaluate-news-nlp

*Here is a link to my deployed version of the task: 
https://adoring-spence-10e5c4.netlify.app/

P.S. The server has to be operating so make sure to run (npm run start) before you test the website. 
