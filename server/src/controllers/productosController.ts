import { Request, Response } from 'express';
import pool from '../database';

class ProductosController
{
    public async list(req : Request, res : Response): Promise <void> {
        const respuesta = await pool.query('SELECT * FROM productos');
        res.json( respuesta );
    }

    public async listOne(req: Request, res: Response): Promise <void> {
        const { codigo } = req.params;
        const respuesta = await pool.query('SELECT * FROM productos WHERE codigo = ?', [codigo]);
        if (respuesta.length > 0){
            res.json(respuesta[0]);
            return ;
        }
        res.status(404).json({'mensaje': 'Producto no encontrado'});
    }

    public async crear(req: Request, res: Response): Promise <void> {
        const resp = await pool.query('INSERT INTO productos SET ?', [req.body]);
        res.json(resp);
    }   

    public async actualizar(req: Request, res: Response): Promise <void> {
        const { codigo } = req.params;
        const resp = await pool.query('UPDATE productos SET ? WHERE codigo = ?', [req.body, codigo]);
        res.json(resp);
    }

    public async eliminar(req: Request, res: Response): Promise <void> {
        const { codigo } = req.params;
        const resp = await pool.query('DELETE FROM productos WHERE codigo = ?', [codigo]);
        res.json(resp);
    }
}

export const productosController = new ProductosController();