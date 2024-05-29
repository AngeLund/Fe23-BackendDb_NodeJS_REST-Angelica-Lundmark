export const courseTableHeader = () => {
    return `
        <th>ID</th>
        <th>Name</th>
        <th>Description</th>
    `
}

export const courseTableTemplate = (course) => {
    return `
            
            
            <td>${course.courses_ID}</td>
            <td>${course.name}</td>
            <td>${course.description}</td>
            <td><button onClick="updateCourses(${course.courses_ID},'${course.name}', '${course.description}')">Update</button></td>
            <td><button onClick="deleteCourse(${course.courses_ID})">DEL</button></td>

    `
}

export const studentTableTemplate = (student) => {
    return `
            <td>${student.students_ID}</td>
            <td>${student.fName}</td>
            <td>${student.lName}</td>
            <td>${student.town}</td>
            <td><button onClick="updateStudent(${student.students_ID},'${student.fName}', '${student.lName}','${student.town}')">Update</button></td>
            <td><button onClick="deleteStudent(${student.students_ID})">DEL</button></td>
    `
}

export const studentTableHeader = () => {
    return `
        <th>ID</th>    
        <th>Name</th>
        <th>Last name</th>
        <th>From</th>
    `
}


export const studentCourseTableHeader = () => {
    return `

        <th>Name</th>
        <th>Last name</th>
        <th>Course</th>
    `
}

export const studensCourseTableTemplate = (students_courses) => {
    return `

            <td>${students_courses.fName}</td>
            <td>${students_courses.lName}</td>
            <td>${students_courses.course}</td>
            <td><button onClick="deleteStudentCourse(${students_courses.students_ID}, ${students_courses.courses_ID})">DEL</button></td>
    `
}
