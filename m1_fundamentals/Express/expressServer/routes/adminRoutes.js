const express = require ('express')
const router =  express.Router()

router.get ('/', (req,res)=>
res.send ("Welcome Admin"))

router.get ('/data',(req,res)=>
res.json ({"Name":"Nathaniel","Surname":"Clement","Age":"28"})
)

router.get ("/about", (req,res)=>
res.send ("Admin has 100% access privileges"))

module.exports = router