const express = require('express');
const mongoose = require('mongoose');
const app = express()
const cors = require('cors');
const port = process.env.PORT || 3000;

main().catch(err => console.log(err));

//krishnabajpai28
//5ghk62JFD2ieWnyL

app.use(express.json());
app.use(cors());

async function main() {
  await mongoose.connect('mongodb+srv://krishnabajpai28:5ghk62JFD2ieWnyL@veggify-react-app.3xbtqio.mongodb.net/?retryWrites=true&w=majority&appName=veggify-react-app');
}

app.get('/', (req, res) => {
  res.send('Veggify Recipe App Server is running!')
})

main().then(()=> console.log("CONNECTED")).catch(err=>console.log(err));

const ItemRoutes = require("./src/routes/itemRoute");
const CategoryRoutes = require("./src/routes/categoryRoute");

app.use('/api', ItemRoutes);
app.use('/api', CategoryRoutes);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})