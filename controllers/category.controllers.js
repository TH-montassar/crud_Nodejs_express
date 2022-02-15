const Category = require("../models/category.models")

const createCategory =async (req,res)=>{

    const newCategory= new Category ({
        name:req.body.name

    })
    try {
        const savedCategory = await newCategory.save();
        return res.status(201).json(savedCategory);
      } catch (err) {
        return res.status(500).json(err);
      } 
}

const updateCategory = async (req, res) => {
    const id = req.params.categoryId;
  
    try {
      const updatedCategory = await Category.findByIdAndUpdate(id, req.body, {
        new: true,
      });
      return res.status(200).json(updatedCategory);
    } catch (err) {
      return res.status(500).json(err);
    }
  };
  //get Catagories
const getCatagories = async (req, res) => {
  try {
    const getCatagories = await Category.find({});
    return res.status(200).json(getCatagories);
  } catch (err) {
    return res.status(500).json(err);
  }
};
//get product by id
const getCategory = async (req, res) => {
  const id = req.params.categoryId;

  try {
    const getCategory = await Category.findById(id);
    return res.status(200).json(getCategory);
    
  } catch (err) {
    return res.status(500).json(err);
  }
};
//delete  Category

const deleteCategory = async (req, res) => {
  const id = req.params.categoryId;

  try {
    const deleteCategory = await Category.findOneAndDelete(id);
   // return res.status(200).json(deleteCategory);
    return res.status(200).send("raw tfasa5");
  } catch (err) {
    return res.status(500).json(err);
  }
};





module.exports.createCategory =createCategory;
module.exports.updateCategory = updateCategory;
module.exports.getCatagories = getCatagories;
module.exports.getCategory = getCategory;
module.exports.deleteCategory = deleteCategory;