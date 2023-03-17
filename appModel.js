// appModel.js
const mongoose = require('mongoose');

const appSchema = new mongoose.Schema({
  name: { type: String, required: true },
  developer: { type: String, required: true },
  description: String,
  category: String,
  downloads: Number,
  rating: Number,
  price: Number,
});

const App = mongoose.model('App', appSchema);

module.exports = App;

