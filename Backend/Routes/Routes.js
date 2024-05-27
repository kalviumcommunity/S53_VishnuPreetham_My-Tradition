const express = require("express")
const mongoose=require("mongoose");
const route = express.Router()
const models=require("../Schemas/ProductSchema")
route.put("/likes/:model/:userId/:id",async(req,res)=>{
    const id = req.params.id;
    const user_Id=req.params.userId;
    const modelName=req.params.model;
    try {
        const Model = mongoose.model(modelName);
        const product=await Model.findById(id);
        if (product){
            if (!product.Likes.includes(user_Id)){
                product.Likes.push(user_Id)
                const updatedProduct=await product.save();
                res.send(updatedProduct)
            }
            else{
                res.send({"message":false});
            }
        }else{
            res.send({"message":"product not found"});
           
        }
    } catch (error) {
        res.send({"err":error});
    }
})
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