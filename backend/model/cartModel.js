const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    shippingInfo : {
        address : {
            type : String,
            required : true
        },
        city : {
            type : String,
            required : true
        },
        state : {
            type : String,
            required : true
        },
        country : {
            type : String,
            required : true
        },
        pincode : {
            type : Number,
            required : true
        },
    },
    orderItems : [
        {
            name : {
                type : String,
                required : true
            },
            price : {
                type : String,
                required : true
            },
            product : {
                type : mongoose.Schema.ObjectId,
                ref : "Product",
                required : true
            }
        }
    ],

    user : {
        type : mongoose.Schema.ObjectId,
        ref : "User",
        required : true
    },

    paidAt : {
        type :Date
    },

    paymentInfo :{
        id: {
            type : String,
            required : true
        },
        status : {
            type : String,
            required : true
        }
    },
    itemsPrice : {
        type : Number,
        default : 0
    },

    createdAt :{
        type : Date,
        default : Date.now
    }
})

module.exports = mongoose.model("Order", orderSchema);