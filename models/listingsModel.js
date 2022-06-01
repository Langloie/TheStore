// IMPORT MONGOOSE IN ORDER TO CREATE A SCHEMA
const mongoose = require("mongoose");

// Create our listings schema
const listingsSchema = new mongoose.Schema({
  seller: {
    type: String,
    required: true,
  },
  product: {
    type: String,
    required: true,
  },
  url: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: String,
    required: true,
  },
  amount: {
    type: Number,
    required: true,
  },
});

//  Lets FINALLYYYYYYYY!!!!! CREATE OUR MODEL
const Listing = mongoose.model("Listing", listingsSchema);

module.exports = Listing;