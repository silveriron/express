"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.products = void 0;
const express_1 = require("express");
const path_1 = __importDefault(require("path"));
exports.products = [];
const router = (0, express_1.Router)();
router.get("/add-product", (req, res) => {
    res.sendFile(path_1.default.join(__dirname, "../", "views", "/add-product.html"));
});
router.post("/add-product", (req, res) => {
    const title = req.body.title;
    exports.products.push({ id: (exports.products.length + 1).toString(), title: title });
    res.redirect("/");
});
exports.default = router;
