import { Router } from "express";
import { getAllProducts, register } from "../controllers/controllers";

const router = Router()

router.get("/products", getAllProducts)
router.post("/users", register)


export default router