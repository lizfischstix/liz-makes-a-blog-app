const router = require('express').Router();
// const comment = require('../../models'); <- DON'T NEED THIS BC NOTHING IS COMING FROM/GOING TO DB

router.get("/", (req,res)=> {
    console.log("Got our homepage landing route")
    res.render("homepage")
})

router.get("/login", (req, res)=>{
console.log("should've hit my home route");
res.render("login")
})
router.get("/dashboard", (req,res) => {
    res.render("dashboard")
})
module.exports = router