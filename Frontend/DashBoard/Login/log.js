function login() {

const username = document.getElementById("username").value;
const password = document.getElementById("password").value;

if (username === "" || password === "") {
    alert("Bitte füllen Sie alle Felder aus!");
    return;
}
fetch('http://127.0.0.1:8000/api/token/', {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
    },
    body: JSON.stringify({
        username: username,
        password: password,
    }),
})
.then((response) => {
    if (!response.status == 403) {
        alert("Fehler beim Anmelden");
        return
    }
    
    return response.json();
})
.then((data) => {
    localStorage.setItem("access", data.access);
    localStorage.setItem("refresh", data.refresh);
    if (data.access) {
        window.location.href = "/Home/home.html";
    } else
        alert("Fehler beim Anmelden!");
})
return false; 
/* .catch((error)  => console.error("Fehler beim Anmelden:", error)); */

}