function resetTables()  {
    document.querySelector('.generate-list-courses').innerHTML = '';
    document.querySelector('.generate-list-student').innerHTML= '';
    document.querySelector('.generate-list-studentCourses').innerHTML= '';
}
function updateStudent(id, fName, lName, town){
    const modal = document.getElementById('editModal');
    document.getElementById('editStudentId').value = id;
    document.getElementById('editStudentfName').value = fName;
    document.getElementById('editStudentlName').value = lName;
    document.getElementById('editStudentTown').value = town;
    
    modal.classList.add('open');
    document.getElementById('editStudentForm').classList.add('open')
}
function updateCourses(id, name, description){
    const modal = document.getElementById('editModal');
    document.getElementById('editCourseId').value = id;
    document.getElementById('editCourseName').value = name;
    document.getElementById('editCourseDescription').value = description;
    
    modal.classList.add('open');
    document.getElementById('editCourseForm').classList.add('open')
}
function deleteStudent(id) {
    fetch('http://localhost:3000/students/'+id,
        {
            method: 'delete',
            mode: 'cors',
            headers: {
                'Content-type': 'application/json'
            }
        }
    );
    resetTables();
    document.getElementById('buttonStudent').click();
}
function deleteCourse(id) {
    fetch('http://localhost:3000/courses/'+id,
        {
            method: 'delete',
            mode: 'cors',
            headers: {
                'Content-type': 'application/json'
            }
        }
    );
    resetTables();
    document.getElementById('buttonCourses').click();
}
function deleteStudentCourse(studentId, courseId) {
    fetch(`http://localhost:3000/studentCourse/${studentId}/${courseId}`,
        {
            method: 'delete',
            mode: 'cors',
            headers: {
                'Content-type': 'application/json'
            }
        }
    );
    resetTables();
    document.getElementById('courseStudent').click();
}

function closeModal() {
    document.querySelectorAll('.open').forEach(modalForm => {
        modalForm.classList.remove('open')
    })
}

