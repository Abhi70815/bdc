const express = require('express')
const router = express.Router();

const Enquiry =require('../model/enquiry')

router.get('/query',async(req,res)=>{
    try {
        const data = await Enquiry.find();
        res.status(200).json({message:"success",data:data});
    } catch (error) {
        res.status(400).json({message:"failed",err:error.message});
    }
})

router.post('/query',async(req,res)=>{
    const {name,email,message} = req.body || {};
    try {
        const newQuery = new Enquiry({
            name , email,message
        })
        await newQuery.save()
        res.status(200).json({message:"success",data:"new query added successful"});

    } catch (error) {
        res.status(400).json({message:"failed",err:error.message});
        
    }
})

router.delete('/query/:id',async(req,res)=>{
  const {id}= req.params || '';
  try {
     let data =await Enquiry.findByIdAndDelete(id);
        res.status(200).json({message:"success",data:" query deleted successful"});

  } catch (error) {
        res.status(400).json({message:"failed",err:error.message});
    
  }
})

module.exports =router;