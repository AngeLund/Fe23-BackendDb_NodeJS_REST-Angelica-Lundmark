import {courseTableTemplate, studentTemplate,
    studentTableHeader, courseTableHeader, studentTableTemplate} from './htmlTemplate.js';

/*export const generateStudentList = (students) => {
    const ulElement = document.createElement('ul');
    students.forEach(student => {
        const liElement = document.createElement('li');
        liElement.innerHTML = studentTemplate(student)
        ulElement.appendChild(liElement);
    });

    document.querySelector('.generate-list-students').innerHTML='';
    document.querySelector('.generate-list-students').appendChild(ulElement);
}*/

/* export const generateCourseList = (course) => {
    const ulElement = document.createElement('ul');
    course.forEach(course => {
        const liElement = document.createElement('li');
        liElement.innerHTML = courseTemplate(course)
        ulElement.appendChild(liElement);
    });

    document.querySelector('.generate-list-courses').innerHTML = '';
    document.querySelector('.generate-list-courses').appendChild(ulElement);
} */


export const generateCourseList = (course) => {
    const tbl = document.createElement("table");
    const tbBody = document.createElement('tbody');
    const trHeaderElement = document.createElement('tr');
    trHeaderElement.innerHTML = courseTableHeader();
    tbBody.appendChild(trHeaderElement)
    course.forEach(course => {
        const trElement = document.createElement('tr')
        trElement.innerHTML = courseTableTemplate(course);
        tbBody.appendChild(trElement)
    })
    tbl.appendChild(tbBody)
    document.querySelector('.generate-list-courses').innerHTML = '';
    document.querySelector('.generate-list-courses').appendChild(tbl);

}



export const generateStudentList = (students) => {
    const tbl = document.createElement("table");
    const tbBody = document.createElement('tbody');
    const trHeaderElement = document.createElement('tr');
    trHeaderElement.innerHTML = studentTableHeader();
    tbBody.appendChild(trHeaderElement)
    students.forEach(student => {
        const trElement = document.createElement('tr')
        trElement.innerHTML = studentTableTemplate(student);
        tbBody.appendChild(trElement)

    });
    tbl.appendChild(tbBody)
    document.querySelector('.generate-list-students').innerHTML='';
    document.querySelector('.generate-list-students').appendChild(tbl);
}