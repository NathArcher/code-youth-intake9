const express = require ('express')
const app = express()
const userRoutes = require ('./routes/usersRoutes')
const adminRoutes = require ('./routes/adminRoutes')


app.use ('/user', userRoutes)
app.use ('/admin', adminRoutes)
app.listen (8080, ()=> console.log ("Server is running"))