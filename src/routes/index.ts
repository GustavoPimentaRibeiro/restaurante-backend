import { Router } from "express";
import { Request, Response } from "express";

const router = Router();

router.get("/", (_, res) => {
  res.send("Hello World!");
});

router.get("/restaurants", (req: Request, res: Response) => {
  res.json("Todos os restaurantes");
});

export default router;
