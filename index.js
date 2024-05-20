var express = require('express');
var bodyParser = require('body-parser');
const isSea = require('is-sea');

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.post("/latlon", (req, res) => {
  latlon = req.body.latlon
  res.json({ result: isSea(latlon[0], latlon[1]) });
});

app.listen(process.env.PORT || 4000);
