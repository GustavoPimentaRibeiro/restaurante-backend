import ProductRepository from "@/models/Product";
import SaleRepository from "@/models/Sale";
import { Op } from "sequelize";

async function findProductsByRestaurant(req: any, res: any) {
  if (!req.params.restaurant_id)
    return res.status(400).json({ error: "Restaurant id is required" });

  const result: any = await ProductRepository.findAll({
    where: {
      restaurant_id: req.params.restaurant_id,
    },
  });

  if (!result) return res.status(204).json({ error: "Product not found" });

  const now: Date = new Date();

  for (const r in result) {
    const sales: any = await SaleRepository.findAll({
      where: {
        product_id: result[r]["dataValues"]["id"],
        sale_init: {
          [Op.lt]: now,
        },
        sale_end: {
          [Op.gt]: now,
        },
      },
    });

    if (sales.length > 0) {
      result[r]["dataValues"]["price"] =
        sales[0]["dataValues"]["promotional_price"];
      result[r]["dataValues"]["description"] =
        sales[0]["dataValues"]["description"];
    }
  }

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

  const result = await ProductRepository.create(req.body);

  res.json(result);
}

async function alterProduct(req: any, res: any) {
  if (!req.params.id) return res.status(400).json({ error: "Id is required" });

  if (!req.params.restaurant_id)
    return res.status(400).json({ error: "Restaurant id is required" });

  const product = await ProductRepository.findOne({
    where: { id: req.params.id, restaurant_id: req.params.restaurant_id },
  });

  if (!product) return res.status(204).json({ error: "Product not found" });

  const result = await ProductRepository.update(req.body, {
    where: { id: req.params.id, restaurant_id: req.params.restaurant_id },
  });

  res.json(result);
}

async function deleteProduct(req: any, res: any) {
  if (!req.params.id) return res.status(400).json({ error: "Id is required" });

  if (!req.params.restaurant_id)
    return res.status(400).json({ error: "Restaurant id is required" });

  const product = ProductRepository.findOne({
    where: { id: req.params.id, restaurant_id: req.params.restaurant_id },
  });

  if (!product) return res.status(204).json({ error: "Product not found" });

  const result = await ProductRepository.destroy({
    where: { id: req.params.id, restaurant_id: req.params.restaurant_id },
  });

  res.json(result);
}

export default {
  findProductsByRestaurant,
  createProduct,
  alterProduct,
  deleteProduct,
};
