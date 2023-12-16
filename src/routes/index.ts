import { Router } from "express";
import productsRoute from "@/routes/productRoute";
import restaurantsRoute from "@/routes/restaurantRoute";
import promotionsRoute from "@/routes/promotionRoute";

const router = Router();

router.get("/", (_, res) => {
  res.json("Hello World!");
});

router.use("/restaurants", restaurantsRoute);
router.use("/products", productsRoute);
router.use("/products/promotions", promotionsRoute);

export default router;
