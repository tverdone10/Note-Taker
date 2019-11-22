var express=require('express')
var fs = require('fs')
const htmlRoutes = require("./routes/htmlRoutes")


const app = express()
const port = 3000

app.use(express.static('public'))

app.use(express.urlencoded({extended: true}))
app.use(express.json())

app.use("/", htmlRoutes)
// require("./routes/htmlRoutes")(app)

app.listen(port, () => {
    console.log("We're listening to HOT " + port + "FM" )
})