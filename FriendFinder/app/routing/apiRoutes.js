
var friends = require("../data/friends");

module.exports = function(app) {

  app.get("/api/friends", function(req, res) {
    res.json(peeps);
  });

  app.post("/api/friends", function(req, res) {


  });
};
