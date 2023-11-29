import { Request, Response } from "express";
import Users from "../models/users"; 
import { AppDataSource } from "../persistance/db";

export const login = async (req:Request, res: Response) => {
  const {email, password} = req.body
  try{
      const comparador = await AppDataSource.manager.findOne(Users, {where:{email, password}})
      if (comparador) {res.json({mensaje: "ingreso correcto"})}
      else {res.status(404).json({mensaje: "ingreso fallido"})}
  }
  catch(error){
      console.log(error)
  }
}