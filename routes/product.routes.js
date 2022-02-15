//*const { createCategory, updateCategory, getCatagories, getCategory, deleteCategory } = require("../controllers/category.controllers");
const { createProduct, updateProduct,getProducts ,getProduct,deleteProduct, filterProduct} = require("../controllers/product.controllers");
const  VerifyToken  = require("../middlewares/verifyToken");
const router = require("express").Router();

router.post("/",VerifyToken,createProduct);
router.put('/:productId',VerifyToken, updateProduct);
router.get('/',VerifyToken, getProducts);
router.get('/s',VerifyToken,filterProduct);

router.get('/:productId',VerifyToken,getProduct);
router.delete('/:productId',VerifyToken,deleteProduct);










module.exports = router