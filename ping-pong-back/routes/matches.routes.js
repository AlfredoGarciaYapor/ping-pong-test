var express = require('express');
var router = express.Router();
const { saveMatch, getMatches } = require('../controllers/matches.controller');

router.post("/savegame", saveMatch);
router.get("/allMatches", getMatches);

module.exports = router;