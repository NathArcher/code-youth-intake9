const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const db = require('./db')
const port = 8080

app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)

// app.get('/', (request, response) => {
//   response.json({ info: 'Node.js, Express, and Postgres API' })
// })

app.get('/users', db.getUsers)
app.get('/users/:id', db.getUserById)

app.set("view engine","ejs")
app.get ('/',(req,res)=>
res.render('form'))
app.use(express.urlencoded()); 
app.post('/save', db.createUser)

app.put('/users/:id', db.updateUser)
app.delete('/users/:id', db.deleteUser)

app.listen(port, () => {
  console.log(`App running on port ${port}.`)
})