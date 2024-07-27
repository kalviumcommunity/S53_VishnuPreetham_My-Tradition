const express = require("express")
const router = express.Router()
const mongoose=require("mongoose");
const razorpay =require("razorpay");
const crypto =require("crypto")
const Payment =require("./razorpayschema");
require("dotenv").config();

const instance = new razorpay({
    key_id: 'rzp_test_RN0AamryQ1aDZq',
    key_secret: 'aTPYo2OMNeI16aYf8DpW4w5x'
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

router.post("/paymentverification", async (req, res) => {
    const { razorpay_order_id, razorpay_payment_id, razorpay_signature } = req.body;
    const body = razorpay_order_id + "|" + razorpay_payment_id;
    const expectedSignature = crypto.createHmac('sha256', "aTPYo2OMNeI16aYf8DpW4w5x").update(body.toString()).digest('hex');
    const isAuth = expectedSignature === razorpay_signature;
  
    if (isAuth) {
      await Payment.create({
        razorpay_order_id,
        razorpay_payment_id,
        razorpay_signature
      });
  
      res.redirect(`https://client-b-vishnu-preethams-projects.vercel.app/paymentSuccess?reference=${razorpay_payment_id}`);
    } else {
      res.status(400).json({ success: false });
    }
  });

router.get("/api/getkey",(req,res)=>{
    return res.status(200).json({key:process.env.KEY})
})

module.exports=router;