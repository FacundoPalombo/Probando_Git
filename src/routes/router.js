const express = require("express")
const router = express.Router()

router.get("/", (req,res)=>{
    res.render("./")
})

router.get("/about", (req,res)=>{
    res.send("Esta solicitando la pagina ABOUT")
})

router.get("/who", (req,res)=>{
    res.send("Esta solicitando la pagina de WHO WE ARE")
})

router.get("/prices", (req,res)=>{
    res.send("Esta solicitando la pagina de PRICES")
})

router.get("*",(req,res)=>{
    res.send("Nothing to do here! v:")
})

module.exports = router;