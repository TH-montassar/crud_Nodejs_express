const { send } = require("express/lib/response");
const Product = require("../models/product.models");

const createProduct = async (req, res) => {
	const newProduct = new Product({
		title: req.body.title,
		description: req.body.description,
		price: req.body.price,
	});
	try {
		const savedProduct = await newProduct.save();
		return res.status(201).json(savedProduct);
	} catch (err) {
		return res.status(500).json(err);
	}
};



//get products

//delete product

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
const getProducts = async (req,res) =>{


try {
	const getProducts=   await Product.find({});
	return res.status(200).json(getProducts);
} catch (err) {
	return res.status(500).json(err);
}


}
//get product by id
const getProduct = async (req,res) =>{
	const id = req.params.productId;

	try {
		const getProduct=   await Product.findById(id);
	//	return res.status(200).json(getProduct);
		return res.status(200).send("raw tfasa5");
	} catch (err) {
		return res.status(500).json(err);
	}
	
	
	}

	const deleteProduct = async (req,res) =>{
		const id = req.params.productId;
	
		try {
			const deleteProduct=   await Product.findOneAndDelete(id)
			return res.status(200).json(deleteProduct);
		} catch (err) {
			return res.status(500).json(err);
		}
		
		
		}





module.exports.createProduct = createProduct;
module.exports.updateProduct = updateProduct;
module.exports.getProducts = getProducts;
module.exports.getProduct = getProduct;
module.exports.deleteProduct = deleteProduct;