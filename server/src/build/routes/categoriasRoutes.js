"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const categoriasController_1 = require("../controllers/categoriasController");
class CategoriasRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/', categoriasController_1.categoriasController.list);
        this.router.get('/:id', categoriasController_1.categoriasController.listOne);
        this.router.post('/crear', categoriasController_1.categoriasController.create);
        this.router.put('/actualizar/:id', categoriasController_1.categoriasController.update);
        this.router.delete('/eliminar/:id', categoriasController_1.categoriasController.delete);
    }
}
const categoriasRoutes = new CategoriasRoutes();
exports.default = categoriasRoutes.router;
