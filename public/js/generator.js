import {courseTableTemplate,  studensCourseTableTemplate, studentCourseTableHeader,
    studentTableHeader, courseTableHeader, studentTableTemplate} from './htmlTemplate.js';


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
    tbl.appendChild(tbBody);
    document.querySelector('.generate-list-student').appendChild(tbl);
}

export const generateStudentWithCoursesList = (students_courses_list) => {
    const tbl = document.createElement("table");
    const tbBody = document.createElement('tbody');
    const trHeaderElement = document.createElement('tr');
    trHeaderElement.innerHTML = studentCourseTableHeader();
    tbBody.appendChild(trHeaderElement)
    students_courses_list.forEach(students_courses => {
        const trElement = document.createElement('tr')
        trElement.innerHTML = studensCourseTableTemplate(students_courses);
        tbBody.appendChild(trElement)

    });
    tbl.appendChild(tbBody)
    document.querySelector('.generate-list-studentCourses').appendChild(tbl);
}