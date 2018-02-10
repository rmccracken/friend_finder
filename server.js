const express = require('express');
const bodyParser = require("body-parser");

var PORT = process.env.PORT || 3000;
var app = express();

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

app.listen(PORT, function () {
  console.log("App listening on PORT " + PORT);
});