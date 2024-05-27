const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const productSchema = new Schema({
  img: { type: String, required: true },
  price: { type: Number, required: true },
  Description: { type: String, required: true },
  Aboutproduct: { type: String, required: true },
  color: { type: String, required: true },
  product_details: {
    description: { type: String, required: true },
    top_type: { type: String, required: true },
    top_style: { type: String, required: true },
    neck_neckline: { type: String, required: true },
    top_pattern: { type: String, required: true },
    sleeve_detail: { type: String, required: true },
    bottom_type: { type: String, required: true },
    dupatta_stole: { type: String, required: true },
    fabric: { type: String, required: true }
  },
  additional_info: {
    ideal_occasions: { type: [String], required: true },
    accessories: { type: [String], required: true }
  },
  Likes: {
    type: [String],
    default: []
  }
});

const models = {
  Saree: mongoose.model("Saree", productSchema),
  Kurtha: mongoose.model("Kurtha", productSchema),
  Product: mongoose.model('Product', productSchema),
  Croptop: mongoose.model('Croptop', productSchema),
  WeddingModern: mongoose.model('WeddingModern', productSchema),
  Nikkah: mongoose.model('Nikkah', productSchema),
  TeluguWedding: mongoose.model('TeluguWedding', productSchema),
  Haldi: mongoose.model('Haldi', productSchema),
  Bengali: mongoose.model('Bengali', productSchema),
  AndhraPradesh: mongoose.model('AndhraPradesh', productSchema),
  Odissa: mongoose.model('Odissa', productSchema),
  Kerala: mongoose.model('Kerala', productSchema),
  Karnataka: mongoose.model('Karnataka', productSchema),
  Maharastra: mongoose.model('Maharastra', productSchema),
  TamilNadu: mongoose.model('TamilNadu', productSchema),
  Cart: mongoose.model('Cart', cartSchema),
  Kashmiri: mongoose.model('Kashmiri', productSchema),
  Punjabi: mongoose.model('Punjabi', productSchema)
};

module.exports = models;

