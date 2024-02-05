let test = document.getElementById('test'); // Traversing
// let test = document.querySelector('#test'); // Di fatto è la stessa istruzione di riga 1
test.innerHTML = '<h1>DOM Traversing & DOM Manipulation</h1>'; // Manipulation

let contenitori = document.getElementsByTagName('div');
console.log(contenitori);

document.getElementById('secondo').className = 'box';

document.querySelector('#secondo h4').setAttribute('style', 'color: black;');

let box1 = document.querySelector('#secondo');

console.log(box1);