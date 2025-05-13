const express = require('express');
const app = express();
const mongoose = require('mongoose');
const PaymentRouter = require('./routes/paymentRoute');
const queryRouter = require('./routes/enquiryRoute');
const cors = require('cors');
require('dotenv').config();

const port = process.env.PORT || 3000;

mongoose.connect(process.env.MONGO_URL)
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.log(err));

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(PaymentRouter);
app.use(queryRouter);

app.get('/', (req, res) => {
  res.send("Server is running");
});

app.use((req, res) => {
  res.status(404).send("Page not found");
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});