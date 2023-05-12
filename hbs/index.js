const express = require('express')
const app = express()

const  puerto = 8484

app.get('/404', (req, res) => {
    res.write('Home')
    res.end()
})

app.listen(puerto, ()=>{
    console.log('escuchando puertito')
})

