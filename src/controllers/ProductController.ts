import ProductRepository from "@/models/Product";

async function findAll(_: any, res: any) {
  ProductRepository.findAll().then((result) => res.json(result));
}

async function findProduct(req: any, res: any) {
  const result = await ProductRepository.findByPk(req.params.id);

  if (!result) return res.status(204).json({ error: "Product not found" });

  res.json(result);
}

async function createProduct(req: any, res: any) {
  ProductRepository.create(req.body).then((result) => res.json(result));
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
  const product = await ProductRepository.findByPk(req.params.id);

  if (!product) return res.status(204).json({ error: "Product not found" });

  const result = await ProductRepository.destroy({
    where: { id: req.params.id },
  });

  res.json(result);
}

export default {
  findAll,
  findProduct,
  createProduct,
  alterProduct,
  deleteProduct,
};
