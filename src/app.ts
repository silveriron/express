import express from "express";
import bodyParser from "body-parser";
import path from "path";

import shopRouter from "./routers/shop";
import adminRouter from "./routers/admin";

const app = express();

app.set("view engine", "pug");
app.set("views", "views");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "../", "public")));

app.use("/admin", adminRouter);
app.use(shopRouter);

app.use((req, res, next) => {
  res.sendFile(path.join(__dirname, "views", "404.html"));
});

app.listen(3000);
