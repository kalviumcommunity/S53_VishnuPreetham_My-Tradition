const express = require("express")
const mongoose=require("mongoose");
const {Kurtha} =require("../Schemas/ProductSchema")
const route = express.Router()

route.post("/wedding/:model", async (req, res) => {
    const modelName = req.params.model;
    const productData = req.body;
    try {
        const Model = mongoose.model(modelName);
        const updatedProduct = new Model(productData);
        await updatedProduct.save(); 
        res.status(200).send(updatedProduct);
    } catch (error) {
        res.status(500).send(error); 
        console.log(error);
    }
});
route.get('/getProducts/:model', async (req, res) => {
    const modelName = req.params.model;
    try {
        const Model = mongoose.model(modelName);
        const Products=await Model.find();
        res.status(200).send(Products);;
    } catch (error) {
        res.status(500).send(error); 
        console.log(error);
    }
});
module.exports=route;