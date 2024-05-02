const mongoose = require('mongoose');
const Schema = mongoose.Schema;





const catogarymodel = mongoose.model('catagory', catogory);



const Image = mongoose.model('Image', imageSchema);
const Event = mongoose.model('Event', eventSchema);
const State = mongoose.model('State', stateSchema);

module.exports = { Image, Event, State,catogarymodel };
