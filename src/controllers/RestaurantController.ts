import RestaurantService from "@/services/RestaurantService";

async function findAllRestaurants(_: any, res: any) {
  await RestaurantService.findAllRestaurants(res);
}

async function findRestaurant(req: any, res: any) {
  await RestaurantService.findRestaurant(req, res);
}

async function createRestaurant(req: any, res: any) {
  await RestaurantService.createRestaurant(req, res);
}

async function alterRestaurant(req: any, res: any) {
  await RestaurantService.alterRestaurant(req, res);
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
