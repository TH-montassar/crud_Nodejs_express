const { createCategory, updateCategory, getCatagories, getCategory, deleteCategory } = require("../controllers/category.controllers");

const router = require("express").Router();


router.post("/",createCategory);
router.put('/:categoryId', updateCategory);
router.get('/', getCatagories);
router.get('/:categoryId',getCategory);
router.delete('/:categoryId',deleteCategory);

module.exports = router