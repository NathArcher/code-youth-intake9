const express = require('express')
const app = express()

app.use (express.static ('public'))
// app.get('/',(req,res) => 
// res.send("Home")
// )
app.get('/about', (req,res)=>
res.send ("About Us")
)
app.listen(8080,()=>console.log('server running'))
