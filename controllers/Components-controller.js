const Components = require("../Models/Components.model");

module.exports = {
  createComponents: async (req, res, next) => {
    const { component, stockLevel, triggerPoint } = req.body;

    const components = new Components({
      component,
      stockLevel,
      triggerPoint,
    });
    try {
      const dataToSave = components.save();

      res.status(201).json(dataToSave);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  },

  getAllComponents: async (req, res, next) => {
    try {
      const data = await Components.find();
      res.json(data);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  getComponentById: async (req, res, next) => {
    try {
      const data = await Components.findById(req.params.id);
      res.json(data);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  updateComponentById: async (req, res, next) => {
    try {
      const id = req.params.id;
      const updatedData = req.body;
      const options = { new: true };

      const result = await Components.findByIdAndUpdate(
        id,
        updatedData,
        options
      );

      res.status(201).send(result);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  },

  deleteComponentById: async (req, res, next) => {
    try {
      const id = req.params.id;
      const data = await Components.findByIdAndDelete(id);
      res.send(`Document with ${data.id} has been deleted..`);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  },
};
