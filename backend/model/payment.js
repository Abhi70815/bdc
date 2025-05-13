const mongoose = require('mongoose');
const paymentSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    rollno:{
        type:String,
        required:true
    },
    branch:{
        type:String,
        required:true
    },
    phone:{
        type:Number,
        required:true
    },
    amount:{
        type:Number,
        required:true
    }
},{timestamps:true})

const Payment= mongoose.model('payment',paymentSchema)

module.exports = Payment;