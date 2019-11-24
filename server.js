var express=require('express')
var fs = require('fs')
const htmlRoutes = require("./routes/htmlRoutes")
var apiRoutes = require("./routes/apiRoutes")

const app = express()
const port = process.env.PORT || 3000

app.use(express.static('public'))

app.use(express.urlencoded({extended: true}))
app.use(express.json())

// Front-end Routes
app.use("/", htmlRoutes)
// Back-end Routes
app.use("/api", apiRoutes)
app.listen(port, () => {
    console.log("We're listening to HOT " + port + "FM" )
})