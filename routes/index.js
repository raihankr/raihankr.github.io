var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index_1', {
    skills: req.app.locals.contents.skills_overview,
  });
});

module.exports = router;
