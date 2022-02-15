const Product = require("../models/product.models");

const createProduct = async (req, res) => {
  const newProduct = new Product({
    title: req.body.title,
    description: req.body.description,
    price: req.body.price,
    category: req.body.category,
  });
  try {
    const savedProduct = await newProduct.save();
    return res.status(201).json(savedProduct);
  } catch (err) {
    return res.status(500).json(err);
  }
};

const updateProduct = async (req, res) => {
  const id = req.params.productId;

  try {
    const updatedProduct = await Product.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    return res.status(200).json(updatedProduct);
  } catch (err) {
    return res.status(500).json(err);
  }
};

//get products
const getProducts = async (req, res) => {
  try {
    const getProducts = await Product.find({}).populate("category");
    return res.status(200).json(getProducts);
  } catch (err) {
    return res.status(500).json(err);
  }
};

//filterProduct
const filterProduct = async (req, res) => {
let filter={}
if(req.query.category)
{
     filter={category:req.query.category}
}
  try {
    const getProduct = await Product.find(filter).populate("category");
    return res.status(200).json(getProduct);
  } catch (err) {
    return res.status(500).json(err);
  }
};



//get product by id
const getProduct = async (req, res) => {
  const id = req.params.productId;

  try {
    const getProduct = await Product.findById(id).populate("category");
    return res.status(200).json(getProduct);
  } catch (err) {
    return res.status(500).json(err);
  }
};
//delete product

const deleteProduct = async (req, res) => {
  const id = req.params.productId;

  try {
    const deleteProduct = await Product.findOneAndDelete(id);
    // return res.status(200).json(deleteProduct);
    return res.status(200).send("Deleted successfully");
  } catch (err) {
    return res.status(500).json(err);
  }
};

// const filter = async (req, res) => {
//   const ProductSersh = new Product({
//     title: req.body.title,
//     description: req.body.description,
//     price: req.body.price,
//     category: req.body.category,
//   });

// if (ProductSersh.category===Product.category) {
  
// }

 

//   try {
//     let products = await Product.find(findArgs);
//     res.json(products);
//   } catch (error) {
//     console.log(error);
//     res.status(500).send("Products not found");
//   }
// };

module.exports.createProduct = createProduct;
module.exports.updateProduct = updateProduct;
module.exports.getProducts = getProducts;
module.exports.getProduct = getProduct;
module.exports.deleteProduct = deleteProduct;
module.exports.filterProduct = filterProduct;
