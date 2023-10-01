const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    
    title: {
        type : String,
        required : true
    },

    price : {
        type : Number,
        required : true,
        maxLength : [7, `length is not exceed`]
    },

    description : {
        type : String,
        required : true,
    },

    category : {
        type : String,
        required : true
    },

    createdAt : {
        type : Date,
        default : Date.now
    }

});

module.exports = mongoose.model("Product", productSchema);