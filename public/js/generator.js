import {studentTemplate} from './htmlTemplate.js';
import { courseTemplate } from './htmlTemplate.js';
export const generateStudentList = (students) => {
    const ulElement = document.createElement('ul');
    students.forEach(student => {
        const liElement = document.createElement('li');
        liElement.innerHTML = studentTemplate(student)
        ulElement.appendChild(liElement);
    });

    document.querySelector('.generate-list-students').innerHTML='';
    document.querySelector('.generate-list-students').appendChild(ulElement);
}

export const generateCourseList = (course) => {
    const ulElement = document.createElement('ul');
    course.forEach(course => {
        const liElement = document.createElement('li');
        liElement.innerHTML = courseTemplate(course)
        ulElement.appendChild(liElement);
    });

    document.querySelector('.generate-list-courses').innerHTML = '';
    document.querySelector('.generate-list-courses').appendChild(ulElement);
}

