let tableBody = document.getElementById("table-body");

let accessToken = localStorage.getItem('access');
let refreshToken = localStorage.getItem('refresh');

    if (accessToken) {

        fetch('http://127.0.0.1:8000/apishop/employees/', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'authorization': `Bearer ${accessToken}`
            },
        })
            /*Jedes Mal, wenn Benutzer eine API aufruft,
             wird der access Token in den Header gesetzt*/         
            .then ((response) => response.json()) 
            .then((data) =>  data.forEach((employee) => {
                let row = document.createElement('tr');
                let dataId = document.createElement('td');
                let datFirstname = document.createElement('td');
                let dataName = document.createElement('td');
                let dataAge = document.createElement('td');
                let dataPosition = document.createElement('td');
                let dataDepartment = document.createElement('td');
                let deleteButton = document.createElement('button');
                let editButton = document.createElement('button');
                
                dataId.innerHTML = `${employee.id}`
                datFirstname.innerHTML = `${employee.firstname}`
                dataName.innerHTML = `${employee.name}`
                dataAge.innerHTML = `${employee.age}`
                dataPosition.innerHTML = `${employee.position}`
                dataDepartment.innerHTML =`${employee.department}`
                editButton.innerHTML = `<button class = 'btn' onclick="editEmployee(${employee.id})"> Bearbeiten </button>`
                deleteButton.innerHTML = `<button class = 'btn  btn-danger' onclick="deleteEmployee(${employee.id})"> Löschen </button>`
                
                tableBody.appendChild(row);
                row.appendChild(dataId);
                row.appendChild(datFirstname);  
                row.appendChild(dataName);
                row.appendChild(dataAge);
                row.appendChild(dataPosition);
                row.appendChild(dataDepartment);
                row.appendChild(editButton);
                row.appendChild(deleteButton);
            })
            );


} else {
            console.log('No access token available');
            window.location.href = '/Login/log.html';
} 
function addEmployee() {
    window.location.href = "/Add/addEmployee.html";
}