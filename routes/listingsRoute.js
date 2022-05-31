// IMPORT EXPRESS TO CREATE EXPRESS ROUTERS
const express = require("express");

// IMPORT OUR LEARNER CONTROLLER
const listingsController = require("./../controllers/listingsControllers");

// Create an express router
const router = express.Router();

// Lets refactor our route handlers
router
  .route("/")
  .get(listingsController.getAllListings)
  .post(listingsController.createListing);
router
  .route("/:id")
  .get(listingsController.getSingleListing)
  .patch(listingsController.updateListing)
  .delete(listingsController.deleteListing);

// EXPORT OUR ROUTER TO BE USED IN OTHER PARTS OF OUR APPLICATION
module.exports = router;