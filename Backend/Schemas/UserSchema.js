const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const userDelivaryAddress=mongoose.Schema({
    Pincode:{
        type:String
    },
    City:{
        type:String
    },
    HomeAddress:{
        type:String,
    },
    District:String,
    Phone:String,
    LandMark:String,
    State:String
})
const userSchema=mongoose.Schema({
    name:{
        type:String,
    },
    email:{
        type:String
    },
    Likes:{
        type:Number,
        default:0
    },
    SavedProd:{
        type:Array,
        default:[]
    },
    Location:{
        type:String
    },
    DelivaryAddress:{
        type:Array,
        default:[]
    },
    AddToCart:{
        type:Array,
        default:[]
    }
    
})

const User = mongoose.model('User', userSchema);
const UserDeliveryAddressM = mongoose.model('UserDeliveryAddress', userDelivaryAddress);

module.exports = { User, UserDeliveryAddressM };