// Include the express package
const express = require('express');

// Create the express app
const app = express();

app.get('/', (request, response) => {
    response.json({creatot: "Engr. Ahiara Wilson"});
});

// Get the port variable
const PORT = process.env.PORT || 5000;

// Start the server
app.listen(PORT, () => {
    console.log('Server started on port 5000');
});