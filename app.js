import express from "express";
import logger from "morgan";
import router from "./routes/catsRouter.js"

const PORT = process.env.PORT || "3000";
const app = express();

app.use(logger("dev")); //to log all requests
app.use(express.json()); //middleware -allow server receive json obj w/ post requests
app.use(express.static("public"));//middleware tell express app to statically serve public folder, as soon as it gets requests

/** DO NOT CHANGE THIS ROUTE - it serves our front-end */
app.get("/", function (req, res) {
  res.render("index", { title: "Cats" }); //used for views - pass to 
});



/* Your tasks for part 1: 🔻 
- 👉 Add request handlers/routes for your API that will handle requests to the path "/api/cats" for all the 
cats, providing the data in the cats array in this file. Test this in your browser.
- 👉 Add code to also handle requests for a cat by id using params, and cats by name using a query. 
Test this in your browser.
- 👉 Test the form on the front-end here: http://localhost:3000

Steps
Part I - npm i
app.use - the path, and then the router
In the router, define the route, define the function which will be used and imported, and what to send back as json.
Create the functions in models and export to routes. 

Part I - stage 2
Create route for /:id and cat by name using a string query ?name=, define functions, and then write functions in the models folder and export them to be used in route.

*/

app.listen(PORT, function () {
  console.log(`Server listening on port: ${PORT}`);//app.js is executed in the server with npm run - serves you the files. node executes app.js, send to browser main.js
  //browser executes main.js. Server is application running inside the terminal
});

app.use("/api/cats", router)



