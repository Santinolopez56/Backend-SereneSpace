 import { Request, Response } from "express";
import Users from "../models/users"; 
import { AppDataSource } from "../persistance/db";


export const register = async (req:Request, res:Response) =>{
  const {email,password} = req.body
  console.log (req.body)


  const comparador = await AppDataSource.manager.findOne(Users, {where:{email}})
  if (comparador) {
      return res.status(404).json({ error: 'El Usuario o Email ya esta en uso' });
  } else {

      const newUser = new Users(email, password);
      try {
          await AppDataSource.manager.save(newUser)
          return res.status(200).json({mensaje: 'El usuario se guardo exitosamente'})

      } catch (error) {
          console.log(error)

          return res.status(404).json({mensaje:'Error no se pudo crear el usuario'})

      }

  }
}