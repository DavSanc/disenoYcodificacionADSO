const express = require('express')
const app = express()
const port = 3000
// Get the client
const mysql = require('mysql2/promise');

// Create the connection to database
const connection = mysql.createpool({
  host: 'localhost',
  user: 'root',
  database: 'login',
});
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/login', (req, res) => {
    const datos = req.query;
    console.log(datos);
    res.send('Inicio de sesion')
    
    
  })

  app.get('/validate', (req, res) => {
    res.send('Sesion validad')
  })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})