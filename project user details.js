const { db } = require('./project database')

class User {

    constructor(email_address, password) {
        this.email = email_address
        this.password = password
        if(true) {
            this.stock = this.invetory_items(email_address)
        }
    }

    invetory_items(user_email_address) {

        let inventory_list = []
        const select = `SELECT * FROM user_inventory WHERE user_email_address = ?`
        const statement = db.prepare(select)

        statement.each(user_email_address, (error, row) => {
            if(error) return console.error(error.message)

            console.log(row)
            inventory_list.push(row)
        })

        setTimeout(() => {
         return inventory_list   
        }, 50)

    }

    
}

let user1 = new User('kagisomoepya19@gmail.com', 'Emmaunuel19')
console.log(user1)