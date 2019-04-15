var express = require("express");
var path = require("path");

//then create express app
var app = express();

//create the port
var PORT = process.env.PORT || 8080;

//set up Express app to hadle parsing

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//having access to the directory
app.use(express.static(path.join(_dirname, "./app/public")));

//Router files to give our server map
require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

//Listener
app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});
