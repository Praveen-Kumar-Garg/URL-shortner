const shortid = require("shortid");
const URL = require("../models/url");
//definig controllers
async function handleGenerateNewShortURL(req, res) {
  const body = req.body;
  if (!body.url) return res.status(400).json({ error: "url is required" });
  const shortID = shortid();


  //creating shorturl by using 'shortid' from npm which generate random words
  await URL.create({
    shortId: shortID,
    redirectURL: body.url,
    visitHistory: [],
  });

  return res.json({ id: shortID });
}

//used to get the no. of clicks 

async function handleGetAnalytics(req, res) {
  const shortId = req.params.shortId;
  //find the shortId
  const result = await URL.findOne({ shortId });
  return res.json({
    //the array 'visithistory' which contain how many time we have
    totalClicks: result.visitHistory.length,
    analytics: result.visitHistory,
  });
}

module.exports = {
  handleGenerateNewShortURL,
  handleGetAnalytics,
};
