const mongoose = require("mongoose");

const favSchema = new mongoose.Schema({
  userId: {
    type: String,
    required: true,
  },
  ticker: {
    type: String,
    required: true,
  },
  stockName: {
    type: String,
    required: true,
  },
  stockPrice: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model("Favorites", favSchema);
