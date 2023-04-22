const {Schema, model} = require('mongoose');

const schema = new Schema({

    category: {
        type: String,
        required: true
    },

    articles: {
        type: Array,
        requires: true
    }
    //title: {
    //    type: String,
    //    required: true
    //},
    //article: { 
    //    type: String,
    //    required: true 
    //},
    //author: {
    //    type: String,
    //    required: true
    //}
});

module.exports = model('article', schema);