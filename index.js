const express = require('express');
const app = express();
const port = 8080;

// Test Route
app.get('/test', (req, res) => {
    res.status(200).send('Hello, this is a test route!');
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
