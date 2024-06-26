import { Router } from 'express'
import { categoriasController } from '../controllers/categoriasController'

class CategoriasRoutes
{
    public router: Router=Router();
    constructor()
    {
        this.config();
    }
    config() : void
    {
        this.router.get('/', categoriasController.list );
        this.router.get('/:id', categoriasController.listOne );
        this.router.post('/crear', categoriasController.create );
        this.router.put('/actualizar/:id', categoriasController.update );
        this.router.delete('/eliminar/:id', categoriasController.delete );
    }
}

const categoriasRoutes = new CategoriasRoutes();
export default categoriasRoutes.router;