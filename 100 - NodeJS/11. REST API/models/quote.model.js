const db = require("../data/database");

class Quote {
  constructor() {}
  static async getRandomQoute() {
    const quotes = await db.getDb().collection("quotes").find().toArray();

    const randomQuote = Math.floor(Math.random() * quotes.length);

    return randomQuote;
  }
}
module.exports = Quote;
