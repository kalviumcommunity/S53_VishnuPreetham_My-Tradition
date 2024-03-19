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


const Image = mongoose.model('Image', imageSchema);
const Event = mongoose.model('Event', eventSchema);
const State = mongoose.model('State', stateSchema);

module.exports = { Image, Event, State };
