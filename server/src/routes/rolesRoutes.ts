import { Router } from 'express'
import { rolesController } from '../controllers/rolesController'

class RolesRoutes
{
    public router : Router=Router();
    constructor()
    {
        this.config();
    }
    config() : void
    {
        this.router.get('/', rolesController.list );
        this.router.get('/:id', rolesController.listOne );
        this.router.post('/crear', rolesController.create );
        this.router.put('/actualizar/:id', rolesController.update );
        this.router.delete('/eliminar/:id', rolesController.delete );
    }
}

const rolesRoutes = new RolesRoutes();
export default rolesRoutes.router;