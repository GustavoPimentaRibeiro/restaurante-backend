import RestaurantService from "@/services/RestaurantService";

async function findAllRestaurants(_: any, res: any) {
  const result = await RestaurantService.findAllRestaurants(res);

  res.json(result);
}

async function findRestaurant(req: any, res: any) {
  const result = await RestaurantService.findRestaurant(req, res);

  res.json(result);
}

async function createRestaurant(req: any, res: any) {
  const result = await RestaurantService.createRestaurant(req, res);

  res.json(result);
}

async function alterRestaurant(req: any, res: any) {
  const result = await RestaurantService.alterRestaurant(req, res);

  res.json(result);
}

async function deleteRestaurant(req: any, res: any) {
  await RestaurantService.deleteRestaurant(req, res);
}

export default {
  findAllRestaurants,
  findRestaurant,
  createRestaurant,
  alterRestaurant,
  deleteRestaurant,
};
