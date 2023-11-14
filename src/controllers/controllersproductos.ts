import { Request, Response } from "express";
import { Users } from "../models/users";

const users: Users[] = [];

export const getAllProducts = (_: Request, res: Response) => { //modificaciones productos
    console.table(users);
    const products = [
      {
        nombre: "Sillon",
        precio: 100,
        caracteristicas: "Sillón elegante y cómodo para tu hogar u oficina.",
      },
      {
        nombre: "Sillas",
        precio: 50,
        caracteristicas: "Sillas ergonómicas para comodidad y estilo excepcionales.",
      },
      {
        nombre: "Mesita",
        precio: 70,
        caracteristicas: "Compacta y versátil mesita para tu comodidad diaria.",
      },
      {
        nombre: "Alfombra",
        precio: 50,
        caracteristicas: "Alfombra suave y elegante, mejora cualquier espacio con estilo.",
      },
      {
        nombre: "Escritorio",
        precio: 90,
        caracteristicas: "Escritorio para que puedas trabajar desde la comodidad de tu hogar.",
      },
      {
          nombre: "Sillon bola",
          precio: 120,
          caracteristicas: "Sillon en forma circular para disfrutar una pelicula con comida.",
        },
    ];
    res.json({
      products,
    });
  };
  