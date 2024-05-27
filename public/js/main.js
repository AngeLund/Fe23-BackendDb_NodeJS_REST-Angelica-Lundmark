import {generateStudentList, generateCourseList, generateStudentWithCoursesList} from './generator.js'
import {  } from './generator.js';
const buttonAllStudents = document.getElementById('buttonStudent');
buttonAllStudents.addEventListener('click', () => {
    fetchStudents()
})


/*const buttonStudenBylName = document.getElementById('tes');
buttonStudenBylName.addEventListener('click', () => {
    fetchStudents();
    fetchCourses()
})

const test = document.getElementById('rw');
test.addEventListener('click', () => {
    fetchStudentBylName('West')
})*/


const buttonAllCourses = document.getElementById('buttonCourses');
buttonAllCourses.addEventListener('click', () => {
    fetchCourses()
})

const buttonCourseStudent = document.getElementById ('courseStudent');
buttonCourseStudent.addEventListener('click', () => {
    fetchStudentsWithCourses()
})

async function fetchStudents() {
    const response = await fetch('http://localhost:3000/students',
        {
            method: 'get',
            mode: 'cors',
            headers: {
                'Content-type': 'application/json'
            }
        }
    );
    const res = response.json();
    res.then(r => {
        generateStudentList(r)
    })
}
async function fetchStudentById(id) {
    const response = await fetch('http://localhost:3000/students/'+id,
        {
            method: 'get',
            mode: 'cors',
            headers: {
                'Content-type': 'application/json'
            }
        }
    );
    const res = response.json();
    res.then(r => {
        generateStudentList(r)
    })
}

async function fetchStudentBylName(lName) {
    const response = await fetch('http://localhost:3000/studentsLname/'+lName,
        {
            method: 'get',
            mode: 'cors',
            headers: {
                'Content-type': 'application/json'
            }
        }
    );
    
    const res = response.json();
    res.then(r => {
        generateStudentList(r)
    })
}

async function fetchStudentByTown(from) {
    const response = await fetch('http://localhost:3000/studentsTown/'+from,
        {
            method: 'get',
            mode: 'cors',
            headers: {
                'Content-type': 'application/json'
            }
        }
    );
    
    const res = response.json();
    res.then(r => {
        generateStudentList(r)
    })
}


async function fetchCourses() {
    const response = await fetch('http://localhost:3000/courses',
        {
            method: 'get',
            mode: 'cors',
            headers: {
                'Content-type': 'application/json'
            }
        }
    );
    const res = response.json();
    res.then(r => {
        generateCourseList(r)
    })
}

async function fetchAll() {
    const response = await fetch('http://localhost:3000',
        {
            method: 'get',
            mode: 'cors',
            headers: {
                'Content-type': 'application/json'
            }
        }
    );
    const res = response.json();
    res.then(r => {
        generateCourseList(r)
    })
}

async function fetchStudentsWithCourses() {
    const response = await fetch('http://localhost:3000/studentsAndCourses',
        {
            method: 'get',
            mode: 'cors',
            headers: {
                'Content-type': 'application/json'
            }
        }
    );
    const res = response.json();
    res.then(r => {
        generateStudentWithCoursesList(r)
    })
}

async function fetchStudentsWithCoursesbyID(id) {
    const response = await fetch('http://localhost:3000/students_courses'+id,
        {
            method: 'get',
            mode: 'cors',
            headers: {
                'Content-type': 'application/json'
            }
        }
    );
    const res = response.json();
    res.then(r => {
        generateCourseList(r)
    })
}

async function fetchStudentsWithCoursesbyName(name) {
    const response = await fetch('http://localhost:3000/students_courses/'+name,
        {
            method: 'get',
            mode: 'cors',
            headers: {
                'Content-type': 'application/json'
            }
        }
    );
    const res = response.json();
    res.then(r => {
        generateCourseList(r)
    })
}