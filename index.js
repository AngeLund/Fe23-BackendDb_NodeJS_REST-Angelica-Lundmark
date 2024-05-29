//REST-tjänsten, backend
//Hantera och läser från databasen, MySQL
import express from 'express';
import mysql from 'mysql';
import bodyParser from 'body-parser';

const app = express();
const port = 3000;

app.use(express.static('public'));
// Set up body parser middleware to parse URL-encoded form data
app.use(bodyParser.urlencoded({ extended: true }));
// Use body-parser middleware to send JSON data
app.use(bodyParser.json());

const sql = (res, query) => {
    const mysqlConnector = mysql.createConnection({
        host     : 'localhost',
        user     : 'root',
        password : '',
        database : 'gritacademy'
    });
    mysqlConnector.connect((e) => {
        if(e) {
            console.log(e)
            return res.json({message: "error, can't connect to database"})
        }
        mysqlConnector.query(query, (err, result) => {
            if(err){
                console.log(err)
                return res.json({message: "error at query", err:err})
            }
            return res.json(result);
            
        })
        
    });
} 

app.get('/students', (req, res) => {
    const query = "SELECT * from students";
    sql(res, query);
})

app.get('/students/:id', (req, res) => {
    const {id} = req.params;
    const query = `SELECT * from students where students_ID=${id}`;
    sql(res, query);

})

app.get('/studentsBy/:key/:value', (req, res) => {
    const {key, value} = req.params;
    const query = `SELECT students.*, (courses.name) AS course, courses.courses_ID
        FROM students_courses
        JOIN students ON students.students_ID = students_courses.students_ID
        JOIN courses ON courses.courses_ID = students_courses.courses_ID
        WHERE students.${key}="${value}";`;
        sql(res, query);
})

app.get('/courses', (req, res) => {
    const query = "select * from courses";
    sql(res, query);

})

app.get('/studentsByCourse/:id', (req, res) => {
    const { id } = req.params;
    const query = `SELECT students.*, (courses.name) AS course, courses.courses_ID
        FROM students_courses
        JOIN students ON students.students_ID = students_courses.students_ID
        JOIN courses ON courses.courses_ID = students_courses.courses_ID
        WHERE courses.courses_ID="${id}";
        `;
        sql(res, query);
})

app.get('/studentsByCourseName/:name', (req, res) => {
    const { name } = req.params;
    const query = `SELECT students.*
        FROM students_courses
        JOIN students ON students.students_ID = students_courses.students_ID
        JOIN courses ON courses.courses_ID = students_courses.courses_ID
        WHERE courses.name="${name}";
        `;
        sql(res, query);
})


app.get('/searchCourse/:key/:value', (req, res) => {
    const {key, value} = req.params;
    const query = `SELECT * from courses
        WHERE ${key} LIKE "%${value}%";`;
        sql(res, query);
})

app.get('/studentsAndCourses', (req, res) => {
    const query = `SELECT students.*, (courses.name) AS course, courses.courses_ID
        FROM students_courses
        JOIN students ON students.students_ID = students_courses.students_ID
        JOIN courses ON courses.courses_ID = students_courses.courses_ID
        ORDER BY students.students_ID
        ;`;
        sql(res, query);
})

app.post('/addStudent', (req, res) => {
    const {fName, lName, town} = req.body;
    const query = `INSERT INTO students (fName, lName, town)
    VALUES ("${fName}", "${lName}", "${town}");
    `
    sql(res,query);


});
app.post('/addCourse', (req, res) => {
    const {name, description} = req.body;

    const query = `INSERT INTO courses (name, description)
    VALUES ("${name}", "${description}");
    `;
    sql(res, query);


});
app.post('/addStudentCourse', (req, res) => {
    const {studentId, courseId} = req.body;
    const query = `INSERT INTO students_courses (students_ID, courses_ID)
    VALUES (${parseInt(studentId)}, ${parseInt(courseId)});
    `;
    sql(res, query);
});

app.delete('/students/:id', (req, res) => {
    const {id} = req.params;
    const query = `DELETE FROM students WHERE students.students_ID = ${id}`
    sql(res, query);

});
app.delete('/courses/:id', (req, res) => {
    const {id} = req.params;
    const query = `DELETE FROM courses WHERE courses.courses_ID = ${id}`
    sql(res, query);

});
app.delete('/studentCourse/:studentId/:courseId', (req, res) => {
    const {studentId, courseId} = req.params;
    const query = `DELETE FROM students_courses 
        WHERE students_courses.students_ID = ${studentId} 
        AND students_courses.courses_ID = ${courseId}`
    sql(res, query);
});

app.post('/updateStudent/:id', (req,res) => {
    const {id} = req.params;
    const {fName, lName, town } = req.body;
    if(fName || lName || town){
        let query = `UPDATE students SET`;
        if(fName) query += ` fName = "${fName}"`;
        if(lName) query += `${fName?',':''} lName = "${lName}"`;
        if(town) query += `${fName || lName?',':''} town = "${town}"`;
        query += ` WHERE students.students_ID = ${id};`;
        sql(res, query);
    } 
})
app.post('/updateCourse/:id', (req,res) => {
    const {id} = req.params;
    const {name, description } = req.body;
    if(name || description ){
        let query = `UPDATE courses SET`;
        if(name) query += ` name = "${name}"`;
        if(description) query += `${name?',':''} description = "${description}"`;
        query += ` WHERE courses.courses_ID = ${id};`;
        sql(res, query);
    } 
})

//Funka ej :(
app.post('/updateStudentCourse/:studentId/:courseId', (req,res) => {
    const {studentId, courseId} = req.params;
    const {newStudentId, newCourseIdId } = req.body;
    if(newStudentId || newCourseIdId ){
        let query = `UPDATE students_courses SET`;
        if(newStudentId) query += ` students_ID = ${newStudentId}`;
        if(newCourseIdId) query += `${newStudentId?',':''} courses_ID = ${newCourseIdId}`;
        query += ` WHERE students_courses.students_ID = ${studentId} 
            AND students_courses.courses_ID = ${courseId}`;
        sql(res, query);
    } 
})
//
app.get('/', (req, res) => {
 res.sendFile('./public/index.html')
})

app.listen(port, () => {
console.log(`Example app listening on port ${port}`)
})


/*
UPDATE students_courses SET courses_ID = '7' WHERE students_courses.students_ID = 1 AND students_courses.courses_ID = 1;
DELETE FROM students_courses WHERE `students_courses`.`students_ID` = 1 AND `students_courses`.`courses_ID` = 5

UPDATE students_courses SET students_ID = 3, courses_ID = 5 WHERE students_courses.students_ID = 2 AND students_courses.courses_ID = 7;

*/