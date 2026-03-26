
import { Router } from "express";
import { isValid } from "../controllers/data.controller";

const router  = Router();

router.post("/" , isValid);

export default router;