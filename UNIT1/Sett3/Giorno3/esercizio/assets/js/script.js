// Elementi HTML
const task = document.getElementById('task');
const btnAdd = document.getElementById('inserisci');
const lista = document.getElementById('lista');
// Variabili globali per gestire il task inserito e l'array che tiene traccia dei task
let singleTask;
let tasks = [];

window.addEventListener('load', init());

// Verifica se c'è qualcosa di memorizzato e lo stampo a video
function init() {
    if (localStorage.getItem('tasks')) {
        tasks = (localStorage.getItem('tasks').split(','));
        console.log(tasks);
        scriviLista();
    }
}

btnAdd.addEventListener('click', function(e) {
    e.preventDefault();
    // Se il campo è vuoto blocco qualsiasi altra funzione...
    if (task.value == '') {
        alert('Inserire un task!');
        return;
    }
    // ... altrimenti avvio l'aggiunta del task nell'array, la creazione della lista, la cancellazione del form
    aggiungi();
    scriviLista();
    cancellaForm();
});

// Aggiungo il nuovo task nell'array e lo memorizzo nel localStorage
const aggiungi = () => {
    singleTask = task.value;
    tasks.push(singleTask);
    console.log(tasks);
    localStorage.setItem('tasks', tasks);
}

// Genero la lista a partire dall'array, indicando che ogni elemento passerà il suo indice alla funzione elimina
function scriviLista() {
    lista.innerHTML = '';
    tasks.forEach((element, index) => {
        lista.innerHTML += `<li>${element}&nbsp;<button type="button" onclick="elimina(${index});">❌</button></li>`
    });
    cancellaForm();
}

// Cancello il form
function cancellaForm() {
    task.value = '';
}

// Al click sulla ❌ elimino l'elemento dall'array, in base al suo indice, riscrivo il nuovo array in memoria e ricfreo la lista con il nuovo array privo dell'elemento eliminato
const elimina = (indice) => {
    tasks.splice(indice, 1);
    localStorage.setItem('tasks', tasks);
    // A ogni elemento eliminato ricreo la lista da zero
    scriviLista();
}