const cards = document.getElementById('cards');
const cart = document.getElementById('cart');
const searchURL = 'https://striveschool-api.herokuapp.com/books';
let books = [];
let shoppingCartList = [];

window.addEventListener('load', init);

function init() {
	caricaLibri();
	if (localStorage.getItem('shoppingCart')) {
		shoppingCartList = JSON.parse(localStorage.getItem('shoppingCart'));
		loadShoppingCart();
	}
}

const caricaLibri = async () => {
	await fetch(searchURL)
		.then(response => {
			// interroga l'endpoint
			return response.json(); // trasforma la risposta in un JSON
		})
		.then(data => {
			// impacchetta la risposta in una variabile data
			books = data; // popola l'array locale con l'array ricevuto dalla fetch
			print();
		})
		.catch(err => {
			console.log(err);
		});
};

function print() {
	for (let i = 0; i < books.length; i++) {
		let div = document.createElement('div');
		div.classList.add('col');
		div.innerHTML = `
        <div class="card h-100">
            <img src="${books[i].img}" class="img-fluid card-img-top" />
            <div class="card-body">
                <h5 class="card-title">${books[i].title}</h5>
                <p class="card-text badge rounded-pill bg-dark mb-2">${books[i].category}</p>
                <p class="fs-4">${books[i].price} €</p>
                <div>
                    <button class="btn btn-danger" onclick="addToCart('${books[i].asin}')">Compra ora</button>
                    <button class="btn btn-outline-danger" onclick="skipMe()">Scarta</button>
                </div>
            </div>
        </div>`;
		cards.appendChild(div);
	}
}

function addToCart(asin) {
	const book = books.find(book => book.asin === asin);
	shoppingCartList.push(book);
	localStorage.setItem('shoppingCart', JSON.stringify(shoppingCartList));
	loadShoppingCart();
}

function loadShoppingCart() {
	cart.innerHTML = '';
	shoppingCartList.forEach(book => {
		cart.innerHTML += `
            <div>
                <div class="d-flex align-items-start gap-2">
                    <img src="${book.img}" class="img-fluid" width="60" />
                    <div class="flex-grow-1">
                        <p class="fw-bold">
                            ${book.price} €
                        </p>
                        <div>
                            <div>
                                <buttton class="btn btn-danger" onclick="deleteItem('${book.asin}')">Elimina</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;
	});
}

function deleteItem(asin) {
	let index = shoppingCartList.findIndex(book => book.asin === asin);
	shoppingCartList.splice(index, 1);
	localStorage.setItem('shoppingCart', JSON.stringify(shoppingCartList));
	loadShoppingCart();
}
