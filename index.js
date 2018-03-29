var express = require('express')
var app = express()
var router = express.Router()
var path = require('path')


app.set('views',path.join(__dirname,'views'))
app.set('view engine', 'ejs')
app.use(require('./routes/homepage'))


app.listen(process.env.PORT || 5000)