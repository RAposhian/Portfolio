require('dotenv').config()
const express = require('express'),
    app = express(),
    {CONNECTION_STRING, SERVER_PORT} = process.env,
    port = SERVER_PORT;

app.use(express.json());

app.listen(port, () => console.log(`Server is running on port: ${port}`));


//Endpoints 