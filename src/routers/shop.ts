import { Router } from "express";
import path from "path";
import { products } from "./admin";

const router = Router();

router.get("/", (req, res) => {
  console.log(products);
  res.sendFile(path.join(__dirname, "../", "views", "shop.html"));
});

export default router;
