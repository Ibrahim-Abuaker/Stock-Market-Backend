const Favourite = require("../schemas/Favourites");
const User = require("../schemas/User");

const getAllFavourites = async (req, res) => {
  try {
    const favourites = await Favourite.find();
    if (!favourites.length) {
      return res.status(404).json({ message: "No favourites found" });
    }
    res.status(200).json(favourites);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const addFav = async (req, res) => {
  const { userId, ticker, stockName, stockPrice } = req.body;
};

module.exports = { getAllFavourites, addFav };
