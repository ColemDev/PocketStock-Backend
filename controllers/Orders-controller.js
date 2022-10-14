const Orders = require("../Models/Orders.model");

module.exports = {
  createOrders: async (req, res, next) => {
    const { product, quantity } = req.body;

    const orders = new Orders({
      product,
      quantity,
    });
    try {
      const dataToSave = orders.save();

      res.status(201).json(dataToSave);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  },

  getAllOrders: async (req, res, next) => {
    try {
      const data = await Orders.find();
      res.json(data);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  getOrderById: async (req, res, next) => {
    try {
      const data = await Orders.findById(req.params.id);
      res.json(data);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  updateOrderById: async (req, res, next) => {
    try {
      const id = req.params.id;
      const updatedData = req.body;
      const options = { new: true };

      const result = await Orders.findByIdAndUpdate(id, updatedData, options);

      res.send(result);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  },

  deleteOrderById: async (req, res, next) => {
    try {
      const id = req.params.id;
      const result = await Orders.findByIdAndDelete(id);

      res.send(result);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  },
};
