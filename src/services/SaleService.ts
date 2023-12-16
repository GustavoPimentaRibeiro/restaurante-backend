import SaleRepository from "@/models/Sale";

async function findAllSales(res: any) {
  const result = await SaleRepository.findAll();

  res.json(result);
}

async function findProductSales(req: any, res: any) {
  if (!req.params.product_id)
    return res.status(400).json({ error: "Product id is required" });

  const result = await SaleRepository.findOne({
    where: { product_id: req.params.product_id },
  });

  if (!result) return res.status(204).json({ error: "Promotion not found" });

  res.json(result);
}

async function createSales(req: any, res: any) {
  if (!req.body.description)
    return res.status(400).json({ error: "Description is required" });

  if (!req.body.promotional_price)
    return res.status(400).json({ error: "Promotional price is required" });

  if (!req.body.valid_days)
    return res.status(400).json({ error: "Valid days is required" });

  if (!req.body.product_id)
    return res.status(400).json({ error: "Product id is required" });

  const result = await SaleRepository.create(req.body);

  res.json(result);
}

async function alterSales(req: any, res: any) {
  if (!req.params.id) return res.status(400).json({ error: "Id is required" });

  const sale = await SaleRepository.findByPk(req.params.id);

  if (!sale) return res.status(204).json({ error: "Promotion not found" });

  const result = await SaleRepository.update(req.body, {
    where: { id: req.params.id },
  });

  res.json(result);
}

async function deleteSales(req: any, res: any) {
  if (!req.params.id) return res.status(400).json({ error: "Id is required" });

  const sale = await SaleRepository.findByPk(req.params.id);

  if (!sale) return res.status(204).json({ error: "Promotion not found" });

  const result = await SaleRepository.destroy({
    where: { id: req.params.id },
  });

  res.json(result);
}

export default {
  findAllSales,
  findProductSales,
  createSales,
  alterSales,
  deleteSales,
};
