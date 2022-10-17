const mongoose = require("mongoose");

const productComponentSchema = new mongoose.Schema({
  componentId: {
    required: true,
    type: mongoose.Types.ObjectId,
    ref: "Components",
  },
  component: {
    required: true,
    type: String,
  },
  quantity: {
    required: true,
    type: Number,
  },
});

const productsSchema = new mongoose.Schema({
  productName: {
    required: true,
    type: String,
  },
  components: {
    required: true,
    type: [productComponentSchema],
  },
});

module.exports = mongoose.model("Products", productsSchema);
