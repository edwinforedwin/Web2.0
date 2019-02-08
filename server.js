const express = require('express');
const app = express();

app.get('/',(req,res)=> {
    var email = req.body.email;
    var amount = req.body.amount;

    res.send({"Amount" : amount, "Email" : email});
})
app.listen(3000,()=> {
    console.log('Server is running in Port 3000');
});