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
        subject: 1, 
        cost:"20", 
    }

    classScheduleValue = [
        {
            weekday: 4, 
            time_from: 722, 
            time_to: 1220
        },
    ]
    await createProffy(db, { proffyValue , classScheduleValue , classValue})

    // check inserted data

    // check all proffys
    const selectedProffys = await db.all("SELECT * FROM proffys")

    // check classes from a especific proffy
    // and call it back 
    const selectClassesAndProffys = await db.all(`
        SELECT classes.*, proffys.*
        FROM proffys
        JOIN classes ON (classes.proffy_id = proffys.id)
        WHERE classes.proffy_id = 1;
    `)

    // the proffys working hours ,for example , is 8h to 18h
    // the working hours of time_from (8h) needs to be after or the same as the needed ones
    // the time_to (18h) needs to be up the seted one /*  time_from<= time selected <time_to    */

    const selectClassesSchedules = await db.all(`
        SELECT class_schedule.*
        FROM class_schedule
        WHERE class_schedule.class_id = "1"
        AND class_schedule.weekday = "4"
        AND class_schedule.time_from <= "1300"
        AND class_schedule.time_to > "1300"
    `)

     console.log(selectClassesSchedules)

})