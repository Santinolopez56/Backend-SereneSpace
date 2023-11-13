import { Request, Response } from "express";
import { Users } from '../models/users';


const users: Users[]=[]

export const register = (req: Request, res: Response) => {
    const {email, password} = req.body
    if (email == null || password == null ){
        return res.status(400).json({
            msg: "El email y la contraseña son obligatorios"
        })
    }
    let existUser = false;
    users.forEach(e => {
        if(email == e.email){
            existUser = true
            return
        }
    })
    if(existUser){
        return res.status(400).json({
            msg: `email ${email} ya en uso`
        })
    }
    const user = new Users(email,password);

    users.push(user)
    res.status(201).json({
        msg: "Usuario creado", user
    }) 
    
}





export const getAllProducts = (_: Request, res: Response) => {
    console.table(users)
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