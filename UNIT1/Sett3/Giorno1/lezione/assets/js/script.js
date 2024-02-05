let test = document.getElementById('test'); // Traversing
// let test = document.querySelector('#test'); // Di fatto è la stessa istruzione di riga 1
let corpoPagina = document.querySelectorAll('body')[0];
test.innerHTML = '<h1>DOM Traversing & DOM Manipulation</h1>'; // Manipulation

const link = document.createElement('a');
link.setAttribute('href', 'https://www.google.it/');
link.setAttribute('target', '_blank');
link.innerText = 'Link a Google';
test.appendChild(link);

let contenitori = document.getElementsByTagName('div');
console.log(contenitori);

document.getElementById('secondo').className = 'box';

document.querySelector('#secondo h4').setAttribute('style', 'color: black;');

let boxes = document.querySelectorAll('.box');

console.log(boxes);

document.querySelector('#terzo p').style.fontWeight = 'bold';

const newDiv = document.createElement('div');
newDiv.innerText = "Sono un nuovo div creato da Javascript";
newDiv.style.backgroundColor = 'red';
newDiv.style.fontWeight = 'bold';
newDiv.style.color = 'white';
corpoPagina.appendChild(newDiv);