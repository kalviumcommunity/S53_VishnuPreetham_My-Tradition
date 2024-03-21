const express = require("express")

const router = express.Router()
const { User, userDelivaryAddress } = require("./Schemas/UserSchema")
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

router.post("/postdata", async (req, res) => {
    try {
        res.send("Hello Data Posted sucesss Fully")

    } catch (error) {
        console.log(error)
    }
})
////////////////////User Data get Route
router.get("/getUser", async (req, res) => {
    try {
        const userData = await User.find();
        res.send(userData);
    } catch (error) {
        res.status(500).send({ errorMessage: error });
    }
});
/////////////Create User Dashboard
router.get("/getUser", async (req, res) => {
    try {
        const userData = await User.find();
        res.send(userData);
    } catch (error) {
        res.status(500).send({ errorMessage: error });
    }
});
router.post("/createUser", async (req, res) => {
    try {
        const { email } = req.body;
        const checkUser = await User.findOne({email});
        if (checkUser && checkUser.email == email) {
            res.send({ Message: "this UserAlready exists" })
        }
        else {
            const userData = req.body;
            const newUserData = new User(userData);
            await newUserData.save();
            res.send(newUserData);
        }
    } catch (error) {
        res.status(500).send({ errorMessage: error });
    }
});

//// Saving the Carts.
router.patch('/userAddingCart/:userEmail', async (req, res) => {
    const Email = req.params.userEmail;
    const ProductDetails = req.body;
    try {
        const user = await User.findOne({ email: Email }); 
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        const isAdded = user.SavedProd.some(product => product.imgDescription === ProductDetails.imgDescription);
        if (isAdded) {
            return res.status(200).json({ message: 'Product already added' });
        } else {
            user.SavedProd.push(ProductDetails);
            const updatedUser = await user.save();
            res.status(200).json({ message: 'Saved array updated successfully', user: updatedUser });
        }
    } catch (error) {
        console.error('Error updating user document:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
});
//Removing from the cart;
router.delete('/deletingproductfromcart/:userEmail', async (req, res) => {
    const Email=req.params.userEmail;
    const ProductDetails = req.body;
    try {
        const user = await User.findOne({ email: Email }); 
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        const productIndex = user.SavedProd.findIndex(product => product.imgDescription === ProductDetails.imgDescription);
        if (productIndex!=-1) {
            user.SavedProd.splice(productIndex,1);
            const updatedUser = await user.save();
            res.status(200).json({ message: 'Saved array updated successfully', user: updatedUser });
        }else{
            res.send({Message:"this product alredy deleted"})
        }
    } catch (error) {
        console.error('Error updating user document:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
});




module.exports = router