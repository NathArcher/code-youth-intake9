const express = require ('express')
const users = require ('./users.js')
const app = express ()

app.set("view engine","ejs")
app.use (express.static('public'))
console.log ("users",users);

app.get ("/",(req,res) =>(
// res.render ('first', {username:"Nathan"}))
res.json (users)
))

app.get ('/:id', (req,res)=> {
    const id = req.params.id;
    const user = users.filter ((item) => item.id == id)
    res.json (user)
})

// app.get ("/user-information", (req,res) =>
// res.render ("second", { data: {age:28,location:"Ottawa", placeOfBirth:"London, UK"}})
// )

app.listen (8080, ()=>console.log ('server running'))