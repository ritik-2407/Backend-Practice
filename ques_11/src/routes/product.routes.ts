import { Router } from "express";
import {addProduct, deleteProduct, getAllProducts , getSpecificProduct, updateProduct} from "../controllers/product.controller"

const router = Router();
router.get('/' , getAllProducts);
router.get("/:id" , getSpecificProduct);
router.post("/" , addProduct);
router.put("/:id" , updateProduct);
router.delete("/:id" , deleteProduct);


export default router;


