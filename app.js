//online marketplace (like facebook marketplace)

//add required packages
const express = require('express');
const mongoose = require('mongoose');


const app = express();

const PORT = 3000;

//parse request of type json
app.use(express.json());



// get all listings
//  url/listings/

app.get('/listings', (req, res)=>{
    res.json({'message': "listings page"})
})


app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`);
})

// create new listing
//  url/listings/new

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