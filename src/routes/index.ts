import { Router } from "express";
import products from "@/controllers/ProductController";
import restaurants from "@/controllers/RestaurantController";

const router = Router();

router.get("/", (_, res) => {
  res.json("Hello World!");
});

// RESTAURANTS
router.get("/restaurants", restaurants.findAll);
router.get("/restaurants/:id", restaurants.findRestaurant);
router.post("/restaurants/create", restaurants.createRestaurant);
router.put("/restaurants/alter", restaurants.alterRestaurant);
router.delete("/restaurants/delete/:id", restaurants.deleteRestaurant);

// PRODUCTS
router.get("/products", products.findAll);
router.get("/products/:id", products.findProduct);
router.post("/products/create", products.createProduct);
router.put("/products/alter", products.alterProduct);
router.delete("/products/delete/:id", products.deleteProduct);

export default router;
