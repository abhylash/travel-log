const mongoose = require("mongoose");

const TravelSchema = new mongoose.Schema({
  title: String,
  location: String,
  description: String,
  food: String,
  stay: String,
  localTravel: String,
  tourGuide: String,
  userId: String
});

module.exports = mongoose.model("Travel", TravelSchema);
