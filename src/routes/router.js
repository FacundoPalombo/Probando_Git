const express = require("express")
const router = express.Router()

router.get("/", (req,res)=>{
    res.send("Esta solicitando la pagina principal!")
})

router.get("/about", (req,res)=>{
    res.send("Esta solicitando la pagina ABOUT!")
})

router.get("/who", (req,res)=>{
    res.send("Esta solicitando la pagina de WHO WE ARE!")
})

module.exports = router;