"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const rolesController_1 = require("../controllers/rolesController");
class RolesRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/', rolesController_1.rolesController.list);
        this.router.get('/:id', rolesController_1.rolesController.listOne);
        this.router.post('/crear', rolesController_1.rolesController.create);
        this.router.put('/actualizar/:id', rolesController_1.rolesController.update);
        this.router.delete('/eliminar/:id', rolesController_1.rolesController.delete);
    }
}
const rolesRoutes = new RolesRoutes();
exports.default = rolesRoutes.router;
