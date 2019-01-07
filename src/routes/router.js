const express = require("express")
const router = express.Router()

router.get("/", (req,res)=>{
    res.render("./")
})

router.get("/about", (req,res)=>{
    res.send("./#about")
})

router.get("/who", (req,res)=>{
    res.send("./who.html")
})

router.get("/prices", (req,res)=>{
    res.send("./prices.html")
})

router.get("*",(req,res)=>{
    res.send("Nothing to do here! v:")
})

module.exports = router;