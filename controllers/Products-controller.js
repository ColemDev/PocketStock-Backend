const Products = require("../Models/Products.model");
const Components = require("../Models/Components.model");

module.exports = {
  createProducts: async (req, res, next) => {
    // Product object should look like:
    const { productName, components } = req.body;

    const products = new Products({
      productName,
      components,
    });
    try {
      const dataToSave = products.save();

      res.status(201).json(dataToSave);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  },

  getAllProducts: async (req, res, next) => {
    try {
      const data = await Products.find();
      res.json(data);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  getProductById: async (req, res, next) => {
    try {
      const data = await Products.findById(req.params.id);
      res.json(data);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  updateProductById: async (req, res, next) => {
    try {
      const id = req.params.id;
      const updatedData = req.body;
      const options = { new: true };

      const result = await Products.findByIdAndUpdate(id, updatedData, options);

      res.send(result);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  },

  deleteProductById: async (req, res, next) => {
    try {
      const id = req.params.id;
      const result = await Products.findByIdAndDelete(id);
      res.status(200).send(result);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  },
};
