const mongoose = require("mongoose");

const componentsSchema = new mongoose.Schema({
  component: {
    required: true,
    type: String,
  },
  stockLevel: {
    required: true,
    type: Number,
  },
  triggerPoint: {
    required: false,
    type: Number,
  },
});

module.exports = mongoose.model("Components", componentsSchema);
