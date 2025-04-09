accessToken = localStorage.getItem('access');


if (!accessToken) {

    window.location.href = '/Login/log.html';
}else {
    function addProduct() {     
        let name = document.getElementById('name').value ;
        let price = document.getElementById('price').value ; 
        let image = document.getElementById('image').files[0];

        let formData = new FormData();
        formData.append('name', name);  
        formData.append('price', parseFloat(price));
        formData.append('image', image);

        fetch('http://127.0.0.1:8000/apishop/products/', {
            method: 'POST',
            headers: {'Authorization': `Bearer ${accessToken}` },
            body: formData,
        })
        .then (response => response.json())
        .then (data => {
            alert('Produkt wurde erfolgreich hinzugefügt');
            window.location.href = '/Products/products.html';
        })
        return false;
    }
}