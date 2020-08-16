//-------------------//
// requiring dependences

const express = require('express');
const server = express();

const { pageLanding, pageStudy, pageGiveClasses, saveClasses } = require('./pages')

const nunjucks = require('nunjucks')

//------------------//
// nunjucks config
nunjucks.configure('src/views', {
    express: server,
    noCache: true,
})

//------------------//
// start and server config
server
// receive data from req.body
.use(express.urlencoded({ extended: true }))
// static archives config (css,script,img)
.use(express.static("public"))
// HTML routes
.get("/", pageLanding)
.get("/study", pageStudy)
.get("/give-classes", pageGiveClasses)
.post("/save-classes", saveClasses)
// server door
.listen(5500)