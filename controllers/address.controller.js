const Address = require("../models/address.models");

const createAddress = async (req, res) => {
  const newAddress = new Address({
    country: req.body.country,
    city: req.body.city,
    rue: req.body.rue,
    codePostal: req.body.codePostal,
  });
  try {
    const savedAddress = await newAddress.save();
    return res.status(201).json(savedAddress);
  } catch (err) {
    return res.status(500).json(err);
  }
};

const updateAddress = async (req, res) => {
  const id = req.params.addressId;

  try {
    const updatedAddress = await Address.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    return res.status(200).json(updatedAddress);
  } catch (err) {
    return res.status(500).json(err);
  }
};
//get getAddress
const getAddresses = async (req, res) => {
  try {
    const getAddress = await Address.find({});
    return res.status(200).json(getAddress);
  } catch (err) {
    return res.status(500).json(err);
  }
};
//get Address by id
const getAddress = async (req, res) => {
  const id = req.params.addressId;

  try {
    const getAddress = await Category.findById(id);
    return res.status(200).json(getAddress);
  } catch (err) {
    return res.status(500).json(err);
  }
};
//delete  Address

const deleteAddress = async (req, res) => {
  const id = req.params.addressId;

  try {
    const deleteAddress = await Category.findOneAndDelete(id);
    return res.status(200).json(deleteAddress).send("raw tfasa5");
    //return res.status(200).send("raw tfasa5");
  } catch (err) {
    return res.status(500).json(err);
  }
};

module.exports.createAddress = createAddress;
module.exports.updateAddress = updateAddress;
module.exports.getAddresses = getAddresses;
module.exports.getAddress = getAddress;
module.exports.deleteAddress = deleteAddress;
