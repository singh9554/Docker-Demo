const express = require('express');
const app = express();

const dotenv = require('dotenv');
dotenv.config();


app.get('/home', (req,res) => {
    try {
        res.json({message:"OK"});
    } catch (error) {
        res.json({message:"Not established"});
    }
})
app.listen(process.env.PORT, () => {
    console.log(`The server is running at ${process.env.PORT}`);
})

