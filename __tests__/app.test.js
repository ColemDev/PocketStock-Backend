const mongoose = require("mongoose");
const request = require("supertest");
const app = require("../app");
const Components = require("../Models/Components.model");
const Orders = require("../Models/Orders.model");
const Products = require("../Models/Products.model");

require("dotenv").config();
/*connecting to the database before each test. */

beforeEach(async () => {
  await mongoose.connect(process.env.DATABASE_URL);
});
/*closing the connection after each test. */
afterEach(async () => {
  await mongoose.connection.close();
});

Components;
describe("POST /components", () => {
  it("should create a new component", async () => {
    const id = 100;
    const component = {
      component: "swallow-tail drawer back",
      stockLevel: 24,
      triggerPoint: 12,
    };
    jest
      .spyOn(Components.prototype, "save")
      .mockImplementationOnce(() => component);
    const res = await request(app).post("/api/components").send();
    console.log(res);
    expect(res.statusCode).toBe(201);
    expect(res.body.component).toBe(component.component);
    expect(res.body).hasOwnProperty(id);
  });
});

describe("GET /components", () => {
  it("should return all components", async () => {
    const res = await request(app).get("/api/components");
    expect(res.statusCode).toBe(200);
    expect(res.body).toBeInstanceOf(Array);
    expect(res.body[0]).toBeInstanceOf(Object);
    expect(res.body.length).toBeGreaterThan(0);
  });
});

describe("GET /components/:id", () => {
  it("should return a component with the matching id number", async () => {
    const id = 1;
    const component = {
      id,
      component: "to be decided",
      stockLevel: 42,
      triggerPoint: 21,
    };
    const findByIdSpy = jest.spyOn(Components, "findById");
    findByIdSpy.mockImplementation(() => component);

    const res = await request(app).get(`/api/components/${id}`);
    expect(res.statusCode).toBe(200);
    expect(res.body).toEqual(component);
    findByIdSpy.mockRestore();
  });
});

describe("PATCH /components/:id", () => {
  it("should update a product", async () => {
    const id = 2;
    const component = {
      component: "dove-tailed joint drawer back",
      stockLevel: 24,
      triggerPoint: 12,
    };

    const findByIdAndUpdateSpy = jest.spyOn(Components, "findByIdAndUpdate");
    findByIdAndUpdateSpy.mockImplementation(() => ({ ...component, id }));

    const res = await request(app)
      .patch(`/api/components/${id}`)
      .send(component);
    expect(findByIdAndUpdateSpy).toHaveBeenCalled();
    expect(res.statusCode).toBe(201);
    expect(res.body.component).toBe("dove-tailed joint drawer back");
    expect(res.body.id).toBe(2);
    findByIdAndUpdateSpy.mockRestore();
  });
});

describe("DELETE /api/components/:id", () => {
  it("should delete a product", async () => {
    const id = 2;
    const findByIdAndDeleteSpy = jest.spyOn(Components, "findByIdAndDelete");
    findByIdAndDeleteSpy.mockImplementation(() => ({ id }));
    const res = await request(app).delete(`/api/components/${id}`);
    expect(res.statusCode).toBe(200);
    findByIdAndDeleteSpy.mockRestore();
  });
});

//Orders
describe("POST /orders", () => {
  it("should create a new order", async () => {
    const product = "swallow-tail drawer back";
    const quantity = 24;

    const order = {
      product,
      quantity,
    };

    jest.spyOn(Orders.prototype, "save").mockImplementationOnce(() => order);

    const res = await request(app).post("/api/orders").send(order);
    expect(res.statusCode).toBe(201);
    expect(res.body.product).toBe(order.product);
    expect(res.body.quantity).toBe(order.quantity);
  });
});

describe("GET /orders", () => {
  it("should return all orders", async () => {
    const res = await request(app).get("/api/orders");
    expect(res.statusCode).toBe(200);
    expect(res.body).toBeInstanceOf(Array);
    expect(res.body[0]).toBeInstanceOf(Object);
    expect(res.body.length).toBeGreaterThan(0);
  });
});

describe("GET /orders/:id", () => {
  it("should return an order with the matching id number", async () => {
    const id = 1;
    const order = {
      id,
      product: "to be decided",
      quantity: 42,
    };
    const findByIdSpy = jest.spyOn(Orders, "findById");
    findByIdSpy.mockImplementation(() => order);

    const res = await request(app).get(`/api/orders/${id}`);
    expect(res.statusCode).toBe(200);
    expect(res.body).toEqual(order);
    findByIdSpy.mockRestore();
  });
});

describe("PATCH /orders/:id", () => {
  it("should update an order", async () => {
    const id = 2;
    const order = {
      product: "dove-tailed joint drawer back",
      quantity: 24,
    };

    const findByIdAndUpdateSpy = jest.spyOn(Orders, "findByIdAndUpdate");
    findByIdAndUpdateSpy.mockImplementation(() => ({ ...order, id }));

    const res = await request(app).patch(`/api/orders/${id}`).send(order);
    expect(findByIdAndUpdateSpy).toHaveBeenCalled();
    expect(res.statusCode).toBe(200);
    expect(res.body.product).toBe("dove-tailed joint drawer back");
    expect(res.body.id).toBe(2);
    findByIdAndUpdateSpy.mockRestore();
  });
});

describe("DELETE /orders/:id", () => {
  it("should delete an order", async () => {
    const id = 2;
    const findByIdAndDeleteSpy = jest.spyOn(Orders, "findByIdAndDelete");
    findByIdAndDeleteSpy.mockImplementation(() => ({ id }));
    const res = await request(app).delete(`/api/orders/${id}`);
    expect(res.statusCode).toBe(200);
    findByIdAndDeleteSpy.mockRestore();
  });
});

//Products
describe("POST /products", () => {
  it("should create a new product", async () => {
    const productName = "test product";
    const components = [{ component: "test component", quantity: 1 }];
    const __v = 0;
    const product = {
      productName,
      components,
      __v,
    };
    jest
      .spyOn(Products.prototype, "save")
      .mockImplementationOnce(() => product);
    const res = await request(app).post("/api/products").send();
    expect(res.statusCode).toBe(201);
    expect(res.body.productName).toBe(product.productName);
    expect(res.body).hasOwnProperty(__v);
  });
});

describe("GET /products", () => {
  it("should return all products", async () => {
    const res = await request(app).get("/api/products");
    expect(res.statusCode).toBe(200);
    expect(res.body).toBeInstanceOf(Array);
    expect(res.body[0]).toBeInstanceOf(Object);
    expect(res.body.length).toBeGreaterThan(0);
  });
});

describe("GET /products/:id", () => {
  it("should return a product with the matching id number", async () => {
    const id = 1;
    const productName = "test product";
    const components = [{ component: "test component", quantity: 1 }];
    const __v = 0;
    const product = {
      id,
      productName,
      components,
      __v,
    };
    const findByIdSpy = jest.spyOn(Products, "findById");
    findByIdSpy.mockImplementation(() => product);

    const res = await request(app).get(`/api/products/${id}`);
    expect(res.statusCode).toBe(200);
    expect(res.body).toEqual(product);
    findByIdSpy.mockRestore();
  });
});

describe("PATCH /products/:id", () => {
  it("should update a product", async () => {
    const id = 2;
    const productName = "test product";
    const components = [{ component: "test component", quantity: 1 }];
    const __v = 0;
    const product = {
      id,
      productName,
      components,
      __v,
    };
    const findByIdAndUpdateSpy = jest.spyOn(Products, "findByIdAndUpdate");
    findByIdAndUpdateSpy.mockImplementation(() => product);

    const res = await request(app).patch(`/api/products/${id}`).send(product);
    expect(findByIdAndUpdateSpy).toHaveBeenCalled();
    expect(res.statusCode).toBe(200);
    expect(res.body.productName).toBe("test product");
    expect(res.body.id).toBe(2);
    findByIdAndUpdateSpy.mockRestore();
  });
});

describe("DELETE /products/:id", () => {
  it("should delete a product", async () => {
    const id = 2;
    const findByIdAndDeleteSpy = jest.spyOn(Products, "findByIdAndDelete");
    findByIdAndDeleteSpy.mockImplementation(() => ({ id }));
    const res = await request(app).delete(`/api/products/${id}`);
    expect(res.statusCode).toBe(200);
    findByIdAndDeleteSpy.mockRestore();
  });
});
