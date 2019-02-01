
let orm = require('../config/orm');

let tableName = 'burgers'

// Set up burger object
let Burger = {
    addNew: function(burgerName, devoured=false, cb) {
        orm.insertOne(tableName, ['burger_name', 'devoured'], [burgerName, devoured], function(data) {
            cb(data);
        });
    },
    devourBurger: function(id, cb) {
        orm.updateOne(tableName, id, 'devoured', true, function(data) {
            cb(data);
        })
    },
    getBurgers: function(cb) {
        orm.selectAll(tableName, function(data) {
            
            cb(data);
        });
    }
}

module.exports = Burger;