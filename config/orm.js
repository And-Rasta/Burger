// Reuire ORM

const connection = require('../config/connection');

// Return question marks for SQL query strings
function formatArrayForSql(arr, doubles=false) {
    var newArr = [];
    for(var i = 0; i < arr.length; i++) {
        if(!doubles) newArr.push('?');
        if(doubles) newArr.push('??');
    }
    return newArr.join(',');
}

var orm = {
    // Return all items from table in the DB
    selectAll: function(tableName, callback) {
        connection.query('SELECT * FROM ??', [ tableName ], (err, data) => {
            if(err) throw err;
            callback(data);
        });
    },
    // Insert one row into a table in DB
    insertOne: function(tableName, keys, values, callback) {
        // Double-question marks for keys
        var qMarksKeys = formatArrayForSql(keys, true);
        // Single question-mark for values
        var qMarksVals = formatArrayForSql(values);
        // Build query
        var query = 'INSERT INTO ' + tableName + ' (' + qMarksKeys + ') VALUES(' + qMarksVals + ');';
        newArr = [];
        // Push all keys and values into one new array
        for(let i = 0; i<keys.length; i++) newArr.push(keys[i]);
        for(let i = 0; i<values.length; i++)  newArr.push(values[i]);
        
        // Run query
        connection.query(query, newArr, function(err, data) {
            if(err) throw err;
            callback(data);
        }); 
    },
    // Updates one field in table in DB
    updateOne: function(tableName, idToUpdate, fieldToUpdate, valueToUpdate, callback) {
        connection.query('UPDATE ?? SET ?? = ? WHERE id = ?', [tableName, fieldToUpdate, valueToUpdate, idToUpdate], (err, data) => {
            if(err) throw err;
            callback(data);
        })
    }
}


module.exports = orm;