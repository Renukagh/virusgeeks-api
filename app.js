const express = require('express');
const app = express();
// require('dotenv').config(); test
app.get('/',(req,res)=>{
    res.send('Response from Node js API');
})
// Server Initiate
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));