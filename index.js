const searchGoogle = require("./searchGoogle");

const express = require('express');
const { linkSync } = require('fs');
const app = express()

app.get('/', async function  (req, res){
  const test = await searchGoogle()
  console.log(test)
   return res.json(test)
})

app.post('/:pesquisa', async  (req, res) => {
    console.log(req.params)

    const {pesquisa} = req.params
    const test = await searchGoogle(pesquisa)
    console.log(test)
     return res.json(test)
 })

app.listen(3000)