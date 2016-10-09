/**
 * Created by championswimmer on 08/10/16.
 */
/**
 * Created by championswimmer on 08/10/16.
 */
const mysql = require('mysql');

var getConnection = () => {
    var connection = mysql.createConnection({
        host     : 'localhost',
        user     : 'newuser',
        password : 'newpassword',
        database : 'newdatabase'
    });

    connection.connect();

    return connection;
}

module.exports = {
    show: (cb) => {
        let connection = getConnection();

        connection.query('SELECT * FROM todolist', function(err, rows, fields) {
            if (err) throw err;

            cb(rows)

        });

        connection.end();
    },
    add: (todo, done, cb) => {
        let connection = getConnection();

        let queryString = 'INSERT INTO todolist(todo, done) VALUES("'+ todo +'", ' + done + ')';
        console.log(queryString);

        connection.query(queryString, (err, rows, fields) => {
            if (err) throw err;

            cb(rows)
        })
    },
    do: (id) => {},
    delete: (id) => {}
}