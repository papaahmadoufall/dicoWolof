// Import dependencies
const express = require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser');
const cors = require('cors');

// Create Express app
const app = express();

// Middleware
app.use(bodyParser.json());
app.use(cors());

// MySQL Connection
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root', // Change this to your MySQL username
    password: 'root', // Change this to your MySQL password
    database: 'dico_db' // Change this to your MySQL database name
});

connection.connect(err => {
    if (err) {
        console.error('Error connecting to MySQL database:', err);
        return;
    }
    console.log('Connected to MySQL database');
});

// Define routes
app.get('/', (req, res) => {
    res.send('Hello from Express!');
});

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});
