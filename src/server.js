// Data

const proffys = [
    { 
        name: "Diego Fernandes",
        avatar: "https://avatars2.githubusercontent.com/u/2254731?s=460&amp;u=0ba16a79456c2f250e7579cb388fa18c5c2d7d65&amp;v=4",
        whatsapp: "8998989899",
        bio:"Entusiasta das melhores tecnologias de química avançada.<br><br>Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões.", 
        subject: "Química", 
        cost:"20", 
        weekday:[0], 
        time_from:[7220], 
        time_to:[10320]
    },
    { 
        name: "Yabaidesunee",
        avatar: "https://cdn.discordapp.com/attachments/576429097341812768/729732893378609233/yabaidesune.jpg",
        whatsapp: "8998989899",
        bio:"Yabaidesune", 
        subject: "Química", 
        cost:"20", 
        weekday:[4], 
        time_from:[7220], 
        time_to:[10320]
    },
    { 
        name: "Mayk Brito",
        avatar: "https://avatars2.githubusercontent.com/u/6643122?s=460&u=1e9e1f04b76fb5374e6a041f5e41dce83f3b5d92&v=4",
        whatsapp: "8998989899",
        bio:"Entusiasta das melhores tecnologias de química avançada.<br><br>Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões.", 
        subject: "Química", 
        cost:"20", 
        weekday:[4], 
        time_from:[7220], 
        time_to:[10320]
    }
]

const subjects = [
    "Artes",
    "Biologia",
    "Ciências",
    "Educação física",
    "Física",
    "Geografia",
    "História",
    "Matemática",
    "Português",
    "Química",
]

const weekdays = [
    "Domingo",
    "Segunda-feira",
    "Terça-feira",
    "Quarta-feira",
    "Quinta-feira",
    "Sexta-feira",
    "Sábado",
]


// functionalities
function pageLanding (req,res) {
    return res.render("index.html")
}

function pageStudy (req,res) {
    const filters = req.query
    return res.render("study.html", { proffys, filters, subjects, weekdays })
}

function pageGiveClasses (req,res) {
    const data = req.query

    // if data exists
    const isNotEnpty = Object.keys(data).length > 0
    if (isNotEnpty) {   
        // add data to proffys
        proffys.push(data)

        return res.redirect("/study")
    }
    // else , don't add, and show giveClasses page

    return res.render("give-classes.html", { subjects, weekdays})
}

//-------------------//
// requiring dependences

const express = require('express')
const server = express()
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
// static archives config (css,script,img)
.use(express.static("public"))
// HTML routes
.get("/", pageLanding)
.get("/study", pageStudy)
.get("/give-classes", pageGiveClasses)
// server door
.listen(5500)