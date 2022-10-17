const mongoose = require("mongoose");
const orderSchema = new mongoose.Schema({
  product: {
    required: true,
    type: String,
  },
  quantity: {
    required: false,
    type: Number,
    dafault: 0,
  },
});
module.exports = mongoose.model("Orders", orderSchema);
