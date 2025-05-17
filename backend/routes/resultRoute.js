const express = require('express');
const Result = require('../model/result');
const router = express.Router();


router.post('/result', async (req, res) => {
    try {
        const result = new Result(req.body);
        await result.save();
        res.status(201).send(result);
    } catch (err) {
        res.status(400).send(err.message);
    }
}) 

router.get('/result', async (req, res) => {
    try {
        const results =  await Result.find();
        res.status(201).send(results);
    } catch (err) {
        res.status(400).send(err.message);
    }
}) 

router.get('/result/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const result = await Result.findOne({id});
        if (!result) {
            return res.status(404).send({ message: 'Result not found' });
        }
        res.status(200).send(result);
    } catch (err) {
        res.status(400).send({ message: err.message });
    }
})
router.put('/result/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const result = await Result.findByIdAndUpdate(id, req.body, { new: true });
        if (!result) {
            return res.status(404).send({ message: 'Result not found' });
        }
        res.status(200).send(result);
    } catch (err) {
        res.status(400).send({ message: err.message });
    }
})

router.delete('/result/:id', async (req, res) => {
    const id = req.params.id;
    try {
        const result = await Result.findByIdAndDelete(id);
        if (!result) {
            return res.status(404).send({ message: 'Result not found' });
        }
        res.status(200).send({ message: 'Result deleted successfully' });
    } catch (error) {
        res.status(400).send({ message: error.message });
    }
})

module.exports = router;