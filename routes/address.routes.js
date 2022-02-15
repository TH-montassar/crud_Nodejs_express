const express =require("express");
const { createAddress, updateAddress, getAddress, getAddresses, deleteAddress } = require("../controllers/address.controller");
const router=express.Router();

router.post("/",createAddress);
router.put('/:addressId', updateAddress);
router.get('/', getAddresses);
router.get('/:addressId',getAddress);
router.delete('/:addressId',deleteAddress);

module.exports = router