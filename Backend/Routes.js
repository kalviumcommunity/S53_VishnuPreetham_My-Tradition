const express=require("express")
const router=express.Router()
const { State } = require('./Schemas/Productdata');
router.get('/getdata', async (req, res) => {
    try {
        const data = await State.find().populate({
            path: 'events.traditions.images',
            model: 'Image'
        });
        res.json(data);
    } catch (error) {
        console.log(error);
        res.status(500).send("Internal Server Error");
    }
});

router.post("/postdata",async(req,res)=>{
    try {
        res.send("Hello Data Posted sucesss Fully")
        
    } catch (error) {
        console.log(error)
    }
})
module.exports =router