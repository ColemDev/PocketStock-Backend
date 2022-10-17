const express = require("express");
const router = express.Router();

const ComponentsController = require("./controllers/Components-controller");

const OrdersController = require("./controllers/Orders-controller");

const ProductsController = require("./controllers/Products-controller");

router.post("/components/", ComponentsController.createComponents);

router.get("/components/", ComponentsController.getAllComponents);

router.get("/components/:id", ComponentsController.getComponentById);

router.patch("/components/:id", ComponentsController.updateComponentById);

router.delete("/components/:id", ComponentsController.deleteComponentById);

// Orders Routes

router.post("/orders/", OrdersController.createOrders);

router.get("/orders/", OrdersController.getAllOrders);

router.get("/orders/:id", OrdersController.getOrderById);

router.patch("/orders/:id", OrdersController.updateOrderById);

router.delete("/orders/:id", OrdersController.deleteOrderById);

//Products Routes

router.post("/products/", ProductsController.createProducts);

router.get("/products/", ProductsController.getAllProducts);

router.get("/products/:id", ProductsController.getProductById);

router.patch("/products/:id", ProductsController.updateProductById);

router.delete("/products/:id", ProductsController.deleteProductById);

module.exports = router;
