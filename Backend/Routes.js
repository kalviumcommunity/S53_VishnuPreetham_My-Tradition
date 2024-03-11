const express=require("express")
const router=express.Router()
router.get("/getdata",async(req,res)=>{
    try {
        res.send("Hello Data Got sucess Fully")
        
    } catch (error) {
        console.log(error)
    }
})
module.exports =router