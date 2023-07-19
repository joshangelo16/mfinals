/* 
    Program:      MACHINE PROBLEM 2
    Programmer:   Rabino, Joshua Angelo P.
    Section:      24-ALL
    Start Date:   july 18,2023
    End Date:     july 18,2023

*/


const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Connect to your MongoDB server with username and password
mongoose.connect('mongodb+srv://201911992:reapergrimm12@cluster0.vnxuplf.mongodb.net/', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch(error => {
    console.error('Error connecting to MongoDB:', error);
  });

// Define User Schema
const userSchema = new Schema({
  email: { type: String, required: true },
  password: { type: String, required: true },
  isAdmin: { type: Boolean, default: false },
  orderedProducts: [{
    products: [{
      productId: { type: Schema.Types.ObjectId, ref: 'Product' },
      productName: String,
      quantity: Number
    }]
  }],
  totalAmount: Number,
  purchasedOn: { type: Date, default: Date.now }
});

// Define Product Schema
const productSchema = new Schema({
  name: { type: String, required: true },
  description: String,
  price: { type: Number, required: true },
  isActive: { type: Boolean, default: true },
  createdOn: { type: Date, default: Date.now },
  userOrders: [{
    userId: { type: Schema.Types.ObjectId, ref: 'User' },
    orderId: String
  }]
});

// Create User and Product models
const User = mongoose.model('User', userSchema);
const Product = mongoose.model('Product', productSchema);

// Usage example:

// Creating a new user
const newUser = new User({
  email: 'example@example.com',
  password: 'password123',
  isAdmin: true,
  orderedProducts: [{
    products: [{
      productId: '611f7c7b9cfc73a948b64e80',
      productName: 'Example Product',
      quantity: 2
    }]
  }],
  totalAmount: 50.99
});

// Saving the user to the database
newUser.save()
  .then(user => {
    console.log('User created:', user);
  })
  .catch(error => {
    console.error('Error creating user:', error);
  });

// Creating a new product
const newProduct = new Product({
  name: 'Example Product',
  description: 'This is an example product.',
  price: 24.99
});

// Saving the product to the database
newProduct.save()
  .then(product => {
    console.log('Product created:', product);
  })
  .catch(error => {
    console.error('Error creating product:', error);
  });
