accessToken = localStorage.getItem("access");
refreshToken = localStorage.getItem("refresh");


if (accessToken) {

    function addhorse() {
        const Name = document.getElementById("name").value;
        const Geschlecht = document.getElementById('Gender').value;
        let Preis = document.getElementById('price').value;
        let Alter = document.getElementById('age').value;
        let Große = document.getElementById('height').value;
        let Beschreibung = document.getElementById('description').value;
        let Bild = document.getElementById('image').files[0];  // Nimm die Datei, nicht den Pfad!
    
        let formData = new FormData();
        formData.append("name", Name);
        formData.append("Gender", Geschlecht);
        formData.append("price", parseFloat(Preis));
        formData.append("age", Alter);
        formData.append("height", Große);
        formData.append("description", Beschreibung);
        formData.append("image", Bild); // Datei anhängen!
    
        fetch('http://127.0.0.1:8000/apishop/horses/', {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${accessToken}`,
            },
            body: formData,  // KEIN JSON.stringify(), weil wir Dateien senden
        })
        .then(response => response.json())

    /*     .then(async (response) => {
            let data = await response.json();
            console.log("Server-Antwort:", data);
            }) */
        .then((data) => {
            alert(`Das Pferd ${Name} wurde erfolgreich hinzugefügt!`);
            window.location.href = '/Horses/horses.html';
        })
        return false;
       
    };
    
}    
else {
    alert('Token abgelaufen');
    window.location.href = '/Login/log.html';
}