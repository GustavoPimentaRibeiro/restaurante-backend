import { Router } from "express";
import Promotions from "@/controllers/SaleController";

const router = Router();

router.get("/:id", Promotions.findProductSale);
router.post("/create", Promotions.createSale);
router.put("/alter/:id", Promotions.alterSale);
router.delete("/delete/:id", Promotions.deleteSale);

export default router;
