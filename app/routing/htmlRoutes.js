var path = require("path");

//Routing to html(gets the html get request and then shows the user)
module.exports = function(app) {
  app.get("/survey", function(req, res) {
    res.sendFile(path.join(_dirname, "../public/survey.html"));
  });
};
app.get("*", function(req, res) {
  res.sendFile(path.join(_dirname, "../public/home.html"));
});
