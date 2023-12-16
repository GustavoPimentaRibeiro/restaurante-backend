import { Router } from "express";
import Promotions from "@/controllers/PromotionController";

const router = Router();

router.get("/", Promotions.findAllPromotions);
router.get("/:product_id", Promotions.findProductPromotion);
router.post("/create", Promotions.createPromotion);
router.put("/alter/:id", Promotions.alterPromotion);
router.delete("/delete/:id", Promotions.deletePromotion);

export default router;
