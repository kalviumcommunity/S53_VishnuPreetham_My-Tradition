const express = require("express")
const Joi =require("joi")
const router = express.Router()
const { User, UserDeliveryAddressM } = require("./Schemas/UserSchema")
router.use(express.json())

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

////Saving the Array from the wish lists;
router.post("/addtocart/:userEmail/", async (req, res) => {
    const Email = req.params.userEmail;
    const ProductDetails = req.body;
    console.log(ProductDetails)
    try {
        const user = await User.findOne({ email: Email });
        if (!user) {
            return res.status(404).json({ message: 'User Not Found' });
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

//Removing the Elements firm the wishlist;
router.delete('/deletingproductfromwishlist/:userEmail/:id', async (req, res) => {
    const Email=req.params.userEmail;
    const id=req.params.id;
    
    try {
        const user = await User.findOne({ email: Email }); 
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        else{
            const Product = await user.SavedProd.findIndex(product => product._id === id);
            if (Product!=-1) {
            user.SavedProd.splice(Product,1);
            const updatedUser = await user.save();
            res.status(200).json({ message: 'Saved array updated successfully', user: updatedUser });
            }else{
                res.send({Message:"this product already deleted"})
            }     
        }
    } catch (error) {
        console.error('Error updating user document:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
});
////Adding to Cart the Array from the wish lists;
router.post("/addtocart/:userEmail/", async (req, res) => {
    const Email = req.params.userEmail;
    const ProductDetails = req.body;
    console.log(ProductDetails)
    try {
        const user = await User.findOne({ email: Email });
        if (!user) {
            return res.status(404).json({ message: 'User Not Found' });
        } else {
            user.AddToCart.push(ProductDetails);
            const updatedUser = await user.save(); 
            res.status(200).json({ message: 'Saved array updated successfully', user: updatedUser });
        }
    } catch (error) {
        console.error('Error updating user document:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

//Removing the Elements firm the wishlist;
router.delete('/Removecart/:userEmail/:id', async (req, res) => {
    const Email=req.params.userEmail;
    const id=req.params.id;
    
    try {
        const user = await User.findOne({ email: Email }); 
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        else{
            const Product = await user.AddToCart.findIndex(product => product._id === id);
            if (Product!=-1) {
            user.AddToCart.splice(Product,1);
            const updatedUser = await user.save();
            res.status(200).json({ message: 'Saved array updated successfully', user: updatedUser });
            }else{
                res.send({Message:"this product already deleted"})
            }     
        }
    } catch (error) {
        console.error('Error updating user document:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
});
// Routes for adding the useraddress.
// Routes for adding the user address
router.post("/address/:userEmail", async (req, res) => {
    const userEmail = req.params.userEmail;
    const Address = req.body;

    try {
        const { error } = userDeliveryAddressValidationSchema.validate(Address); 
        if (error) {
          return res.json({ success: false, Message: error.details[0].message });
        }
        else{
            const user = await User.findOne({ email: userEmail });
            if (!user) {
                return res.status(404).json({ message: 'User Not Found' });
            }
            
            const newAddress = new UserDeliveryAddressM(Address);
            user.DelivaryAddress.push(newAddress); 
    
            await user.save();
            res.status(200).json({ message: 'Delivery address added successfully', user: user });
        }
       
    } catch (error) {
        console.error('Error updating user document:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
});







/// Joi Validation for the UserDelivaryAddress
const userDeliveryAddressValidationSchema = Joi.object({
    Pincode: Joi.string().length(6).required(),
    City: Joi.string().required(),
    HomeAddress: Joi.string().required(),
    District: Joi.string().required(),
    Phone: Joi.string().length(10).required(),
    LandMark: Joi.string().required(),
    State: Joi.string().required()
});
module.exports = router