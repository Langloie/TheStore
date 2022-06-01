//import mongoose to connect to db
const mongoose = require('mongoose');

//import dotenv
const dotenv = require('dotenv');

//use dotenv to connect config file
dotenv.config({
    path: "./config.env"
});

console.log(process.env)


// IMPORT OUR EXPRESS APPLICATION
const app = require("./app");

//variable to represent database
const listingsDB = mongoose.connect(process.env.DATABASE.replace("<password>",process.env.PASSWORD)).then(()=>{
    console.log("Database is now up and running");
});


// //readfile
// app.get('/products', (req, res)=>{
//     fs.readFile('./index.html', 'utf8', (err, data) => {
//         if (err) {
//           console.error(err);
//           return;
//         }
//         res.send(data);
//       });
// });



// Create a variable that represent our port number
const port = 3000;

// Listen to the request/response cycle
app.listen(port, () => {
  console.log(`Server started on port ${port}...`);
});


// app.delete('/home/:id', (req, res) => {
//   console.log(req.params.id)
//  Products.findByIdAndDelete(req.params.id)
//      console.log("Item was deleted")
//      res.redirect('Deleted')
  
