const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config()

const app = express();

// Middleware
app.use(bodyParser.json());


// app.use(
//   cors({
//     origin: ["http://localhost:5173/"],
//     methods: ["GET", "PUT", "DELETE", "POST"],
//     credentials: true,
//   })
// );

app.use(cors()); 
// Connect to MongoDB
mongoose.connect('mongodb+srv://deepakgupta75066:9bXgDIKHnEOoQREU@cluster0.15vsvbs.mongodb.net/simple-management-system?retryWrites=true&w=majority&appName=Cluster0', {
  
});

const db = mongoose.connection;
db.once('open', () => {
  console.log('Connected to MongoDB');
});


const productRoutes = require('./routes/productRoutes');
app.use('/api', productRoutes);


// Start the server
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
