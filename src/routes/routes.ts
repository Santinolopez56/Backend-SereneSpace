import { Router } from "express";
import { getAllProducts } from "../controllers/controllers";

const router = Router()

router.get("/products", getAllProducts)


export default router