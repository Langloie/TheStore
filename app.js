//online marketplace (like facebook marketplace)





//add required packages
const express = require('express');
// const mongoose = require('mongoose');
const fs = require('fs');

//import router
const listingsRouter = require('./routes/listingsRoute');

//store the express object in app
const app = express();


//parse request of type json
app.use(express.json());

app.use("/api/v1/listings", listingsRouter);

// get all listings
//  url/listings/




// //create new listing
app.get('/listings/new', (req, res)=>{
  fs.readFile('./new.html', 'utf8', (err, data) => {
      if (err) {
        console.error(err);
        return;
      }
      res.send(data);
    });
});

// //create new listing
app.get('/listings/new', (req, res)=>{
    fs.readFile('./show.html', 'utf8', (err, data) => {
        if (err) {
          console.error(err);
          return;
        }
        res.send(data);
      });
  });

//create a way to handle errors
app.all("*", (request, response, next)=>{
    //create  error
    // const routeError = new Error(`oops... cannot find ${request.originalUrl} on our servers`)

    // //assign a status code
    // routeError.statusCode = 404;

    // //assign a status
    // routeError.status = "fail";

    //send response
    // response.status(routeError.statusCode).json({
    //     status: routeError.status,
    //     message: routeError.message,
    // });
    const routeError = new Error();

    next(routeError);
});

module.exports = app;



//delete listing
//  url/listings/:id

//update listing (price reduction or new description)
//  url/listings/:id

//add create listing form on main page
//  url/listings

//edit entire listing
//  url/listings/:id/edit

//show one listing in the browser
//  url/listings/:id