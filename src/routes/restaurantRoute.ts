import { Router } from "express";
import Restaurants from "@/controllers/RestaurantController";

const router = Router();

router.get("/", Restaurants.findAllRestaurants);
router.get("/:id", Restaurants.findRestaurant);
router.post("/create", Restaurants.createRestaurant);
router.put("/alter/:id", Restaurants.alterRestaurant);
router.delete("/delete/:id", Restaurants.deleteRestaurant);

export default router;
