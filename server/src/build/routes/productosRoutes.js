"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const productosController_1 = require("../controllers/productosController");
class ProductosRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/', productosController_1.productosController.list);
        this.router.get('/:codigo', productosController_1.productosController.listOne);
        this.router.post('/crear', productosController_1.productosController.crear);
        this.router.put('/actualizar/:codigo', productosController_1.productosController.actualizar);
        this.router.delete('/eliminar/:codigo', productosController_1.productosController.eliminar);
    }
}
const productosRoutes = new ProductosRoutes();
exports.default = productosRoutes.router;
