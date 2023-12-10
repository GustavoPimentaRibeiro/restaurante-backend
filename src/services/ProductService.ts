import ProductRepository from "@/models/Product";

async function findProductsByRestaurant(req: any, res: any) {
  if (!req.params.restaurant_id)
    return res.status(400).json({ error: "Restaurant id is required" });

  const result = await ProductRepository.findAll({
    where: {
      restaurant_id: req.params.restaurant_id,
    },
  });

  if (!result) return res.status(204).json({ error: "Product not found" });

  res.json(result);
}

async function createProduct(req: any, res: any) {
  if (!req.body.name)
    return res.status(400).json({ error: "Name is required" });

  if (!req.body.category)
    return res.status(400).json({ error: "Category is required" });

  if (!req.body.price)
    return res.status(400).json({ error: "Price is required" });

  if (!req.body.restaurant_id)
    return res.status(400).json({ error: "Restaurant ID is required" });

  if (!req.body.photo)
    return res.status(400).json({ error: "Photo is required" });

  const result = await ProductRepository.create(req.body);

  res.json(result);
}

async function alterProduct(req: any, res: any) {
  const product = await ProductRepository.findByPk(req.query.id);

  if (!product) return res.status(204).json({ error: "Product not found" });

  const result = await ProductRepository.update(req.body, {
    where: { id: req.query.id },
  });

  res.json(result);
}

async function deleteProduct(req: any, res: any) {
  const product = ProductRepository.findByPk(req.params.id);

  if (!product) return res.status(204).json({ error: "Product not found" });

  const result = await ProductRepository.destroy({
    where: { id: req.params.id },
  });

  res.json(result);
}

export default {
  findProductsByRestaurant,
  createProduct,
  alterProduct,
  deleteProduct,
};
