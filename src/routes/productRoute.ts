import { Router } from "express";
import Products from "@/controllers/ProductController";

const router = Router();

router.get("/:restaurant_id", Products.findProductsByRestaurant);
router.post("/create/:restaurant_id", Products.createProduct);
router.put("/alter/:restaurant_id/:id", Products.alterProduct);
router.delete("/delete/:restaurant_id/:id", Products.deleteProduct);

export default router;
