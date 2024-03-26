const express = require("express")
const router = express.Router()
const mongoose=require("mongoose");
const razorpay =require("razorpay");
const crypto =require("crypto")
const Payment =require("./razorpayschema");
require("dotenv").config();

const instance = new razorpay({
    key_id:process.env.kEY,
    key_secret:process.env.SECRET,
})


// checkout api
router.post("/checkout",async(req,res)=>{

    const options ={
        amount:Number(req.body.amount*100),
        currency:"INR",
    };
    const order = await instance.orders.create(options);
    res.status(200).json({success:true,order })

})

// payemnt verification
router.post("/paymentverification",async(req,res)=>{
   const {razorpay_order_id,razorpay_payment_id,razorpay_signature}=req.body;
   const body = razorpay_order_id + "|" +razorpay_payment_id;
   const expectedsgnature =crypto.createHmac('sha256',process.env.SECRET).update(body.toString()).digest('hex')
   const isauth = expectedsgnature === razorpay_signature;
   if(isauth){
    await Payment.create({
        razorpay_order_id,razorpay_payment_id,razorpay_signature 
    })
    res.send({message:"success"});
   }
   else{
    res.status(400).json({success:false});
   }
})

router.get("/api/getkey",(req,res)=>{
    return res.status(200).json({key:process.env.KEY})
})

module.exports=router;