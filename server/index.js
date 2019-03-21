const express = require('express');
const app = express();
let port = process.env.PORT|| 3333




app.listen(port, function () {
    console.log("Server listening on port ", port)
})