import PromotionRepository from "@/models/Promotion";

async function findAllPromotions(req: any, res: any) {
  const result = await PromotionRepository.findAll();

  res.json(result);
}

async function findProductPromotion(req: any, res: any) {
  if (!req.params.product_id)
    return res.status(400).json({ error: "Product id is required" });

  const result = await PromotionRepository.findOne({
    where: { product_id: req.params.product_id },
  });

  if (!result) return res.status(204).json({ error: "Promotion not found" });

  res.json(result);
}

async function createPromotion(req: any, res: any) {
  if (!req.body.description)
    return res.status(400).json({ error: "Description is required" });

  if (!req.body.promotional_price)
    return res.status(400).json({ error: "Promotional price is required" });

  if (!req.body.valid_days)
    return res.status(400).json({ error: "Valid days is required" });

  if (!req.body.product_id)
    return res.status(400).json({ error: "Product id is required" });

  const result = await PromotionRepository.create(req.body);

  res.json(result);
}

async function alterPromotion(req: any, res: any) {
  if (!req.params.id) return res.status(400).json({ error: "Id is required" });

  const promotion = await PromotionRepository.findByPk(req.params.id);

  if (!promotion) return res.status(204).json({ error: "Promotion not found" });

  const result = await PromotionRepository.update(req.body, {
    where: { id: req.params.id },
  });

  res.json(result);
}

async function deletePromotion(req: any, res: any) {
  if (!req.params.id) return res.status(400).json({ error: "Id is required" });

  const promotion = await PromotionRepository.findByPk(req.params.id);

  if (!promotion) return res.status(204).json({ error: "Promotion not found" });

  const result = await PromotionRepository.destroy({
    where: { id: req.params.id },
  });

  res.json(result);
}

export default {
  findAllPromotions,
  findProductPromotion,
  createPromotion,
  alterPromotion,
  deletePromotion,
};
