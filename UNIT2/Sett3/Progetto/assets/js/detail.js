const productDetails = document.getElementById('productDetails');
let id;
let product;
const apiUrl = 'https://striveschool-api.herokuapp.com/api/product/';
const headers = new Headers({
	'Content-Type': 'application/json',
	Authorization:
		'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWU5YWY0NDAxM2I1MDAwMTljNWFlYTAiLCJpYXQiOjE3MDk4MTM1NzIsImV4cCI6MTcxMTAyMzE3Mn0.p40BWbV751vJ9nZ32M7cMRQ2HqGAG9YN90ARcVlsqlM',
});

window.addEventListener('load', function () {
	const params = new URLSearchParams(location.search);
	id = params.get('id');
	loadProduct();
});

const loadProduct = async () => {
	try {
		let response = await fetch(apiUrl + id, { headers });
		product = await response.json();
        printData();
	} catch (error) {
		console.log(error);
	}
};

const printData = () => {
    productDetails.innerHTML = `
    <div class="col-6 text-center">
        <img src="${product.imageUrl}" width="100%" />
    </div>
    <div class="col-6">
        <h6>${product.brand}</h6>
        <h2>${product.name}</h2>
        <span class="badge bg-dark text-warning">${product.price}€</span>
        <p class="mt-4">${product.description}</p>
    </div>
    `
}
