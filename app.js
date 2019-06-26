const express = require('express');
const app = express();

app.get('/', function(req, res) {
    res.send('yooooo');
});

app.listen(3000, function(err){
    if (err){
        console.log(err) 
    }
    console.log('server is live on port 3000')
});