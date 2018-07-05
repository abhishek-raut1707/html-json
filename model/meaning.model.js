var mongoose = require('mongoose');

var MeaningSchema = mongoose.Schema({
    Meaning_ID: String,
    Status: String,
    Meaning: String,
    Notes: String,
    Popularity: String,
    Best_Way_to_Memorize: String,
    Categories: String,
    Further_Suggestions: String
});

module.exports = mongoose.model('MeaningSchema', MeaningSchema);