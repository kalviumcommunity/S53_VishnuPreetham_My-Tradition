const mongoose = require('mongoose');
const Schema = mongoose.Schema;



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
  },
  Likes:{
    type:[String],
    default:[]
  }
});

const cartScheema = new Schema({
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
  }})

  const models = {
    sareeProd: mongoose.model("sarres", productSchema),
    Kurtha: mongoose.model("Kurtha", productSchema),
    Product: mongoose.model('Product', productSchema),
    Croptop: mongoose.model('Croptop', productSchema),
    WeddingModern: mongoose.model('WeddingModern', productSchema),
    Nikkah: mongoose.model('Nikkah', productSchema),
    Telugu: mongoose.model('TeluguWedding', productSchema),
    Haldi: mongoose.model('Haldi', productSchema),
    Bengali: mongoose.model('Bengali', productSchema),
    AndhraPradesh: mongoose.model('Andhrapradesh', productSchema),
    Odissa: mongoose.model('Odissa', productSchema),
    Kerala: mongoose.model('Kerala', productSchema),
    Karnataka: mongoose.model('Karnatakas', productSchema),
    Maharastra: mongoose.model('Maharastra', productSchema),
    TamilNadu: mongoose.model('TamilNadu', productSchema),
    cart: mongoose.model('cart', cartScheema),
    Kashmiri: mongoose.model('Kashmiri', productSchema),
    Punjabi: mongoose.model('punjabi', productSchema)
};
module.exports = models
