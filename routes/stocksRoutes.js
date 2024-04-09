const express = require("express");
const router = express.Router();
const {
  getStockMetaData,
  getStockInfo,
  getStockHistoricData,
  getRandomStockData,
} = require("../controllers/stocksController");

// router.route("/tickerSearch/:ticker").get(getStockMetaData);
router.route("/prices/:ticker").get(getStockInfo);
router.route("/prices/:ticker/full").get(getStockHistoricData);
router.route("/random").get(getRandomStockData);

module.exports = router;
