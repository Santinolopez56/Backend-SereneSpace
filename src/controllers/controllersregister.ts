import { Request, Response } from "express";
import { Users } from "../models/users";

const users: Users[] = [];

export const register = (req: Request, res: Response) => {
  const { email, password } = req.body;
  if (email == null || password == null) {
    return res.status(400).json({
      msg: "El email y la contraseña son obligatorios",
    });
  }
  let existUser = false;
  users.forEach((e) => {
    if (email == e.email) {
      existUser = true;
      return;
    }
  });
  if (existUser) {
    return res.status(400).json({
      msg: `email ${email} ya en uso`,
    });
  }
  const user = new Users(email, password);

  users.push(user);
  res.status(201).json({
    msg: "Usuario creado",
    user,
  });
};

export const login = (req: Request, res: Response) => {
  const { email, password } = req.body;
  if (email == null || password == null) {
    return res.status(400).json({
      msg: "El email y la contraseña son obligatorios",
    });
  }
  let user: Users | null = null;

  for (const userInUsers of users) {
    if (userInUsers.email == email) {
      user = userInUsers;
      break;
    }
  }

  if (user == null)
    return res.json({
      msg: "Usuario no encontrado",
    });

  if (password != user.password) {
    return res.status(400).json({
      msg: "Contraseña incorrecta",
    });
  }

  return res.json({
    msg: "Sesion iniciada",
    user,
  });
};
