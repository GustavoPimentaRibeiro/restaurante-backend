import RestaurantRepository from "@/models/Restaurant";

async function findAll(_: any, res: any) {
  RestaurantRepository.findAll().then((result) => res.json(result));
}

async function findRestaurant(req: any, res: any) {
  const result = await RestaurantRepository.findByPk(req.params.id);

  if (!result) return res.status(204).json({ error: "Restaurant not found" });

  res.json(result);
}

async function createRestaurant(req: any, res: any) {
  if (!req.body.name)
    return res.status(400).json({ error: "Name is required" });

  if (!req.body.address)
    return res.status(400).json({ error: "Address is required" });

  if (!req.body.business_hours)
    return res.status(400).json({ error: "Business hours is required" });

  RestaurantRepository.create(req.body).then((result) => res.json(result));
}

async function alterRestaurant(req: any, res: any) {
  const product = await RestaurantRepository.findByPk(req.query.id);

  if (!product) return res.status(204).json({ error: "Restaurant not found" });

  const result = await RestaurantRepository.update(req.body, {
    where: { id: req.query.id },
  });

  res.json(result);
}

async function deleteRestaurant(req: any, res: any) {
  const product = await RestaurantRepository.findByPk(req.params.id);

  if (!product) return res.status(204).json({ error: "Restaurant not found" });

  const result = await RestaurantRepository.destroy({
    where: { id: req.params.id },
  });

  res.json(result);
}

export default {
  findAll,
  findRestaurant,
  createRestaurant,
  alterRestaurant,
  deleteRestaurant,
};
