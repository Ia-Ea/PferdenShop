container = document.getElementById("produkte-liste");
container.innerHTML = ""; // Liste leeren


let accessToken = localStorage.getItem("access");
/* let refreshToken = localStorage.getItem("refresh"); */

if (!accessToken) { 
    console.log("Token ist abgelaufen");
    window.location.href = "./Login/log.html";
} else {
    fetch("http://127.0.0.1:8000/apishop/products/", {
        method: "GET",
        headers: {
                "Content-Type": "application/json",
                'authorization': `Bearer ${accessToken}`,
                },
    })
    .then(response => response.json())
    .then(data => {
        data.forEach(product => {
            let card = document.createElement("div");
            card.innerHTML = `<h2> ${product.name}</h2>
                                     <img src="${product.image}" alt="${product.name}">
                                     <p>Preis:<span class ='preis'>${product.price} €</span></p>
                                     <button class = 'btn-delete' onclick="deleteProduct(${product.id})">Löschen</button>`;
               
                                    container.appendChild(card);
                                    return false;
            });
        
        })
      
}
function deleteProduct(id) {
    if (accessToken) {
    if (confirm('Produkt wirklich löschen?')) {
            
    fetch(`http://127.0.0.1:8000/apishop/products/${id}`, {
        method: "DELETE",
        headers: {
            'authorization': `Bearer ${accessToken}`,
        },
    })
    .then((response) => {
        if (response.status === 204) {
                console.log('Produkr gelöscht');
                location.reload();
            }
            });
        }
    }
}

function addProduct() {
 window.location.href = "/Add/addProduct.html";
}

function editProduct() {
    window.location.href = "/Edit/editProduct.html";
}