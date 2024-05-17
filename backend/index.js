//REST-tjänsten, backend
//Hantera och läser från databasen, MySQL
import express from 'express';
import mysql from 'mysql';


const app = express();
const port = 3000;
//get -> /student/123
app.get('/students', (req, res) => {
    var mysqlConnector = mysql.createConnection({
        host     : 'localhost',
        user     : 'root',
        password : '',
        database : 'gritacademy'
    });
    mysqlConnector.connect((e) => {
        if(e) {
            return res.json({message: "error, can't connect to database"})
        }
        const query = "select * from students";
        mysqlConnector.query(query, (err, result) => {
            if(err){
                return res.json({message: "error at query"})
            }
            res.json(result);
            
        })
        
    });
})

app.get('/courses', (req, res) => {
    var mysqlConnector = mysql.createConnection({
        host     : 'localhost',
        user     : 'root',
        password : '',
        database : 'gritacademy'
    });
    mysqlConnector.connect((e) => {
        if(e) {
            return res.json({message: "error, can't connect to database"})
        }

        const query = "select * from courses";
        mysqlConnector.query(query, (err, result) => {
            if(err){
                return res.json({message: "error at query"})
            }
            res.json(result); 
        })
    });
})



app.listen(port, () => {
console.log(`Example app listening on port ${port}`)
})