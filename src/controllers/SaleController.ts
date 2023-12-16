import SaleService from "@/services/SaleService";

async function findAllSales(_: any, res: any) {
  await SaleService.findAllSales(res);
}

async function findProductSale(req: any, res: any) {
  await SaleService.findProductSales(req, res);
}

async function createSale(req: any, res: any) {
  await SaleService.createSales(req, res);
}

async function alterSale(req: any, res: any) {
  await SaleService.alterSales(req, res);
}

async function deleteSale(req: any, res: any) {
  await SaleService.deleteSales(req, res);
}

export default {
  findAllSales,
  findProductSale,
  createSale,
  alterSale,
  deleteSale,
};
