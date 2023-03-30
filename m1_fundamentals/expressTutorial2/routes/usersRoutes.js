const express = require ('express')
const router =  express.Router()

router.get ('/', (req,res)=>
res.send ("Welcome User"))

router.get ('/data',(req,res)=>
res.json ([{"User":"Bob","Location":"London,UK","Age":"30"},{"User":"Richard","Location":"California,USA","Age":"29"},{"User":"Jonathan","Location":"Sydney,AUS","Age":"42"}])
)

router.get ("/about", (req,res)=>
res.send ("Users have viewing access prilleges"))

module.exports = router