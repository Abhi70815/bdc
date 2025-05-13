const express = require('express');
const router = express.Router();
const Payment = require('../model/payment')


router.get('/payment',async(req,res)=>{

  try {
    let data = await Payment.find();
    res.status(200).json({message:"success", data:data})
  } catch (error) {
    res.status(400).json({message:"failed",err:error.message})
  }
})

router.post('/payment',async(req,res)=>{
  const { name, rollno, branch, phone, amount } = req.body || {};
  try {
        const newPayment = new Payment({name, rollno, branch, phone, amount});
        await newPayment.save();
        res.status(201).json({message:"Success",data:"payment Successful"});
    } catch (error) {
    res.status(400).json({message:"failed",err:error.message})
    }  
})

router.delete('/payment/:id',async(req,res)=>{

const { id } = req.params || {};
  try {
       const newPayment = await Payment.findByIdAndDelete(id)
        await newPayment.save();
        res.status(201).json({message:"Success",data:"payment delete Successful"});
    } catch (error) {
    res.status(400).json({message:"failed",err:error.message})
    }  
})
module.exports= router;