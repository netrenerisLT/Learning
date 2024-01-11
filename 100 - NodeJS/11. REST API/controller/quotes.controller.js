const Quote = require("../models/quote.model");

async function getRandomQuote(req, res, next) {
  const randomQoute = await Quote.getRandomQoute();
  res.json({
    quote: randomQoute,
  });
}

module.exports = {
  getRandomQuote: getRandomQuote,
};
