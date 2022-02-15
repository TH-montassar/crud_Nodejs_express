//*const { createCategory, updateCategory, getCatagories, getCategory, deleteCategory } = require("../controllers/category.controllers");
const { createProduct, updateProduct,getProducts ,getProduct,deleteProduct, filterProduct} = require("../controllers/product.controllers");
const router = require("express").Router();

router.post("/", createProduct);
router.put('/:productId', updateProduct);
router.get('/', getProducts);
router.get('/s',filterProduct);

router.get('/:productId',getProduct);
router.delete('/:productId',deleteProduct);










module.exports = router