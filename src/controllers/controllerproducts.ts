import producto  from '../models/products'; 
import { Response } from "express";
import { AppDataSource } from "../persistance/db";

export const getAllProducts = async (_: any, res: Response) => {
    try {
      const productRepository = AppDataSource.manager.getRepository(producto);
      const productos = await productRepository.find();
  
      res.status(200).json(productos); 
    } catch (error) {
      res.status(500).json({message:"Error al obtener los productos"});
    }
  };
  