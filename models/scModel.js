const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schittsCreekSchema = new Schema({
    character: {
        type: String,
        required: true
    },
    quoteText: {
        type: String,
        required: true
    },
    season: Number,
    episodeName: String
})

module.exports = mongoose.model('Quote', schittsCreekSchema)


    // "character": "Moira Rose",
    // "quote": "This wine is awful. Get me another glass.",
    // "season": 1,
    // "episode": "Wine and Roses",
    // "id": 1