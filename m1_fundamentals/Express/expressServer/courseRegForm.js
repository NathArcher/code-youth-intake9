const express = require ('express')
const app = express ()

app.set("view engine","ejs")

app.get ("/",(req,res) =>
res.render ('courseRegistration'))

app.use (express.urlencoded())
app.post('/save', (req, res) => {
    const name = req.body.name
    const email = req.body.email
    const course = req.body.course
    
    const table = `
      <table>
        <tr>
          <th>Name</th>
          <td>${name}</td>
         
          
        </tr>
        <tr> 
        <th>Email</th>
        <td>${email}</td>
        </tr>
        <tr>
          <th>Course</th>
          <td>${course}</td>
        </tr>
      </table>
    `
  
    res.send(`
    <html>
      <head>
        <style>
          .table {
            border-collapse: collapse;
            border: 1px solid black;
            padding: 5px;
          }
          th, td {
            border: 1px solid black;
            padding: 5px;
          }
        </style>
      </head>
      <body>
        ${table}
      </body>
    </html>
  `)
})

app.listen (8080, ()=>console.log ('server running'))