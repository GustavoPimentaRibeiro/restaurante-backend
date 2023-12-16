import { Router } from "express";
import productsRoute from "@/routes/productRoute";
import restaurantsRoute from "@/routes/restaurantRoute";
import salesRoute from "@/routes/saleRoute";

const router = Router();

router.get("/", (_, res) => {
  res.json("Hello World!");
});

router.use("/restaurants", restaurantsRoute);
router.use("/products", productsRoute);
router.use("/sales", salesRoute);

export default router;
