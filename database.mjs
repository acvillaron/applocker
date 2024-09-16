import mysql from 'mysql2'

var connection = mysql.createConnection({
    host     : '13.79.21.116',
    port: '3306',
    user     : 'db',
    password : 'db',
    database : 'applockertool'
});

connection.connect((err) => {
    console.log(err);
    if(err) console.log("It was impossible to connect with database!!");
})

export const database = connection;