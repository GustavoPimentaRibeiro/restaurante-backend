import ProductService from "@/services/ProductService";

async function findProductsByRestaurant(req: any, res: any) {
  await ProductService.findProductsByRestaurant(req, res);
}

async function createProduct(req: any, res: any) {
  await ProductService.createProduct(req, res);
}

async function alterProduct(req: any, res: any) {
  await ProductService.alterProduct(req, res);
}

async function deleteProduct(req: any, res: any) {
  await ProductService.deleteProduct(req, res);
}

export default {
  findProductsByRestaurant,
  createProduct,
  alterProduct,
  deleteProduct,
};
