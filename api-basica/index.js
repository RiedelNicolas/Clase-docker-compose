const express = require("express");
const app = express();

app.get("/", function(req, res) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    return res.send({ message: "Hola, este mensaje lo estoy mandando desde BE! :)" });
});

app.listen(3000, function(){
    console.log('Server listening on port 3000');
});