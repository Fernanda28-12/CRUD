import { Router } from "express";
import { getUsuarios, getUsuario, postUsuario, putUsuario, deleteUsuario } from "../controllers/usuarios";


const router = Router();

router.get('/', getUsuarios );
router.get('/:cedula', getUsuario );
router.post('/', postUsuario );
router.put('/:cedula', putUsuario );
router.delete('/:cedula', deleteUsuario );





export default router;