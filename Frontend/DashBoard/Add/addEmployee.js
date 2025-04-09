accessTocken = localStorage.getItem("access");

if (accessTocken) {
   
    function addEmployee(){
        const firstname = document.getElementById("first-name").value;
        const lastName = document.getElementById("last-name").value;
        const age = document.getElementById("age").value;
        const position = document.getElementById("position").value;
        const dep = document.getElementById("department").value;

        newEmployee = {
            firstname: firstname,
            name: lastName,
            age: age,
            position: position,
            department: dep
        }

    

    
        fetch ('http://127.0.0.1:8000/apishop/employees/',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${accessTocken}`
            },
            body: JSON.stringify({newEmployee}),
            })
            .then(response => response.json())
            .then(data => {
                console.log(`ein neuer Mitarbeiter ${newEmployee.firstname}wurde hinzugefügt`);
                window.location.href = "/Employees/employees.html";
            })      
        }
}else{
    window.location.href = "Login/log.html";
}
