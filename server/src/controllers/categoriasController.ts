import { Request, Response } from 'express'
import pool from '../database'

class CategoriasController
{
    public async list(req : Request, res : Response): Promise <void> {
        const respuesta = await pool.query('SELECT * FROM categorias');
        res.json( respuesta );
    }

    public async listOne(req : Request, res : Response): Promise <void> {
        const { id } = req.params;
        const respuesta = await pool.query('SELECT * FROM categorias WHERE id = ?', [id]);
        if (respuesta.length > 0){
            res.json(respuesta[0]);
            return ;
        }
        res.status(404).json({'mensaje' : 'Categoria no encontrada.'});
    }

    public async create(req : Request, res : Response): Promise <void> {
        const respuesta = await pool.query('INSERT INTO categorias SET ?', [req.body]);
        res.json(respuesta);
    }

    public async update(req : Request, res : Response): Promise <void> {
        const { id } = req.params;
        const respuesta = await pool.query('UPDATE categorias SET ? WHERE id = ?', [req.body, id]);
        res.json(respuesta);
    }

    public async delete(req : Request, res : Response): Promise <void> {
        const { id } = req.params;
        const respuesta = await pool.query('DELETE FROM categorias WHERE id = ?', [id]);
        res.json(respuesta);
    }
}

export const categoriasController = new CategoriasController();