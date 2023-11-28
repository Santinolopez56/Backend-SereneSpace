import producto  from '../models/products'; 
import { Request, Response } from "express";
import Users from "../models/users"; 
import { AppDataSource } from "../db";

export const login = async (req:Request, res: Response) => {
  const {Users, password} = req.body
  try{
      const comparador = await AppDataSource.manager.findOne(Users, {where:{Users, password}})
      if (comparador) {res.json({mensaje: "ingreso correcto"})}
      else {res.status(400).json({mensaje: "ingreso fallido"})}
  }
  catch(error){
      console.log(error)
  }
}

export const register = async (req:Request, res:Response) =>{
  const {email,password} = req.body
  console.log (req.body)


  const comparador = await AppDataSource.manager.findOne(Users, {where:{email}})
  if (comparador) {
      return res.status(400).json({ error: 'El Usuario o Email ya esta en uso' });
  } else {

      const newUser = new Users(email, password);
      try {
          await AppDataSource.manager.save(newUser)
          return res.status(200).json({mensaje: 'El usuario se guardo exitosamente'})

      } catch (error) {
          console.log(error)

          return res.status(400).json({mensaje:'Error no se pudo crear el usuario'})

      }

  }
}


export const getAllProducts = async (_: any, res: Response) => {
  try {
    const productRepository = AppDataSource.manager.getRepository(producto);
    const productos = await productRepository.find();

    res.status(200).json(productos); 
  } catch (error) {
    res.status(500).json({message:"Error al obtener los productos"});
  }
};

