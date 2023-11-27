import { Router } from "express";
import { register, login } from "../controllers/controllersregister";

const router = Router()

router.post("/usuario", register)
router.post ("/login", login)


export default router