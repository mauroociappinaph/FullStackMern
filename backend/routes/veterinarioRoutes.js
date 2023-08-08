import express from "express";
import {
  registrar,
  perfil,
  confirmar,
  autenticar,
} from "../controllers/veterinarioControllers.js";
import checkAuth  from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/", registrar);
router.get("/confirmar/:token", confirmar); //!Routing dinámico se pasa como UseParams.
router.post("/login", autenticar); 

router.get("/perfil", checkAuth ,perfil);


export default router;
