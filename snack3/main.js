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

        if (i % 2 !== 0){
            documentOutput.innerHTML += `<li><strong>Index: ${i} - ${randomNumber}</strong></li>`;
            generatedNumbers.push(randomNumber);
        } else {
            documentOutput.innerHTML += `<li>Index: ${i} - ${randomNumber}</li>`;
            generatedNumbers.push(randomNumber);
        }
        
    }

    let finalSum = 0;

    for (let i = 1; i < generatedNumbers.length; i+=2) {
        finalSum += generatedNumbers[i];
    }

    documentSomma.innerHTML = `<strong>${finalSum}</strong>`;
})

