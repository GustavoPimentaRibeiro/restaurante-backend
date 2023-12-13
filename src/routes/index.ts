import { Router } from "express";
import products from "@/controllers/ProductController";
import restaurants from "@/controllers/RestaurantController";

const router = Router();

router.get("/", (_, res) => {
  res.json("Hello World!");
});

// RESTAURANTS
router.get("/restaurants", restaurants.findAllRestaurants);
router.get("/restaurants/:id", restaurants.findRestaurant);
router.post("/restaurants/create", restaurants.createRestaurant);
router.put("/restaurants/alter/:id", restaurants.alterRestaurant);
router.delete("/restaurants/delete/:id", restaurants.deleteRestaurant);

// PRODUCTS
router.get("/products/:restaurant_id", products.findProductsByRestaurant);
router.post("/products/create/:restaurant_id", products.createProduct);
router.put("/products/alter/:restaurant_id/:id", products.alterProduct);
router.delete("/products/delete/:restaurant_id/:id", products.deleteProduct);

export default router;
