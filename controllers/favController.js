// controllers/favouritesController.js
const Favorite = require("../schemas/Favorite");
const User = require("../schemas/User");
const getAllFavorites = async (req, res) => {
  try {
    if (!req.user) {
      throw new Error("Not authenticated");
    }
    const user_id = req.user._id; // get user id from request
    const userFavorites = await Favorite.find({ user_id });

    if (!userFavorites.length) {
      return res.send("No favourites found for this user");
    }
    res.json(userFavorites);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
const addToFavorites = async (req, res) => {
  try {
    const user_id = req.user._id; // get user id from request
    console.log("user Id :", user_id);
    console.log("req.body :", req.body);
    const newFavorite = await Favorite.create({
      user_id: user_id,
      stock: {
        name: req.body.name,
        ticker: req.body.ticker,
      },
    });
    console.log("new favourite :", newFavorite);
    const user = await User.findById(user_id);
    user.favorites.push(newFavorite);
    await user.save();
    const populatedUser = await User.findById(user_id).populate("favorites");
    res
      .status(201)
      .json({ message: "new fav added", data: populatedUser.favorites });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const removeFromFavorites = async (req, res) => {
  try {
    const user_id = req.user._id;
    const { favId } = req.params;
    console.log("ID: ", favId);
    const fav = await Favorite.findByIdAndDelete(favId);
    if (!fav) {
      return res.status(404).json({ message: "Fav not found" });
    }
    await User.findByIdAndUpdate(user_id, {
      $pull: { favorites: favId },
    });
    res.json({ message: "Favorite removed" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { getAllFavorites, addToFavorites, removeFromFavorites };
