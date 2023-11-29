import { Router } from "express";
import { register } from "../controllers/controllersregister";
import { login} from "../controllers/controllerlogin";
import { getAllProducts } from "../controllers/controllerproducts";

const router = Router()

router.get("/producto",getAllProducts)
router.post("/register", register)
router.post ("/login", login)


export default router