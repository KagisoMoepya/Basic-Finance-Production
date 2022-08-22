const { app } = require('./project server')
const { db } = require('./project database')

/**
* Register POST from user
*/
app.post("/register_user", (request, response) => {

    const data = request.body
    const { user_full_name } = data
    const { user_email_address } = data
    const { user_password } = data

    const selectQueryEmailCheck = "SELECT * FROM user_details WHERE user_email_address = ?"
    const emailStatement = db.prepare(selectQueryEmailCheck)

    emailStatement.each(user_email_address, (error, row) => {
        if(error) return console.error(error.message)

        console.log(row)
    })
    emailStatement.finalize()
})