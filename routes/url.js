const express = require("express");
const {
  handleGenerateNewShortURL,
  handleGetAnalytics,
} = require("../controllers/url");

const router = express.Router();

router.post("/", handleGenerateNewShortURL);

//when we enter the created shortid no. of clicks
router.get("/analytics/:shortId", handleGetAnalytics);

module.exports = router;
