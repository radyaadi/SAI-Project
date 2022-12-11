import express from 'express';
import {
  getAllProducts,
  getProductById,
  addProduct,
  updateProduct,
  deleteProduct,
} from '../controllers/productController.js';

const router = express.Router();

router.get('/product/list', getAllProducts);
router.get('/product/list/:id', getProductById);
router.post('/product/add', addProduct);
router.patch('/product/update/:id', updateProduct);
router.delete('/product/remove/:id', deleteProduct);

export default router;
