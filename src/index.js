//Node Global Const
const express = require("express")
const app = express()
const port = process.env.port || 3000;
const {router} = require("./routes/router")
//Routes
app.use("/" , router);

//Server initialized on port 3000
app.listen(port , ()=>{
    console.log(`Server on port ${port}`)
})
