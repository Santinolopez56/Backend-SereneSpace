import { Router } from "express";
import { getAllProducts} from "../controllers/controllersproductos";
import { register, login } from "../controllers/controllersregister";

const router = Router()

router.get("/productos", getAllProducts)
router.post("/usuario", register)
router.post ("/login", login)


export default router