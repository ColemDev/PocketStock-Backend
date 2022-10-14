const express = require("express");
const router = express.Router();

const ComponentsController = require("./controllers/Components-controller");

const OrdersController = require("./controllers/Orders-controller");

const ProductsController = require("./controllers/Products-controller");

router.post("/components/create", ComponentsController.createComponents);

router.get("/components/getAll", ComponentsController.getAllComponents);

router.get("/components/:id", ComponentsController.getComponentById);

router.patch("/components/:id", ComponentsController.updateComponentById);

router.delete("/components/:id", ComponentsController.deleteComponentById);

// Orders Routes

router.post("/orders/create", OrdersController.createOrders);

router.get("/orders/getAll", OrdersController.getAllOrders);

router.get("/orders/:id", OrdersController.getOrderById);

router.patch("/orders/:id", OrdersController.updateOrderById);

router.delete("/orders/:id", OrdersController.deleteOrderById);

//Products Routes

router.post("/products/create", ProductsController.createProducts);

router.get("/products/getAll", ProductsController.getAllProducts);

router.get("/products/:id", ProductsController.getProductById);

router.patch("/products/:id", ProductsController.updateProductById);

router.delete("/products/:id", ProductsController.deleteProductById);

module.exports = router;
