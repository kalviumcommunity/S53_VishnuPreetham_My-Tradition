const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const imageSchema = new Schema({
    img: String,
    imgDescription: String
});


const eventSchema = new Schema({
    event_name: String,
    state: String,
    tradition: String,
    cost: String,
    stock: String,
    images: [imageSchema] 
});

const stateSchema = new Schema({
    name: String,
    events: [{
        name: String,
        traditions: [eventSchema] 
    }]
});



const productSchema = new Schema({
  img: String,
  price: Number,
  Description: String,
  Aboutproduct: String,
  color: String,
  product_details: {
    description: String,
    top_type: String,
    top_style: String,
    neck_neckline: String,
    top_pattern: String,
    sleeve_detail: String,
    bottom_type: String,
    dupatta_stole: String,
    fabric: String
  },
  additional_info: {
    ideal_occasions: [String],
    accessories: [String]
  }
});

const sareeProd=mongoose.model("sarres",productSchema);
const Kurtha=mongoose.model("Kurtha",productSchema);
const Product = mongoose.model('Product', productSchema);
const Croptop = mongoose.model('Croptop', productSchema);
const WeddingModern = mongoose.model('WeddingModern', productSchema);
const Nikkah = mongoose.model('Nikkah', productSchema);
const Telugu = mongoose.model('TeluguWedding', productSchema);
const Haldi = mongoose.model('Haldi', productSchema);
const Bengali = mongoose.model('Bengali', productSchema);
const AndhraPradesh = mongoose.model('Andhrapradesh', productSchema);
const Odissa = mongoose.model('Odissa', productSchema);
const Kerala = mongoose.model('Kerala', productSchema);
const Karnataka = mongoose.model('Karnatakas', productSchema);
const Maharastra = mongoose.model('Maharastra', productSchema);
const TamilNadu = mongoose.model('TamilNadu', productSchema);




const Image = mongoose.model('Image', imageSchema);
const Event = mongoose.model('Event', eventSchema);
const State = mongoose.model('State', stateSchema);

module.exports = { Image, Event, State,Product,sareeProd,Kurtha,Croptop,WeddingModern,Nikkah,Telugu,Haldi,Bengali,AndhraPradesh,Odissa,Kerala,Karnataka,Maharastra,TamilNadu};
