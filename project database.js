const sqlite3 = require("sqlite3").verbose()
const db = new sqlite3.Database("./project database.db", sqlite3.OPEN_READWRITE, error => {
    if(error) return console.error(error.message)

    console.log("Database connection successful...")
})

/**
 * Can be used to create a table when needed
 */
function create_table() {

    let  createQuery = 'CREATE TABLE IF NOT EXISTS user_details ('
    createQuery += 'user_email_address TEXT PRIMARY KEY NOT NULL, '
    createQuery += 'user_full_name TEXT NOT NULL, '
    createQuery += 'user_password TEXT NOT NULL'
    createQuery += ')'

    const statement = db.prepare(createQuery)
    statement.run([], error => {
        if(error) return console.error(error.message)

        console.log('The Table has Successfully been created')
    })

    statement.finalize
}

exports.db = db


