//import model to create new listing
const Listing = require('../models/listingsModel');

// Refactor route controllers
// This is to retrieve all the listings at once
exports.getAllListings = async (request, response) => {
    try{
    const listings = await Listing.find();
    response.status(200).json({
      status: "success",
      data: {
        listings: listings,
      },
    });
    }catch(error){
        response.status(500).json({
            status: "error",
            message: error,
        })
    }
  };
   
  // This controller is to create a new listing
  exports.createListing = async (request, response) => {
      try{
    //lets create our first listing
    const newListing = await Listing.create(request.body);
    
    response.status(201).json({
      status: "success",
      data: {
        newListing: newListing,
      },
    });
    }catch(error){
        response.status(500).json({
            status: "error",
            message: error,
        })
    }
  };
  
  // This controller is to retrieve a single listing
  exports.getSingleListing = async (request, response) => {
    try{
    const listing = await Listing.findById(request.params.id);
    console.log(listing);
    response.status(200).json({
      status: "success",
      data: {
        listing: listing,
      },
    });
    }catch(error){
        response.status(500).json({
            status: "error",
            message: error,
        })
    }   
  };
  
  // This controller is to update a single listing data
  exports.updateListing = async (request, response) => {
    try{
        const updateListing = await Listing.findByIdUpdate(request.params.id, request.body, {new: true});
    response.status(200).json({
      status: "success",
      data: {
        updateListing,
      },
    });
    }catch(error){
        response.status(500).json({
            status: "error",
            message: error,
        })
    }
  };
  
  // This controller is to delete a single listing
  exports.deleteListing = async (request, response) => {
      try{
          await Listing.findByIdAndDelete(request.params.id);
    response.status(204).json({
      status: "success",
      data: {},
    });
    }catch(error){
        response.status(500).json({
        status: "error",
        message: error,
        })
    }
  };