const express = require('express')
const app = express()
const port = 3000

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