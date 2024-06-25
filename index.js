const express = require('express');
const app = express();

const port = 3000;

app.get('/home', (req,res) => {
    try {
        res.json({message:"OK"});
    } catch (error) {
        res.json({message:"Not established"});
    }
})
app.listen(port, () => {
    console.log(`The server is running at ${port}`);
})

