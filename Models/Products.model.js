const mongoose = require("mongoose");

const productsSchema = new mongoose.Schema({
  id: {
    required: true,
    type: Number,
  },
  productName: {
    required: true,
    type: String,
  },
  components: {
    required: true,
    type: Array,
  },
  __v: {
    required: false,
    type: Number,
  },
});

module.exports = mongoose.model("Products", productsSchema);
