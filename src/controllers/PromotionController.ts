import PromotionService from "@/services/PromotionService";

async function findAllPromotions(req: any, res: any) {
  await PromotionService.findAllPromotions(req, res);
}

async function findProductPromotion(req: any, res: any) {
  await PromotionService.findProductPromotion(req, res);
}

async function createPromotion(req: any, res: any) {
  await PromotionService.createPromotion(req, res);
}

async function alterPromotion(req: any, res: any) {
  await PromotionService.alterPromotion(req, res);
}

async function deletePromotion(req: any, res: any) {
  await PromotionService.deletePromotion(req, res);
}

export default {
  findAllPromotions,
  findProductPromotion,
  createPromotion,
  alterPromotion,
  deletePromotion,
};
