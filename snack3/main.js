/* 

Crea un array di numeri interi e fai la somma di tutti gli elementi 
che sono in posizione (indice) dispari

*/

const myDiv = document.getElementById('my-div');
const myInput = document.getElementById('floatingInput');
const myButton = document.querySelector('#my-div .btn');
const documentOutput = document.querySelector('#my-div ul');
const documentSomma = document.getElementById('somma');


myButton.addEventListener('click', function () {
    documentOutput.innerHTML = '';
    documentSomma.innerHTML = '';

    const generatedNumbers = [];

    for (let i = 0; i < myInput.value; i++) {
        let randomNumber = Math.floor(Math.random() * 100);
        documentOutput.innerHTML += `<li>${randomNumber}</li>`;
        generatedNumbers.push(randomNumber);
    }

    let finalSum = 0;

    for (let i = 0; i < generatedNumbers.length; i++) {
        finalSum += generatedNumbers[i];
    }

    documentSomma.innerHTML = `<strong>${finalSum}</strong>`;
})

