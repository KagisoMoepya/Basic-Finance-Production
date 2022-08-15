const sqlite3 = require("sqlite3").verbose()
const db = new sqlite3.Database("./database.db", sqlite3.OPEN_READWRITE, error => {
    if(error) return console.error(error.message)

    console.log("Database connection successful...")
})

exports.db = db


