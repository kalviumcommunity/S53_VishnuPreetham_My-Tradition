const express = require("express")
const {Kurtha} =require("../Schemas/Productdata")
const route = express.Router()



route.patch("/likes/:userId/:id",async(req,res)=>{
    const id = req.params.id;
    const user_Id=req.params.userId;
    try {
        const product=await Kurtha.findById(id);
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
            res.send({"meassage":"product not found"});
           
        }
    } catch (error) {
        res.send({"err":error});
    }
})


route.delete("/delete/:id", async (req, res) => {
    const id = req.params.id;
    try {
        let product = await Kurtha.findById(id);
        if (product.count==0){
            const product = await Kurtha.findByIdAndDelete(id);
        }
        if (!product) {
            return res.status(404).send("Product not found");
        }
        else{
            res.send({"message":"Product Deleted Successfully"});
        }
    } catch (error) {
        res.status(500).send({ error: "Internal Server Error" });
    }
});
module.exports=route;