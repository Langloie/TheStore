// IMPORT MONGOOSE IN ORDER TO CREATE A SCHEMA
const mongoose = require("mongoose");

// Create our listings schema
const listingsSchema = new mongoose.Schema({
  Seller: {
    type: String,
    required: true,
  },
  Product: {
    type: String,
    required: true,
  },
  Description: {
    type: String,
    required: true,
  },
  Price: {
    type: String,
    required: true,
  },
  Amount: {
    type: Number,
    required: true,
  }
});

//  Lets FINALLYYYYYYYY!!!!! CREATE OUR MODEL
const Listing = mongoose.model("Listings", listingsSchema);

module.exports = Listing;