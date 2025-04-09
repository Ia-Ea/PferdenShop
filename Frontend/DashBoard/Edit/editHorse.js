accessTokens = localStorage.getItem("access"); 


if (!accessTokens) {
        console.log("Token ist abgelaufen oder ungültig.");
        window.location.href = "/Login/log.html"; 
} else {
    function searchHorse() {
        let searchValue = document.getElementById("search-horse").value;

        fetch('http://127.0.0.1:8000/apishop/horses/', {
            method: "GET",
            headers: {
                 "Content-Type": "application/json" ,
                 'authorization': `Bearer ${accessTokens}`
            }
        })
        .then(response => response.json())
        .then(horses => {
            let foundHorse = horses.find(horse => horse.id == searchValue || horse.name.toLowerCase() === searchValue.toLowerCase());
                if (foundHorse) {
                    editHorse(foundHorse);
                } else {
                    console.log("Kein Pferd mit dieser ID oder diesem Namen gefunden.");
                }
        })
        return false;
    }

    function editHorse(horse) {
        document.getElementById("edit-id").value = horse.id;
        document.getElementById("edit-name").value = horse.name;
        document.getElementById("edit-gender").value = horse.gender;
        document.getElementById("edit-price").value = horse.price;
        document.getElementById("edit-age").value = horse.age;
        document.getElementById("edit-height").value = horse.height;
        document.getElementById("edit-description").value = horse.description;
        document.getElementById("edit-image").src = horse.image;

        document.getElementById("edit-modal").style.display = "block"; // Bearbeitungsformular anzeigen
    }

    function saveHorse() {
        let updatedHorse = {
            id: document.getElementById("edit-id").value,
            name: document.getElementById("edit-name").value,
            Gender: document.getElementById("edit-gender").value,
            price: parseFloat(document.getElementById("edit-price").value),
            age: parseInt(document.getElementById("edit-age").value),
            height: parseInt(document.getElementById("edit-height").value),
            description: document.getElementById("edit-description").value,
            image: document.getElementById("edit-image").src,
            
        };
        let formData = new FormData();
        formData.append("id", updatedHorse.id);
        formData.append("name", updatedHorse.name);             
        formData.append('Gender', updatedHorse.Gender);
        formData.append('age', updatedHorse.age);
        formData.append('price', updatedHorse.price);
        formData.append('height', updatedHorse.height);
        formData.append('description', updatedHorse.description);
        let image = document.getElementById("edit-image");
        if (image.files.length > 0) {
            formData.append('image', image.files[0]);
        }
       
        console.log(updatedHorse);  // Debugging

        fetch(`http://127.0.0.1:8000/apishop/horses/${updatedHorse.id}`, {
            method: "PATCH",
            headers: {
                'authorization': `Bearer ${accessTokens}`,
            },
            body:formData,
        })
        .then(response => response.json())
        .then(() => {
            /* alert("Pferd erfolgreich aktualisiert!"); */
            document.getElementById("edit-modal").style.display = "none"; 
            window.location.href =  '/Horses/horses.html';
        })
        return false;
    }
    function closeModal() {
        document.getElementById("edit-modal").style.display = "none";
    }
} 
   