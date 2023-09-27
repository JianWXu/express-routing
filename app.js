const express = require('express');

const functions = require('./functions');
const ExpressError = require('./errors');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/mean/:numbers", function(error, request, response, next) {
    try {
        let nums = request.params.numbers;
        console.log(nums)
    } catch(e){
        next(e);
    }
    

});


// app.use((error, request, response, next){


// })


app.listen(3000, function () {
  console.log('App on port 3000');
})