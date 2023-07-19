const express = require('express');
const mongoose = require('mongoose');

// Create the Express app
const app = express();

// Connect to your MongoDB server
mongoose.connect('mongodb+srv://201911992:reapergrimm12@cluster0.vnxuplf.mongodb.net/', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch(error => {
    console.error('Error connecting to MongoDB:', error);
  });

// Define your routes and handlers here

// Start the server
const port = 4000; // Change the port number if needed
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
