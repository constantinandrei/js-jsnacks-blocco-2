/* 

Generatore di “nomi cognomi” casuali: il Grande Gatsby ha  una lista di nomi e una lista di cognomi, 
e da queste vuole generare una falsa lista di invitati con nome e cognome.

*/

const myDiv = document.getElementById('my-div');
const myInput = document.getElementById('floatingInput');
const myButton = document.querySelector('#my-div .btn');
const documentOutput = document.querySelector('#my-div ul');

const cognomi = ['Rossi', 'Neri', 'Carbonara', 'Biestra', 'Olivieri', 'Rubino', 'Reino', 'Squarcini', 'Iozzelli'];
const nomi = ['Andrea', 'Giulia', 'Fabio', 'Pippo', 'Pluto', 'Tizio', 'Caio', 'Sempronio', 'Francesco', 'Francesca', 'Maria', 'Benedetta']

myButton.addEventListener('click', function () {
    documentOutput.innerHTML = '';
    for (let i = 0; i < myInput.value; i++) {
        let randomIndexCognomi = Math.floor(Math.random() * cognomi.length);
        let randomIndexNomi = Math.floor(Math.random() * nomi.length);
        documentOutput.innerHTML += `<li>${nomi[randomIndexNomi]} ${cognomi[randomIndexCognomi]}</li>`;
    }
})

