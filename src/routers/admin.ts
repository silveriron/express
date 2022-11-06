import { Router } from "express";
import path from "path";

export type Product = {
  id: string;
  title: string;
};

export const products: Product[] = [];

const router = Router();

router.get("/add-product", (req, res) => {
  res.sendFile(path.join(__dirname, "../", "views", "/add-product.html"));
});

router.post("/add-product", (req, res) => {
  const title = req.body.title as string;
  products.push({ id: (products.length + 1).toString(), title: title });
  res.redirect("/");
});

export default router;
