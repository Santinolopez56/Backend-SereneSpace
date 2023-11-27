import { Router } from "express";
import { register, login, getAllProducts } from "../controllers/controllersregister";

const router = Router()

router.get("/producto",getAllProducts)
router.post("/usuario", register)
router.post ("/login", login)


export default router