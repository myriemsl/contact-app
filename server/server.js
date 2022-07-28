const express = require('express');
const app = express();


// Import Database Connection
const db = require('./Config/db')

// Connect to database
db();

// Parse The Data
app.use(express.json());

// Define Routes
app.use('/', require('./Routes/contact.routes.js'))


// Server
app.listen(5000, (err) => {
    if (err) console.log(err)
    else console.log('server is running on port 5000')
});

