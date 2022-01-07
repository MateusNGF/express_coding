const express = require('express')
const ExpressAdapterRoute = require('./Adapter')
const Controller = require('./Controller')

const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get('/:status/', ExpressAdapterRoute.adapt(new Controller()))


app.listen(3000, (e) => { console.log("Running") })