import {generateStudentList, generateCourseList, generateStudentWithCoursesList} from './generator.js'

async function getDataFromDatabase(endpoint, func) {
    const response = await fetch('http://localhost:3000'+endpoint,
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
        func(r)
    })
}
async function postToDatabase(endpoint,body) {
    const response = await fetch('http://localhost:3000'+endpoint,
        {
            method: 'post',
            mode: 'cors',
            headers: {
                'Content-type': 'application/json'
            },
            body:JSON.stringify(body)
        }
    );
    return response.json()
}

const buttonAllStudents = document.getElementById('buttonStudent');
buttonAllStudents.addEventListener('click', () => {
    resetTables();
    getDataFromDatabase('/students', generateStudentList);
});

const buttonAllCourses = document.getElementById('buttonCourses');
buttonAllCourses.addEventListener('click', () => {
    resetTables();
    getDataFromDatabase('/courses', generateCourseList);
});
const buttonCourseStudent = document.getElementById ('courseStudent');
buttonCourseStudent.addEventListener('click', () => {
    resetTables();
    getDataFromDatabase('/studentsAndCourses', generateStudentWithCoursesList)
});
const buttonAll = document.getElementById ('buttonAll');
buttonAll.addEventListener('click', () => {
    resetTables()
    getDataFromDatabase('/students', generateStudentList);
    getDataFromDatabase('/courses', generateCourseList);
    getDataFromDatabase('/studentsAndCourses', generateStudentWithCoursesList);
});


const formEvent = document.getElementById('search');
formEvent.addEventListener('submit', (e) => {
    e.preventDefault()
    const radioValue = document.querySelector('[name="searchBy"]:checked').value;
    const searchValue = document.getElementById('gsearch').value;
    resetTables();
    switch(radioValue){
        case 'student_ID':
            getDataFromDatabase('/students/'+searchValue, generateStudentList);
            break;
        case 'fName':
            getDataFromDatabase('/studentsBy/fName/'+searchValue, generateStudentWithCoursesList);
            break;
        case 'lName':
            getDataFromDatabase('/studentsBy/lName/'+searchValue, generateStudentWithCoursesList);
            break;
        case 'town':
            getDataFromDatabase('/studentsBy/town/'+searchValue, generateStudentWithCoursesList);
            break;
        case 'courses_ID':
            getDataFromDatabase('/studentsByCourse/'+searchValue, generateStudentWithCoursesList);
            break;
        case 'name':
            getDataFromDatabase('/studentsByCourseName/'+searchValue, generateStudentList);
            break;
        case 'specName':
            getDataFromDatabase('/searchCourse/name/'+searchValue, generateCourseList);
            break;
        case 'specDes':
            getDataFromDatabase('/searchCourse/description/'+searchValue, generateCourseList);
            break;
        default:
            getDataFromDatabase('/students/'+searchValue, generateStudentList);
    }
})



const modal = document.getElementById("addNewModal");
document.querySelectorAll(".close").forEach(c => {
    c.addEventListener('click', () => {
        closeModal();
    })
});
window.onclick = function(event) {
    if (event.target == modal) {
        closeModal();
    }
}

const addStudentbtn = document.getElementById("addStudent");
addStudentbtn.addEventListener('click', () => {
    modal.classList.add('open');
    document.getElementById('addNewStudentForm').classList.add('open')
})

const addStudentForm = document.getElementById ('addNewStudentForm');
addStudentForm.addEventListener('submit', (e) => {
    e.preventDefault();
    resetTables();
    const fName = document.getElementById('addStudentfName').value;
    const lName = document.getElementById('addStudentlName').value;
    const town = document.getElementById('addStudentTown').value;
    postToDatabase(`/addStudent`,{fName,lName,town});
    getDataFromDatabase('/students', generateStudentList);
    closeModal();
});

var addCoursebtn = document.getElementById("addCourse");
addCoursebtn.addEventListener('click', () => {
    modal.classList.add('open');
    document.getElementById('addNewCourseForm').classList.add('open')
})

const addCourseForm = document.getElementById ('addNewCourseForm');
addCourseForm.addEventListener('submit', (e) => {
    e.preventDefault();
    resetTables();
    const name = document.getElementById('addCourseName').value;
    const description = document.getElementById('addCourseDescription').value;
    postToDatabase(`/addCourse`,{name,description});
    getDataFromDatabase('/courses', generateCourseList);
    closeModal();
});

var addStudentCoursebtn = document.getElementById("addStudentCourse");
addStudentCoursebtn.addEventListener('click', () => {
    modal.classList.add('open');
    document.getElementById('addNewStudentCourseForm').classList.add('open')
})

const addStudentCourseForm = document.getElementById ('addNewStudentCourseForm');
addStudentCourseForm.addEventListener('submit', (e) => {
    e.preventDefault();
    resetTables();
    const studentId = document.getElementById('addStudentId').value;
    const courseId = document.getElementById('addCourseId').value;
    postToDatabase(`/addStudentCourse`,{studentId,courseId});
    getDataFromDatabase('/studentsAndCourses', generateStudentWithCoursesList);
    closeModal();
});

const editStudentForm = document.getElementById ('editStudentForm');
editStudentForm.addEventListener('submit', (e) => {
    e.preventDefault();
    resetTables();
    const id = document.getElementById('editStudentId').value;
    const fName = document.getElementById('editStudentfName').value;
    const lName = document.getElementById('editStudentlName').value;
    const town = document.getElementById('editStudentTown').value;
    postToDatabase(`/updateStudent/`+id,{fName,lName,town});
    getDataFromDatabase('/students', generateStudentList);
    closeModal();
});

const editCourseForm = document.getElementById ('editCourseForm');
editCourseForm.addEventListener('submit', (e) => {
    e.preventDefault();
    resetTables();
    const id = document.getElementById('editCourseId').value;
    const name = document.getElementById('editCourseName').value;
    const description = document.getElementById('editCourseDescription').value;
    postToDatabase(`/updateCourse/`+id,{name,description});
    getDataFromDatabase('/courses', generateCourseList);
    closeModal();
});
