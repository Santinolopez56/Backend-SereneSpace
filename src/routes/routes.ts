import { Router } from "express";
import { getAllProducts, register, login } from "../controllers/controllers";

const router = Router()

router.get("/products", getAllProducts)
router.post("/users", register)
router.post ("/login", login)


export default router