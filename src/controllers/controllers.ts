import { Request, Response } from "express";

export const getAllProducts = (_: Request, res: Response) => {

    const products = [
        {
            nombre : "Auto",
            precio : 800,
            caracteristicas : "anda",
        },
        {
            nombre : "moto",
            precio : 800,
            caracteristicas : "anda",
        },
        {
            nombre : "camion",
            precio : 800,
            caracteristicas : "anda",
        },
        {
            nombre : "avion",
            precio : 800,
            caracteristicas : "anda",
        },
        {
            nombre : "barco",
            precio : 800,
            caracteristicas : "anda",
        }
    ]
    res.json({
        products
    })
} 