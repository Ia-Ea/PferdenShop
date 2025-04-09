
let container = document.getElementById("horse-list");
container.innerHTML = ""; // Liste leeren

let accessToken = localStorage.getItem("access");
let refreshToken = localStorage.getItem("refresh");

if (!accessToken) {
console.log("Token ist abgelaufen oder ungültig.");
window.location.href = '/Login/log.html';
} else {
        fetch('http://127.0.0.1:8000/apishop/horses/' ,{
        method: "GET",
        headers: {
                "Content-Type": "application/json",
                'authorization': `Bearer ${accessToken}`,
                },
        }) 
        .then((response) => response.json())
        .then((data) =>  data.forEach(horse => {
                let div = document.createElement("div");
                div.innerHTML =`<> ${horse.id} </>
                                <h3>${horse.name}</h3>
                                <img src = ${horse.image} alt = ${horse.name} width="200" height="200">
                                <p>Geschlecht: ${horse.gender}</p>
                                <p>Preis: ${horse.price} €</p>
                                <p>Alter: ${horse.age} Jahre</p>
                                <p>Höhe: ${horse.height} cm</p>
                                <p>Beschreibung: ${horse.description}</p>
                                <button class = 'btn-delete 'onclick="deleteHorse(${horse.id})"> Löschen </button>`;
                        container.appendChild(div);
                return false;   
                })
                
        )       
        
} 
function addhorse(){
        window.location.href = "/Add/addHorse.html";
}
function editHorse(){
        window.location.href = '/Edit/editHorse.html';
}



function deleteHorse(id){

        if (accessToken) {
                if(confirm('Pferd wirklich löschen?')){
                        fetch(`http://127.0.0.1:8000/apishop/horses/${id}`, {
                        method: "DELETE",
                        headers: {
                                "Content-Type": "application/json",
                        authorization: `Bearer ${accessToken}`,
                        },
                 })
                .then((response) => {
                        if (response.status === 204) {
                                console.log('Pferd gelöscht');
                                location.reload();
                        } else {
                                console.log('Fehler beim Löschen');
                        }
                })
        }else{
                        console.log('Token abgelaufen');
                        window.location.href = '/Login/log.html';
                }

        }
}