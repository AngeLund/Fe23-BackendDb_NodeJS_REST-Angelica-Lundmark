export const studentTemplate = (student) => {
    return `
        <h3>${student.fName}</h3>
    `
}
export const courseTemplate = (course) => {
    return `
    <h3>${course.name}</h3>
    `
}

export const courseTableHeader = () => {
    return `

        <th>Name</th>
        <th>Description</th>

    `
}

export const courseTableTemplate = (course) => {
    return `

            <td>${course.name}</td>
            <td>${course.description}</td>

    `
}

export const studentTableTemplate = (student) => {
    return `

            <td>${student.fName}</td>
            <td>${student.lName}</td>
            <td>${student.town}</td>
    `
}

export const studentTableHeader = () => {
    return `

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
            <td>${students_courses.name}</td>
    `
}
