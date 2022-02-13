const { createProduct, updateProduct,getProducts ,getProduct,deleteProduct} = require("../controllers/product.controllers");
const router = require("express").Router();

router.post("/", createProduct);
router.put('/:productId', updateProduct);
router.get('/', getProducts);
router.get('/:productId',getProduct);
router.delete('/:productId',deleteProduct);






module.exports = router