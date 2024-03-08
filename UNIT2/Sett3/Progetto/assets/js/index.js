const productsList = document.getElementById('productsList');
let list = [];
const apiUrl = 'https://striveschool-api.herokuapp.com/api/product/';
const headers = new Headers({
	'Content-Type': 'application/json',
	Authorization:
		'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWU5YWY0NDAxM2I1MDAwMTljNWFlYTAiLCJpYXQiOjE3MDk4MTM1NzIsImV4cCI6MTcxMTAyMzE3Mn0.p40BWbV751vJ9nZ32M7cMRQ2HqGAG9YN90ARcVlsqlM',
});

window.addEventListener('load', function () {
	loadProducts();
});

const loadProducts = async () => {
	try {
		let response = await fetch(apiUrl, { headers });
		list = await response.json();
        document.getElementById('loader').style.display = 'none';
		printData();
	} catch (error) {
		console.log(error);
	}
};

const printData = () => {
    productsList.innerHTML = '';
	list.forEach(item => {
		productsList.innerHTML += `<div class="col">
        <div class="card">
          <img src="${item.imageUrl}" class="card-img-top" alt="Foto ${item.name}" />
          <div class="card-body">
            <h5 class="card-title">${item.name}</h5>
            <p class="card-text">
              ${item.description}
            </p>
            <a class="btn btn-warning me-2 mb-1" href="back.html?id=${item._id}">Modifica</a>
            <a class="btn btn-info" href="detail.html?id=${item._id}">Scopri di più</a>
          </div>
        </div>
      </div >`;
	});
};
