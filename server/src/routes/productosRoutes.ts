import { Router } from 'express';
import { productosController } from '../controllers/productosController';

class ProductosRoutes
{
    public router: Router=Router();
    constructor()
    {
        this.config();
    }
    config() : void
    {
        this.router.get('/', productosController.list );
        this.router.get('/:id', productosController.listOne );
        this.router.post('/crear', productosController.crear);
        this.router.put('/actualizar/:codigo', productosController.actualizar);
        this.router.delete('/eliminar/:codigo', productosController.eliminar);
    }
}

const productosRoutes= new ProductosRoutes();
export default productosRoutes.router;
