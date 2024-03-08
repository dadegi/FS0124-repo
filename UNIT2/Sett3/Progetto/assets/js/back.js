const title = document.getElementById('title');
const nameInput = document.getElementById('name');
const brandInput = document.getElementById('brand');
const imageUrlInput = document.getElementById('imageUrl');
const descriptionInput = document.getElementById('description');
const priceInput = document.getElementById('price');
const deleteBtn = document.getElementById('deleteBtn');
const submitBtn = document.getElementById('btnSubmit');
let id;

const apiUrl = 'https://striveschool-api.herokuapp.com/api/product/';
const headers = new Headers({
	'Content-Type': 'application/json',
	Authorization:
		'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWU5YWY0NDAxM2I1MDAwMTljNWFlYTAiLCJpYXQiOjE3MDk4MTM1NzIsImV4cCI6MTcxMTAyMzE3Mn0.p40BWbV751vJ9nZ32M7cMRQ2HqGAG9YN90ARcVlsqlM',
});

window.addEventListener('load', function () {
	const params = new URLSearchParams(location.search);
	id = params.get('id');
    if (id) {
        title.innerText = 'Modifica Prodotto';
        searchProduct(id);
    } else {
        title.innerText = 'Aggiungi Prodotto';
        deleteBtn.style.display = 'none';
    }
});

const searchProduct = async(id) => {
    try {
		let response = await fetch(apiUrl + id, { headers });
		let product = await response.json();
        fillForm(product);
	} catch (error) {
		console.log(error);
	}
}

const fillForm = (product) => {
    nameInput.value = product.name;
    brandInput.value = product.brand;
    imageUrlInput.value = product.imageUrl;
    priceInput.value = product.price;
    descriptionInput.value = product.description;
}

submitBtn.addEventListener('click', function(e) {
    e.preventDefault();
    const name = nameInput.value;
    const brand = brandInput.value;
    const imageUrl = imageUrlInput.value;
    const price = priceInput.value;
    const description = descriptionInput.value;

    const product = {name, brand, imageUrl, price, description};
    if (id) {
        modifyProduct(product);
    } else {
        addProduct(product);
    }
});

const addProduct = async(product) => {
    try {
        let response = await fetch(apiUrl, {
            method: 'POST',
            headers,
            body: JSON.stringify(product),
        });
        let data = await response.json();
        alert('Prodotto correttamente inserito');
        location.href = 'index.html';
    } catch (error) {
        console.log(error);
        alert('Errore nell\'inserimento del prodotto');
    }
}

const modifyProduct = async(product) => {
    try {
        let response = await fetch(apiUrl + id, {
            method: 'PUT',
            headers,
            body: JSON.stringify(product),
        });
        let data = await response.json();
        alert('Prodotto correttamente modificato');
        location.href = 'index.html';
    } catch (error) {
        console.log(error);
        alert('Errore nella modifica del prodotto');
    }
}

const deleteProduct = async() => {
    try {
        let response = await fetch(apiUrl + id, {
            method: 'DELETE',
            headers,
        });
        alert('Prodotto correttamente eliminato');
        location.href = 'index.html';
    } catch (error) {
        console.log(error);
        alert('Errore nell\'eliminazione del prodotto');
    }
}
