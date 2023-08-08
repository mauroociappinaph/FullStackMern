import express from "express";
import {
  registrar,
  perfil,
  confirmar,
} from "../controllers/veterinarioControllers.js";

const router = express.Router();

router.post("/", registrar);
router.get("/perfil", perfil);
router.get("/confirmar/:token", confirmar); //!Routing dinámico se pasa como UseParams.

export default router;
