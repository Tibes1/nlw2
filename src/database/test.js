const Database = require('./db')
const createProffy = require('./createProffty')


Database.then(async (db) => { 
    // insert data 
    proffyValue = {
        name: "Yabai desunee",
        avatar: "https://cdn.discordapp.com/attachments/576429097341812768/729732893378609233/yabaidesune.jpg",
        whatsapp: "8998989899",
        bio:"Yabaidesune", 
        
    }

    classValue = {
        subject: "Química", 
        cost:"20", 
    }

    classScheduleValue = [
        {
            weekday: 4, 
            time_from: 7220, 
            time_to: 10320
        },
        {
            weekday: 4, 
            time_from: 7220, 
            time_to: 10320
        },
    ]
    await createProffy(db, { proffyValue , classScheduleValue , classValue})

    // check inserted data
})