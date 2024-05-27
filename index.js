//REST-tjänsten, backend
//Hantera och läser från databasen, MySQL
import express from 'express';
import mysql from 'mysql';

const app = express();
const port = 3000;
const __dirname = 'C:\\Users\\Annepanne22\\Desktop\\Fe23-BackendDb_NodeJS_REST-Angelica-Lundmark';
app.use(express.static(__dirname + '/public'));

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

app.get('/students/:id', (req, res) => {
    const {id} = req.params;
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

        const query = `SELECT * from students where id=${id}`;
        mysqlConnector.query(query, (err, result) => {
            if(err){
                return res.json({message: "error at query"})
            }
            res.json(result); 
        })
    });
})
//'/all-students-by-last-name/lname'
app.get('/studentsFname/:fname', (req, res) => {
    const {fname} = req.params;
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

        const query = `SELECT students.fName, students.lName, courses.name
        FROM students_courses
        JOIN students ON students.students_ID = students_courses.students_ID
        JOIN courses ON courses.courses_ID = students_courses.courses_ID
        WHERE students.fname="${fname}";`;
        mysqlConnector.query(query, (err, result) => {
            if(err){
                return res.json({message: "error at query", err:err})
            }
            res.json(result); 
        })
    });
})
app.get('/studentsLname/:lname', (req, res) => {
    const {lname} = req.params;
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

        const query = `SELECT students.fName, students.lName, courses.name
        FROM students_courses
        JOIN students ON students.students_ID = students_courses.students_ID
        JOIN courses ON courses.courses_ID = students_courses.courses_ID
        WHERE students.lname="${lname}";`;
        mysqlConnector.query(query, (err, result) => {
            if(err){
                return res.json({message: "error at query", err:err})
            }
            res.json(result); 
        })
    });
})
app.get('/studentsTown/:from', (req, res) => {
    const {from} = req.params;
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

        const query = `SELECT * from students where from="${from}"`;
        mysqlConnector.query(query, (err, result) => {
            if(err){
                return res.json({message: "error at query"})
            }
            res.json(result); 
        })
    });
})

app.get('/studentsAndCourses', (req, res) => {
    const {id} = req.params;
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

        const query = `SELECT students.fName, students.lName, courses.name
        FROM students_courses
        JOIN students ON students.students_ID = students_courses.students_ID
        JOIN courses ON courses.courses_ID = students_courses.courses_ID;`;
        mysqlConnector.query(query, (err, result) => {
            if(err){
                return res.json({message: "error at query"})
            }
            res.json(result); 
        })
    });
})

app.get('/studentsInCoursesByID/:id', (req, res) => {
    const {id} = req.params;
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

        const query = `SELECT students.fName, students.lName, courses.name
        FROM students_courses
        JOIN students ON students.students_ID = students_courses.students_ID
        JOIN courses ON courses.courses_ID = students_courses.courses_ID
        WHERE courses.courses_ID = ${id};`;
        mysqlConnector.query(query, (err, result) => {
            if(err){
                return res.json({message: "error at query"})
            }
            res.json(result); 
        })
    });
})

app.get('/searchCoursesByName/:name', (req, res) => {
    const {name} = req.params;
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

        const query = `SELECT name, description from courses
        WHERE name LIKE "%${name}%";`;
        mysqlConnector.query(query, (err, result) => {
            if(err){
                return res.json({message: "error at query", err:err})
            }
            res.json(result); 
        })
    });
})
app.get('/searchCoursesByDescription/:description', (req, res) => {
    const {description} = req.params;
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

        const query = `SELECT name, description from courses
        WHERE description LIKE "%${description}%";`;
        mysqlConnector.query(query, (err, result) => {
            if(err){
                return res.json({message: "error at query", err:err})
            }
            res.json(result); 
        })
    });
})


app.get('/', (req, res) => {
 //res.sendFile('C:\\Users\\Annepanne22\\Desktop\\Fe23-BackendDb_NodeJS_REST-Angelica-Lundmark\\frontend\\index.html')
 res.sendFile(__dirname+'/public/index.html')
})

app.listen(port, () => {
console.log(`Example app listening on port ${port}`)
})
