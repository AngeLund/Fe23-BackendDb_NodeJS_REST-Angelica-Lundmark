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
