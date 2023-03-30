const express = require('express')
const app  = express()


app.set("view engine", "ejs")
app.use(express.static('public'))


app.get('/',(req,res)=>
res.render('main')
)

app.get('/firestarters',(req,res)=>
res.render('fireStarters')
)

app.get('/waterstarters',(req,res)=>
res.render('waterStarters')
)

app.get('/grassstarters',(req,res)=>
res.render('grassStarters')
)

app.listen(8080,()=>console.log("server running"))