const express = require('express')
const connectToMongo =require('./db.js');
var cors = require('cors')
connectToMongo();
const app = express()
const port = 5000;

//to use req.body
app.use(express.json());
app.use(cors());
//Routes
app.use('/api/auth', require('./routes/auth'));
app.use('/api/notes', require('./routes/notes'));

app.listen(port, () => {
  console.log(`iNotebook backend running on port ${port}`);
})