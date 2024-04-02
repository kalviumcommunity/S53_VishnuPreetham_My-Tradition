const express = require("express")

const ProductRoute = express.Router()
const { State,Product,sareeProd,Kurtha,Croptop,WeddingModern,Nikkah,Telugu,Haldi,Bengali,AndhraPradesh, Odissa, Kerala, Karnataka, Maharastra, TamilNadu} = require('../Schemas/Productdata.js');
/////////Get the TamilNadu Dresses;
ProductRoute.get('/tamilnaduwedding', async (req, res) => {
    try {
        const data = await TamilNadu.find();
        res.json(data);
    } catch (error) {
        console.log(error);
        res.status(500).send("Internal Server Error");
    }
});
/////////Get the Mahrastra Dresses;
ProductRoute.get('/maharastra', async (req, res) => {
    try {
        const data = await Maharastra.find();
        res.json(data);
    } catch (error) {
        console.log(error);
        res.status(500).send("Internal Server Error");
    }
});
/////////Get the Karnataka Dresses;
ProductRoute.get('/karnatakawedding', async (req, res) => {
    try {
        const data = await Karnataka.find();
        res.json(data);
    } catch (error) {
        console.log(error);
        res.status(500).send("Internal Server Error");
    }
});
/////////Get the Kerala Dresses;
ProductRoute.get('/keralawedding', async (req, res) => {
    try {
        const data = await Kerala.find();
        res.json(data);
    } catch (error) {
        console.log(error);
        res.status(500).send("Internal Server Error");
    }
});
/////////Get the Odissa Dresses;
ProductRoute.get('/odissawedding', async (req, res) => {
    try {
        const data = await Odissa.find();
        res.json(data);
    } catch (error) {
        console.log(error);
        res.status(500).send("Internal Server Error");
    }
});
/////////Get the And=dra Wedding Dresses;
ProductRoute.get('/andhrawedding', async (req, res) => {
    try {
        const data = await AndhraPradesh.find();
        res.json(data);
    } catch (error) {
        console.log(error);
        res.status(500).send("Internal Server Error");
    }
});
/////////Get the Haldi Wears;
ProductRoute.get('/bengali', async (req, res) => {
    try {
        const data = await Bengali.find();
        res.json(data);
    } catch (error) {
        console.log(error);
        res.status(500).send("Internal Server Error");
    }
});

/////////Get the Haldi Wears;
ProductRoute.get('/haldi', async (req, res) => {
    try {
        const data = await Haldi.find();
        res.json(data);
    } catch (error) {
        console.log(error);
        res.status(500).send("Internal Server Error");
    }
});
/////////Get the TeluguWedding Sarees;
ProductRoute.get('/telugu', async (req, res) => {
    try {
        const data = await Telugu.find();
        res.json(data);
    } catch (error) {
        console.log(error);
        res.status(500).send("Internal Server Error");
    }
});
////////Get the Nikkah Dresses;
ProductRoute.get('/nikkah', async (req, res) => {
    try {
        const data = await Nikkah.find();
        res.json(data);
    } catch (error) {
        console.log(error);
        res.status(500).send("Internal Server Error");
    }
});
////////Get the WeddingModern Dresses;
ProductRoute.get('/weddingmoderndress', async (req, res) => {
    try {
        const data = await WeddingModern.find();
        res.json(data);
    } catch (error) {
        console.log(error);
        res.status(500).send("Internal Server Error");
    }
});
////////Get the Croptop;
ProductRoute.get('/croptop', async (req, res) => {
    try {
        const data = await Croptop.find();
        res.json(data);
    } catch (error) {
        console.log(error);
        res.status(500).send("Internal Server Error");
    }
});
/////////Get the Kurtha data;
ProductRoute.get('/kurtha', async (req, res) => {
    try {
        const data = await Kurtha.find();
        res.json(data);
    } catch (error) {
        console.log(error);
        res.status(500).send("Internal Server Error");
    }
});
/////////Get the Saree data;
ProductRoute.get('/saree', async (req, res) => {
    try {
        const data = await sareeProd.find();
        res.json(data);
    } catch (error) {
        console.log(error);
        res.status(500).send("Internal Server Error");
    }
});
////////Get the dupatta data.
ProductRoute.get('/dupatta', async (req, res) => {
    try {
        const data = await Product.find();
        res.json(data);
    } catch (error) {
        console.log(error);
        res.status(500).send("Internal Server Error");
    }
});
ProductRoute.get('/getdata', async (req, res) => {
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
module.exports=ProductRoute